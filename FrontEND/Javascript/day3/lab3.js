

//Task ONE

let fNum=prompt("Enter first number");
let sNum=prompt("Enter second number");
let operation=prompt("Enter sum ,multi ,sub ,div");

function math(fNum,sNum,operation)
{
    
    let value=0;
    switch (operation){
        case "sub":
           value=parseInt(fNum)-parseInt(sNum);
      
            break;
        case "sum":
            value=parseInt(fNum)+parseInt(sNum);
    
            break;
        case "div":
            value=parseInt(fNum)/parseInt(sNum);
     
            break;  
        case "multi":
            value=parseInt(fNum)*parseInt(sNum);
     
            break;
    }
    return value;
}


let oper=math(fNum,sNum,operation);
alert(`the result is ${oper}`);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//task TWO 

// function login (user,pass)
// {
//     if (user=="admin"&&pass=="421$$")
//     {
//         alert("welcome again");
//     }
//     else if (user!="admin"&&pass=="421$$")
//     {
//         alert("username is wrong");
//     }
//     else if (user=="admin"&&pass!="421$$")
//     {
//         alert("password is wrong");
//     }
//     else {
//         alert("password and username are wrong");
//     }
// }

// let userName=prompt("enter username");
// let pw=prompt("enter password");

// login(userName,pw);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//task three



// function randomNumber(num)
// {
//     let randomly= Math.floor(Math.random()*10);
//     if (num==randomly){
//         alert("You guessed the correct number");
//     }
//     else
//     {
//         alert("Try Again! the number was "+randomly);

//     }

// }
// let num=prompt("enter number between 0 and 9");
// randomNumber(num);
