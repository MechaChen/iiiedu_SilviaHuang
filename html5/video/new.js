function init() {
  myMovie = document.getElementById("myMovie");
  playButton = document.getElementById("playButton");
  stopButton = document.getElementById("stopButton");
  defaultBar = document.getElementById("defaultBar");
  progressBar = document.getElementById("progressBar");

  const hello = parseInt(window.getComputedStyle(defaultBar).width);

  playButton.addEventListener("click", playOrPause);
  myMovie.addEventListener("click", playOrPause);
  stopButton.addEventListener("click", stopTheMovie);
  defaultBar.addEventListener("click", clickedBar);

  function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
      myMovie.pause();
      playButton.innerText = "play";
    } else {
      myMovie.play();
      playButton.innerText = "pause";
      setInterval(update, 300);
    }
  }

  function update() {
    if (!myMovie.ended) {
      progressBar.style.width =
        (560 / myMovie.duration) * myMovie.currentTime + "px";
    } else {
      progressBar.style.width = 0;
      playButton.innerText = "play";
    }
  }

  function stopTheMovie() {}
  function clickedBar(e) {
    let mouseX = e.clientX - defaultBar.offsetLeft;
    progressBar.style.width = mouseX + "px";
    myMovie.currentTime =
      (mouseX / parseInt(window.getComputedStyle(defaultBar).width)) *
      myMovie.duration;
  }
}

window.onload = init;
