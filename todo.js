var addinput = document.querySelector("#inputtext");
var addbtn = document.querySelector("#btn");
var addtodocontainer = document.querySelector("#todoconatoiner");

var todoList = [
  {
    id: 1,
    title: "1 Kg Tomato",
  },
  {
    id: 1,
    title: "5 Kg Patato",
  },
];

// Event Call
addbtn.addEventListener("click", addTodo);

function addTodo(even) {
  even.preventDefault();

  // Div Create
  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-here");

  // list Create
  var newTodo = document.createElement("li");
  newTodo.innerText = addinput.value;
  newTodo.classList.add("todoList");
  todoDiv.appendChild(newTodo);
  addinput.value = "";

  // Check Button
  var todoBtn1 = document.createElement("button");
  todoBtn1.innerHTML = '<input type="checkbox" name="">';
  todoBtn1.style = "background-Color:gray; border:none";
  todoBtn1.classList.add("check-Btn");
  todoDiv.appendChild(todoBtn1);

  // Delete Button
  var todoBtn2 = document.createElement("button");
  todoBtn2.innerHTML = '<i class="fa fa-trash-o" style="font-size:20px"></i>';
  todoBtn2.classList.add("deletBtn");
  todoBtn2.style = "background-Color:gray; border:none";
  todoDiv.appendChild(todoBtn2);

  // Show TODO list append
  todocontainer.appendChild(todoDiv);

  ////////////  POST TODO DATA///////////////////////////

  fetch("https://60dadebc801dcb0017290c2f.mockapi.io/todos", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTodo.innerText }),
  })
    .then(function (insurt) {
      reture(insurt);
    })
    .then(function (result) {
      document.write(result);
    });
}

///////////////////////x CALL FUNCTION PAGELOAD///////////////////////////

function render() {
  fetch("https://60dadebc801dcb0017290c2f.mockapi.io/todos", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (insurt) {
      return insurt.json();
    })
    .then(function (result) {
      renderTodos(result);
    });
}

function renderTodos(todos) {
  // console.log(result);
  todocontainer.innerHTML = "";
  todos.forEach((e) => {
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-here");

    // list Create
    var newTodo = document.createElement("li");
    newTodo.innerText = e.title;
    newTodo.classList.add("todoList");
    todoDiv.appendChild(newTodo);
    // result.value = "";

    // Check Button
    var todoBtn1 = document.createElement("button");
    todoBtn1.innerHTML = '<input type="checkbox" name="">';
    todoBtn1.style = "background-Color:gray; border:none";
    todoBtn1.classList.add("check-Btn");
    todoDiv.appendChild(todoBtn1);

    // Delete Button
    var todoBtn2 = document.createElement("button");
    todoBtn2.innerHTML = '<i class="fa fa-trash-o" style="font-size:20px"></i>';
    todoBtn2.classList.add("deletBtn");
    todoBtn2.style = "background-Color:gray; border:none";
    todoDiv.appendChild(todoBtn2);

    // Show TODO list append
    todocontainer.appendChild(todoDiv);
  });
}

window.onload = function () {
  render();
  // renderTodos(todoList);
};
