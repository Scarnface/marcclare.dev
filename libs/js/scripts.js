/* ================================= 
  GALLERY
==================================== */

// Array of gallery data ... n = Image ID, w = Image width, h = Image height, X = Image 'left', y = Image 'top'
const galleryImageData = [
  { n: '#gI1', w: 9.8, h: 16.2, x: 19.2, y: 9.4 }, // Rick's Garage Sale
  { n: '#gI2', w: 0, h: 0, x: 0, y: 0 }, // TBD
  { n: '#gI3', w: 0, h: 0, x: 0, y: 0 }, // TBD
  { n: '#gI4', w: 0, h: 0, x: 0, y: 0 }, // TBD
  { n: '#gI5', w: 0, h: 0, x: 0, y: 0 }, // TBD
  { n: '#gI6', w: 0, h: 0, x: 0, y: 0 }  // TBD
];

// Calculate the size and position of an absolute element in relation to its relative dynamic parent
let scaleToBg = function(array) {
  // Calculate the width and height of the parent at the present time
  let bgWidth = $('#gallery-background').width();
  let bgHeight = $('#gallery-background').height();

  // Loop the array of images
  $.each(array, (key, value) => {
    // Calculate the new size
    let newWidth = value.w * bgWidth / 100;
    let newHeight = value.h * bgHeight / 100;
    // Calculate the new position
    let newLeft = value.x * bgWidth / 100;
    let newTop = value.y * bgHeight / 100;
    // Assign the new values
    $(value.n).width(newWidth);
    $(value.n).height(newHeight);
    $(value.n).css({"top": newTop, "left": newLeft});
  });
};

// Run on initial page load
$(document).load(function() {
  scaleToBg(galleryImageData);
});

// Run on resize
$(window).resize(function() {
  scaleToBg(galleryImageData);
});