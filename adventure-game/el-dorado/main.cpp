#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <fstream>
#include <ctime>

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
    vector<string> dialogues;

    NPC(string name, vector<string> dialogues) : name(name), dialogues(dialogues) {}

    string getRandomDialogue()
    {
        if (dialogues.empty())
            return "I have nothing to say.";
        srand(time(0)); // Seed the random number generator
        int index = rand() % dialogues.size();
        return dialogues[index];
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
        // Initialize locations, NPCs
        locations.push_back(Location("Old Town", "An ancient part of the city with many secrets."));
        locations.push_back(Location("Mysterious Forest", "A dense forest that many dare not enter."));
        locations.push_back(Location("KNUST", "A hostile University that many dare not enter for studies."));
        npcs.push_back(NPC("Old Man", {"beware of the forest at night.", "avoid Strangers."}));
        npcs.push_back(NPC("Wise Owl", {"wisdom is the key.", "find God."}));
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
            cout << "Profile not found, create a new one.\n";
            createProfile();
            player.name = playerName;
        }
    }
    void listNPCs()
    {
        cout << "Available NPCs to talk to:" << endl;
        for (size_t i = 0; i < npcs.size(); ++i)
        {
            cout << i + 1 << ". " << npcs[i].name << endl; // Assuming NPC class has a getName() method
        }
    }
    void talkToNPC()
    {
        if (npcs.empty())
        {
            cout << "No NPCs to talk to." << endl;
            return;
        }
        listNPCs();
        cout << "Choose an NPC to talk to (number): ";
        int choice;
        cin >> choice;
        // Validate input
        if (choice < 1 || choice > npcs.size())
        {
            cout << "Invalid choice. Please try again." << endl;
            return;
        }
        // Adjust for 0-based index
        cout << ">> " << npcs[choice - 1].name << " says " << npcs[choice - 1].getRandomDialogue() << endl;
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
                talkToNPC(); // interact with the first NPC
                break;
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

void interactWithNPC(NPC npc)
{
    cout << npc.getRandomDialogue() << endl;
}

int main()
{
    Game game;
    game.start();
    return 0;
}