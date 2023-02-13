let videoPlayer = document.querySelector('.video-player')
let videoContainer = document.querySelector('.video-container')
let close = document.querySelector('.close')
let video = document.querySelector('.video-container').querySelector('.video')
videoPlayer.addEventListener('click', function (){
  videoContainer.classList.add('show');
  video.play()
})

close.addEventListener('click',function (){
    videoContainer.classList.remove('show')
    video.pause()
})

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
function copyTextTwo(){
    const textTwo = document.querySelector(".card-body__list_4").innerText;
    const element = document.createElement('textarea')
    element.value = textTwo;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element)
}
  const closeMenu = document.querySelector('.close_menu');
   closeMenu.addEventListener('click', function (){
   document.getElementById('myCheck').checked = false
})

let goto = document.querySelector('.goto').addEventListener('click', ()=>{
  let el = 
})