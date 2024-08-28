$(function () {
  //이 달의 BEST
  $(".bestpic_wrap").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $(".left_slideicon"),
    nextArrow: $(".right_slideicon"),
    arrows: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    dots: true,
  });
  //PHOTO
  $(".pic_wrap").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $(".left_slideicon2"),
    nextArrow: $(".right_slideicon2"),
    // autoplay: true,
    // autoplaySpeed: 4000,
    // speed: 1000,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "120px",
  });
});
