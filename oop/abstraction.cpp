#include <iostream>

using namespace std;

class AbstractEmployee
{
   virtual void askForPromotion() = 0; // Pure virtual function
};

class Employee : AbstractEmployee // Inheriting from AbstractEmployee
{
private:
   string name;
   string company;
   int age;

public:
   void setName(string Name) // Setter for name
   {
      name = Name;
   }
   string getName() // Getter for name
   {
      return name;
   }
   void setCompany(string Company) // Setter for company
   {
      company = Company;
   }
   string getCompany() // Getter for company
   {
      return company;
   }
   void setAge(int Age) // Setter for age
   {
      if (Age >= 18)
      {
         age = Age;
      }
   }
   int getAge() // Getter for age
   {
      return age;
   }
   void introduceYourself()
   {
      cout << "Name - " << name << endl;
      cout << "Company - " << company << endl;
      cout << "Age - " << age << endl;
   }
   Employee(string Name, string Company, int Age)
   {
      name = Name;
      company = Company;
      age = Age;
   }
   void askForPromotion() // Implementing the pure virtual function
   {
      if (age > 30)
      {
         cout << name << " got promoted!" << endl;
      }
      else
      {
         cout << name << ", sorry no promotion for you!" << endl;
      }
   }
};

int main()
{
   Employee employee1("John", "Google", 25);

   Employee employee2("Bright", "Amazon", 40);

   employee1.askForPromotion();
   employee2.askForPromotion();

   return 0;
}