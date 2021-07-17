/* ================================= 
  GALLERY
==================================== */

//-----------------------------------------Array of gallery data -----------------------------------------------
// n = Image ID, sw = Scale width, sh = Scale height, sx = Scale 'left', sy = Scale 'top', d = degrees to rotate
//--------------------------------------------------------------------------------------------------------------
let galleryImageData = [
  { n: '#gI1', sw: 11.8, sh: 16.2, sx: 3.8, sy: 9.4, d: 0 }, // Rick's Garage Sale
  { n: '#gI2', sw: 11.3, sh: 16.2, sx: 40.2, sy: 10.1, d: -1 }, // Netmatters
  { n: '#gI3', sw: 12.3, sh: 16.4, sx: 83.5, sy: 9, d: -2 }, // Multi Api
  { n: '#gI4', sw: 11.6, sh: 16.2, sx: 47.2, sy: 44, d: 0 }, // Music Stache
  { n: '#gI5', sw: 11.6, sh: 16.6, sx: 26.3, sy: 74.1, d: -0.8 }, // blueJAM
  { n: '#gI6', sw: 11.8, sh: 16.7, sx: 71.3, sy: 76.3, d: -0.5 },  // Codestrips
  { n: '#project-info', sw: 35, sh: 26, sx: 5, sy: 38, d: 0 }  // Dynamic info panel
];

// Calculate the size and position of an absolute element in relation to its relative dynamic parent
let scaleToBg = function(array) {
  // Calculate the width and height of the parent at the present time
  let bgWidth = $('#gallery-background').width();
  let bgHeight = $('#gallery-background').height();

  // Loop the array of images
  $.each(array, (key, value) => {
    // Calculate the new size
    let newWidth = value.sw * bgWidth / 100;
    let newHeight = value.sh * bgHeight / 100;
    // Calculate the new position
    let newLeft = value.sx * bgWidth / 100;
    let newTop = value.sy * bgHeight / 100;
    // Assign the new values
    $(value.n).width(newWidth);
    $(value.n).height(newHeight);
    $(value.n).css({'top': newTop, 'left': newLeft, 'transform': 'rotate(' + value.d + 'deg)'});
  });
};

// Run on initial page load
$(window).load(function() {
  scaleToBg(galleryImageData);
});

// Run on resize
$(window).resize(function() {
  scaleToBg(galleryImageData);
});