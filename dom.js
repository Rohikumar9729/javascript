//let para=document.querySelector("p");
//console.log(para.setAttribute("class","newclass"))

let newbtn=document.createElement("button");
newbtn.innerText="hitman";
console.log(newbtn);

let div=document.querySelector("div");
div.after(newbtn);
