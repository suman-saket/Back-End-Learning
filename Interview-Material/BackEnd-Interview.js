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

//-----------------------------------------------------------------------------------------------------------------------

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

// 8️⃣: CallBack Hell -
//Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other.

//Example-

// getData(function(a){
//     getMoreData(a, function(b){
//         getMoreData(b, function(c){
//             getMoreData(c, function(d){
// 	            getMoreData(d, function(e){
// 		            ...
// 		        });
// 	        });
//         });
//     });
// });

//Example-
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

// Techniques for avoiding callback hell

// Using Async.js
// Using Promises
// Using Async-Await
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
// Q. What is Event loop in Node.js? And How does it work?

//  The event loop is what allows Node.js to perform non - blocking I / O operations —
// despite the fact that JavaScript is single - threaded — by offloading operations to the system kernel whenever possible.

// Node.js is a single - threaded application, but it can support concurrency via the concept of event and callbacks.
// Every API of Node.js is asynchronous and being single - threaded, they use async function calls to maintain concurrency.
// Node uses observer pattern.
// Node thread keeps an event loop and whenever a task gets completed,
//it fires the corresponding event which signals the event - listener function to execute.

// Event-Driven Programming

// In an event - driven application, there is generally a main loop that listens for events,
// and then triggers a callback function when one of those events is detected.

// Although events look quite similar to callbacks,
// the difference lies in the fact that callback functions are called when an asynchronous function returns its result,
// whereas event handling works on the observer pattern.The functions that listen to events act as Observers.Whenever an event gets fired,
// its listener function starts executing.Node.js has multiple in -built events available through events module and EventEmitter class
// which are used to bind events and event - listeners as follows.

//-----------------------------------------------------------------------------------------------------------------------

// Q. What is REPL? What purpose it is used for?
//     REPL(READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell(Unix / Linux) and command prompt.
// Node comes with the REPL environment when it is installed.System interacts with the user through outputs of commands / expressions used.
// It is useful in writing and debugging the codes.The work of REPL can be understood from its full form:

// Read: It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory.
// Eval: The parsed JavaScript data structure is evaluated for the results.
// Print: The result is printed after the evaluation.
// Loop: Loops the input command. To come out of NODE REPL, press ctrl+c twice
// Simple Expression

// $ node
// > 10 + 20
// 30
// > 10 + ( 20 * 30 ) - 40
// 570

//-----------------------------------------------------------------------------------------------------------------------
// Q. What is the difference between Asynchronous and Non-blocking?

// Asynchronous VS Non - Blocking -

//Asynchronous does not respond immediately,
//While Nonblocking responds immediately if the data is available and if not that simply returns an error.

// Asynchronous improves the efficiency by doing the task fast as the response might come later, meanwhile, can do complete other tasks.
// Nonblocking does not block any execution and if the data is available it retrieves the information quickly.

// Asynchronous is the opposite of synchronous while nonblocking I / O is the opposite of blocking.
// They both are fairly similar but they are also different as
//asynchronous is used with a broader range of operations while nonblocking is mostly used with I / O.
//-----------------------------------------------------------------------------------------------------------------------
// Q. How many types of streams are present in node.js?
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. There are four types of streams

// Readable − Stream which is used for read operation.
// Writable − Stream which is used for write operation.
// Duplex − Stream which can be used for both read and write operation.
// Transform − A type of duplex stream where the output is computed based on input.
// Each type of Stream is an EventEmitter instance and throws several events at different instance of times.

// Example:

// data − This event is fired when there is data is available to read.
// end − This event is fired when there is no more data to read.
// error − This event is fired when there is any error receiving or writing data.
// finish − This event is fired when all the data has been flushed to underlying system.
//-----------------------------------------------------------------------------------------------------------------------
// Q. What is difference between put and patch?

// difference is that when you want to update a resource with PUT request, you have to send the full payload as the request
// whereas with PATCH, you only send the parameters which you want to update.
//-----------------------------------------------------------------------------------------------------------------------
// Q. What is the difference between Node.js vs Ajax?

// 1. AJAX

// AJAX stands for Asynchronous Javascript and XML, it’s used to allow web pages(client - side) to update asynchronously by communicating
// with a web server and by exchanging data.This essentially means that applications can talk to a server in the background of the application.
// It uses some core components to function:

// The browser XMLHttpRequest object to request data from a server
// HTML/CSS to display or collect data
// DOM for dynamic display
// JSON/XML for interchanging the data
// Javascript to unify everything

// 2. Node.js

// Node.js allows the developers to develop a web application in a single language called JavaScript for both client side and server side.
// Unlike the other programming languages, Node.js has its cycle of the event in the form of language which is very beneficial for high - performance
//  and scalable application development.
// It is required for those web applications where traffic rate is very high.
//     Node.js is an event based I / O language and its response time is very high rather than the other traditional languages.
// It is being used by the famous websites like Linked in, Twitter and Gmail.

// The runtime environment of Node.js interprets JavaScript, which is very easy and simple to understand and code.
// Due to this reason, even the developers find it easy going which keeps them happy and relaxed.
// It is pertinent for real - time collaborative apps.
//-----------------------------------------------------------------------------------------------------------------------
// Q. What is difference between promises and async-await in Node.js?
// 1. Promises

// A promise is used to handle the asynchronous result of an operation.
//JavaScript is designed to not wait for an asynchronous block of code to completely execute before other synchronous parts of the code can run.
//With Promises, we can defer the execution of a code block until an async request is completed.
//This way, other operations can keep running without interruption.

// States of Promises:

// Pending: Initial State, before the Promise succeeds or fails.
// Resolved: Completed Promise
// Rejected: Failed Promise, throw an error
// Example:

// function logFetch(url) {
//   return fetch(url)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => {
//       console.error('fetch failed', err);
//     });
// }

// 2. Async-Await

// Await is basically syntactic sugar for Promises.
//It makes asynchronous code look more like synchronous / procedural code, which is easier for humans to understand.
// Putting the keyword async before a function tells the function to return a Promise.
//If the code returns something that is not a Promise, then JavaScript automatically wraps it into a resolved promise with that value.
//The await keyword simply makes JavaScript wait until that Promise settles and then returns its result.

// Example:

// async function logFetch(url) {
//   try {
//     const response = await fetch(url);
//     console.log(response);
//   }
//   catch (err) {
//     console.log('fetch failed', err);
//   }
// }
//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
