#include <iostream>
using namespace std;

class student //class- it is user defined datatype blueprint for creating objects

{
    public: //by default private hota hai or ek protective bhi hota hai
    string name;
    int age,roll_number;
    string grade;
};
 int main(){
    student s1;
    s1.name="rohit";
    s1.age=19;
    s1.roll_number=2302037;
    s1.grade="A+";
    cout<<s1.age<<" ";
 }