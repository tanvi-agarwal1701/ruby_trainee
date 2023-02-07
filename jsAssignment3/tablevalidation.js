const dataTable = document.getElementById("dataTable");
const dataBody = document.getElementById("dataBody");
const addBtn = document.getElementById("addBtn");
const dataForm = document.getElementById("dataForm");
const formDiv = document.getElementById("formDiv");
const saveBtn = document.getElementById("saveBtn");
const productId_input = document.getElementById("productId");
const productName_input = document.getElementById("productName");
const productPrice_input = document.getElementById("productPrice");
const discountPrice_input = document.getElementById("discountPrice");
const inputProductName = document.querySelector("#productName");
const inputProductPrice = document.querySelector("#productPrice");
const inputDiscountPrice = document.querySelector("#discountPrice");
inputProductName.addEventListener("input", checkProductName);
inputProductPrice.addEventListener("input", checkProductPrice);
inputDiscountPrice.addEventListener("input", checkDiscountPrice);
let data = [];
let updateItem = false;
addBtn.addEventListener("click", function () {
    dataForm.style.display = "block";
    dataForm.reset();
    if (!updateItem) {
        document.getElementById("productId").value = uniqueID();
    }
});
saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const productId = productId_input.value;
    const productName = productName_input.value;
    const productPrice = productPrice_input.value;
    const discountPrice = discountPrice_input.value;
    if (productName == "" || productPrice == "" || discountPrice == "") {
        if (productName == "") {
            seterror("error_productName", "Product name is required");
        }
        if (productPrice == "") {
            seterror("error_productPrice", "Product price is required");
        }
        if (discountPrice == "") {
            seterror("error_discountPrice", "Discount price is required");
        }
    } else {
        if (!updateItem) {
            const found = productNameExists(productName);

            if (!found) {
                if (Number(productPrice) >= Number(discountPrice)) {
                    data.push({ productId, productName, productPrice, discountPrice });
                    
                    renderData();
                    dataForm.style.display = "none";
                    dataForm.reset();
                } else {
                    seterror(
                        "error_discountPrice",
                        "Discount price cant be more than Product price"
                    );
                }
            } else {
                seterror("error_productName", "Product Name is already added");
            }
        } else {
            const found = productNameExists(productName, productId);

            if (!found) {
                if (Number(productPrice) >= Number(discountPrice)) {
                    data[Number(updateItem)].productId = productId;
                    data[Number(updateItem)].productName = productName;
                    data[Number(updateItem)].productPrice = productPrice;
                    data[Number(updateItem)].discountPrice = discountPrice;

                    renderData();
                    dataForm.style.display = "none";
                    dataForm.reset();
                    updateItem = false;
                } else {
                    seterror(
                        "error_discountPrice",
                        "Discount price cant be more than Product price"
                    );
                }
            } else {
                seterror("error_productName", "Product Name already exists");
            }
        }
    }
});
function renderData() {
    dataBody.innerHTML = "";
    data.map((value, index) => {
        return (dataBody.innerHTML += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${value.productId}</td>
      <td>${value.productName}</td>
      <td>${value.productPrice}</td>
      <td>${value.discountPrice}</td>
      <td>
        <button type="button" onclick=editItem(${index}) class="btn " style="background-color:rgb(16, 126, 153); 
        color:white;">EDIT</button><span>
            <button type="button" onclick=deleteItem(${index}) class="btn" " style="background-color:rgb(16, 126, 153); 
            color:white;">Delete</button></span></td>
      
    </tr>`);
    });
}
const editItem = (productId) => {
    dataForm.style.display = "block";
    const newData = data.find((value, index) => index === productId);
    productId_input.value = newData.productId;
    productName_input.value = newData.productName;
    productPrice_input.value = newData.productPrice;
    discountPrice_input.value = newData.discountPrice;
    updateItem = String(productId);
};
const deleteItem = (productId) => {
    let newData = data.filter((value, index) => index !== productId);

    data = newData;
    renderData();
};
function uniqueID() {
    return Math.floor(Math.random() * Date.now());
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.innerHTML = error;
}
function checkProductName() {
    let productName = document.getElementById("productName").value;

    if (productName == "") {
        seterror("error_productName", "Product name is required");
    } else {
        seterror("error_productName", "");
    }
}
function checkProductPrice() {
    let productPrice = document.getElementById("productPrice").value;
    if (productPrice == "") {
        seterror("error_productPrice", "Product price is required");
    } else {
        seterror("error_productPrice", "");
    }
}
function checkDiscountPrice() {
    let discountPrice = document.getElementById("discountPrice").value;
    if (discountPrice == "") {
        seterror("error_discountPrice", "Discount price is required");
    } else {
        seterror("error_discountPrice", "");
    }
}
function productNameExists(productName, productId = null) {

    let object = data.filter((val) => {
        return val.productName === productName && val.productId !== productId;
    })

    return object.length > 0;

}
