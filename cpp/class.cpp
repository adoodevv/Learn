#include <iostream>

using namespace std;

class Book
{
public:
   string title;
   string author;

   Book(string aTitle, string aAuthor) // constructor(they can take parameters)
   {
      title = aTitle;
      author = aAuthor;
   };
};

int main()
{
   Book book1("The Art of War", "Sun Tzu"); // creating object

   cout << book1.author << endl;

   return 0;
}