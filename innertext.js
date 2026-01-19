/*let h1=document.querySelector("h1");
console.dir(h1.innertext);
h1.innertext=h1.innertext + "myself rounak";*/
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
