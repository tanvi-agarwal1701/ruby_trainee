$(document).ready(function () {
  $(".user_profile").click(function (e) {
    e.preventDefault();
    window.location.assign("./userProfile.html")
  })
  $("#newTodo").click(function (e) {
    e.preventDefault();
    window.location.assign("./addATodo.html");
  })
  $("#allTodo").click(function (e) {
    e.preventDefault();
    window.location.assign("./watchAllTodo.html");
  })
  renderData();
})
function renderData() {
  let all_task = localStorageGetItem(allTask_key);
  if (all_task) {
    let pendingTask = all_task.filter((value, index) => value.taskStatus == "Pending");
    let completedTask = all_task.filter((value, index) => value.taskStatus == "Completed");
    let deliveredTask = all_task.filter((value, index) => value.taskStatus == "Delivered");
    let inprogressTask = all_task.filter((value, index) => value.taskStatus == "InProgress");
    $("#pending").html("total pending task:<br>" + "" + pendingTask.length);
    $("#delivered").html("total delivered task:<br>" + "" + deliveredTask.length);
    $("#inProgress").html("total inProgress task:<br>" + "" + inprogressTask.length);
    $("#completed").html("total completed task:<br>" + "" + completedTask.length);
  }
  else {
    $("#pending").html("total pending task:<br>" + "" + 0);
    $("#delivered").html("total delivered task:<br>" + "" + 0);
    $("#inProgress").html("total inProgress task:<br>" + "" + 0);
    $("#completed").html("total completed task:<br>" + "" + 0);

  }
}

