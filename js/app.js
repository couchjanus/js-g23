// aplication app.js
'use strict';


function rating(stars){
    let result = '';

    for (let i = 0; i < stars; i++){
        result +='<li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>';
    }

    for (let i = 0; i < 5 - stars; i++){
        result += '<li class="m-0 list-inline-item"><i class="far fa-star small text-muted"></i></li>;'
    }

    return result;
}
// console.log(rating(3));

let productTemplate = (product) =>`<!-- product -->
    <div class="pb-5 product-wrapper">
        <article class="mb-4 product">
            <span class="badge rounded-0 bg-${product.badge.type}">${product.badge.title}</span>
            <a href="detail.html">
                <img src="${product.image}" class="img-fluid" alt="${product.description}" />
            </a>
            <div class="shadow btn-block d-inline-block" data-id="${product.id}">
                    <span class="product-btn wish-this" href=""><i class="fas fa-heart"></i></span>
                    <span class="product-btn detail"><i class="fas fa-expand"></i></span>
                    <span class="product-btn add-to-cart"><i class="fas fa-dolly-flatbed"></i></span>
            </div>
            <h6 class="text-center"><a class="reset-anchor" href="detail.html">${product.name}</a></h6>
            <p class="text-center text-muted font-weight-bold">$${product.price}</p>
        </article>
    </div><!-- /product -->`;
// 
let modalTemplate = (product) =>`<!--  Modal -->

    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="border-0 modal-content rounded-0">
            <div class="p-0 overflow-hidden shadow modal-body">
                <!-- row -->
                <div class="row align-items-stretch">

                    <div class="col-lg-6 p-lg-0">
                        <div class="bg-center bg-cover product-view d-block h-100" style="background: url(${product.image}">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <a href="#" title="Close" class="p-4 border-0 close modal-close"><i class="fas fa-times"></i></a>
                        <div class="p-5 my-md-4">
                            <ul class="mb-2 list-inline">
                               ${rating(product.stars)}
                            </ul>

                            <h2 class="h5 text-uppercase">${product.name}</h2>
                            <p class="text-muted">$${product.price}</p>
                            <p class="mb-4 text-small">${product.description}</p>

                            <ul class="mb-4 list-inline">
                                <li class="list-inline-item me-3"><strong>Quantity</strong></li>
                                <li class="list-inline-item">
                                    <div class="p-1 border d-flex align-items-center justify-content-between">
                                        <div class="py-0 quantity">
                                            <button class="p-0 dec-btn" onclick="decrease(this)"><i class="fas fa-caret-left"></i></button>
                                            <input class="p-0 border-0 form-control shadow-0 quantity-result" type="text" value="1">
                                            <button class="p-0 inc-btn" onclick="increase(this)"><i class="fas fa-caret-right"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-inline-item"><a class="btn btn-primary" href="cart.html">
                                    Add to cart</a></li>
                            </ul>
                            <a class="p-0 reset-anchor" href="#">
                                <i class="far fa-heart me-2"></i>Add to wish list
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>`;

// 
let modalWindow = document.querySelector('.modal-window');

function populateProducts(){
    let result = '';
    products.forEach(product=>{
        result += productTemplate(product);
    });
    return result;
}

function categoryTemplate(product){
    return `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${product.category.name}</div>
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>`;
}

function populateCategories(){
    let result = '';
    products.forEach(product=>{
        result += categoryTemplate(product);
    });
    return result;
}

function toggleModal(param, product={}){
    // console.log((document.querySelector('.modal-window').innerHTML==''))
   if(document.querySelector('.modal-window').innerHTML==''){
        document.querySelector('.modal-window').innerHTML =  modalTemplate(product);
   }else{
    document.querySelector('.modal-window').innerHTML = '';
   }
    modalWindow.style.display = param;
}

let raite = 0


let productsWrapper = document.querySelector('.products-wrapper');

let listGroupNumbered = document.querySelector('.list-group-numbered');

function getStorageItem(key){
    return JSON.parse(localStorage.getItem(key));
}
function setStorageItem(key, item){
    localStorage.setItem(key, JSON.stringify(item));
}
function initStorage(key){
    let basket = []
    try{  
        basket = localStorage.getItem(key) ? 
        getStorageItem(key)
        :setStorageItem(key, []);
    }catch(err){
        if(err==QUOTA_EXCEEDED_ERR){
            console.log("Local Storage Limited is exceeded");
        }
    }
    return basket;
}

function saveCart(cart){
    setStorageItem('basket', cart);
}

// console.log(initStorage('basket'));
let cart = initStorage('basket');


function addProductToCart(product, amount = 1){
    let inCart = cart.some(element => element.id === product.id);
    if (inCart){
        cart.forEach(item=>{
            if(item.id === product.id){
                item.amount += amount;
            }
        })
    }else{
        let cartItem = {...product, amount: amount};
        cart = [...cart, cartItem];
    }
    
    saveCart(cart);
}

function renderCartItem(item){
    let product = products.find(product => product.id == item.id);
    return `<tr>
    <th class="p-3  border-0" scope="row">
      <div class="d-flex align-items-center"><a class="reset-anchor d-block" href="detail.html"><img src="${product.image}" alt="${product.name}" width="70"></a>
        <div class="ms-3"><strong class="h6"><a class="reset-anchor" href="detail.html">${product.name}</a></strong></div>
      </div>
    </th>
    <td class="p-3 align-middle border-0">
      <p class="mb-0 small">$${product.price}</p>
    </td>
    <td class="p-3 align-middle border-0">
      <div class="border d-inline-block px-2">
        <div class="quantity">
          <button class="dec-btn p-0" onclick="decrease(this)"><i class="fas fa-caret-left"></i></button>
          <input class="form-control border-0 shadow-0 p-0 quantity-result" type="text" value="${item.amount}">
          <button class="inc-btn p-0" onclick="increase(this)"><i class="fas fa-caret-right"></i></button>
        </div>
      </div>
    </td>
    <td class="p-3 align-middle border-0">
      <p class="mb-0 small">$${product.price*item.amount}</p>
    </td>
    <td class="p-3 align-middle border-0"><a class="reset-anchor" href="#"><i class="fas fa-trash-alt small text-muted"></i></a></td>
  </tr>`;
}
function populateShoppingCart(cart){
    let res = '';
    cart.forEach(item => res+=renderCartItem(item));
    return res;
}
document.addEventListener('DOMContentLoaded', () => {
    if(productsWrapper){
        productsWrapper.innerHTML = populateProducts();
    }
    if (listGroupNumbered){
        listGroupNumbered.innerHTML = populateCategories()
    }

    
    let wishThisButtons = document.querySelectorAll('.wish-this');
   

    wishThisButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target)
            raite++

            console.log(raite)
        })
    })

    // add-to-cart
    let addToCartButtons = document.querySelectorAll('.add-to-cart');

    let total = 0;
    let qty = 0;
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let productId = event.target.closest('.btn-block').dataset.id;
            
            addProductToCart({id: productId});
            
            // let product = products.find(product => product.id == productId);
        })
    })

    // detail
    let detailButtons = document.querySelectorAll('.detail');

    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let productId = event.target.closest('.btn-block').dataset.id;
            let product = products.find(product => product.id == productId);
            toggleModal('block', product);
            modalWindow.querySelector('.close')
            .addEventListener('click', (event) => {
                event.preventDefault();
                toggleModal('none');
            })
        })
    });

    const shoppingCart = document.querySelector('.shopping-cart');

    if(shoppingCart){
        shoppingCart.innerHTML = populateShoppingCart(cart);
    }


});