
const form = document.getElementById("inputForm");

let todos = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log("sub");

    saveNewTask();
});


const saveNewTask = () => {
    const todoText = newTask.value;
    const isEmpty = todoText === '';
    const repeatedTask = todos.some((todo) => todo.value === todoValue); 
    if (isEmpty) {
        alert("Please Enter Your New Task")
    } else if (repeatedTask) {
        alert("This Task Already Exists")
    }  else {
        const todoText = newTask.value

        const todo = {
            value: todoValue,
            checked: false,
            priority: blue
        }
        todos.push(todo)
    }

}

const renderTask = () => {
    todos.forEach((todo, idx) => {
        todosEle.innerHTML +=  //override
        <div class="todoTask" id="0">
            <i class="bi bi-circle"></i>
            <i class="bi bi-check-circle-fill"></i>
            <p class="taskText">Get Eggs</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-x-circle"></i>
        </div>
    })
}


