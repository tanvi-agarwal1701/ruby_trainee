var loader = document.getElementById("loader");

const keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);
const current_id = urlParams.get('p_id');
let currentProduct = getMethod("products/" + current_id);
const singleProduct = async () => {
    let current_product = await currentProduct;
    if (current_product.title) {
        loader.style.display = "none";
    }
    function setInformation(id, information) {
        element = document.getElementById(id);
        element.innerHTML = information;
    }
    setInformation("brand", current_product.brand);
    setInformation("category", current_product.category);
    setInformation("description", current_product.description);
    setInformation("discountPercentage", current_product.discountPercentage);
    setInformation("price", current_product.price);
    setInformation("rating", current_product.rating);
    setInformation("title", current_product.title);
    const image = document.getElementById('image');
    image.setAttribute('src', current_product.thumbnail);


}
singleProduct();
let back = document.getElementById('back');
back.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.assign('./productListing.html');


})