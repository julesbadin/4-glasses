console.log("Coucou");

var logoElement = $("footer .logo");

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $(logoElement).addClass("show");
  } else if (
    $(logoElement).hasClass("show") &&
    $(window).scrollTop() + $(window).height() > $(document).height() - 150
  ) {
    $(logoElement).removeClass("show");
  }
});

TweenLite.to(".leftImg1", 2.5, { ease: Sine.easeOut, x: 400 }).delay(1);
TweenLite.to(".rightText1", 2.5, { ease: Sine.easeOut, x: -180 }).delay(2);

TweenLite.to(".leftText1", 2.5, { ease: Sine.easeOut, x: 180 }).delay(3);
TweenLite.to(".rightImg1", 2.5, { ease: Sine.easeOut, x: -400 }).delay(2);

TweenLite.to(".leftImg2", 2.5, { ease: Sine.easeOut, x: 400 }).delay(3);
TweenLite.to(".rightText2", 2.5, { ease: Sine.easeOut, x: -180 }).delay(4);
