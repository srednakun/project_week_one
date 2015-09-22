$(document).ready(function () {

    setInterval(function() {
      $("#carousel ul").animate({marginLeft:'-450px'},1000,function() {

        $(this).find("li:last").after($(this).find("li:first"));
        $(this).css({marginLeft:0});
      });



  // $(".c1-right").on("click", function(e) {
  //   var activeImage = $(".c1-image-shown");
  //   var nextImage = activeImage.next();

  //     if(nextImage.length == 0) {
  //       nextImage = $(".carousel-2-inner img").first();
  //     };

  //   activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index",-10);;
  //   nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index",20);
  //   $(".carousel-2-inner img").not([activeImage, nextImage]).css("z-index",1);
  //   e.preventDefault();
  //   console.log("poop")
  // });

  // $(".c1-left").on("click", function(e){
  //   var activeImage = $(".c1-image-shown");
  //   var nextImage = activeImage.prev();

  //   if(nextImage.length == 0) {
  //     nextImage = $('.carousel-2-inner img').last();
  //   }
  //   activeImage.removeClass("c1-image-shown").addClass("c1-image-hidden").css("z-index", -10);
  //   nextImage.addClass("c1-image-shown").removeClass("c1-image-hidden").css("z-index", 20);
  //   $('.carousel-2-inner img').not([activeImage, nextImage]).css("z-index", 1);
  //   e.preventDefault();
  //   console.log("yay")
  // })

});
