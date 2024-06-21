#include <iostream>

using namespace std;

class Book
{
public:
   string title;
   string author;
   int pages;

   Book(string aTitle, string aAuthor, int aPages) // constructor(they can take parameters)
   {
      title = aTitle;
      author = aAuthor;
      pages = aPages;
   };

   Book(){}; // default constructor

   bool isLong()
   {
      if (pages >= 500)
      {
         return true;
      }
      return false;
   }
};

int main()
{
   Book book1("The Art of War", "Sun Tzu", 500); // creating object

   cout << book1.author << endl;

   cout << book1.isLong() << endl;

   return 0;
}