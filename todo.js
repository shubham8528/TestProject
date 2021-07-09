var addinput = document.querySelector("#inputtext");
var addbtn = document.querySelector("#btn");
var addListe = document.querySelector(".todoList");
var idCount= 0
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
  todoBtn2.setAttribute("onclick", "abc(event);");
  todoBtn2.innerHTML = '<i class="fa fa-trash-o" style="font-size:20px"></i>';
  todoBtn2.classList.add("deletBtn");
  todoBtn2.style = "background-Color:gray; border:none";
  todoDiv.appendChild(todoBtn2);
  todoDiv.setAttribute('id',idCount)
  // Show TODO list append
  addListe.appendChild(todoDiv);

  ////////////  POST TODO DATA///////////////////////////
 console.log(idCount)
  fetch("https://60dadebc801dcb0017290c2f.mockapi.io/todos", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTodo.innerText }),
  })
    .then(function (insurt) {
      return insurt;
    })
    .then(function (result) {
      idCount++
      // document.write(result);
      var x = document.getElementById("toast")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
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
     
      console.log(idCount)
      renderTodos(result);
    })
    .catch(function (error) {
      document.write( error,"Something Error Here");
    });
}

function renderTodos(todos) {
  // console.log(result);

  todos.forEach((e) => {
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-here");
   todoDiv.setAttribute("id",e.id)
   idCount = e.id

    // Show TODO list append
    addListe.appendChild(todoDiv);

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
    todoBtn2.setAttribute("onclick", "abc(event);");
    todoBtn2.innerHTML = '<i class="fa fa-trash-o" style="font-size:20px"></i>';
    todoBtn2.classList.add("deletBtn");
    todoBtn2.style = "background-Color:gray; border:none";
    todoDiv.appendChild(todoBtn2);
  });
}

window.onload = function () {
  render();
  // renderTodos(todoList);
};
function abc(event){
console.log(event.path[2].id)
var id = Number(event.path[2].id) 
document.getElementById(event.path[2].id).outerHTML=""

fetch(`https://60dadebc801dcb0017290c2f.mockapi.io/todos/${id}`, {
  method: "delete",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (insurt) {
    return insurt;
  })
  .then(function (result) {
    idCount++
    // document.write(result);
    var x = document.getElementById("toastdelete")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  });
}