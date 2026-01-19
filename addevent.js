let modebutton=document.querySelector("#mode");
let currmode="light";
modebutton.addEventListener("click",() =>{
if(currmode==="light"){
    currmode="dark";
    document.querySelector("body").style.backgroundColor="black";

}
else{
    currmode="light";
    document.querySelector("body").style.backgroundColor="white";
}
console.log(currmode);

});