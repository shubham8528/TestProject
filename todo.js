/*function abc(){
	var text = document.createElement('p');
	text.innerText = addinputtext.value;
	addtodocontainer.appendChild('text');
    
    }*/

var addinputtext = document.getElementById("inputtext");
var addbtn = document.getElementById("btn");
var addcontainer = document
  .getElementById("todocontainer")
  .querySelectorAll(".myList");

addbtn.addEventListener("click", function () {
  var x = document.createElement("INPUT");
  var y = document.createElement("BR");
  x.setAttribute("type", "checkbox");

  var text = document.createElement("li");
  text.innerText = addinputtext.value;
  text.style = "display:inline-block; padding-right:20px;";

  addcontainer[0].appendChild(text);
  addcontainer[0].appendChild(x);
  addcontainer[0].appendChild(y);
  console.log(addcontainer);
  addinputtext.value = "";
});

//  INPUTFIELD BACKGROUND COLOR  //
function abc() {
  document.getElementById("inputtext").style.background = "orange";
}
function xyz() {
  document.getElementById("inputtext").style.background = "";
}
