#include <iostream>

using namespace std;

class Movie
{
private:
   string rating;

public:
   string title;
   string director;
   Movie(string aTitle, string aDirector, string aRating)
   {
      title = aTitle;
      director = aDirector;
      setRating(aRating);
   }
   void setRating(string aRating) // setter
   {
      if (aRating == "G" || aRating == "PG" || aRating == "PG-13" || aRating == "R" || aRating == "NR")
      {
         rating = aRating;
      }
      else
      {
         rating = "NR";
      }
   }
   string getRating() // getter
   {
      return rating;
   }
};

int main()
{
   Movie movie1("The Dark Knight", "Christopher Nolan", "PG-13");

   movie1.setRating("G");

   cout << movie1.getRating() << endl;

   return 0;
}