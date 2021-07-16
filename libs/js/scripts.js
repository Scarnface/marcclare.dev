// Calculate the size and position of an absolute element relative to a dynamic parent
let scaleToBg = function(iD) {
  let bgWidth = $('#gallery-background').width();
  let bgHeight = $('#gallery-background').height();
  let newWidth = 9.8 * bgWidth / 100;
  let newHeight = 16.2 * bgHeight / 100;
  let newLeft = 19.2 * bgWidth / 100;
  let newTop = 9.4 * bgHeight / 100;

  $(iD).width(newWidth);
  $(iD).height(newHeight);
  $(iD).css({"top": newTop, "left": newLeft});
};

// Run on initial page load
$(document).load(function() {
  scaleToBg('.portfolio-image');
});

// Run on resize
$(window).resize(function() {
  scaleToBg('.portfolio-image');
});
