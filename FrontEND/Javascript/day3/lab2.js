//task 1



// var req=true;

// while(req==true)
// {
//     var age=prompt("Enter your age");

//     if (age>0)
//     {
//      if(age>=1&&age<=10)
//         {
//             var req=confirm(`child`);
//         }
//         else if(age>=11&&age<=18)
//         {
//             var req=confirm(`teenager`);
//         }
//         else if(age>=19&&age<=50)
//         {
//             var req=confirm(`grownup`);
//         }
//         else if(age>50)
//         {
//             var req=confirm(`old`);
//         }
//     }
    
//     else {
//         alert(`you should enter valid age`);
//     }
// }



////////////////////////////////////////////////////////////////////////////////////////////


//task2 

// var a=0,i=0,u=0,o=0,e=0;
// var str=prompt("Enter string");

// for(let i=0 ; i<str.length; i++)
// {
//     if (str[i]=='a')
//     {a++;}
//     else if (str[i]=='u')
//     {u++;}
//     else if (str[i]=='i')
//     {i++;}
//     else if (str[i]=='o')
//     {o++;}
//     else if (str[i]=='e')
//     {e++;}

// }


//  alert(`a= ${a}  i= ${i}  o= ${o}  u= ${u}  e= ${e}`);


//////////////////////////////////////////////////////////////////////////////////////////////////

//task3


//  var hour=prompt("Enter hour");
//  if (hour <=12&&hour >0)
//  {
//     alert(`it's ${hour} AM`);
//  }
//  else if (hour>12&&hour<=24)
//  {
//     hour=hour-12;
//     alert(`it's ${hour} PM`);
//  }


/////////////////////////////////////////////////////////////////////////////////////////////////

//task4


var fNum=0,sNum=0,tNum=0;
fNum=prompt("Enter First Number");
sNum=prompt("Enter second Number");
tNum=prompt("Enter third Number");

if (fNum>sNum&&fNum>tNum)
{
    alert(`${fNum}`);
}

else if (sNum>fNum&&sNum>tNum)
{
    alert(`${sNum}`);
}

else if (tNum>fNum&&tNum>sNum)
{
    alert(`${tNum}`);
}

