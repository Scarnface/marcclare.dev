/* ================================= 
  GALLERY
==================================== */

//-----------------------------------------Array of gallery data -----------------------------------------------
// n = Image ID, sw = Scale width, sh = Scale height, sx = Scale 'left', sy = Scale 'top', d = degrees to rotate
//--------------------------------------------------------------------------------------------------------------
const galleryImageData = [
  { n: '#gI1', sw: 11.8, sh: 16.2, sx: 3.8, sy: 9.4, d: 0 }, // Rick's Garage Sale
  { n: '#gI2', sw: 11.3, sh: 16.2, sx: 40.2, sy: 10.1, d: -1 }, // Netmatters
  { n: '#gI3', sw: 12.3, sh: 16.4, sx: 83.5, sy: 9, d: -2 }, // Multi Api
  { n: '#gI4', sw: 11.6, sh: 16.2, sx: 47.2, sy: 44, d: 0 }, // Music Stache
  { n: '#gI5', sw: 11.6, sh: 16.6, sx: 26.3, sy: 74.1, d: -0.8 }, // blueJAM
  { n: '#gI6', sw: 11.8, sh: 16.7, sx: 71.3, sy: 76.3, d: -0.5 },  // Codestrips
  { n: '#project-info', sw: 37, sh: 26, sx: 3, sy: 38, d: 0 }  // Dynamic info panel
];

// Calculate the size and position of an absolute element in relation to its relative dynamic parent.
let scaleToBg = array => {
  // Calculate the width and height of the parent at the present time.
  let bgWidth = $('#gallery-background').width();
  let bgHeight = $('#gallery-background').height();

  // Loop the array of images.
  $.each(array, (key, value) => {
    // Calculate the new size.
    let newWidth = value.sw * bgWidth / 100;
    let newHeight = value.sh * bgHeight / 100;
    // Calculate the new position.
    let newLeft = value.sx * bgWidth / 100;
    let newTop = value.sy * bgHeight / 100;
    // Calculate a corresponding font size for the info div
    let fSize = newHeight / 5;
    // Assign the new values.
    $(value.n).width(newWidth);
    $(value.n).height(newHeight);
    $(value.n).css({'top': newTop, 'left': newLeft, 'transform': 'rotate(' + value.d + 'deg)'});
    $('#project-info').css('fontSize', fSize);
  });
};

// Run on initial page load.
$(window).load(function() {
  scaleToBg(galleryImageData);
});

// Run on resize.
$(window).resize(function() {
  scaleToBg(galleryImageData);
});

//-----------------------------------------Array of project data -----------------------------------------------
// t = Project title, d = Project description
//--------------------------------------------------------------------------------------------------------------
const projectData = [
  { t: 'Rick\'s Garage Sale', d: 'A high fidelity prototype of a web store, built in Axure.' },
  { t: 'Netmatters', d: 'A full front end clone of the Netmatters corporate site using SCSS for full browser compatability.' },
  { t: 'Multi API', d: 'Geonames APIs parsed dynamically to an HTML web page with AJAX, PHP and CURL.' },
  { t: 'Music Stache', d: 'HTML, CSS, JavaScript, and Handlebars to make a music store frontend.' },
  { t: 'BLUEjam', d: 'A REACT application for creating and storing custom Spotify playlists.' },
  { t: 'Codestrips', d: 'A comic strip app using Express, SQLite, and the SQLite3 node module.' },
];

// Create the paragraph element, load the typewriter plugin and pass the corresponding text to it.
let typeText = obj => {
  // Create the HTML element to hold the description. Neccessary as we delete the element to stop the function on mouse out.
  $('#project-info').append('<p id="project-description"></p>');

  let tText = document.getElementById('project-description');

  let typewriter = new Typewriter(tText, {
      delay: 50,
      loop: false
  });

  // Type the project title.
  typewriter.typeString(obj.t)
      .pauseFor(2500)
      .deleteAll()
      // Type the project description.
      .typeString(obj.d)
      .pauseFor(2500)
      .deleteAll()
      // CTA.
      .typeString('Click the image to view!')
      .pauseFor(2500)
      .start();
};

// Mouse in event to pass the correct text for each image.
$('.portfolio-image').mouseenter(function() {
  if( this.id === 'gI1' ) {
    typeText(projectData[0]);
  } else if( this.id === 'gI2' ) {
    typeText(projectData[1]);
  } else if( this.id === 'gI3' ) {
    typeText(projectData[2]);
  } else if( this.id === 'gI4' ) {
    typeText(projectData[3]);
  } else if( this.id === 'gI5' ) {
    typeText(projectData[4]);
  } else if( this.id === 'gI6' ) {
    typeText(projectData[5]);
  }
});

// Mouse out event to stop the plugin and clear the screen.
$('.portfolio-image').mouseleave(function() {
  // Delete the HTML element holding the description effectively stopping it.
  $('#project-description').remove();
});