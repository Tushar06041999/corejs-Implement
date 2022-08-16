import {firstName,lastName,fullName1} from "./root.js"

console.log(fullName1,firstName);

// template literals

function Biodata(string,...values){
         console.log(string);
         console.log(values);
}
var fNamed="Tuhsra";
var lNamed="Mitro";
console.log(Biodata`Hello Programmer ${fNamed} you really good ${lNamed} ours`);

// Iterate oprator 
 function log(anything){
        console.log(anything);
 }
 let myArray=[1,2,3,4,5,6];
 let mySet=new Set(myArray);

 for(let value of mySet){
    log(value);
 }

// set to unique data

let numberss=[1,2,1,3,4,5,5,7,6,8,9,4,7,5,8,3,4,5,1,8,7,3,2,4];
console.log([...new Set(numberss)])

// intersecttion method in set
let a=[1,1,2,3,4,5];
let b=[1,2,3,4,5];
let intersection=new Set([...a].filter((x=>b.has(x));
console.log(intersection);
