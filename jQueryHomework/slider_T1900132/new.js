$(document).ready(function() {
  divWidth = $("#sliderBoard").width();
  imgCount = $(".image").length;

  for (let i = 0; i < imgCount; i++) {
    $("#contentButton").append("<li></li>");
    $("#contentButton li:first-child").addClass("clickMe");
  }

  $("#content li").width(divWidth);
  $("#content").width(divWidth * imgCount);

  // Resizing 功能
  $(window).resize(() => {
    divWidth = $("#sliderBoard").width();
    imgCount = $(".image").length;
    $("#content li").width(divWidth);
    $("#content").width(divWidth * imgCount);
  });

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

  // 自動移動
  setInterval(() => {
    index += 1;
    $("#contentButton li").removeClass("clickMe");
    $("#contentButton li:nth-child(" + ((index % imgCount) + 1) + ")").addClass(
      "clickMe"
    );
    $("#content").animate(
      {
        left: divWidth * (index % imgCount) * -1
      },
      500
    );
  }, 3000);
});
