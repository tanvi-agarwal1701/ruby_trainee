let value_storage = localStorageGetItem("cartProducts");
let badgeData = document.getElementById("badge");

function badge() {
    let badgeData = document.getElementById("badge");
    let cartCount=localStorageGetItem("cartProducts");
   badgeData.innerHTML=  cartCount==null ? 0 :cartCount.length;
}
let cartData = [];
function currentItem(id) {
    let currentProduct = getMethod("products/" + `${id}`);

    const value_currentProduct = async () => {
        const current_value = await currentProduct;
        let url = './singleProductDetail.html?p_id=' + current_value.id
        window.location.assign(url);
    }
    value_currentProduct();
}

function addToCart(id) {

    let data = localStorageGetItem("allProducts");
    const product_item = data.find(item => item.id === id);
    let cartProduct = localStorageGetItem("cartProducts");
    const cart_item = cartProduct != null && cartProduct.find(item => item.id === id);
    if (cart_item != null && id == cart_item.id) {
        alert("product already in a cart");
        return false;
    }

    product_item.quantity = 1;
    if (cartProduct == null) {
        cartData.push(product_item);
        localStorageSetItem("cartProducts", cartData);
    } else {
        let allCartData = cartProduct;
        allCartData.push(product_item);
        localStorageSetItem("cartProducts", allCartData);
    }
    var getcartCount = badgeData.innerText;
    badgeData.innerHTML = Number(getcartCount) == null ? 1 : Number(getcartCount) + 1;


}
window.addEventListener("load", () => {
    let products = document.querySelector(".products");
    var loader = document.getElementById("loader");
    const product_listing = getMethod("products");
    const getData = async () => {
        const productListing = await product_listing;
        localStorageSetItem('allProducts', productListing.products);
        if (productListing.products.length > 0) {
            loader.style.display = "none";

        }
        productListing.products.map((product, index) => {
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
           <a href="#!" data-productId="" myid = '${product.id}' onclick=addToCart(${product.id}) class="add-to-cart" ><ion-icon name="cart-outline"></ion-icon></a></div>
        </div>
       </div>`
        });
    };
    getData();
    badge();


});
let profile = document.getElementById('profile');
profile.addEventListener('click', userProfile)
function userProfile(e) {
    e.preventDefault();
    window.location.assign('./userProfile.html');
}
let allCart = document.getElementById("allcart");
allCart.addEventListener("click", function (event) {
    event.preventDefault();
    if (localStorageGetItem("cartProducts") == null) {
        window.location.assign('./emptyWishlist.html');
    }
    else {
        window.location.assign('./cartItems.html');
    }

})



