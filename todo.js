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

function getTodos(){
  fetch("https://60dadebc801dcb0017290c2f.mockapi.io/todos", {
    method: "get",
    headers: { "content-type": "application/json" },
  })
    .then(function (cahnge) {
      return cahnge.json();
    })
    .then(function (result){
      console.log(result);
      result.forEach(function(r) {
        var x = document.createElement("INPUT");
        var y = document.createElement("BR");
        x.setAttribute("type", "checkbox");

        var text = document.createElement("li");
        text.innerText = r.text;
        text.style = "display:inline-block; padding-right:20px;";

        addcontainer[0].appendChild(text);
        addcontainer[0].appendChild(x);
        addcontainer[0].appendChild(y);
      });
    })
    .catch(function (error) {
      console.log("Something Error here....", error);
    });
}

//  INPUTFIELD BACKGROUND COLOR  //
function abc() {
  document.getElementById("inputtext").style.background = "orange";
}
function xyz() {
  document.getElementById("inputtext").style.background = "";
}
document.addEventListener('DOMContentLoaded', function () {
      getTodos() 
});
