let  carts = document.querySelectorAll('.add-cart');

let manga = [
    {

    name: "Volume 0",
    tag: "volume0",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 1",
    tag: "volume1",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 2",
    tag: "volume2",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 3",
    tag: "volume3",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 4",
    tag: "volume4",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 5",
    tag: "volume5",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 6",
    tag: "volume6",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 7",
    tag: "volume7",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 8",
    tag: "volume8",
    price: 20,
    inStore: 0
},
    {

    name: "Volume 9",
    tag: "volume9",
    price: 20,
    inStore: 0
}
    
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(manga[i]);
    })
}

function cartNumbers(manga){
    let mangaNumbers = localStorage.getItem("cartNumbers");

    mangaNumbers = parseInt(mangaNumbers)
    
    if(mangaNumbers){
        localStorage.setItem("cartNumbers", mangaNumbers + 1);
        document.querySelector(".store span").textContent = mangaNumbers + 1;
    }
    else {
        localStorage.setItem("cartNumbers" , 1 );
        document.querySelector(".store span").textContent = 1;
    }

    setItem(manga)

}

function setItem(manga){
    console.log("Inside of Set Items")
    console.log("Your Manga" , manga, "is ready for delivery")
    manga.inStore = 1


    let mangaItems = {
        [manga.tag]: manga
    }

    manga.inStore = 1
    localStorage.setItem("mangasIncart", JSON.stringify (mangaItems))
}

function onLoadCartNumbers(){
    let mangaNumbers=localStorage.getItem('cartNumbers');
    if (mangaNumbers) {
        document.querySelector('.cart span').textContent=mangaNumbers;
    }
}
onLoadCartNumbers();
