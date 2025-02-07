#include <iostream>
#include <math.h>

using namespace std;

int main()
{
char point[] = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'};
float x[] = {1, 3, 4, 5, 1, 4, 1, 2};
float y[] = {3, 3, 3, 3, 2, 2, 1, 1};
float m1[] = {x[(sizeof(x)/sizeof(float))-1], y[(sizeof(y)/sizeof(float))-1]};
float m2[] = {x[(sizeof(x)/sizeof(float))-2], y[(sizeof(y)/sizeof(float))-2]};
string group[8];
float sumdq =0;

    for(int i=0;i<=sizeof(point)-1;i++)
    {
        float d1 = sqrt(pow(x[i]-m1[0],2) + pow(y[i]-m1[1],2));
        float d2 = sqrt(pow(x[i]-m2[0],2) + pow(y[i]-m2[1],2));
        if(d1<d2)
        {
            group[i] = "C2";
            sumdq =sumdq + pow(d1,2);
            cout<<point[i]<< " "<<group[i]<< " "<<d1<<endl;
        }
        else
        {
            group[i] = "C1";
            sumdq =sumdq + pow(d2,2);
            cout<<point[i]<< " "<<group[i]<< " "<<d2<<endl;
        }

    }
    float bcv = sqrt(pow(m1[0]-m2[0],2)+pow(m1[1]-m2[1],2));
    float r = bcv/sumdq;
    cout<<r;

// declaring new group centers
    for(int i = 0; i<=sizeof(point)-1;i++)
    {

    }

    return 0;
}
