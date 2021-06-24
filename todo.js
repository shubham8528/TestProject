var addinputtext= document.getElementById('inputtext');
var addbtn= document.getElementById('btn');
var addcontainer =document.getElementById('todocontainer');

addbtn.addEventListener('click', function(){
	var text = document.createElement('p');
		text.innerText = addinputtext.value;
		addcontainer.appendChild(text);
});

function abc(){
	document.getElementById('inputtext').style.background='orange';

}

 
 