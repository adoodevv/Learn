#include <iostream>

using namespace std;

class Employee
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
};

int main()
{
   Employee employee1("John", "Google", 35);
   employee1.introduceYourself();

   Employee employee2("Bright", "Amazon", 40);
   employee2.introduceYourself();

   employee1.setAge(17);
   cout << employee1.getName() << " is " << employee1.getAge() << " years old." << endl;

   return 0;
}