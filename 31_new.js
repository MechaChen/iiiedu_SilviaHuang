$(document).ready(function() {
  divWidth = $("#sliderBoard").width();
  imgCount = $(".image").length;

  for (let i = 0; i < imgCount; i++) {
    $("#contentButton").append("<li></li>");
    $("#contentButton li:first-child").addClass("clickMe");
  }

  $("#content li").width(divWidth);
  $("#content").width(divWidth * imgCount);

  index = 0;
  $("#contentButton li").click(function() {
    index = $(this).index();
    $("#contentButton li").removeClass("clickMe");
    $(this).addClass("clickMe");
    $("#content").animate(
      {
        left: divWidth * index * -1
      },
      500 
    );
  });
});
