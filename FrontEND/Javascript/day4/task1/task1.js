

let user = document.querySelector("input[type=text]");
let pass = document.querySelector("input[type=password]");


user.style.backgroundColor="gray";
pass.style.backgroundColor="gray";

let btn = document.querySelector("#login");
function login (){
  let loginObj={name:user.value , password:pass.value}
  if (loginObj.name=="admin" && loginObj.password=="123")
{
  document.write("welcome");
}
else{
  document.write("not registered");
}
}

btn.addEventListener("click",login);








