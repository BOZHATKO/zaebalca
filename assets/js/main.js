


let videoPlayer = document.querySelector('.video-player')
let videoContainer = document.querySelector('.video-container')
let close = document.querySelector('.close')
let video = document.querySelector('.video-container').querySelector('.video')
videoPlayer.addEventListener('click', function (){
  videoContainer.classList.add('show');
  menuBtn.classList.remove('active')
  menu.classList.remove('active')
  video.play()
})

close.addEventListener('click',function (){
    videoContainer.classList.remove('show')
    video.pause()
})
