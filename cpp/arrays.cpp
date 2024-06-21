#include <iostream>

using namespace std;

int main()
{
   int luckyNums[] = {4, 5, 3, 19, 24, 6};
   luckyNums[4] = 45; // modify array

   cout << luckyNums[2] << endl;
   return 0;
}