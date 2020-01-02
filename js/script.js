
// $(window).resize( function() {
//    location.reload();
// } ) ;







$(document).ready(function() {

   var windowWidth = $(window).width();

   //
   $("#main-btn-js").click(function() {
      $(this).find(".fas").addClass("hidden-js");

      if( $("#main-list-js").is(":visible")) {
         $("#main-list-js").slideUp();
         $(this).find(".menu-icon__minus").removeClass("visible-js");
         $(this).find(".menu-icon__plus").addClass("visible-js");

      } else {

         $("#main-list-js").slideDown();
         $(this).find(".menu-icon__minus").addClass("visible-js");
         $(this).find(".menu-icon__plus").removeClass("visible-js");
      }

   });

   $("#nav-btn-js").click(function() {
      $(this).find(".fas").addClass("hidden-js");

      if( $("#nav-list-js").is(":visible")) {
         $("#nav-list-js").slideUp("fast");
         $(this).find(".menu-icon__minus").removeClass("visible-js");
         $(this).find(".menu-icon__plus").addClass("visible-js");

      } else {

         $("#nav-list-js").slideDown("fast");
         $(this).find(".menu-icon__minus").addClass("visible-js");
         $(this).find(".menu-icon__plus").removeClass("visible-js");
      }

   });


   $(".element-btn-js").click(function() {
      $(this).find(".fas").addClass("hidden-js");

      if( $(this).closest("ul").find(".element-item-js").is(":visible")) {
         $(this).closest("ul").find(".element-item-js").slideUp("fast");
         $(this).find(".menu-icon__minus").removeClass("visible-js");
         $(this).find(".menu-icon__plus").addClass("visible-js");

      } else {

         $(this).closest("ul").find(".element-item-js").slideDown("fast");
         $(this).find(".menu-icon__minus").addClass("visible-js");
         $(this).find(".menu-icon__plus").removeClass("visible-js");
      }

   });


   //console.log($(window).width());
   if (windowWidth > 768 ){

      var navpos = $('#mainnav').offset();
      //console.log(navpos.top);
      $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
         $('#mainnav').addClass('navbar-fixed-top');
         }
         else {
           $('#mainnav').removeClass('navbar-fixed-top');
         }
      });
   }


});//end ready
