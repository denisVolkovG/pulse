$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".move-up").fadeIn();
    } else {
      $(".move-up").fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});
