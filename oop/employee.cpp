#include <iostream>

using namespace std;

class Employee
{
public:
   string name;
   string company;
   int age;

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

   return 0;
}