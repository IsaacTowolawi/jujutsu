let  carts = document.querySelectorAll('.add-cart');

let products = [
    {

    name: "Volume 0",
    tag: "volume0",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 1",
    tag: "volume1",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 2",
    tag: "volume2",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 3",
    tag: "volume3",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 4",
    tag: "volume4",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 5",
    tag: "volume5",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 6",
    tag: "volume6",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 7",
    tag: "volume7",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 8",
    tag: "volume8",
    price: 20,
    inCart: 0
},
    {

    name: "Volume 9",
    tag: "volume9",
    price: 20,
    inCart: 0
}
    
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers(product){
    console.log(product)
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers)
    
    if(productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".store span").textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem("cartNumbers" , 1 );
        document.querySelector(".store span").textContent = 1;
    }



}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent=productNumbers;
    }
}
onLoadCartNumbers();
