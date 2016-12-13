$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
});

/*
$(function () {
  var back = ["#F50057","#3D5AFE","#EEFF41", "#00E676"];
  $('.amazing-title').css('color', "#EEFF41");
  setInterval(function(){
    var rand = back[Math.floor(Math.random() * back.length)];
    $('.amazing-title').css('color', rand);
  }, 1000);


});*/

/*
$(function () {
  $(window).scroll(function (event) {
    var scroll = $('body').scrollTop();
    if(scroll === 0) {
      $('.third-header').css({
        borderBottom: 'none'
      });
      $('#logo-img').addClass('z-depth-2');
    }
    if(scroll > 10) {
      $('.third-header').css({
        borderBottom: '1px solid #ddd'
      });
      $('#logo-img').removeClass('z-depth-2');
    }

  });

}); */
