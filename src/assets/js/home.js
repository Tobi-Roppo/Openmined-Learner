$("#header").prepend(
  '<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>'
);

$("#menu-icon").on("click", function () {
  $("nav").slideToggle();
  $(this).toggleClass("active");
});

/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-animation to elements.
 */

(function ($) {
  var speed = 2000;
  var container = $(".display-animation");
  container.each(function () {
    var elements = $(this).children();
    elements.each(function () {
      var elementOffset = $(this).offset();
      var offset = elementOffset.left * 0.8 + elementOffset.top;
      var delay = parseFloat(offset / speed).toFixed(2);
      $(this)
        .css("-webkit-animation-delay", delay + "s")
        .css("-o-animation-delay", delay + "s")
        .css("animation-delay", delay + "s")
        .addClass("animated");
    });
  });
})(jQuery);
