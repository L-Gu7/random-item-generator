# LOL Item Generator

A simple web application that generates random purchasable items from the game League of Legends. The app fetches item data from Riot Games' Data Dragon API and displays the item's name and image.

## Data Source
The application uses Riot Games' Data Dragon for item information.

- **Reference Documentation**: [Riot Games Data Dragon API](https://developer.riotgames.com/docs/lol#data-dragon_items)
- **Game Version**: 15.1.1
- **Default Item Language**: Chinese

## Filtering Criteria
Items are excluded if they:
- Are not purchasable or have a base price of 0.
- Include tags such as `Jungle`, `Consumable`, `Vision`, `Trinket`, `Lane`, or `Boots`.
- Have properties like `specialRecipe`, `into`, `consumed`, `consumeOnFull`, or `hideFromAll`.