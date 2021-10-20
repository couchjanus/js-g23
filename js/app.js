// aplication app.js
'use strict';
// alert('Hello world')

// let x, y;
// const y = 5
// var z
// x = 'hello'
// // y = 2
// z = x * y
// x = true

// let o = '-';
let o = prompt('Enter operation:', '+');
// x = 21;
// y = 27;

// x = parseFloat(prompt('Enter x:', '0'));
// y = parseFloat(prompt('Enter y:', '0'));

let x = prompt('Enter x:', '0');
let y = prompt('Enter y:', '0');

if (isNaN(x) || isNaN(y)){
    alert('Invalid enter')
}
else{

    x = parseFloat(x);
    y = parseFloat(y);

    // NaN
    if (o == '+'){
        alert(x + y)
    }
    else if(o == '-'){
        alert(x - y)
    }
    else if(o == '*'){
        alert(x * y)
    }
    else{
        alert('invalid operation')
    }

}