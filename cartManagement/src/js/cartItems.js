
let quantity_item = document.getElementById("quantity");
render();
total();
const currentItem = (id) => {
    let cart = localStorageGetItem("cartProducts");

    const new_item = cart.find(item => item.id === id);
    if (new_item) {


        new_item.quantity = new_item.quantity + 1;
    }
    localStorageSetItem("cartProducts", cart);
    render();


}
const currentSubItem = (id) => {
    let cart = localStorageGetItem("cartProducts");
    const new_item = cart.find(item => item.id === id);
    if (new_item) {

        if (new_item.quantity === 1) {
            alert("You need to click on remove button");
        }
        else {

            new_item.quantity = new_item.quantity - 1;
        }
        localStorageSetItem("cartProducts", cart);
    }

    render();
    total();


}
const Remove = (id) => {

    let cart = localStorageGetItem("cartProducts");
    var data = cart.filter((obj) => {
        return obj.id !== id;
    })

    localStorageSetItem("cartProducts", data);

    render();
    total();


}
function render() {

    let cart = localStorageGetItem("cartProducts");
    if (cart.length == 0) {
        window.location.assign('./emptyWishlist.html');
    }
    else {
        let cartString = "";
        let view = cart.map(function (object) {

            cartString += `<div class="box">
            <img src="../assests/images/images.jpeg" alt="Bag image" />
        
            <div class="content">
                <h3>${object.title}</h3>
                <h4>Price:${object.price}$ <span id="input">Payable amount:$${object.quantity * object.price}</span></h4>
                <p class="unit">
                    Quantity:<input value="${object.quantity}" id="qty" readonly /><span><button onclick="currentItem(${object.id})">+</button> <button onclick="currentSubItem(${object.id})">-</button></span>
                </p>
        
                <p class="btn-area" onclick="Remove(${object.id})">
                    <i class="fa fa-trash"></i>
                    <span class="btn2" onclick="Remove(${object.id})">Remove</span>
                </p>
            </div>
        </div>`;

        });

        document.getElementById("shop_item").innerHTML = cartString;
        total();

    }
}
function total() {
    let cart = localStorageGetItem("cartProducts");

    const total = cart.reduce((previous_price, currentItem) => (currentItem.price * currentItem.quantity) + previous_price, 0)

    let subTotal = document.getElementById("subTotal");
    let Total = document.getElementById("Total");
    subTotal.innerHTML = total;
    Total.innerHTML = total + 21;
}
let back = document.getElementById('backBtn');
back.addEventListener('click', toProductListing);

function toProductListing(e) {
    e.preventDefault()
    window.location.assign('./productListing.html');
}