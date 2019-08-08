import React from "react";
import styled from "styled-components";

export interface MoorageProps {
  items: any[];
  itemComponent: React.FC<{ item: any }>;
  itemsRatios: number[];
  gutter: number;
  nrOfColumns: number;
}

type ItemCoordinates = {
  wrapperRatio: number;
  itemRatio: number;
  left: number;
  columnWidth: number;
  orderIndexInColumn: number;
};

const FixedRatioWrapper = styled.div<{ ratio: number }>`
  width: 100%;
  padding-bottom: calc(100% / ${({ ratio }) => ratio});
  position: relative;

  & > div,
  & > img {
    position: absolute;
  }
`;

const Item = styled(FixedRatioWrapper)`
  display: block;
  position: relative;
  bottom: 0;
  pointer-events: auto;
`;

const ItemWrapper = styled(FixedRatioWrapper)`
  position: relative;
  top: 0;
`;

const ItemWidthWrapper = styled.div<{ width: number; left: number }>`
  position: relative;
  width: ${({ width }) => width * 100}%;
  left: ${({ left }) => left * 100}%;
`;

const HeightWrapper = styled(FixedRatioWrapper)``;

const MainWrapper = styled.div<{ gutter: number }>`
  margin: 0 ${({ gutter }) => (gutter / 2) * 100}%;
  pointer-events: none;
`;

// is swapping numerator with denominator: 2/3 => 3/2
const getReciprocal = (number: number) => (number === 0 ? 0 : number / (number * number));

const Moorage: React.FC<MoorageProps> = ({
  items,
  itemComponent: ItemComponent,
  itemsRatios,
  gutter,
  nrOfColumns,
}) => {
  const columnsRatios: number[] = Array.from(Array(nrOfColumns)).map(() => 0);
  const columnsNrOfItems: number[] = Array.from(Array(nrOfColumns)).map(() => 0);
  const columnSideGutter = gutter / (1 - gutter);
  const columnVerticalGutter = gutter / ((1 - gutter) / nrOfColumns);
  const inversedVerticalGutterRatio = columnVerticalGutter / 1;

  const itemsCoordinates: ItemCoordinates[] = itemsRatios.map((itemRatio) => {
    const [shortestColumnIndex, shortestColumnRatio] = columnsRatios.reduce(
      ([shortestColumnIndex, shortestColumnRatio], columnRatio, columnIndex) =>
        getReciprocal(columnRatio) < getReciprocal(shortestColumnRatio)
          ? [columnIndex, columnRatio]
          : [shortestColumnIndex, shortestColumnRatio],
      [0, columnsRatios[0]]
    );

    const left = (1 / nrOfColumns) * shortestColumnIndex + columnSideGutter / 2;
    const columnWidth = 1 / nrOfColumns - columnSideGutter;
    const inversedShortesedColumnRatio = getReciprocal(shortestColumnRatio);
    const inversedRatio = getReciprocal(itemRatio);
    const inversedRatioSum = inversedShortesedColumnRatio + inversedRatio + inversedVerticalGutterRatio;
    const wrapperRatio = getReciprocal(inversedRatioSum);
    const orderIndexInColumn = columnsNrOfItems[shortestColumnIndex];

    columnsRatios[shortestColumnIndex] = wrapperRatio;
    columnsNrOfItems[shortestColumnIndex] += 1;

    return {
      wrapperRatio,
      itemRatio,
      left,
      columnWidth,
      orderIndexInColumn,
    };
  });

  const tallestColumnRatio = columnsRatios.reduce(
    (tallestColumnRatio, columnRatio) =>
      getReciprocal(columnRatio) > getReciprocal(tallestColumnRatio) ? columnRatio : tallestColumnRatio,
    columnsRatios[0]
  );

  const tallestColumnRatioWithBottomGutter = getReciprocal(
    getReciprocal(tallestColumnRatio) + inversedVerticalGutterRatio
  );

  const columnWidthPercentage = (1 - nrOfColumns * gutter) / nrOfColumns;
  const heightWrapperRatio = 1 / (columnWidthPercentage / tallestColumnRatioWithBottomGutter);

  return (
    <MainWrapper gutter={gutter}>
      <HeightWrapper ratio={heightWrapperRatio}>
        {itemsCoordinates.map((itemCoordinates, index) => (
          <ItemWidthWrapper key={index} width={itemCoordinates.columnWidth} left={itemCoordinates.left}>
            <ItemWrapper ratio={itemCoordinates.wrapperRatio}>
              <Item ratio={itemCoordinates.itemRatio}>
                <ItemComponent item={items[index]}></ItemComponent>
              </Item>
            </ItemWrapper>
          </ItemWidthWrapper>
        ))}
      </HeightWrapper>
    </MainWrapper>
  );
};

export default Moorage;
