// aplication app.js
'use strict';
// 

const products = [
    {
        id: 1,
        name: 'Air Pads',
        price: 123,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-1.jpg',
        badge: {
            type: 'danger',
            title: 'Soldout'
        }
    },
    {
        id: 2,
        name: 'Air Bag',
        price: 234,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-2.jpg',
        badge: {
            type: 'none',
            title: ''
        }
    },
    {
        id: 3,
        name: 'T-Shirt',
        price: 222,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-3.jpg',
        badge: {
            type: 'info',
            title: 'New'
        }
    },
    {
        id: 4,
        name: 'An Watch',
        price: 444,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-4.jpg',
        badge: {
            type: 'none',
            title: ''
        }
    },
    {
        id: 5,
        name: 'Red Watch',
        price: 555,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-5.jpg',
        badge: {
            type: 'warning',
            title: 'Action'
        }
    },
    {
        id: 6,
        name: 'Nike SHoes',
        price: 666,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-6.jpg',
        badge: {
            type: 'danger',
            title: 'Soldout'
        }
    },
    {
        id: 7,
        name: 'Air Pads',
        price: 123,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-7.jpg',
        badge: {
            type: 'danger',
            title: 'Soldout'
        }
    },
    {
        id: 8,
        name: 'Air Bag',
        price: 234,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-8.jpg',
        badge: {
            type: 'none',
            title: ''
        }
    },
    {
        id: 9,
        name: 'T-Shirt',
        price: 222,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-9.jpg',
        badge: {
            type: 'info',
            title: 'New'
        }
    },
    {
        id: 10,
        name: 'An Watch',
        price: 444,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-10.jpg',
        badge: {
            type: 'none',
            title: ''
        }
    },
    {
        id: 11,
        name: 'Red Watch',
        price: 555,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-11.jpg',
        badge: {
            type: 'warning',
            title: 'Action'
        }
    },
    {
        id: 12,
        name: 'Nike SHoes',
        price: 666,
        description: 'Vero, animi aliquam! Eaque, impedit laboriosam a, facere dolor reprehenderit esse possimus sapiente illum dolorum',
        image: 'images/product-12.jpg',
        badge: {
            type: 'danger',
            title: 'Soldout'
        }
    },
];

let productTemplate = (product) =>`<!-- product -->
    <div class="pb-5 product-wrapper">
        <article class="mb-4 product">
            <span class="badge rounded-0 bg-${product.badge.type}">${product.badge.title}</span>
            <a href="detail.html">
                <img src="${product.image}" class="img-fluid" alt="${product.description}" />
            </a>
            <div class="shadow btn-block d-inline-block">
                    <span class="product-btn wish-this" href=""><i class="fas fa-heart"></i></span>
                    <span class="product-btn detail" data-id="${product.id}"><i class="fas fa-expand"></i></span>
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
                        <div class="bg-center bg-cover product-view d-block h-100" style="background: url(images/product-${product.id}.jpg)">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <a href="#" title="Close" class="p-4 border-0 close modal-close"><i class="fas fa-times"></i></a>
                        <div class="p-5 my-md-4">
                            <ul class="mb-2 list-inline">
                                <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                                <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                                <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                                <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                                <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                            </ul>

                            <h2 class="h5 text-uppercase">Kui Ye Chen’s AirPods</h2>
                            <p class="text-muted">$250</p>
                            <p class="mb-4 text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper
                                leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur
                                ridiculus mus. Vestibulum ultricies aliquam convallis.</p>

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

document.addEventListener('DOMContentLoaded', () => {

    productsWrapper.innerHTML = populateProducts();

    // productsWrapper.innerHTML = "<h2>Product list</h2>";
    //  wish-this
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

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target)
        })
    })

    // detail
    let detailButtons = document.querySelectorAll('.detail');

    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // console.log(typeof event.target.getAttribute('data-id'))

            let productId = event.target.getAttribute('data-id')
            
            // console.log(productId.getAttribute('data-id'))
            let product = {
                id: productId,
            }
            toggleModal('block', product);
            modalWindow.querySelector('.close')
            .addEventListener('click', () => toggleModal('none'))
        })
    });


});