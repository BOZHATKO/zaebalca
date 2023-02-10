let readMore=()=> {
	let dots=document.getElementById("dots");
	let more=document.getElementById("more");
	let btn=document.getElementById("btn");

	if(dots.style.display==="none"){
		dots.style.display="inline";
		btn.innerHTML="Read more";
		more.style.display="none";
	}else {
		dots.style.display="none";
		btn.innerHTML="Hide";
		more.style.display="inline";
	}
}

let readMoreOne=()=> {
	let dotsOne=document.getElementById("dotsOne");
	let moreOne=document.getElementById("moreOne");
	let btnOne=document.getElementById("btnOne");

	if(dotsOne.style.display==="none"){
		dotsOne.style.display="inline";
		btnOne.innerHTML="Read more";
		moreOne.style.display="none";
	}else {
		dotsOne.style.display="none";
		btnOne.innerHTML="Hide";
		moreOne.style.display="inline";
	}
}
let readMoreTwo=()=> {
	let dotsTwo=document.getElementById("dotsTwo");
	let moreTwo=document.getElementById("moreTwo");
	let btnTwo=document.getElementById("btnTwo");

	if(dotsTwo.style.display==="none"){
		dotsTwo.style.display="inline";
		btnTwo.innerHTML="Read more";
		moreTwo.style.display="none";
	}else {
		dotsTwo.style.display="none";
		btnTwo.innerHTML="Hide";
		moreTwo.style.display="inline";
	}
}
let readMoreThree=()=> {
	let dotsThree=document.getElementById("dotsThree");
	let moreThree=document.getElementById("moreThree");
	let btnThree=document.getElementById("btnThree");

	if(dotsThree.style.display==="none"){
		dotsThree.style.display="inline";
		btnThree.innerHTML="Read more";
		moreThree.style.display="none";
	}else {
		dotsThree.style.display="none";
		btnThree.innerHTML="Hide";
		moreThree.style.display="inline";
	}
}