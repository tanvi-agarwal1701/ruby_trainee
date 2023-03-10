
$(document).ready(function () {
    renderData();
})
const deleteItem = (taskIndex) => {
    let all_task = localStorageGetItem(allTask_key);
    if (all_task.length > 1) {
        let new_task = all_task.filter((value, index) => index !== taskIndex);
        localStorageSetItem(allTask_key, new_task);
        renderData();
    }
    else {
        let new_task = all_task.filter((value, index) => index !== taskIndex);
        localStorageSetItem(allTask_key, new_task);
        window.location.assign('./emptytodos.html')
    }
};
function renderData() {
    let all_task = localStorageGetItem(allTask_key);
    if (all_task) {
        $("#dataBody").html(' ');
        all_task.map((value, index) => {
            let currentStatus = value.taskStatus;
            let color;
            if (currentStatus == 'Pending') {
                color = 'Red';
            }
            else if (currentStatus == 'Completed') {
                color = 'blue';
            }
            else if (currentStatus == 'Delivered') {
                color = "green";
            }
            else {
                color = 'orange'
            }

            let stringHTML = allTaskValues.map(function (element, index) {
                selectedOption = currentStatus == element ? "selected" : "";
                return `<option id="input"${selectedOption} value='${element}'>${element}</option>`;
            })

            return ($("#dataBody").append(
                `<tr >
        
    <th scope="row" style="color:${color}">${index + 1}</th>
    <td style="color:${color}">${value.todotitle}</td>
    <td style="color:${color}">${value.date}</td>
    <td><select id="${index}" class="form-control" onchange=change(${index})>${stringHTML}</select></td>
    <td style="color:${color}">${value.task_description}</td>
    <td>
      <button type="button" onclick=editItem(${index}) class="btn " style="color:${color}">EDIT</button><span>
          <button type="button" onclick=deleteItem(${index}) class="btn" style="color:${color}">Delete</button></span></td>
    
     </tr>`

            )
            );


        })
    }
    else {
        window.location.assign('./emptytodos.html')
    }
}

const editItem = (taskIndex) => {

    let url = './editTodo.html?p_indexed=' + taskIndex;
    window.location.assign(url);
}
$("#backBtn").click(function (e) {
    e.preventDefault();
    window.location.assign("./dashboard.html")
})
const change = (taskIndex) => {
    let change = getValueOfElement("#" + taskIndex);
    let all_task = localStorageGetItem(allTask_key);
    let new_task;
    new_task = all_task.map(function (value, index, array) {
        if (index == taskIndex) {

            value.taskStatus = change;

            localStorageSetItem(allTask_key, all_task);
            renderData();

        }
    });
}



