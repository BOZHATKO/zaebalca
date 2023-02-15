// let modalOne = document.getElementById("modalOne");

// let btnOne = document.getElementById("btnOne");

// let closeOne = document.getElementsByClassName("closeOne")[0];

// btnOne.onclick = function () {
//   modalOne.style.display = "flex";
// };

// closeOne.onclick = function () {
//   modalOne.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modalOne) {
// 		modalOne.style.display = "none";
//   }
// };


// let modalTwo = document.getElementById("modalTwo");

// let btnTwo = document.getElementById("btnTwo");

// let closeTwo = document.getElementsByClassName("closeTwo")[0];

// btnTwo.onclick = function () {
//   modalTwo.style.display = "flex";
// };

// closeTwo.onclick = function () {
//   modalTwo.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modalTwo) {
// 		modalTwo.style.display = "none";
//   }
// };

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








const popupLinks=document.querySelectorAll('.popup-link');
let unlock=true

if(popupLinks.length>0){
  for(let i=0;i<popupLinks.length;i++){
    const popupLink=popupLinks[i];
    popupLink.addEventListener('click', function(e){
      const popupName=popupLink.getAttribute('href').replace('#','');
      const currentPopup=document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}


function popupOpen(currentPopup){
  if(currentPopup&&unlock){
    let modal= currentPopup.className;
    const popupActive=document.querySelector(`.${modal}.open`);
    if(popupActive){
      popupClose(popupActive);
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function(e){
      if(!e.target.closest(".lead__text__link")){
        popupClose(e.target.closest(`.${modal}`))
      }
    })
  }
}
function popupClose(popupActive){
  if(unlock){
    popupActive.classList.remove('open');
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.modalOne'));
			e.preventDefault();
		});
	}
}


