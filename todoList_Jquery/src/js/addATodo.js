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
    $(document).on("submit", "#addATodoForm", function (e) {
        e.preventDefault();
        let all_task = [];
        if ($("#addATodoForm").valid()) {
            let task_information = { todotitle: getValueOfElement("#todoTitle"), date: getValueOfElement("#date"), task_description: getValueOfElement("#taskDescription"), taskStatus: getValueOfElement("#inputState") };
            
            if (localStorageGetItem(allTask_key) == null) {
                all_task.push(task_information);
                localStorageSetItem(allTask_key, all_task);
                alert('todo is submitted');
                $("#addATodoForm")[0].reset();
            }
            else {

                let previous_data = localStorageGetItem(allTask_key);
                const current_task = previous_data.find(item => item.date === getValueOfElement("#date") && item.todotitle === getValueOfElement("#todoTitle"));
                if (current_task == undefined) {
                    let allTask = previous_data;
                    allTask.push(task_information);
                    localStorageSetItem(allTask_key, allTask);
                    alert('todo is submitted');
                    $("#addATodoForm")[0].reset();

                }
                else {
                    alert("task already added");
                }
            }
        }
    })
    $("#backBtn").click(function (e) {
        e.preventDefault();
        window.location.assign("./dashboard.html")
    })

})