#include <iostream>

using namespace std;

class AbstractEmployee
{
   virtual void askForPromotion() = 0; // Pure virtual function
};

class Employee : AbstractEmployee // Inheriting from AbstractEmployee
{
private:
   string company;
   int age;

protected: // Protected so that Developer class can access it
   string name;

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
   virtual void Work() { cout << name << " is working" << endl; }
};

class Developer : public Employee // Inheriting from Employee
{
public:
   string favProgrammingLanguage;
   Developer(string Name, string Company, int Age, string FavProgrammingLanguage)
       : Employee(Name, Company, Age)
   {
      favProgrammingLanguage = FavProgrammingLanguage;
   }
   void fixBug()
   {
      cout << name << " fixed bug using " << favProgrammingLanguage << endl;
   }
   void Work() { cout << name << " is coding in " << favProgrammingLanguage << endl; }
};

class Teacher : public Employee // Inheriting from Employee
{
public:
   string subject;
   void prepareLesson()
   {
      cout << name << " is preparing " << subject << " lesson" << endl;
   }
   Teacher(string Name, string Company, int Age, string Subject)
       : Employee(Name, Company, Age)
   {
      subject = Subject;
   }
   void Work() { cout << name << " is teaching " << subject << endl; }
};

int main()
{
   Employee employee1("John", "Google", 25);

   Employee employee2("Bright", "Amazon", 20);

   Developer dev1("Haqq", "Amazon", 19, "C++");

   Teacher teacher1("Oteng", "KNUST", 35, "EMF");

   dev1.fixBug();
   dev1.askForPromotion();
   teacher1.prepareLesson();
   teacher1.askForPromotion();

   Employee *e1 = &dev1;     // Pointer to Developer object
   Employee *e2 = &teacher1; // Pointer to Teacher object

   e1->Work();
   e2->Work();

   return 0;
}