"use strict";

/* ================================= 
  GALLERY
==================================== */
//-----------------------------------------Array of gallery data -----------------------------------------------
// n = Image ID, sw = Scale width, sh = Scale height, sx = Scale 'left', sy = Scale 'top', d = degrees to rotate
//--------------------------------------------------------------------------------------------------------------

// Single column mobile background.
var galleryImageDataMob = [
  {
    n: "#gI1",
    sw: 28.2,
    sh: 7.2,
    sx: 5.2,
    sy: 3.9,
    d: -0.2,
  }, // Rick's Garage Sale
  {
    n: "#gI2",
    sw: 32.6,
    sh: 8.55,
    sx: 59.7,
    sy: 20.3,
    d: 0.4,
  }, // Netmatters
  {
    n: "#gI3",
    sw: 32.2,
    sh: 8.1,
    sx: 2.7,
    sy: 37.1,
    d: -0.8,
  }, // Multi Api
  {
    n: "#gI4",
    sw: 32.2,
    sh: 8.1,
    sx: 61.2,
    sy: 54.8,
    d: 0,
  }, // Music Stache
  {
    n: "#gI5",
    sw: 31.8,
    sh: 8.1,
    sx: 3.8,
    sy: 70,
    d: -0.6,
  }, // blueJAM
  {
    n: "#gI6",
    sw: 31.2,
    sh: 8.1,
    sx: 61.4,
    sy: 88.4,
    d: 1.2,
  }, // Codestrips
  {
    n: "#project-info",
    sw: 55,
    sh: 12,
    sx: 40,
    sy: 2.3,
    d: 0,
  }, // Dynamic info panel
];

// Position data for info div when in mobile gallery
var galleryInfoDataMob = [
  {
    n: "#project-info",
    sw: 55,
    sh: 10,
    sx: 40,
    sy: 4.6,
    d: 0,
  }, // Dynamic info panel for #gI1
  {
    n: "#project-info",
    sw: 51,
    sh: 10,
    sx: 3,
    sy: 20.8,
    d: 0,
  }, // Dynamic info panel for #gI2
  {
    n: "#project-info",
    sw: 55,
    sh: 14,
    sx: 40,
    sy: 36.2,
    d: 0,
  }, // Dynamic info panel for #gI3
  {
    n: "#project-info",
    sw: 53,
    sh: 10,
    sx: 3,
    sy: 54.4,
    d: 0,
  }, // Dynamic info panel for #gI4
  {
    n: "#project-info",
    sw: 55,
    sh: 10,
    sx: 42,
    sy: 69.5,
    d: 0,
  }, // Dynamic info panel for #gI5
  {
    n: "#project-info",
    sw: 55,
    sh: 10,
    sx: 3,
    sy: 87.5,
    d: 0,
  }, // Dynamic info panel for #gI6
];

// Multi column large background.
var galleryImageData = [
  {
    n: "#gI1",
    sw: 11.8,
    sh: 16.2,
    sx: 3.8,
    sy: 9.4,
    d: 0,
  }, // Rick's Garage Sale
  {
    n: "#gI2",
    sw: 11.3,
    sh: 16.2,
    sx: 40.2,
    sy: 10.1,
    d: -1,
  }, // Netmatters
  {
    n: "#gI3",
    sw: 12.3,
    sh: 16.4,
    sx: 83.5,
    sy: 9,
    d: -2,
  }, // Multi Api
  {
    n: "#gI4",
    sw: 11.6,
    sh: 16.2,
    sx: 47.2,
    sy: 44,
    d: 0,
  }, // Music Stache
  {
    n: "#gI5",
    sw: 11.6,
    sh: 16.6,
    sx: 26.3,
    sy: 74.1,
    d: -0.8,
  }, // blueJAM
  {
    n: "#gI6",
    sw: 11.8,
    sh: 16.7,
    sx: 71.3,
    sy: 76.3,
    d: -0.5,
  }, // Codestrips
  {
    n: "#project-info",
    sw: 37,
    sh: 26,
    sx: 3,
    sy: 42,
    d: 0,
  }, // Dynamic info panel
];

//-----------------------------------------Array of project data -----------------------------------------------
// t = Project title, d = Project description
//--------------------------------------------------------------------------------------------------------------

var projectData = [
  {
    t: "Rick's Garage Sale",
    d: "A high fidelity prototype of a web store, built in Axure.",
  },
  {
    t: "Netmatters",
    d: "A front end clone of the Netmatters corporate site using SCSS.",
  },
  {
    t: "Multi API",
    d: "Geonames APIs parsed dynamically to an HTML web page with AJAX, PHP and CURL.",
  },
  {
    t: "Music Stache",
    d: "HTML, CSS, JavaScript, and Handlebars to make a music store frontend.",
  },
  {
    t: "BLUEjam",
    d: "A REACT application for creating and storing custom Spotify playlists.",
  },
  {
    t: "Codestrips",
    d: "A comic strip app using Express, SQLite, and the SQLite3 node module.",
  },
];

// Calculate the size and position of an absolute element in relation to its responsive relative parent.
var scaleToBg = function scaleToBg(array) {
  // Calculate the width and height of the parent at the present time.
  var bgWidth = $("#gallery-background").width();
  var bgHeight = $("#gallery-background").height();
  var fSize; // Loop the array of images.

  $.each(array, function (key, value) {
    // Calculate the new size.
    var newWidth = (value.sw * bgWidth) / 100;
    var newHeight = (value.sh * bgHeight) / 100;

    // Calculate the new position.
    var newLeft = (value.sx * bgWidth) / 100;
    var newTop = (value.sy * bgHeight) / 100;

    // Calculate a corresponding font size for the info div.
    if ($(window).width() < 768) {
      fSize = bgWidth / 17;
    } else {
      fSize = bgWidth / 40;
    }

    // Assign the new values.
    $(value.n).width(newWidth);
    $(value.n).height(newHeight);
    $(value.n).css({
      top: newTop,
      left: newLeft,
      transform: "rotate(" + value.d + "deg)",
      fontSize: fSize,
    });
  });
};

// Create the paragraph element, load the typewriter plugin and pass the corresponding text to it.
var typeText = function typeText(obj) {
  // Create the HTML element to hold the description. Neccessary as we delete the element to stop the function on mouse out.
  $("#project-info").append('<p id="project-description"></p>');
  var tText = document.getElementById("project-description");
  var typewriter = new Typewriter(tText, {
    delay: 30,
    loop: false,
  });

  typewriter
    // Type the project title.
    .typeString(obj.t)
    .pauseFor(500)
    .deleteAll()
    // Type the project description.
    .typeString(obj.d)
    .pauseFor(1000)
    .deleteAll()
    // CTA.
    .typeString("Click the image to view!")
    .start();
};

// Mouse in event to load the correct info text, position info text correctly in mobile and apply hover styling.
$(".portfolio-image").mouseenter(function () {
  // Darken the background and all but event screen for readability.
  $("#gallery-background, .portfolio-image")
    .not("#" + this.id)
    .css("filter", "brightness(50%) grayscale(100%)");

  // Load the correct info position in mobile version.
  if ($(window).width() < 768) {
    if (this.id === "gI1") {
      galleryImageDataMob[6] = galleryInfoDataMob[0];
      scaleToBg(galleryImageDataMob);
    } else if (this.id === "gI2") {
      galleryImageDataMob[6] = galleryInfoDataMob[1];
      scaleToBg(galleryImageDataMob);
    } else if (this.id === "gI3") {
      galleryImageDataMob[6] = galleryInfoDataMob[2];
      scaleToBg(galleryImageDataMob);
    } else if (this.id === "gI4") {
      galleryImageDataMob[6] = galleryInfoDataMob[3];
      scaleToBg(galleryImageDataMob);
    } else if (this.id === "gI5") {
      galleryImageDataMob[6] = galleryInfoDataMob[4];
      scaleToBg(galleryImageDataMob);
    } else if (this.id === "gI6") {
      galleryImageDataMob[6] = galleryInfoDataMob[5];
      scaleToBg(galleryImageDataMob);
    }
  }

  // Set the info text and image hover filters.
  if (this.id === "gI1") {
    $("#" + this.id).css(
      "filter",
      "brightness(100%) grayscale(0%) drop-shadow(0 0 10px rgba(252, 252, 177, 0.7))"
    );
    typeText(projectData[0]);
  } else if (this.id === "gI2") {
    $("#" + this.id).css(
      "filter",
      "brightness(100%) grayscale(0%) drop-shadow(0 0 10px rgba(255, 96, 96, 0.7))"
    );
    typeText(projectData[1]);
  } else if (this.id === "gI3") {
    $("#" + this.id).css(
      "filter",
      "brightness(100%) grayscale(0%) drop-shadow(0 0 10px rgba(252, 252, 177, 0.7))"
    );
    typeText(projectData[2]);
  } else if (this.id === "gI4") {
    $("#" + this.id).css(
      "filter",
      "brightness(100%) grayscale(0%) drop-shadow(0 0 10px rgba(255, 96, 96, 0.7))"
    );
    typeText(projectData[3]);
  } else if (this.id === "gI5") {
    $("#" + this.id).css(
      "filter",
      "brightness(100%) grayscale(0%) drop-shadow(0 0 10px rgba(113, 88, 255, 0.7))"
    );
    typeText(projectData[4]);
  } else if (this.id === "gI6") {
    $("#" + this.id).css(
      "filter",
      "brightness(100%) grayscale(0%) drop-shadow(0 0 10px rgba(113, 88, 255, 0.7))"
    );
    typeText(projectData[5]);
  }
});

// Mouse out event to stop the plugin and clear the screen.
$(".portfolio-image").mouseleave(function () {
  // Remove the darkened background effect and reset the image filters.
  $("#gallery-background").css("filter", "brightness(100%)");
  $(".portfolio-image").css(
    "filter",
    "brightness(100%) grayscale(100%) drop-shadow(0 0 10px rgba(177, 177, 252, 0.7))"
  );
  // Delete the HTML element holding the description effectively stopping it.
  $("#project-description").remove();
});

// On page load or resize, choose gallery type based on screen size and call function to position elements.
$(window).on("load resize", function () {
  if ($(window).width() >= 768) {
    $("#gallery-background").css("max-height", "615px");
    $("#gallery-background").attr("src", "libs/img/galleryBackground.jpg");
    scaleToBg(galleryImageData);
  } else {
    $("#gallery-background").css("max-height", "2126px");
    $("#gallery-background").attr(
      "src",
      "libs/img/galleryBackground_small.jpg"
    );
    scaleToBg(galleryImageDataMob);
  }
});
