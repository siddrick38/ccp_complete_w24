// CCP javascript

let pause_button = document.querySelector("#pause-button");
let reverse_button = document.querySelector("#reverse-button");
let gallery_icons = document.querySelectorAll(".icon-gallery img");
let animation_dir = "normal";

// checks if the animation is running or paused
pause_button.addEventListener("click", function () {
  if (this.innerHTML === "Pause") {
    gallery_icons.forEach(function (icon) {
      icon.style.animationPlayState = "paused";
    });
    this.innerHTML = "Play";
  } else {
    gallery_icons.forEach(function (icon) {
      icon.style.animationPlayState = "running";
    });
    this.innerHTML = "Pause";
  }
});

// check if the animation direction is normal or reverse
reverse_button.addEventListener("click", function () {
  if (animation_dir == "normal") {
    gallery_icons.forEach(function (icon) {
      icon.style.animationDirection = "reverse";
    });
    animation_dir = "reverse";
  } else {
    gallery_icons.forEach(function (icon) {
      icon.style.animationDirection = "normal";
    });
    animation_dir = "normal";
  }
});
