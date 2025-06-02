// //commment 
// //output
// console.log("heloo world")

// const { use } = require("react")



// //variable
// //data store krne ke liye

// //1 var = local variable 
// //value reasign or redeclare kr sakte

// // var a = 45
// // a=5
// // var a = 12
// // console.log(a);



// // 2 let = globsl vsrisble reasign kr sakte redeclare anhi kr sakte h 



// // let a = 10
// // a=15
// // var a = 1
// // console.log(a);


// // const = block scope


// // let a= 12

// // if(a==12 && a>=12){
// //     console.log("true");

// // }else{
// //     console.log("false");

// // }





// // let a = prompt("enter ")


// // if (a%2 == 0) {
// //     console.log(a,"even");
// // } 
// // else if (a%2 != 0) {
// //     console.log(a , "odd");

// //     document.write("your number greater than and equal to 12")
// // } 
// // else {
// //     document.write("your number is not eqal 12")
// // }


// // let data =1

// // switch (data) {
// //     case 1:
// //         console.log("monday");
// //         break
// //     case 2:
// //         console.log("monday");
// //         break
// //     case 3:
// //         console.log("monday");
// //         break
// //     default:
// //         console.log("Not found");
// // }



// // let a = true?console.log("hello"):console.log("world");








// // let a = 728;

// // a == 78 ? console.log("true") :console.log("false") 



// // let arr = ["dfg" , "111" , 1]

// // console.log(arr[0]);





// // let arr = [1, 2, 3]
// // let arr2 = [4,5,6]

// // let arr3 = arr.push(arr2)

// // arr.pop()
// // arr.push(4)

// // arr.shift()
// // arr.unshift(0)

// // let arr = [1, 2, 3]


// // console.log(arr.shift());



// // let students = {

// //     name: "student,",
// //     phone: 123456789,
// //     yes: true
// // }
// // console.log(students);

// // let a = students.name = "sdfghj"
// // console.log(a);

// // console.log(students);




// // strings
// // "sdfghjkl;'"

// // let a = 78
// // let str = "gdghfhgj"
// // console.log( typeof str ,"dfg", a);









// let employee = {
//     name: "Tushar",
//     age: 20,
//     employee: true,
//     salary: 100000.00
// }





// ternaery condtion questions 



// let a = 5

// console.log(a > 0 ? "positive" : a < 0 ? "negative" : "zero");



// let amount = Number(prompt("enter"))




// if (amount > 0 && amount <= 5000) {
//     // console.log(Math.floor((5*amount))/100);
//     console.log("5000");


// }
// if (amount > 5000 && amount <= 7000) {
//     // console.log(Math.floor((5*amount))/100);
//     console.log("7000");


// }





// const hello = (a, b) => {

//     console.log("hdsdfghjk");
//     return a + b;


// }
// console.log(hello(2, 5));



//  function h(){
//     console.log("sadfg");

// }
// h()









// function hello(a, b) {
//     return a + b

// }
// console.log(
//     hello(4, 5)

// );




// const hello = function (a, b) {
//     return a + b
// }

// console.log(
//     hello(3, 55)
// );



// const heloo = (a, b) => {
//     return a+b
// }

// console.log(
//     heloo(4,5)
// );



// localStorage.setItem("name" , "rajat")

// console.log(localStorage.getItem("name"));



// let a = prompt("Enter Your Number To Print Your Table")

// for (let i = 1; i <= 10; i++) {
//     localStorage.setItem(`tab${i}`, `${a} X ${i} = ${a * i}`)
// }


// let sum = 0

// for (let i=0; i<=10; i++){
//     sum = sum +i
//     // console.log(i);

// }
// console.log(sum);














// let i = 0

// while (i<=100) {
//     console.log(i);
//     i++

// }



// console.log("start");

// setTimeout(() => {
//     console.log("mid");

// }, 2000);


// console.log("end");




// for (let i = 0 ; i<=100; i++ ){
//     console.log(i);

// }


// let a = 0
// while(a<=100){
//     console.log(a);
//     a++
// }


// let a = 10
// do {
//     console.log(a);
//     a++

// } while (a<=100);





// let obj = {
//     name:"hello"
// }


// for(let a in obj){
//     console.log(a);

// }

// let arr = [1,2,3,4]

// for(let a of arr){
//     console.log(a);

// }











// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(total); 



// let day = 2

// switch(day){
//     case 1 :
//     console.log("monday");

//     default:
//         console.log("no");


// }




// ternery condition 
// let a = 180

// console.log(
//     a > 405 ? "helooo" : "not greater than"

// );



// promises


let mypromises = new Promise((resolve, reject) => {
    reject("heloo")
})

console.log(mypromises);





setTimeout(() => {
    console.log("heloo what is your name");
    
}, 2000);
setTimeout(() => {
    try {
        console.log("heloooo");
        
    } catch (error) {
        console.log(error);
        
    }
    
}, 3000);
setTimeout(() => {
    console.log("your address is this");
    
}, 4000);
setTimeout(() => {
    console.log("you are failed ");
    
}, 5000);