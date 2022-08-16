


console.log("Hello World");

// simple function to fat arrow function

function name(){
    return "Mohanto Tushar Chandra"
}
console.log(name());

let chinessName=()=> "Mohanto Tushar Chandra";
console.log(chinessName())

// we can Diplay or Decleared function just in one line

let number=()=> console.log(100);
number();

let num =(a,b)=>{
    return a*b;
}
console.log(num(5,6));

// js es6 Variable Declearation
var country="Bangladesh";
console.log(country);

// we can use let variable to reassign value
let country2="Kuwait";
country2="Saudi Arabia";
console.log(country2);

// const Maily block scope variable we can't reassign const value
const School="Naogaon KD Govt High school";
function Declear(School){
    console.log(School+","+School)
}
Declear(School);



// Arthemetic operator......Addition,multiplication,substraction,,Divideby

let a=11;
let b=21;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);

// Math keyword ceil floor
// calculate our company members monthly rewars lotary
let lotary=Math.ceil(Math.random()*100);
let lotary1=Math.floor(Math.random()*100);
console.log(lotary);
console.log(lotary1);

// Round math keyword
let Mygpa=5.499999;
let Mygrade=4.60000;
let roundFigure=Math.round(Mygpa);
let roundFigure1=Math.round(Mygrade);
console.log(roundFigure)
console.log(roundFigure1)

// js input field

// let enterData=prompt();
// console.log(enterData);
// js maxmimum value minimum value parseInt and float

let maxNum=5.5100000;
console.log(Math.min(maxNum));

// js Truthy and falsy value

var val="Tushar";
if(val){
    console.log("This is Trthy value");

}else{
    console.log("This is mainly Falshy value");
}
// six falsy value "",0,false,Null,undefined,Nan

// using Ternary operator to check condition
var c=6;
var res=c>5;
console.log(res);

let age=19;
let ageCheck=(age>=18)? "Adult"
        : (age<10)
        ?"child"
        :"young";
          
console.log(ageCheck);

// js find and find index method

let numbers=[1,2,3,5,6,7,8,9];
let newNum=numbers.find((t)=>{
   return t>6;
})
console.log(newNum);

let numbers1=[1,2,3,4,5,6,7,8,9]
let resylts=numbers1.findIndex((nu,index,re)=>{
         return nu,index,re;
})
console.log(resylts);

// Arry push method

let num1=[1,2,3,4,5];
num1.push([6,7,8,9]);
console.log(num1);

// js map method with length detection
let num9=[1,2,3,4,5,6,7,8,9];
let finalResult=num9.map((res)=>res*2);
console.log(finalResult);

// Array reduce method.We can use reduce method to calculate sum of whole array
let num10=[1,2,3,4,5,6,7,8,9];
let result=num10.reduce((previousValue,curretValue,indexValue,array)=>{
       return previousValue+curretValue;
},0)
console.log(result);

// I will try to do the same thing with for loop;
let num11=[1,2,3,4,5,6,7,8,9];
let blank=0;
for(let i=0;i<num11.length;i++){
   
    blank+=num11[i];
    
}
console.log(blank);

// for in method implementation for the first time
// let namer={
//     founder:"google",
//     author:"Tushar",
//     netWorth:"250billion",
// };
// for(found in namer){
//     console.log(found);
// }

// Differt betwwen for in and for of in array
let fullName="Mohanto Tushar chandra";
let numb12=[1,2,3,4,5,6,7,8,9];
for(cal of numb12){
    console.log(cal);

}

for(cal in numb12){
    console.log(cal);
}

for(cal of fullName){
    console.log(cal.length);
}

// value and key detect from object

var Myobj={
    founder:"tushar",
    estd:2020,
    license:"Corporate",
    region:"Bangladesh"
}

var keys=Object.keys(Myobj);
var values=Object.values(Myobj);
console.log(values);
console.log(keys);

// Defult function parameter ,undefined and null

function numer(x=10){
    return x;
}
console.log(numer(null));

// spread oprator array and object 
var numbe1=[1,2,3,4];
var aa=[...numbe1];
numbe1.push(5);
console.log(aa,numbe1);
console.log(...numbe1,6,7,8,9);

// object spreading

var obj1={
    x:2,
    y:3
}

var obj2={
    a1:2,
    a2:3
}
console.log(
    {
        ...obj1,...obj2
    }
)

// js rest spread oprator

function numeric(a,...param){
    console.log(param);
}
numeric(1,2,3,4,5,6)

// destructing

const info={
    fname:"Tushar",
    class:"Hons Final Year",
    subject:"Cst",
    degree:{
        masters:"PassDept"
    }
}

var tname=info["fname"];

const {fname}=info;
const {degree:{masters:ras}}=info
console.log(tname);
console.log(fname);


console.log(ras);

// js Destructor

var number0=[1,2,3,4,5,6,7,8,9];
var [, , , ,c,d,e,f,g]=number0;
console.log(c,d,e,f,g);


// swap
var a3=2;
var b3=3;
[b3,a3]=[a3,b3];
console.log(a3,b3);