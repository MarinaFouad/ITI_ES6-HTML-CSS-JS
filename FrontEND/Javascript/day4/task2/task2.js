

var fString, sString;



let btn = document.querySelector("input[type=submit]");

function subm()
{
    sString= document.getElementById("secondStr").value;
    fString= document.getElementById("firstStr").value;
    let arr1= fString.split(",");
    let arr2=sString.split(",");
    console.log(arr1);

    let bigArr = arr1.concat(arr2);
    let newArr;
    console.log(bigArr);
    for (let i=0 ; i<bigArr.length ;i++)
    {
        for (let j=i+1 ;j<bigArr.length ;j++ ){

        if (bigArr[i]==bigArr[j]){   
            bigArr.splice(j--, 1);
        } 
    }

    }
    console.log(bigArr);

}

btn.addEventListener("click",subm);


