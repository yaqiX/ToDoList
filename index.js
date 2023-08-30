const todoForm = document.getElementById("todo-form");
const newTodoInput = document.getElementById("new-todo-input");
const todoList = document.getElementById("todo-list");

//const addButton = document.getElementById("addButton");

// make an array of todos
let todos = [];
console.log(todos)
const createTodoItem = (text, checked) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = checked; // Set the checked status

    // Input
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("todo-input");
    input.value = text;

    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        input.disabled = !input.disabled;
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
    });

    input.addEventListener("input", (event) => {
        todoValue = event.target.value; // Update the todoValue with the new input value
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(input);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    return todoItem;
}

console.log(todos)

function updateTodo() {
    // Clear the existing list
    todoList.innerHTML = '';
  
    // Create and append todo items from the todos array
    todos.forEach(todo => {
      const todoItem = createTodoItem(todo.text, todo.checked);
      todoList.appendChild(todoItem);
      console.log(todoList, "list")
    });
  }
  
  

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    saveTodo()
  });
  
const saveTodo = () => {
    const newTodoValue = newTodoInput.value;
    const isEmpty = newTodoValue === '';
    // if repeated using some
    const isRepeated = todos.some((todo) => todo.newTodoValue === newTodoValue);
    
    if(isEmpty){
        alert("Please Add Your To Do Content");
    } else if (isRepeated) {
        alert("This Task Already Exists!")
    } else {
        const newTodo = {text: newTodoValue, checked: false};
        todos.push(newTodo);
        updateTodo();
        newTodoInput.value = ''; 
        //console.log(newTodo)
        localStorage.setItem("todos", JSON.stringify(todos));// clear input
    }
    
}

todoList.addEventListener("click", event => {
    const target = event.target;
  
    if (target.classList.contains("todo-checkbox")) {
      const todoItem = target.closest(".todo-item");
      const index = todos.indexOf(todoItem);
      todos[index].checked = target.checked; // Update the checked status
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
  

// edit event listener
todoList.addEventListener("click", event => {
    const target = event.target;
  
    if (target.classList.contains("edit-button")) {
        const todoItem = target.parentElement;
        const input = todoItem.querySelector(".todo-input");
        if (input.disabled) {   
            input.disabled = false;
        } else{
            input.disabled = true;
        }
        input.disabled = !input.disabled;
         //switch
        console.log(input.disabled,"bool")
        const index = todos.indexOf(todoItem);
        if (!input.disabled) {
        // Enable editing mode
            //input.focus();
            input.addEventListener("input", () => {
                todos[index].text = input.value; // Update the todo in the array
                localStorage.setItem("todos", JSON.stringify(todos));
            });
        } else {
        // Disable editing mode
            input.removeEventListener("input", () => {});
        }
    }
});
  
  // Event listener for delete buttons
todoList.addEventListener("click", event => {
    const target = event.target;
    if (target.classList.contains("delete-button")) {
        const todoItem = target.parentElement;
        const index = todos.indexOf(todoItem);
        todos.splice(index, 1); // Remove the todo from the array
        updateTodo();
        // Save todos to local storage
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});
  
  // Initial display of todos from local storage
if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    console.log("todos",todos)
    updateTodo();
  }