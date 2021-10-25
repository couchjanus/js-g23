// aplication app.js
'use strict';
// 

// let list = [1,2,3,4,5]
// console.log(typeof list)
// console.log(list[0])
// console.log(list[4])
// console.log(list.length)
// list[6] = 66
// console.log(list.length)
// list[5] = list[3]
// console.log(list[5])

// console.log(list[list.length-1])

// list.length = 4
// console.log(list[list.length-1])
// console.log(list[5])
// let i = list.length;
// while (i > 0){
//     console.log(list[i - 1])
//     i -= 1

// }

// for (let j=0; j<list.length; j++){
//     // if(list[j]%2){
//     //     console.log(list[j])
//     // }
//     //  if(j == 2){
//     //     continue
//     // }
//     if(j > 3){
//         break
//     }
//     console.log(list[j])
// }
// callback
// list.forEach(element => {
//     console.log(element)
// });

// list.forEach(function(element) {
//     console.log(element)
// });

let modalWindow = document.querySelector('.modal-window');

function toggleModal(param){
    modalWindow.style.display = param;
}

let raite = 0

document.addEventListener('DOMContentLoaded', () => {

    //  wish-this
    let wishThisButtons = document.querySelectorAll('.wish-this');
    // console.log(wishThisButtons);

    // wishThisButtons.forEach(function(element) {
    //     console.log(element)
    // });

    wishThisButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target)
            raite++

            console.log(raite)
        })
    })

    // add-to-cart
    let addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target)
        })
    })

    // detail
    let detailButtons = document.querySelectorAll('.detail');

    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target)
            toggleModal('block');
            modalWindow.querySelector('.close')
            .addEventListener('click', () => toggleModal('none'))
        })
    });


});