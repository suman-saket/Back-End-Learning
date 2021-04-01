// 2️⃣: Higher Order Function
// function which takes another function as an arguments is called HOF
// wo function jo dusre function ko as an argument accept krta hai use HOF

// 3️⃣: Callback Function
// function which get passed as an argument to another function is called CBF
// A callback function is a function that is passed as an argument to
// another function, to be “called back” at a later time.

// Jis bhi function ko hum kisi or function ke under as an arguments passed
// krte hai then usko hum CallBack fun bolte hai

// we need to create a calculator

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// I have to do the hardcoded for each operation which is bad
// we will use the callback and the HOF to make it simple to use

// Now instead of calling each function indivisually we can call it
// by simply using one function that is calculator

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// In the above example, calculator is the higher-order function,
// which accepts three arguments, the third one being the callback.
// Here the calculator is called the Higher Order Function because it takes
// another function as an argument

// and add, sub and mult are called the callback function bcz they are passed
// as an argument to another fucntion

// InterView Question
// Difference Between Higher Order Function and Callback Function ?

// 🏁🏁Asynchronous JavaScript

// 6️⃣:  Synchronous JavaScript Program - Process will occur line by line. In asynchronous Javascript.

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

// Asynchronous JavaScript Program - All work will go on without waiting for anyone.

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

//-----------------------------------------------------------------------------------------------------------------------

// 8️⃣: CallBack Hell

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`);
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`);
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//-----------------------------------------------------------------------------------------------------------------------

//👉  🤩 Bonus JSON 🤩

// 👉 JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string.

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);

// console.log(object_as_string);            //OUTPUT -  "{"key_1":"some text","key_2":true,"key_3":5}"

// typeof(object_as_string);                //OUTPUT - "string"

// 👉 JSON.parse turns a string of JSON text into a JavaScript object.

// var object_as_string_as_object = JSON.parse(object_as_string);

// console.log(object_as_string_as_object);                //OUTPUT - {key_1: "some text", key_2: true, key_3: 5}

// console.log(typeof(object_as_string_as_object));       //OUTPUT - // "object"

//-----------------------------------------------------------------------------------------------------------------------

// 7️⃣ AJAX Call using XMLHttprequest

// how to handled with the events and callback

// XMLHttpRequest (XHR) objects are used to interact with servers.
// You can retrieve data from a URL without having to do a fullpage refresh.
//This enables a Web page to update just part of a page without disrupting what the user is doing.
// XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// we need to call the api or request the api using GET method ki, me jo url pass kar kr rha hu uska data chaiye
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to
// add the event to load the data adn get it

// to get the response
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });
//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
