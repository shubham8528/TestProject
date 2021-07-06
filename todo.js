var addinput=document.querySelector('#inputtext');
var addbtn=document.querySelector('#btn')
var addtodocontainer=document.querySelector('#todoconatoiner');
 

 // Even Call 
 addbtn.addEventListener('click', addTodo);

 function addTodo(even){
even.preventDefault()

// Div Create
var todoDiv= document.createElement('div');
todoDiv.classList.add('todo-here')


// list Create
var newTodo= document.createElement('li');
newTodo.innerText=addinput.value;
newTodo.classList.add('todoList');
todoDiv.appendChild(newTodo);

// Check Button
var todoBtn1= document.createElement('button');
todoBtn1.innerHTML= '<input type="checkbox" name="">';
todoBtn1.style='background-Color:gray; border:none';

todoBtn1.classList.add('check-Btn');
todoDiv.appendChild(todoBtn1);


// Delete Button
var todoBtn2= document.createElement('button');
todoBtn2.innerHTML='<i class="fa fa-trash-o" style="font-size:20px"></i>';
todoBtn2.classList.add('delet-Btn')
todoBtn2.style='background-Color:gray; border:none';
todoDiv.appendChild(todoBtn2);

// Show TODO list append

todocontainer.appendChild(todoDiv);

 };

