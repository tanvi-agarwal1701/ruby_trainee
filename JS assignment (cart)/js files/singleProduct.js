
var loader = document.getElementById("loader");

const keyValues = window.location.search;

const urlParams = new URLSearchParams(keyValues);
const param_productId = urlParams.get('p_id');

fetch('https://dummyjson.com/products/' + param_productId)
    .then(res => res.json())
    .then((data) => {
        
        if (data.title) {
            loader.style.display = "none";
        }
        function setInformation(id, information) {
            element = document.getElementById(id);
            element.innerHTML = information;
        }
        setInformation("brand", data.brand);
        setInformation("category", data.category);
        setInformation("description", data.description);
        setInformation("discountPercentage", data.discountPercentage);
        setInformation("price", data.price);
        setInformation("rating", data.rating);
        setInformation("title", data.title);
        const image = document.getElementById('image');
        image.setAttribute('src', data.thumbnail);


    });
let back = document.getElementById('back');
back.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.assign('./product.html');
})