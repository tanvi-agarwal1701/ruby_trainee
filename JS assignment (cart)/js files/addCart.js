let cart = localStorage.getItem("cartProducts");
let Cart = JSON.parse(cart);
let qty = document.getElementById("qty");
render();
total();
const currentItem = (id) => {

    let new_quantity;
    const new_item = Cart.find(item => item.id === id);
    if (new_item) {

        new_quantity = new_item.quantity + 1;
        new_item.quantity = new_quantity;
    }
    localStorage.setItem("cartProducts", JSON.stringify(Cart));
    render();
   
   
}
const currentSubItem = (id) => {
    let new_quantity;
    const new_item = Cart.find(item => item.id === id);
    if (new_item) {

        if (new_item.quantity === 1) {
            alert("You need to click on remove button");
        }
        else {
            new_quantity = new_item.quantity - 1;
            new_item.quantity = new_quantity;
        }
    }
    localStorage.setItem("cartProducts", JSON.stringify(Cart));
    render(); 
    total();
    
   
}
const Remove =(id) =>
{
    let cart = localStorage.getItem("cartProducts");
   let Cart = JSON.parse(cart);
    var data = Cart.filter((obj) => {
                return obj.id !== id;
            })

localStorage.setItem("cartProducts", JSON.stringify(data));

render();
total();


}

function render()
{
    let cart = localStorage.getItem("cartProducts");
let Cart = JSON.parse(cart);    
if(Cart.length==0)
{
    window.location.assign('./emptyWishList.html');
}
else{
    let cartString = "";
    let view = Cart.map(function (object) {
       
        cartString += `            <div class="box">
    <img src="assests/images.jpeg" alt="image">
    
    <div class="content">
        <h3>${object.title}</h3>
        <h4>Price:${object.price}$ <span id="input">Payable amount:$${object.quantity * object.price}</span></h4>
        <p class="unit">Quantity:<input value="${object.quantity}" id="qty" readonly><span><button onclick=currentItem(${object.id})>+</button>
            <button onclick=currentSubItem(${object.id})>-</button></span></p>
        
        <p class="btn-area"onclick=Remove(${object.id})>
           <i class="fa fa-trash"></i>
           <span class="btn2"onclick=Remove(${object.id})>Remove</span>
        </p>
    </div>
</div>`;
    });

    document.getElementById("shopee").innerHTML = cartString;
    total();
   
}  
}
function total()
{
   
    let cart = localStorage.getItem("cartProducts");
let Cart = JSON.parse(cart);
const total = Cart.reduce((prev, cur) => (cur.price * cur.quantity) + prev, 0)

let subTotal =document.getElementById("subTotal");
let Total=document.getElementById("Total");
subTotal.innerHTML=total;
Total.innerHTML=total+21;
}
let back=document.getElementById('backBtn')
back.addEventListener('click',myfun);

function myfun(e)
{
 e.preventDefault()
 window.location.assign('./product.html');
}


