$(document).ready(function() {
  var currentSize = parseInt($("#names li").css("fontSize"));
  //   console.log(currentSize);

  $("#smallButton").click(function() {
    changeSize("small");
  });
  $("#bigButton").click(function() {
    changeSize("big");
  });

  function changeSize(BrS) {
    // var newSize;
    if (BrS == "small") {
      newSize = currentSize - 1;
      //   currentSize -= 1;
    } else if (BrS == "big") {
      newSize = currentSize + 1;
      //   currentSize += 1;
    }
    // $("#names li").css("fontSize", `${currentSize}px`);
    $("#names li").css("fontSize", `${newSize}px`);
  }
});
