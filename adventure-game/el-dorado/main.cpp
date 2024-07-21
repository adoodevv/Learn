#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>
#include <fstream>
using namespace std;

// Base class for Character
class Character
{
public:
    string name;
    Character(string name) : name(name) {}
    virtual void displayInfo() = 0; // Pure virtual function
};

// Location class
class Location
{
public:
    string name;
    string description;
    Location(string name, string description) : name(name), description(description) {}
    void displayInfo()
    {
        cout << "Location: " << name << "\n"
             << description << endl;
    }
};

// NPC class inheriting from Character
class NPC : public Character
{
public:
    string dialogues[2];
    NPC(string name, string dialogues[]) : Character(name)
    {
        this->dialogues[0] = dialogues[0];
        this->dialogues[1] = dialogues[1];
    }
    string getRandomDialogue()
    {
        srand(time(0)); // Seed the random number generator
        int index = rand() % 2;
        return dialogues[index];
    }
    void displayInfo() override
    {
        cout << "NPC: " << name << endl;
    }
};

// Player class inheriting from Character
class Player : public Character
{
public:
    int locationIndex;
    string locationName;

    Player(string name) : Character(name), locationIndex(0) {}

    void move(int newLocationIndex, Location locations[])
    {
        locationIndex = newLocationIndex;
        locationName = locations[locationIndex].name;
        cout << ">> Moving to: " << locationName << endl;
    }

    void searchArea()
    {
        cout << ">> Searching the area for clues..." << endl;
    }

    void displayInfo() override
    {
        cout << "Player: " << name << endl;
    }
};

// Game class
class Game
{
private:
    Player player;
    Location locations[3];
    NPC npcs[2];

public:
    Game() : player("Player1"), locations{
                                    Location("Old Town", "An ancient part of the city with many secrets."),
                                    Location("Mysterious Forest", "A dense forest that many dare not enter."),
                                    Location("KNUST", "A hostile University that many dare not enter for studies.")},
             npcs{NPC("Old Man", new string[2]{"Beware of the forest at night.", "Avoid strangers."}), NPC("Wise Owl", new string[2]{"Wisdom is the key.", "Find God."})}
    {
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
        ofstream file(player.name + "_savedgame.txt");
        if (file.is_open())
        {
            file << player.name << "\n";
            file << player.locationName << "\n";
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

    void listNPCs()
    {
        cout << "Available NPCs to talk to:" << endl;
        for (int i = 0; i < 2; ++i)
        {
            cout << i + 1 << ". " << npcs[i].name << endl;
        }
    }

    void talkToNPC()
    {
        listNPCs();
        cout << "Choose an NPC to talk to (number): ";
        int choice;
        cin >> choice;
        if (choice < 1 || choice > 2)
        {
            cout << "Invalid choice. Please try again." << endl;
            return;
        }
        cout << ">> " << npcs[choice - 1].name << " says: " << npcs[choice - 1].getRandomDialogue() << endl;
    }

    void handlePlayerAction(int choice)
    {
        switch (choice)
        {
        case 1:
            player.move((player.locationIndex + 1) % 3, locations);
            break;
        case 2:
            cout << ">> Exiting game." << endl;
            exit(0);
        case 3:
            player.searchArea();
            break;
        case 4:
            talkToNPC();
            break;
        case 5:
            saveGame(player);
            cout << ">> Game saved.\n";
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
