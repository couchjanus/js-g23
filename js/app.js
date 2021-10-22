// aplication app.js
'use strict';

// let obj = {
//     name: 'Mary',
//     age: 18,
//     'last name': 'Bond'
// };

// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj['last name']);

// var title = "Functions result: ";
// function myDiv(a, b=2){
//     if (b!=0){
//         return title + a/b;
//     }
    
//     return title + "Error";
// }

// console.log(myDiv(7, 3));

// API

// console.log(window);

// console.log(window.document.title);

// console.log(window.document.body);
// console.log(window.document.head);
// console.log(window.document.html);
//console.log(document.URL);

// console.log(document.doctype);

// console.log(document.body.tagName);

// console.log(document.all);

// console.log(document.body.childNodes);
// console.log(document.body.style);
// document.body.style.color = 'red';
// console.log(document.body.style.color);

// document.body.style.backgroundColor = 'yellow';

// console.log(document.body.style.cssText);

// // cssFloat

// document.body.innerHTML = '<h1>Hello Javascript</h1>';

// console.log(h11);

// h11.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt perferendis dolorum voluptatem aperiam!"

document.getElementById('lor').innerHTML = "<h3>Hello Lorem</h3>"
console.log(document.getElementsByClassName('lor'));
document.getElementsByClassName('lor')[0].style.color = "blue"
document.getElementsByClassName('lor')[0].innerHTML = "<h3>Hello Class Name</h3>"

document.getElementsByTagName('h3')[0].style.fontSize="4em";

console.log(document.querySelectorAll('h3'));

document.querySelectorAll('h3')[1].style.fontSize="5em";


document.querySelectorAll('.p1')[0].style.fontSize="2em";

document.querySelector('.p1').style.color="red";

function change1(){
    console.log("click");
    let p1 = document.querySelector('.p1');
    p1.style.backgroundColor="yellow";
    p1.style.color="red";
}

function change2(){
    console.log("click");
    let p1 = document.querySelector('.p1');
    p1.style.color="yellow";
    p1.style.backgroundColor="red";
}