let productsGrid = document.getElementById("products-grid");
let productsArray = [];


//I like fetch
async function fetchDatabase(){

    let url="https://my-json-server.typicode.com/Cosmos255/Ceva-cu-jquery/products";

    try{
        
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("couldnt fetch data");
        }

        const data = await response.json()
        console.log(data);
        productsGrid.innerHTML = null;
        data.forEach(p =>{
            productsArray.push(p);
            let pElem = document.createElement('div');
            pElem.classList.add('product');
            pElem.innerHTML = `
                                <h2 class="product-name">${p.name}</h2>
                                <img src="${p.photo_url}"class="products-img"></img>
                                <p class="product-price"><b>Price: </b>${p.price}</p>
                                <p class="product-description"><b>Description: </b>${p.description}</p>
                                <button class="add_to_cart" onclick="addProductToCart(${p.id})">Add</button>`;
                    productsGrid.append(pElem);
        });



    }
    catch(error){
        console.error(error);
        fetchDatabase();
    }
}

fetchDatabase();


let cartProd = document.getElementById("cart-products");


let cart = [];

function openCart(){
    cartProd.classList.toggle('hide');
}



function addProductToCart(id){
    let product = productsArray.find(function(p){
        return p.id == id;
    })
    cart.push(product);
    drawCart();
}

function drawCart(){
    if(cart.length === 0) return cartProd.innerHTML = "Cart is empty";
    cartProd.innerHTML = null;
    cart.forEach(function(p){
        cartProd.innerHTML +=`
                <p><img src="${p.photo_url}"><b>${p.name}</b> |<p> ${p.price} €</p>
                <hr>
        `;
    });
}



