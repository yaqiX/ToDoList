const form = document.getElementById("inputForm");
const taskInput = document.getElementById("newTask");
const taskEle = document.querySelector(".todoList"); 
let todos = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    saveNewTask();
    renderTask();
});

const saveNewTask = () => {
    const taskValue = taskInput.value;
    const isEmpty = taskValue === '';
    const repeatedTask = todos.some((todo) => todo.value === taskValue); 
    if (isEmpty) {
        alert("Please Enter Your New Task")
    } else if (repeatedTask) {
        alert("This Task Already Exists")
    } else {
        const todo = {
            value: taskValue,
            checked: false,
            color: 'blue',
        };
        todos.push(todo);
        taskInput.value = ''; // Clear the input after adding a task
        console.log(todos);
    }
}

const renderTask = () => {
    taskEle.innerHTML = ''; // Clear the previous content

    todos.forEach((todo, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'todoTask';
        taskDiv.id = index;
        taskDiv.innerHTML = `
            <i class="bi ${todo.checked ? 'bi-check-circle-fil' : 'bi-circle'}" style="color: ${todo.color}"></i>
            <p class="taskText">${todo.value}</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-x-circle"></i>
        `;
        taskEle.appendChild(taskDiv);
    });
}
