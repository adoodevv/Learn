# Adventure Game

Welcome to the Adventure Game! This is a simple text-based adventure game written in C++ that allows players to explore different locations, talk to NPCs, and search for clues. The game demonstrates the use of object-oriented programming principles such as inheritance and polymorphism.

## Table of Contents

- [Features](#features)
- [Class Structure](#class-structure)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Saving the Game](#saving-the-game)
- [Contributing](#contributing)
- [License](#license)

## Features

- Explore different locations.
- Interact with NPCs and get random dialogues.
- Search for clues in various areas.
- Save and load player profiles.

## Class Structure

### Character

- Base class for all characters in the game.
- Contains a pure virtual function `displayInfo()`.

### Location

- Represents a location in the game.
- Contains a name and description.

### NPC (inherits from Character)

- Represents a non-player character in the game.
- Contains dialogues and provides random dialogues when interacted with.

### Player (inherits from Character)

- Represents the player in the game.
- Can move between locations, search areas, and save the game state.

### Game

- Manages the overall game flow.
- Initializes locations, NPCs, and player profiles.
- Handles player actions and game progression.

## Getting Started

### Prerequisites

- A C++ compiler (e.g., g++, clang++)
- C++11 or later

### Compiling the Game

```sh
g++ -o adventure_game main.cpp
```

### Running the Game

```sh
./adventure_game
```

## How to Play

1. **Start the Game:**
   - Run the executable to start the game.
   - You will be prompted to enter your profile name. If the profile does not exist, a new one will be created.

2. **Main Menu:**
   - `1. Move`: Move to the next location.
   - `2. Exit`: Exit the game.
   - `3. Search for clues`: Search the current location for clues.
   - `4. Talk to NPC`: Interact with an NPC and receive a random dialogue.
   - `5. Save game`: Save the current game state.

3. **Interact with the Game:**
   - Choose an action from the main menu by entering the corresponding number.

## Saving the Game

- The game can be saved at any point by selecting the `Save game` option from the main menu.
- The game state will be saved to a file named `<player_name>_savedgame.txt`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Save this content as `README.md` in the root directory of your project. This file provides an overview of the game, instructions for compiling and running it, and information on how to play and contribute to the project.