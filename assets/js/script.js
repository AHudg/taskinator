// targets the <form> element we coded in the <header> by its id = "task-form"
var formEl = document.querySelector("#task-form");
// targets the <ul> elements we coded in the <main> by its id = "tasks-to-do"
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {
    // silences browser's default settings (e.g., do not refresh the page when we submit the button)
    event.preventDefault();
    // targets the <input> element we coded in the <header> by its name = task-name
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // targets the <select> element we coded in the <header> by its name = task-type
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create DOM Element <li>
    var listItemEl = document.createElement("li");
    // styles the new <li> to match the CSS styles
    listItemEl.className = "task-item";

    // create DOM Element <div> to easily wrap up the <h3> + <span> that we will add via Javascript
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.classname = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    // syntax: parentNode.appendChild(childNode)
    // appends the content of the DOM element <div> to DOM element <li> we created
    listItemEl.appendChild(taskInfoEl);
    // appends the entire DOM element <li> to the <ul>
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);