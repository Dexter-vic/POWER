// console.log("Hello from Javasript")
// // variable
// /*
// A variable is like a container or a labelled box in acomputer that stortes information.
// You can give it aname and assign a value,and ypu can use or change that value later in your code.
// */
//     let firstName="Victor"
//     let lastName="Dexter"
//     let favFood="Chapati"
//     let worstDay="11th October"
//     let favGame="Basketball"

// console.log(firstName,lastName,favFood,worstDay,favGame)
    
// const isLoveReal=false
//     const corruptionInKenya=false
//     const isLightsOn=true
//     const isMarkSick=false
//     const markWentHome=true;

// console.log(isLoveReal,corruptionInKenya,isLightsOn,isMarkSick,markWentHome)

//     const lastYear=2024
//     const currentAmount=23.45
//     const previusChannel=6
//     const currentYear=2025

// console.log(lastName,lastYear,previusChannel,currentAmount,currentYear)


// let num1=100;
// let num2=42;
// let num3=72;
// let num4=68;
// let num5=90;
// console.log(
//     num1+num2,
//     num3*num2,
//     num5/num2,
//     num5>=num2,
//     num2<=num1,
//     num2>num1
// )
// let number = 42;

// console.log(number % 2 === 0)
// let age =12;
// if (age<13){
//     console.log("You are a younging")
// }
// else{
//     console.log("You are eligible to play")

// }
// let score=50
// if (score<50){
//     console.log("fail")
// }
// else{
//     console.log("pass")

// }

// let weather = "sunny"

// if(weather==="raining"){
//     console.log("I SUGGEST AN UMBRELLA")
// }
// else{
//     console.log("Suggest a t-shrit")
// }
// let num= 84;
// console.log(number%2===0)


let fName = "Alex"
if(fName==="alex"){
    console.log("Hi,Alex welcome back")
} else{
    console.log("Hi stranger,would you like to sign in")
}

let studentAge = 59

switch (true) {
    case (studentAge<12): 
        console.log("you are a child")
        break
    case (studentAge>13 && studentAge<=18):
        console.log("you're a teenager")
        break
    case (studentAge>19 && studentAge<=35):
        console.log( "you're a youth")
        break
    case (studentAge>36 && studentAge<=60):
        console.log("you're an adult")
        break
    case (studentAge>60):
        console.log("you're a senior citizen")   
        break
    default:
        console.log("Cant be in ther record") 
}
let gnumber = 45
switch(true){
    case (gnumber % 2 === 0):
        console.log("The number is even")
        break
    default:
        console.log("The number is odd")    
}

let studentmark=84
switch(true){
    case(studentmark>90):
        console.log("A")
        break
    case(studentmark > 80 && studentmark <=89):
        console.log("B")
        break
    case(studentmark > 70 && studentmark <= 79):
        console.log("C")
        break
    case(studentmark > 60 && studentmark <=69): 
        console.log("D")       
}
let num1 = 45;
let num2 = 567;
let num3 = 78;

if (num1 >= num2 && num1 >= num3 ){
    console.log("The Largest number is:" + num1);
} else if (num2 >= num1 && num2 >= num3){
    console.log("The Largest number is:"+ num2);
}else{
    console.log("The largest number is:" + num3);

}

//loops//
for(let i = 0; i <=10;i++ ) {
    console.log(i)
}
let i="Dexter"
for (let i=0;i<=4;i++){
    console.log("Dexter") 
}

let iterator=0
while(iterator<=4){
    console.log("Dexter")
    iterator++
}

