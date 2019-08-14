import React from 'react';
import { render } from '@testing-library/react';

import Moorage, { getMoorageStyles } from './Moorage';

describe('Moorage', () => {
  describe('<Moorage />', () => {
    it('renders succesfully', async () => {
      interface ItemComponentProps {
        item: {
          src: string;
        };
      }
      const nrOfColumns = 2;
      const gutter = 0.05;
      const items = [{ src: '001.jpg' }];
      const itemsRatios = [1 / 2];
      const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => <img src={item.src} />;

      render(
        <Moorage
          itemComponent={ItemComponent}
          gutter={gutter}
          items={items}
          itemsRatios={itemsRatios}
          nrOfColumns={nrOfColumns}
        />,
      );
    });
  });

  describe('getMoorageStyles()', () => {
    it('returns correct styles for 2 column layout', () => {
      const nrOfColumns = 2;
      const gutter = 0.05;
      const itemsRatios = [1 / 2, 1 / 2, 2 / 3, 8 / 1, 1, 1 / 3];
      const moorageStyles = getMoorageStyles({
        nrOfColumns,
        gutter,
        itemsRatios,
      });

      expect(moorageStyles).toEqual({
        heightWrapperStyles: {
          paddingBottom: 'calc(100% / 0.334102648642708)',
          position: 'relative',
          width: '100%',
        },
        itemsStyles: [
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.5)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '2.6315789473684212%',
              position: 'absolute',
              width: '44.73684210526316%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.47500000000000003)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.5)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '52.63157894736842%',
              position: 'absolute',
              width: '44.73684210526316%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.47500000000000003)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.6666666666666666)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '2.6315789473684212%',
              position: 'absolute',
              width: '44.73684210526316%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.2695035460992908)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 8)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '52.63157894736842%',
              position: 'absolute',
              width: '44.73684210526316%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.4281690140845071)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 1)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '52.63157894736842%',
              position: 'absolute',
              width: '44.73684210526316%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.29063097514340347)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.3333333333333333)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '52.63157894736842%',
              position: 'absolute',
              width: '44.73684210526316%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.1527638190954774)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
        ],
        mainWrapperStyles: {
          margin: '0 2.5%',
          pointerEvents: 'none',
        },
      });
    });

    it('returns correct styles for 3 column layout', () => {
      const nrOfColumns = 3;
      const gutter = 0.1;
      const itemsRatios = [1, 1 / 3, 1 / 6, 6, 1, 1 / 2];
      const moorageStyles = getMoorageStyles({
        nrOfColumns,
        gutter,
        itemsRatios,
      });

      expect(moorageStyles).toEqual({
        heightWrapperStyles: {
          paddingBottom: 'calc(100% / 0.642857142857143)',
          position: 'relative',
          width: '100%',
        },
        itemsStyles: [
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 1)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '5.555555555555556%',
              position: 'absolute',
              width: '22.22222222222222%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.7499999999999999)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.3333333333333333)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '38.88888888888889%',
              position: 'absolute',
              width: '22.22222222222222%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.3)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.16666666666666666)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '72.22222222222221%',
              position: 'absolute',
              width: '22.22222222222222%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.15789473684210528)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 6)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '5.555555555555556%',
              position: 'absolute',
              width: '22.22222222222222%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.5454545454545454)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 1)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '5.555555555555556%',
              position: 'absolute',
              width: '22.22222222222222%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.31578947368421045)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.5)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '5.555555555555556%',
              position: 'absolute',
              width: '22.22222222222222%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.1818181818181818)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
        ],
        mainWrapperStyles: {
          margin: '0 5%',
          pointerEvents: 'none',
        },
      });
    });

    it('returns correct styles for 4 column layout', () => {
      const nrOfColumns = 4;
      const gutter = 0.1;
      const itemsRatios = [1 / 4, 3, 5 / 3, 3 / 8, 1, 2, 4 / 7];
      const moorageStyles = getMoorageStyles({
        nrOfColumns,
        gutter,
        itemsRatios,
      });

      expect(moorageStyles).toEqual({
        heightWrapperStyles: {
          paddingBottom: 'calc(100% / 1.3636363636363635)',
          position: 'relative',
          width: '100%',
        },
        itemsStyles: [
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.25)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '5.555555555555556%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.22499999999999998)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 3)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '30.555555555555557%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 1.2857142857142856)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 1.6666666666666667)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '55.55555555555556%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.9574468085106382)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.375)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '80.55555555555556%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.3214285714285714)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 1)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '30.555555555555557%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.44999999999999996)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 2)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '55.55555555555556%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.5027932960893855)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
          {
            itemInsideStyles: {
              height: '100%',
              position: 'absolute',
              width: '100%',
            },
            itemStyles: {
              bottom: 0,
              display: 'block',
              paddingBottom: 'calc(100% / 0.5714285714285714)',
              pointerEvents: 'auto',
              position: 'absolute',
              width: '100%',
            },
            itemWidthWrapperStyles: {
              left: '55.55555555555556%',
              position: 'absolute',
              width: '13.88888888888889%',
            },
            itemWrapperStyles: {
              paddingBottom: 'calc(100% / 0.23904382470119523)',
              position: 'relative',
              top: 0,
              width: '100%',
            },
          },
        ],
        mainWrapperStyles: {
          margin: '0 5%',
          pointerEvents: 'none',
        },
      });
    });
  });
});
