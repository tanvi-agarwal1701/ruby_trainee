
function getValueOfElement(element) {
    let value = $(element).val();
    return value;
}
function localStorageSetItem(key, value) {
    let setData = localStorage.setItem(key, JSON.stringify(value));
    return setData;
}
function localStorageGetItem(key) {
    let getData = JSON.parse(localStorage.getItem(key));
    return getData;
}