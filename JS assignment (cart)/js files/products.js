let cartData = [];

const badgeData = document.getElementById("badge");


function badge() {
    if (localStorage.getItem("cartProducts") == null) {
        badgeData.style.display = "none";


    }
    else {
        let all_cart = localStorage.getItem("cartProducts");
        let allcart = JSON.parse(all_cart);
        badgeData.innerHTML = allcart.length;
    }

}
badge();

window.addEventListener("load", () => {
    let products = document.querySelector(".products");
    var loader = document.getElementById("loader");

    badge();

    const getData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();
            localStorage.setItem("allProducts", JSON.stringify(result.products));
            if (result.products.length > 0) {
                loader.style.display = "none";
            }
            result.products.map((product, index) => {
                return products.innerHTML += `<div class="product">
             <a> <img src="${product.thumbnail
                    }" alt="" onclick=currentItem('${product.id}') class="product-img"></a>
              <div class="product-content">
              <a> <h2 class="product-title"onclick=currentItem('${product.id}')>${product.title.length > 18 ? product.title.substring(0, 80).concat("...more") : product.title
                    }</h2></a>
              <h4 class="product-category">${product.category}</h4>
              <p class="product-description">${product.description.length > 20
                        ? product.description.substring(0, 80).concat("...more")
                        : product.description
                    }</p>
              <div class="product-price-container">
                  <h3 class="product-price">$${product.price}</h3>
                 <a href="#!" data-productId="" onclick=addCart(${product.id}) class="add-to-cart" ><ion-icon name="cart-outline"></ion-icon></a></div>
              </div>
             </div>`
            })
        } catch (error) {
           
        }
    }
    getData();
})
const currentItem = (id) => {

    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((singleProductData) => {
            let url = './singleProducts.html?p_id=' + singleProductData.id
            window.location.assign(url);
        });

}
const addCart = (product_id) => {
    let cart = localStorage.getItem("allProducts");
    let data = JSON.parse(cart);
    const new_item = data.find(item => item.id === product_id);
   
    if (localStorage.getItem("cartProducts") == null) {
        new_item.quantity = 1;
        cartData.push(new_item);
        localStorage.setItem("cartProducts", JSON.stringify(cartData));
    }
    else {
      
        let all_cart = localStorage.getItem("cartProducts");
        let allcart = JSON.parse(all_cart);
        const new_item = allcart.find(item => item.id === product_id);
       
        if (new_item === undefined) {
            const new_data = data.find(item => item.id === product_id);
            new_data.quantity = 1;
            allcart.push(new_data);
             localStorage.setItem("cartProducts", JSON.stringify(allcart));
            badge();

        }
        else {
            alert("item already added");
        }
        badge();
    }


}

let allCart = document.getElementById("allcart");
allCart.addEventListener("click", function (event) {
    event.preventDefault();
    if (localStorage.getItem("cartProducts") == null) {
        window.location.assign('./emptyWishList.html')
    }
    else {
        window.location.assign('./addCart.html');
    }

})
let profile=document.getElementById('profile');
profile.addEventListener('click',profileUser)
function profileUser(e)
{
    e.preventDefault();
    window.location.assign('profile.html');
}
