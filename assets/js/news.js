let modalOne = document.getElementById("modalOne");

let btnOne = document.getElementById("btnOne");

let closeOne = document.getElementsByClassName("closeOne")[0];

btnOne.onclick = function () {
  modalOne.style.display = "flex";
};

closeOne.onclick = function () {
  modalOne.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalOne) {
		modalOne.style.display = "none";
  }
};


let modalTwo = document.getElementById("modalTwo");

let btnTwo = document.getElementById("btnTwo");

let closeTwo = document.getElementsByClassName("closeTwo")[0];

btnTwo.onclick = function () {
  modalTwo.style.display = "flex";
};

closeTwo.onclick = function () {
  modalTwo.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalTwo) {
		modalTwo.style.display = "none";
  }
};

let modalThree = document.getElementById("modalThree");

let btnThree = document.getElementById("btnThree");

let closeThree = document.getElementsByClassName("closeThree")[0];

btnThree.onclick = function () {
  modalThree.style.display = "flex";
};

closeThree.onclick = function () {
  modalThree.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalThree) {
		modalThree.style.display = "none";
  }
};

let modalFor = document.getElementById("modalFor");

let btnFor = document.getElementById("btnFor");

let closeFor = document.getElementsByClassName("closeFor")[0];

btnFor.onclick = function () {
  modalFor.style.display = "flex";
};

closeFor.onclick = function () {
  modalFor.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalFor) {
		modalFor.style.display = "none";
  }
};

function popupOpen(currentPopup){
  if(currentPopup&&unlock){

  }
}




// document.addEventListener('click', (e)=>{
//   let click = e.composedPath();
//   if(click){
//     modalThree.style.display = "none";
//   }
//   console.log(click);
// })