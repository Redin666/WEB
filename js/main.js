$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.header-burger,.menu').toggleClass('process');
    });
});

$(function() {
    $('.collab-bar').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});

$(function() {
    $('.collab-company').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 4
      });
});


$(document).ready(function() {
    $('.collab-plan-info-box .element-content').hide()
    $('.collab-plan-info-box .element-content:first-child').show()

    $('.wrap').click(function() {
        let current = $(this).attr('data-element')
        $('.collab-plan-info-box .element-content').hide()
        $('.'+current).show()
    })
})

const videoContainer = document.getElementById('video-container')
const playVideo = document.getElementById('video')

function stopVideo() {
    videoContainer.style.display = 'none'
}

function startVideo(files) {
    playVideo.src = files;
    videoContainer.style.display = 'block'
}

