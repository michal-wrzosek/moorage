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
  { imageSrc: '/001.jpg', width: 600, height: 450 },
  { imageSrc: '/002.jpg', width: 600, height: 800 },
  { imageSrc: '/003.jpg', width: 600, height: 400 },
  { imageSrc: '/004.jpg', width: 600, height: 500 },
  { imageSrc: '/005.jpg', width: 600, height: 450 },
  { imageSrc: '/006.jpg', width: 600, height: 800 },
  { imageSrc: '/007.jpg', width: 600, height: 424 },
  { imageSrc: '/008.jpg', width: 600, height: 547 },
  { imageSrc: '/009.jpg', width: 600, height: 450 },
  { imageSrc: '/010.jpg', width: 600, height: 450 },
  { imageSrc: '/011.jpg', width: 600, height: 450 },
  { imageSrc: '/012.jpg', width: 600, height: 450 },
]

const itemsRatios = items.map(i => i.width / i.height);

class App extends Component {
  render() {
    console.log('items', items);
    console.log('itemsRatios', itemsRatios);
    return (
      <div>
        <GlobalStyles />
        <Moorage gutter={0.02} itemComponent={Item} items={items} itemsRatios={itemsRatios} nrOfColumns={4} />
      </div>
    );
  }
}

export default App;
