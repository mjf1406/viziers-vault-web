<!-- @format -->

The app is called Vizier's Vault. A nod to the Vizier card from the Deck of Many Things in D&D. This webapp generates things for D&D 5e 2024.

## Tools

1. Magic Shop Generator
2. Encounter Generator
3. Spellbook Generator
4. Battle Map Generator
5. World Generator

### Magic Shop Generator

-   Alpha 1
-   User selects a world, then a city within that world or inputs a population of the city. The more populous, the more items in the shop.
-   User inputs the quantity of shops to generate.
-   User selects the magicness of the city. The higher the magicness, the more items in the shop.
-   User selects the city wealth of the city. The greater the wealth, the more items in the shop.
-   user select the stock types, including, but not limited to weapons, armor, potions, spell scrolls, etc.
-   User can create their own worlds and cities therein for use in the Magic Shop Generator now and in the World Generator when it releases in Alpha 4.

### Spellbook Generator

-   Alpha 1
-   Select level (or random) and select any combination of schools of magic
-   Determines if there are extra spells by using user inputted probability from settings
-   Rolls a 1dx where x is the maximum number of extra spells from settings
-   Generates a wizard spellbook

### Encounter Generator

-   Alpha 2
-   User selects the season and time of day (day or night)
-   User selects party travel speed and type of road or not on a road
-   User selects the biome
-   User selects the medium of travel: flight, sea, land
-   User selects the quantity to generate
-   User can create new instances of encounters to generate so that combinations of the inputs can be generates simultaneously

### Parties

-   Alpha 2
-   User inputs party name.
-   User add a level, then number of PCs for that level.
-   User adds an optional ciruclar icon that will be used in the World View which will come with the World Generator in Alpha 4
-   This is used in the Encounter Generator to generate balanced encounters.

### Battle Map Generator

-   Alpha 3
-   Generate a battle map automatically for each generated encounter if you so choose.
-   Generate battle maps independent of encounters using biome, time of day, season, weather, and other options.
    -   geographical features
    -   river/lake/pond/stream
    -   road/path/trail/royalway
-   Battle Maps can be automatically formatted to fit you TV screen if you use it as a board
-   Choose the width, height, tile size in pixels, add a border if you want
-   Choose square or hex grids
-   Edit the map to your heart's content with the paint and stamp tools
-   Export for your your VTT of choice or as an image

### World Generator

-   Alpha 4
-   Generate an entire hex world, either 2D or 3D for you and your players to explore.
-   Party icons are used to track the position on the map, to automatically generate random encounters and battle maps.
-   Weather is simulated and fog of war is handled automatically.
-   Hex visibility is handled automatically using the distance to horizon formula based on the planet's size, but defaults to Earth's size.
-   Players can access the player version if they'd rather do so than draw their hex world by hand.
-   Adjust parameters like diameter, composition, proximity to the star, number of stars, temperature, precipitation, etc.

### Star System Generator

-   This one is a wild dream.

### Galaxy Generator

-   An even wilder dream.

## Disclosure

-   AI was used to help with the UI because I hate coding UI.
-   AI was NOT and will never be used for the art because human art is better.
-   AI was NOT and will never be used for the algorithms because I love coding algorithms.

## The Stack

-   NextJS
-   Tailwind
-   Shadcn
-   InstantDB

## Self Introduction

-   I'm the only dev working on this.
-   I'm a full-time teacher.
-   I run a TTRPG club at my school and wanted this site for the club and for the club members to use (if they wanted) to learn to be a GM.

## Philosophy

-   Battle Map Generation
-   World Generation
