let readMore=()=> {
	var dots=document.getElementById("dots");
	var more=document.getElementById("more");
	var btn=document.getElementById("btn");

	if(dots.style.display==="none"){
		dots.style.display="inline";
		btn.innerHTML="Читать больше";
		more.style.display="none";
	}else {
		dots.style.display="none";
		btn.innerHTML="Скрыть";
		more.style.display="inline";
	}
}

function copyText(){
	const text = document.querySelector(".card-body__list_2").innerText;
	const elem = document.createElement('textarea')
	elem.value = text;
	elem.setAttribute('readonly', '');
	elem.style.position = 'absolute';
	elem.style.left = '-9999px';
	document.body.appendChild(elem);
	elem.select();
	document.execCommand('copy');
	document.body.removeChild(elem)
}
