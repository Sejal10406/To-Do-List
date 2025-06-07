// const inputBox = document.getElementById('inputBox');
// const addBtn = document.getElementById('addBtn');
// const todoList = document.getElementById('todoList');

// let editTodo = null;

// // Function to add todo
// const addTodo = () => {
//     const inputText = inputBox.value.trim();
//     if (inputText.length <= 0) {
//         alert("You must write something in your to do");
//         return false;
//     }

//     if (addBtn.value === "Edit") {
//         // Passing the original text to editLocalTodos function before edit it in the todoList
//         editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
//         editTodo.target.previousElementSibling.innerHTML = inputText;
//         addBtn.value = "Add";
//         inputBox.value = "";
//     }
//     else {
//         //Creating p tag
//         const li = document.createElement("li");
//         const p = document.createElement("p");
//         p.innerHTML = inputText;
//         li.appendChild(p);


//         // Creating Edit Btn
//         const editBtn = document.createElement("button");
//         editBtn.innerText = "Edit";
//         editBtn.classList.add("btn", "editBtn");
//         li.appendChild(editBtn);

//         // Creating Delete Btn
//         const deleteBtn = document.createElement("button");
//         deleteBtn.innerText = "Remove";
//         deleteBtn.classList.add("btn", "deleteBtn");
//         li.appendChild(deleteBtn);

//         todoList.appendChild(li);
//         inputBox.value = "";

//         saveLocalTodos(inputText);
//     }
// }

// // Function to update : (Edit/Delete) todo
// const updateTodo = (e) => {
//     if (e.target.innerHTML === "Remove") {
//         todoList.removeChild(e.target.parentElement);
//         deleteLocalTodos(e.target.parentElement);
//     }

//     if (e.target.innerHTML === "Edit") {
//         inputBox.value = e.target.previousElementSibling.innerHTML;
//         inputBox.focus();
//         addBtn.value = "Edit";
//         editTodo = e;
//     }
// }

// // Function to save local todo
// const saveLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Function to get local todo
// const getLocalTodos = () => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//         todos.forEach(todo => {

//             //Creating p tag
//             const li = document.createElement("li");
//             const p = document.createElement("p");
//             p.innerHTML = todo;
//             li.appendChild(p);


//             // Creating Edit Btn
//             const editBtn = document.createElement("button");
//             editBtn.innerText = "Edit";
//             editBtn.classList.add("btn", "editBtn");
//             li.appendChild(editBtn);

//             // Creating Delete Btn
//             const deleteBtn = document.createElement("button");
//             deleteBtn.innerText = "Remove";
//             deleteBtn.classList.add("btn", "deleteBtn");
//             li.appendChild(deleteBtn);

//             todoList.appendChild(li);
//         });
//     }
// }

// // Function to delete local todo
// const deleteLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     let todoText = todo.children[0].innerHTML;
//     let todoIndex = todos.indexOf(todoText);
//     todos.splice(todoIndex, 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     // Array functions : slice / splice
//     console.log(todoIndex);
// }

// const editLocalTodos = (todo) => {
//     let todos = JSON.parse(localStorage.getItem("todos"));
//     let todoIndex = todos.indexOf(todo);
//     todos[todoIndex] = inputBox.value;
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// document.addEventListener('DOMContentLoaded', getLocalTodos);
// addBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', updateTodo);


const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length === 0) {
    alert("You must write something in your to do");
    return;
  }

  if (addBtn.value === "Edit") {
    editLocalTodos(editTodo.target.previousElementSibling.innerText);
    editTodo.target.previousElementSibling.innerText = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
    editTodo = null;
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    saveLocalTodos(inputText);
  }
};

const updateTodo = (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    deleteLocalTodos(e.target.parentElement);
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("editBtn")) {
    inputBox.value = e.target.previousElementSibling.innerText;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

const saveLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(todo => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = todo;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
};

const deleteLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoText = todo.children[0].innerText;
  todos = todos.filter(t => t !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const editLocalTodos = (oldTodo) => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const index = todos.indexOf(oldTodo);
  if (index !== -1) {
    todos[index] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

document.addEventListener('DOMContentLoaded', getLocalTodos);
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
