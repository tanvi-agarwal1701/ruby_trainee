const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);
const current_index = urlParams.get('p_indexed');
function renderData() {
    let all_task = localStorageGetItem(allTask_key);
    let newData = all_task.filter((value, index) => index == current_index);
    $("#addATodoForm").html(' ');
    newData.map((value, index) => {
        let currentStatus = value.taskStatus;
        let stringHTML = allTaskValues.map(function (element, index) {
            selectedOption = currentStatus == element ? "selected" : "";
            return `<option ${selectedOption} value='${element}'>${element}</option>`;
        })
        return ($("#addATodoForm").append(
            `<div class="form-group m-3">
        <input type="text" class="form-control" id="todoTitle" placeholder="Todo Title" name="TodoTitle" value="${value.todotitle}"      />
    </div>
    <div class="form-group m-3">
        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="date" value="${value.date}" readonly/>
    </div>
    <div class="form-group m-3">
        <textarea rows="6" class="form-control" id="taskDescription" placeholder="Task Description"
            name="task_description">${value.task_description}</textarea>
    </div>
    <div class="form-group m-3" style="display:flex">
        <div>
            <label class="form-check-label" for="examplestatusOfTask">
                <h6>Task Status:</h6>
            </label>
        </div>
        <div style="margin-left: 50px;">
            <select id="inputState" class="form-control">${stringHTML}</select>

        </div>
    </div>
    <div class="buttons d-flex" style="justify-content: center">
        <button type="submit" class="btn btn-success m-3 subBtn" style="width: 90%" id="submitBtn">
            Submit
        </button>
    </div>
    <div class="buttons d-flex" style="justify-content: center">
        <button type="button" class="btn btn-danger m-3 " id="backBtn">
            Back
        </button>
    </div>`

        )
        );

    })
}
$(document).ready(function () {
    $("#addATodoForm").validate({
        rules: {
            TodoTitle: {
                required: true,
                minlength: 3
            },
            date: {
                required: true,
            },
            task_description: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            TodoTitle: {
                required: "ToDo title is required",
                minlength: "mimimum length should be 3"

            },
            date: {
                required: "date is required"
            },
            task_description: {
                required: "task description is required",
                minlength: "minimum length should be 5"
            },
        }
    })
    renderData();
    $(document).on("submit", "#addATodoForm", function (e) {
        e.preventDefault();
        let all_task = localStorageGetItem(allTask_key);
        if ($("#addATodoForm").valid()) {
            const newData = all_task.filter((value, index) => index != current_index);

            let edit = newData.find((value, index) => value.todotitle == getValueOfElement("#todoTitle") && value.date == getValueOfElement("#date"));
            if (edit == undefined) {
                let task_information = { todotitle: getValueOfElement("#todoTitle"), date: getValueOfElement("#date"), task_description: getValueOfElement("#taskDescription"), taskStatus: getValueOfElement("#inputState") };
                newData.push(task_information);
                localStorageSetItem(allTask_key, newData);
                alert("todo is edited");
                window.location.assign("./watchAllTodo.html")

            }
            else {
                alert("change the todo name");
            }
        }

    })
    $("#backBtn").click(function (e) {
        e.preventDefault();
        window.location.assign("./watchAllTodo.html")
    })
})
