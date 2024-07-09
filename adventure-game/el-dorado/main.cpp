#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <fstream>

using namespace std;

class Location
{
public:
    string name;
    string description;
    // Constructor
    Location(string name, string description) : name(name), description(description) {}
    void displayInfo()
    {
        cout << "Location: " << name << "\n"
             << description << endl;
    }
};

class NPC
{
public:
    string name;
    string dialogue;
    // Constructor
    NPC(string name, string dialogue) : name(name), dialogue(dialogue) {}
    void talk()
    {
        cout << ">> " << name << " says: " << dialogue << endl;
    }
};

class Player
{
public:
    string name;
    int locationIndex;
    string locationName;
    // Constructor
    Player() : locationIndex(0) {}
    void move(int newLocationIndex, const vector<Location> &locations)
    {
        locationIndex = newLocationIndex;
        cout << ">> " << "Moving to: " << locations[locationIndex].name << endl;
        locationName = locations[locationIndex].name;
    }
    void searchArea()
    {
        cout << ">> " << "Searching the area for clues..." << endl;
    }
};

class Game
{
private:
    Player player;
    vector<Location> locations;
    vector<NPC> npcs;

public:
    Game()
    {
        // Initialize locations, NPCs, etc.
        locations.push_back(Location("Old Town", "An ancient part of the city with many secrets."));
        locations.push_back(Location("Mysterious Forest", "A dense forest that many dare not enter."));
        locations.push_back(Location("KNUST", "A hostile University that many dare not enter for studies."));
        npcs.push_back(NPC("Old Man", "Beware of the forest at night."));
    }
    void start()
    {
        cout << "Welcome to the Adventure Game!" << endl;
        selectProfile(player);
        while (true)
        {
            displayMenu();
            int choice;
            cin >> choice;
            handlePlayerAction(choice);
        }
    }
    void displayMenu()
    {
        cout << "1. Move\n2. Exit\n3. Search for clues\n4. Talk to NPC\n5. Save game\nChoose an action: ";
    }
    void saveGame(const Player &player)
    {
        ofstream file("savegame.txt");
        if (file.is_open())
        {
            file << player.name << "\n";
            file << player.locationName << "\n";
            // Save other player details as needed
            file.close();
        }
    }
    void createProfile()
    {
        string playerName;
        cout << "Enter your name: ";
        cin >> playerName;
        ofstream file(playerName + "_profile.txt");
        if (file.is_open())
        {
            file << playerName << "\n";
            file.close();
        }
    }
    void selectProfile(Player &player)
    {
        string playerName;
        cout << "Enter your profile name: ";
        cin >> playerName;
        ifstream file(playerName + "_profile.txt");
        if (file.is_open())
        {
            getline(file, player.name);
            file.close();
        }
        else
        {
            cout << "Profile not found, creating a new one.\n";
            createProfile();
            player.name = playerName;
        }
    }
    void handlePlayerAction(int choice)
    {
        switch (choice)
        {
        case 1:
            player.move((player.locationIndex + 1) % locations.size(), locations);
            break;
        case 2:
            cout << ">> " << "Exiting game." << endl;
            exit(0);
        case 3:
            player.searchArea();
            break;
        case 4:
            if (!npcs.empty())
            {
                npcs[0].talk(); // Example: interact with the first NPC
            }
            break;
        case 5:
            saveGame(player);
            cout << ">> " << "Game saved.\n";
            break;
        default:
            cout << "Invalid choice. Please try again.\n";
            break;
        }
    }
};

int main()
{
    Game game;
    game.start();
    return 0;
}