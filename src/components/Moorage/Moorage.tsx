import React from 'react';

import getReciprocal from './getReciprocal';

export interface MoorageProps {
  items: any[];
  itemComponent: React.FC<{ item: any }>;
  itemsRatios: number[];
  gutter: number;
  nrOfColumns: number;
}

interface ItemCoordinates {
  wrapperRatio: number;
  itemRatio: number;
  left: number;
  columnWidth: number;
  orderIndexInColumn: number;
}

interface FixedRatioWrapperStylesProps {
  ratio: number;
}

interface ItemWidthWrapperStylesProps {
  width: number;
  left: number;
}

interface MainWrapperStylesProps {
  gutter: number;
}

interface GetMoorageStylesProps {
  itemsRatios: number[];
  gutter: number;
  nrOfColumns: number;
}

interface MoorageStyles {
  mainWrapperStyles: React.CSSProperties;
  heightWrapperStyles: React.CSSProperties;
  itemsStyles: {
    itemWidthWrapperStyles: React.CSSProperties;
    itemWrapperStyles: React.CSSProperties;
    itemStyles: React.CSSProperties;
    itemInsideStyles: React.CSSProperties;
  }[];
}

export enum TestIds {
  MainWrapper = 'MainWrapper',
  HeightWrapper = 'HeightWrapper',
  ItemWidthWrapper = 'ItemWidthWrapper',
  ItemWrapper = 'ItemWrapper',
  Item = 'Item',
  ItemInside = 'ItemInside',
}

const fixedRatioWrapperStyles = ({ ratio }: FixedRatioWrapperStylesProps): React.CSSProperties => ({
  width: '100%',
  paddingBottom: `calc(100% / ${ratio})`,
  position: 'relative',
});

const itemInsideStyles = (): React.CSSProperties => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const itemStyles = ({ ratio }: FixedRatioWrapperStylesProps): React.CSSProperties => ({
  ...fixedRatioWrapperStyles({ ratio }),
  display: 'block',
  bottom: 0,
  pointerEvents: 'auto',
  position: 'absolute',
});

const itemWrapperStyles = ({ ratio }: FixedRatioWrapperStylesProps): React.CSSProperties => ({
  ...fixedRatioWrapperStyles({ ratio }),
  top: 0,
});

const itemWidthWrapperStyles = ({ width, left }: ItemWidthWrapperStylesProps): React.CSSProperties => ({
  position: 'absolute',
  width: `${width * 100}%`,
  left: `${left * 100}%`,
});

const heightWrapperStyles = fixedRatioWrapperStyles;

const mainWrapperStyles = ({ gutter }: MainWrapperStylesProps): React.CSSProperties => ({
  margin: `0 ${(gutter / 2) * 100}%`,
  pointerEvents: 'none',
});

export const getMoorageStyles = ({ itemsRatios, gutter, nrOfColumns }: GetMoorageStylesProps): MoorageStyles => {
  const columnsRatios: number[] = Array.from(Array(nrOfColumns)).map(() => 0);
  const columnsNrOfItems: number[] = Array.from(Array(nrOfColumns)).map(() => 0);
  const columnSideGutter = gutter / (1 - gutter);
  const columnVerticalGutter = gutter / ((1 - gutter) / nrOfColumns);
  const inversedVerticalGutterRatio = columnVerticalGutter / 1;

  const itemsCoordinates: ItemCoordinates[] = itemsRatios.map(itemRatio => {
    const [shortestColumnIndex, shortestColumnRatio] = columnsRatios.reduce(
      ([shortestColumnIndex, shortestColumnRatio], columnRatio, columnIndex) =>
        getReciprocal(columnRatio) < getReciprocal(shortestColumnRatio)
          ? [columnIndex, columnRatio]
          : [shortestColumnIndex, shortestColumnRatio],
      [0, columnsRatios[0]],
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
    columnsRatios[0],
  );

  const tallestColumnRatioWithBottomGutter = getReciprocal(
    getReciprocal(tallestColumnRatio) + inversedVerticalGutterRatio,
  );

  const columnWidthPercentage = (1 - nrOfColumns * gutter) / nrOfColumns;
  const heightWrapperRatio = 1 / (columnWidthPercentage / tallestColumnRatioWithBottomGutter);

  return {
    mainWrapperStyles: mainWrapperStyles({ gutter }),
    heightWrapperStyles: heightWrapperStyles({ ratio: heightWrapperRatio }),
    itemsStyles: itemsCoordinates.map(itemCoordinates => ({
      itemWidthWrapperStyles: itemWidthWrapperStyles({
        width: itemCoordinates.columnWidth,
        left: itemCoordinates.left,
      }),
      itemWrapperStyles: itemWrapperStyles({ ratio: itemCoordinates.wrapperRatio }),
      itemStyles: itemStyles({ ratio: itemCoordinates.itemRatio }),
      itemInsideStyles: itemInsideStyles(),
    })),
  };
};

const Moorage: React.FC<MoorageProps> = ({ items, itemComponent: ItemComponent, itemsRatios, gutter, nrOfColumns }) => {
  const { mainWrapperStyles, heightWrapperStyles, itemsStyles } = getMoorageStyles({
    itemsRatios,
    gutter,
    nrOfColumns,
  });

  return (
    <div data-testid={TestIds.MainWrapper} style={mainWrapperStyles}>
      <div data-testid={TestIds.HeightWrapper} style={heightWrapperStyles}>
        {itemsStyles.map((itemStyles, index) => (
          <div data-testid={TestIds.ItemWidthWrapper} key={index} style={itemStyles.itemWidthWrapperStyles}>
            <div data-testid={TestIds.ItemWrapper} style={itemStyles.itemWrapperStyles}>
              <div data-testid={TestIds.Item} style={itemStyles.itemStyles}>
                <div data-testid={TestIds.ItemInside} style={itemStyles.itemInsideStyles}>
                  <ItemComponent item={items[index]} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moorage;
