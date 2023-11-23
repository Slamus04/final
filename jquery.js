const sounds = {
  sound1: new Audio('bass.mp3'), // Replace with your sound file path
  sound2: new Audio('second.mp3'),
  sound3: new Audio('third.mp3'),
  sound4: new Audio('fourth.mp3'),
  sound5: new Audio('solo.mp3')
};

$(document).ready(function() {
  $('.navbar-nav li a').each(function(index) {
    $(this).delay(500 * index).animate({
      'font-size': '24px',
      'padding': '20px'
    }, 1000); // Adjust the duration as needed
  });
});

$(document).ready(function() {
  $('.string').click(function() {
    $('.rectangle').each(function() {
      let randomHeight = Math.floor(Math.random() * 100) + 50; // Random height between 50px and 150px
      $(this).css('height', randomHeight + 'px');
    });
  });
});
const strings = document.querySelectorAll('.string');
strings.forEach((string, index) => {
  string.addEventListener('click', () => {
    const soundKey = `sound${index + 1}`;
    const sound = sounds[soundKey];
    if (sound) {
      sound.currentTime = 0; // Restart sound if already playing
      sound.play();
    } else {
      console.log(` ${soundKey}`);
    }
  });
});
function playGuitarSound() {
  const sound = sounds['sound5'];
    if (sound) {
      sound.currentTime = 0; // Restart sound if already playing
      sound.play();
    } else {
      console.log(` ${soundKey}`);
    }
}