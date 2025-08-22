<!-- @format -->

## Alpha 1

### Settings

#### General

-   [ ] Links for generated things should point to the site the user wants via a dropdown:
    -   [ ] [D&D Beyond](https://www.dndbeyond.com/)
        -   uses a link formatted like
            -   `https://www.dndbeyond.com/magic-items/5370-adamantine-armor`
            -   `https://www.dndbeyond.com/spells/1988-acid-arrow`
        -   Note that there is a random ID, which is 5370 for Adamantine Armor. To get these links, scraping would be required.
    -   [ ] [Open 5e](https://open5e.com/)
        -   uses a link formatted like
            -   `https://open5e.com/magic-items/adamantine-armor`
            -   `https://open5e.com/spells/acid-arrow`
        -   all it requires is replacing spaces with a hyphen
    -   [ ] 5e Tools (For Custom Links)
        -   uses a link formatted like
            -   `https://5e.tools/items.html#adamantine%20armor_xdmg`
            -   `https://5e.tools/spells.html#melf's%20acid%20arrow_xphb`
        -   must replace spaces with `%20`
        -   must add source to the end following a `_`
    -   [ ] Custom
        -   Give the user examples using Open 5e so they know how to fill it in.
        -   There are two custom URLs they will need, one for spells and one for magic items.
        -   This is what the 5e Tools URL would look like when the user adds it in: `https://5e.tools/items.html#${ITEM_NAME}_${SOURCE_SHORT}` - ITEM_NAME and SOURCE_SHORT are attributes that can be used from the DB to assemble the URL.
        -   UX
            1. Enter base URL
                - Open 5e Magic Item Base URL: `https://open5e.com/magic-items/`
                - Open 5e Spells base URL: `https://open5e.com/spells/`
            2. Add arguments
                - Open 5e Magic Item would add `${ITEM_NAME}`
                - Open 5e Spell would add `${SPELL_NAME}`
            3. Tell how to replace spaces in arguments via user input. The user can input whatever should be used to replace.

#### Magic Shops

-   [ ] All the tables [in here](https://docs.google.com/spreadsheets/d/10j7PZQlUhpholJMIjDmbTvkb_ArfaqbpFkgQQ2l52KM/edit?gid=2035349133#gid=2035349133)
-   [ ] And [these two tables](https://docs.google.com/spreadsheets/d/1AjFXU3lGf2JGrUOBpzVjfoVbmb3TIGydvlNrQZt9-aU/edit?gid=0#gid=0) maybe? I don't know
-   [ ]

### Magic Shops

-   [ ] Pre-made Worlds which will be used in [[#Worlds B4]]
    -   [ ] Each included world has cities from each world that can be used to generate stores in
    -   [ ] Ability to create cities within the world for inclusion into [[#Worlds B4]] when it happens
-   [ ] Create World UX (will be used in [[#Worlds B4]])
    1.  Input name
    2.  Click Create
-   [ ] Create City UX
    1.  Select corresponding world
    2.  Input name
    3.  Input population
    4.  Select City Wealth
    5.  Select City Magicness
    6.  Select City Shop Types
    7.  Click Create
-   [ ] Generate Magic Shop UX
        **Step 1**
    -   Input Population
        ~OR~
    -   Choose a world and
    -   Choose a city within that world
        **Next Steps**
    2.  Select quantity of shops to generate
    3.  Adjust City Wealth for this generation only
    4.  Adjust City Magicness for this generation only
    5.  Adjust Shop Stock for this generation only
    6.  Click generate

### Subscription Model

How do we get users to pay me?

#### Free

-   Magic shops can only be generated with premade cities or inputting population.
-   Can only be downloaded as CSV.
-   NOT saved server-side. So once user navigates away from the page, the shop is gone.

#### Paid

-   I want this to only cost like 3 USD per month, but no idea.
-   Requires a login. Upon signing up, user gets a free month of premium.
-   Permalink magic shops for as long as they are a premium member.
    -   Users can use their own link settings for the links
-   Can create a world.
-   Can create cities.
-   Can export all data at any time.
-   Magic Shops are automatically saved to the server.
-   Can download any generated Magic Shop at any time.

### Others

Tease the below with their own pages, but say they are coming soon. List the features that will be available.

-   Parties
-   Encounter Generator
-   World Generator
-   Battle Map Generator

### Data

-   [ ] I need all the Spells and Magic Items data somewhere....
    -   [ ] These tables will not be customizable, but I need to easily be able to edit, like add a row or mass edit columns, etc.
    -   [ ] These tables will only be read from when the generate button is clicked, and only the _name_, _type_, _rarity_, and _tier_ from this table will be sent to the user only if the item is in the Magic Shop.

#### Options

-   InstantDB
    -   no way to bulk add from the dashboard
    -   Does have unlimited API requests
    -   would need to set up a programmatic ETL from [5e Tools GitHub](https://github.com/5etools-mirror-3/5etools-src/tree/v2.11.1/data) to InstantDB tables:
        -   dnd5e-magicItems
        -   dnd5e-spells
        -   dnd5e-bestiary
-   Turso
    -   No bulk import in the dashboard
    -   Free version allows 500 million row reads (2.5 billion at 5 USD per month)
        -   Bestiary rows: 2,253 (221,926 reads)
        -   Spells rows: 573
        -   Magic Items rows: 2,017 (193,050 reads for Spells and Magic Items)
-   Upstack Redis
    -   Each KV pair could be a table, but this makes it hard to edit. Would need to edit the entire table.
        -   Can use Google Sheets to manage the data, like for the [Bestiary](https://docs.google.com/spreadsheets/d/1-65UHktmcp2r_tHDXlZ_IdszbjDdq2HWOhhl1LdSGXQ/edit?gid=0#gid=0).
            -   The Bestiary uses ~10 MB of space, which means only get to download it 5,000 times before have to pay per month.
            -   Can easily edit the data in their [dashboard](https://console.upstash.com/redis/d9b8d43a-0cd3-4fcf-9535-18bde99f3461/data-browser?teamid=0) by simply downloading the Google Sheet as CSV, then converting to JSON using [CSV2JSON](https://csvjson.com/csv2json)

### Home Page

See [[Home Page]]

## Alpha 2

### Parties

-   [ ] This will be used in [[#Encounters]] and [[#Worlds]]
-   [ ] The icon will be sized to the inner circle diameter of the hex of the map's settings, so it should be noted to them that it should be a circle.
-   [ ] Create a Party UX
    1.  Name
    2.  Icon (must be a circle)
    3.  Number of PCs by level
    4.  Click Create

### Encounters

-   [ ] .

## Alpha 3

### Battle Maps

-   [ ] WebGPU (will allow to practice before using it in [[#Worlds]])

## Alpha 4

### Worlds

-   [ ] WebGPU
-   [ ] When a party is on the map, ensure there is a rendered hex direction indicator on the player-facing map to make it easy to say where the party wants to go like the below image

![[hex-indicators.png]]
