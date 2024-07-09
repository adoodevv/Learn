#include <iostream>
#include <string>
using namespace std;

class Player {
public:
    string name;
    int location;

    Player(string name) : name(name), location(0) {}

    int getLocation() {
        return location;
    }

    void setLocation(int loc) {
        location = loc;
    }
};

class Location {
public:
    string name;
    string description;

    Location() : name(""), description("") {} // Default constructor

    Location(string name, string description) : name(name), description(description) {}
};

void initializeGame(Player &player, Location locations[]) {
    // Example initialization
    locations[0] = Location("Home", "Your cozy house");
    locations[1] = Location("Market", "A bustling marketplace");
    // Initialize other locations as needed
}

void displayMenu(Player &player, Location &currentLocation) {
    cout << "You are at: " << currentLocation.name << endl;
    cout << "1. Move\n2. Quit\n";
}

void handlePlayerAction(Player &player, Location locations[]) {
    int choice;
    cin >> choice;
    switch (choice) {
        case 1:
            // Example movement logic
            player.setLocation((player.getLocation() + 1) % 5); // Cycle through locations
            break;
        case 2:
            exit(0); // Exit the game
        default:
            cout << "Invalid option. Try again.\n";
    }
}

int main() {
    Player player("Detective Smith");
    Location locations[5]; // Assuming 5 locations for simplicity

    initializeGame(player, locations);

    while (true) {
        Location &currentLocation = locations[player.getLocation()];
        displayMenu(player, currentLocation);
        handlePlayerAction(player, locations);
    }

    return 0;
}