import './App.css';
import { useState } from 'react';
const itemData = require('../src/assets/item-cn.json');

function App() {
  const itemIds = Object.keys(itemData.data).filter((key) => {
    const item = itemData.data[key];
    return (
      item.gold.purchasable &&
      !item.hasOwnProperty('specialRecipe') &&
      !item.hasOwnProperty('into') &&
      !item.hasOwnProperty('consumed') &&
      !item.hasOwnProperty('consumeOnFull') &&
      !item.hasOwnProperty('hideFromAll') &&
      !item.tags.includes('Jungle') &&
      !item.tags.includes('Consumable') &&
      !item.tags.includes('Vision') &&
      !item.tags.includes('Trinket') &&
      !item.tags.includes('Lane') &&
      !item.tags.includes('Boots')
    );
  });

  const [generatedItem, setGeneratedItem] = useState('');
  const [generatedItemName, setGeneratedItemName] = useState('');
  const [logo, setLogo] = useState('');

  const generateRandomItem = () => {
    const randomItem = itemIds[Math.floor(Math.random() * itemIds.length)];
    setGeneratedItem(randomItem);
    setLogo(`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/item/${randomItem}.png`);
    setGeneratedItemName(itemData.data[randomItem].name);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Random Item Generator</h1>
        <button className="generate-btn" onClick={generateRandomItem}>
          Generate Item
        </button>
        {logo && (
          <div className="item-display">
            <img src={logo} alt="Item Logo" className="item-image" />
            <p className="item-name">{generatedItemName}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
