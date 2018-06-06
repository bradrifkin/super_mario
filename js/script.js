$(document).ready(function() {
	doIntro();
	playGame();
});

var marioSound = false;
function playMarioSound () {
    $('#me-mario-sound')[0].play();
}

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-song')[0].pause();
    $('#cool')[0].volume = 0.3;
    $('#cool')[0].play();
  }
}


function playGame() {
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playMarioSound();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 83) {
      $('#theme-song')[0].pause();
      $('#grass')[0].pause();
      $('#desert')[0].pause();
      $('#island')[0].pause()
      playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 83) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 49) {
      $('.main').css("background", "url('images/grass.jpg')")
      $('#theme-song')[0].pause();
      $('#desert')[0].pause();
      $('#island')[0].pause();
      $('#grass')[0].load();
      $('#grass')[0].volume = 0.2;
      $('#grass')[0].play();
    }
    if (e.keyCode == 50) {
      $('.main').css("background", "url('images/desert.jpg')")
      $('#theme-song')[0].pause();
      $('#grass')[0].pause();
      $('#island')[0].pause();
      $('#desert')[0].load();
      $('#desert')[0].volume = 0.2;
      $('#desert')[0].play();
    }
    if (e.keyCode == 51) {
      $('.main').css("background", "url('images/island.jpg')")
      $('#theme-song')[0].pause();
      $('#grass')[0].pause();
      $('#desert')[0].pause();
      $('#island')[0].load();
      $('#island')[0].volume = 0.2;
      $('#island')[0].play();
    }
  })

  $(document).keydown(function(e) {
    if (e.keyCode == 39) {
      $('.ryu').animate({
        left: "+=10"
      });
    }
    if (e.keyCode == 37) {
      $('.ryu').animate({
        left: "-=10"
      });
    }
    if (e.keyCode == 38) {
      $('.ryu').animate({
        top: "-=10"
      });
    }
    if (e.keyCode == 40) {
      $('.ryu').animate({
        top: "+=10"
      });
    }
    if (e.keyCode == 32) {
      $('#jump')[0].load();
      $('#jump')[0].play();
      $('.ryu').animate({
        top: "-=40"
      }, "fast");
      $('.ryu').animate({
        top: "+=40"
      }, "fast");
    }
    if(e.keyCode == 72) {
      $('.how-to').fadeToggle(1000);
    }
  })
}

function doIntro() {
  $('#theme-song')[0].volume = 0.2;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
            $(this).fadeOut(2500, function() {
              $('.how-to').fadeIn(2000);
            });
          })
}
