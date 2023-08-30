// El = Element
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListElement = document.getElementById('todos-list');
//const notificationElement = document.querySelector('.notification');


// make an array of todos
let todos = [];

// Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();  // do not refresh

    saveTodo();
    renderTodos();
});


// Save New Todo
const saveTodo = () => {
    const todoValue = todoInput.value;
    // if empty
    const isEmpty = todoValue === '';
    // if repeated using some
    const isRepeated = todos.some((todo) => todo.todoValue === todoValue);

    if(isEmpty){
        alert("Please Add Your To Do Content");
    } else if (isRepeated) {
        alert("This Task Already Exists!")
    } else {
        const todo = {
            value: todoValue,
            checked: false,
            color: 'blue'
        };
        todos.push(todo);
        todoInput.value = ''; // clear input
    }
}

const renderTodos = () => {
    todosListElement.innerHTML = ''; // clear before render
    todos.forEach((todo, index) => {
        todosListElement.innerHTML += `
        <div class="todo" id=${index}>
          <i 
            class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'}"
            style="color : ${todo.color}"
            data-action="check"
          ></i>
          <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
          <i class="bi bi-pencil-square" data-action="edit"></i>
          <i class="bi bi-trash" data-action="delete"></i>
        </div>
        `;
        console.log(todosListElement.innerHTML)
    });
}
