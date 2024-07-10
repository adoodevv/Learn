#include <iostream>

using namespace std;

class Human
{
private:
  string description;

public:
  string name;
  int age;

  Human(string name, int age, string description) : name(name), age(age), description(description) {}

  Human() {} // default contructor

  void introduce()
  {
    cout << name << ", you are " << age << " and " << description << endl;
  }
  string getDesc()
  {
    return description;
  }
  void setDesc(string desc)
  {
    description = desc;
  }
};

int main()
{
  Human Joe("Adoo", 19, "an intellect");
  Joe.introduce();

  cout << Joe.name << endl;
  cout << Joe.age << endl;
  Joe.setDesc("some guy");
  cout << Joe.getDesc() << endl; // accessing description with getter
  return 0;
}