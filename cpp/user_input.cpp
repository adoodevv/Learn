#include <iostream>

using namespace std;

int main()
{
   int age;
   cout << "Enter your age - ";
   cin >> age;
   cout << "You are " << age << " years old" << endl;

   string name;
   cout << "Enter your name - ";
   getline(cin, name); // getting string input
   cout << "Hello " << name << endl;
}