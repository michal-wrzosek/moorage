import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Moorage } from "./reactComponentLib";

interface ItemProps {
  item: {
    imageSrc: string,
  },
};

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    background-color: #FFFFFF;
    font-size: 1.2rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 4px;
  filter: brightness(0.95);
`;

const Item: React.FC<ItemProps> = ({ item: { imageSrc } }) => (
  <Image src={imageSrc} />
)

const items = [
  { imageSrc: '001.webp', width: 600, height: 450 },
  { imageSrc: '002.webp', width: 600, height: 800 },
  { imageSrc: '003.webp', width: 600, height: 400 },
  { imageSrc: '004.webp', width: 600, height: 500 },
  { imageSrc: '005.webp', width: 600, height: 450 },
  { imageSrc: '006.webp', width: 600, height: 800 },
  { imageSrc: '007.webp', width: 600, height: 424 },
  { imageSrc: '008.webp', width: 600, height: 547 },
  { imageSrc: '009.webp', width: 600, height: 450 },
  { imageSrc: '010.webp', width: 600, height: 450 },
  { imageSrc: '011.webp', width: 600, height: 450 },
  { imageSrc: '012.webp', width: 600, height: 450 },
  { imageSrc: '001.webp', width: 600, height: 450 },
  { imageSrc: '002.webp', width: 600, height: 800 },
  { imageSrc: '003.webp', width: 600, height: 400 },
  { imageSrc: '004.webp', width: 600, height: 500 },
  { imageSrc: '005.webp', width: 600, height: 450 },
  { imageSrc: '006.webp', width: 600, height: 800 },
  { imageSrc: '007.webp', width: 600, height: 424 },
  { imageSrc: '008.webp', width: 600, height: 547 },
  { imageSrc: '009.webp', width: 600, height: 450 },
  { imageSrc: '010.webp', width: 600, height: 450 },
  { imageSrc: '011.webp', width: 600, height: 450 },
  { imageSrc: '012.webp', width: 600, height: 450 },
  { imageSrc: '001.webp', width: 600, height: 450 },
  { imageSrc: '002.webp', width: 600, height: 800 },
  { imageSrc: '003.webp', width: 600, height: 400 },
  { imageSrc: '004.webp', width: 600, height: 500 },
  { imageSrc: '005.webp', width: 600, height: 450 },
  { imageSrc: '006.webp', width: 600, height: 800 },
  { imageSrc: '007.webp', width: 600, height: 424 },
  { imageSrc: '008.webp', width: 600, height: 547 },
  { imageSrc: '009.webp', width: 600, height: 450 },
  { imageSrc: '010.webp', width: 600, height: 450 },
  { imageSrc: '011.webp', width: 600, height: 450 },
  { imageSrc: '012.webp', width: 600, height: 450 },
  { imageSrc: '001.webp', width: 600, height: 450 },
  { imageSrc: '002.webp', width: 600, height: 800 },
  { imageSrc: '003.webp', width: 600, height: 400 },
  { imageSrc: '004.webp', width: 600, height: 500 },
  { imageSrc: '005.webp', width: 600, height: 450 },
  { imageSrc: '006.webp', width: 600, height: 800 },
  { imageSrc: '007.webp', width: 600, height: 424 },
  { imageSrc: '008.webp', width: 600, height: 547 },
  { imageSrc: '009.webp', width: 600, height: 450 },
  { imageSrc: '010.webp', width: 600, height: 450 },
  { imageSrc: '011.webp', width: 600, height: 450 },
  { imageSrc: '012.webp', width: 600, height: 450 },
]

const itemsRatios = items.map(i => i.width / i.height);

class App extends Component {
  render() {
    const windowWidth = window.innerWidth;
    const nrOfColumns = windowWidth < 600 ? 2 : windowWidth < 900 ? 3 : 4;
    const gutter = 0.1 / nrOfColumns;

    return (
      <div>
        <GlobalStyles />
        <Moorage gutter={gutter} itemComponent={Item} items={items} itemsRatios={itemsRatios} nrOfColumns={nrOfColumns} />
      </div>
    );
  }
}

export default App;
