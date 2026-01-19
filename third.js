/*let size=0;
let str="rohitkumar";
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size=",size);
*/
let gameNo=10;
let userNo=prompt("enter the no");
while(gameNo!=userNo){
    userNo=prompt("you entered wrong no.guess again");
}
console.log("congratulation you entered the right no");