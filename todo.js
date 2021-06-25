var addinputtext= document.getElementById('inputtext');
var addbtn= document.getElementById('btn');
var addcontainer =document.getElementById('todocontainer');

addbtn.addEventListener('click', function(){
	var text = document.createElement('li');
		text.innerText = addinputtext.value;
		addcontainer.appendChild(text);
	    addinputtext.value="";
});

//  INPUTFIELD BACKGROUND COLOR  //
function abc(){
	document.getElementById('inputtext').style.background='orange';
}          
function xyz(){
    document.getElementById('inputtext').style.background='';
}
      
 