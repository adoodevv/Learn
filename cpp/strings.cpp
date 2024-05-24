#include <iostream>

using namespace std;

int main()
{
   string phrase = "Giraffe Academy";
   cout << phrase << endl; // prints Giraffe Academy
   cout << phrase.length() << endl; // prints 15 which is the length of the string
   cout << phrase[0] << endl; // prints G
   phrase[0] = 'B'; // changes the first character to B
   cout << phrase << endl; // prints Biraffe Academy
   cout << phrase.find("Academy", 0) << endl; // prints 8 which is the index of the first character of the substring
   cout << phrase.substr(8, 3) << endl; // prints Aca which is the substring starting at index 8 and has a length of 3
   return 0;
}