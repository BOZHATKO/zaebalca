let modalOne=document.getElementById("modalOne"),btnOne=document.getElementById("btnOne"),closeOne=document.getElementsByClassName("closeOne")[0];btnOne.onclick=function(){modalOne.style.display="flex"},closeOne.onclick=function(){modalOne.style.display="none"},window.onclick=function(e){e.target==modalOne&&(modalOne.style.display="none")};let modalTwo=document.getElementById("modalTwo"),btnTwo=document.getElementById("btnTwo"),closeTwo=document.getElementsByClassName("closeTwo")[0];btnTwo.onclick=function(){modalTwo.style.display="flex"},closeTwo.onclick=function(){modalTwo.style.display="none"},window.onclick=function(e){e.target==modalTwo&&(modalTwo.style.display="none")};let modalThree=document.getElementById("modalThree"),btnThree=document.getElementById("btnThree"),closeThree=document.getElementsByClassName("closeThree")[0];btnThree.onclick=function(){modalThree.style.display="flex"},closeThree.onclick=function(){modalThree.style.display="none"},window.onclick=function(e){e.target==modalThree&&(modalThree.style.display="none")};let modalFor=document.getElementById("modalFor"),btnFor=document.getElementById("btnFor"),closeFor=document.getElementsByClassName("closeFor")[0];btnFor.onclick=function(){modalFor.style.display="flex"},closeFor.onclick=function(){modalFor.style.display="none"},window.onclick=function(e){e.target==modalFor&&(modalFor.style.display="none")};