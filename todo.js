// var addinputtext=document.getElementById('inputtext');
// var addbtn=document.getElementById('btn');
// var addtodocontainer=document.getElementById('todocontainer') ;

// addbtn.addEventListener('click',function(){
// var check=document.createElement('p');
// var brack=document.createElement('br')

// check.innerHTML='<i>&#x2713;</i>';




//   var element=document.createElement('li');
//   element.style = "display:inline-block; padding-right:20px;";
//   element.innerText=addinputtext.value;
//   addtodocontainer.appendChild(element);
//   addtodocontainer.appendChild(check);
//   addtodocontainer.appendChild(brack);
  
// })




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

  addcontainer[0].append(text,x,y);

  addinputtext.value = "";


  fetch("https://60dadebc801dcb0017290c2f.mockapi.io/todos",{
          method: "POST",
          body:JSON.stringify({
                                title:text.innerText
                              }),
  headers:{ 
           "content-type": "application/json; charset=UTF-8"}
           })

   .then(function(cahnge) {  
                             return cahnge.json();
                             })
   .then(function (result){
                           console.log(result)
                             })



});





// function getTodos(){
//   fetch("https://60dadebc801dcb0017290c2f.mockapi.io/todos",{
//           method: "POST",
//           body:JSON.stringify({
//                                 title:text.innerText
//                               }),
//   headers:{ 
//            "content-type": "application/json; charset=UTF-8"}
//            })

//    .then(function(cahnge) {  
//                              return cahnge.json();
//                              })
//    .then(function (result){
//       result.forEach(function(r) {
//         var x = document.createElement("INPUT");
//         var y = document.createElement("BR"); 
//         x.setAttribute("type", "checkbox");

//         var text = document.createElement("li");
//         text.innerText = r.text;
//         text.style = "display:inline-block; padding-right:20px;";

//         addcontainer[0].append(text,x,y);
//       });
//     })                                        
//     .catch(function (error) {
//       console.log("Something Error here....", error);
//     });
// }

//  INPUTFIELD BACKGROUND COLOR  //
function abc() {
  document.getElementById("inputtext").style.background = "orange";
}
function xyz() {
  document.getElementById("inputtext").style.background = "";
}
document.addEventListener('DOMContentLoaded', function () {
      getTodos() 
}, false);
