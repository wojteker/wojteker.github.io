$(document).ready(function(){
	$(this).scrollTop(0);
	$("#circle").click(function(){
		$("#circle_contener").toggleClass("click");
		$("#circle").toggleClass("click");
		$("#main_header").toggleClass("click");
		$("#name").toggleClass("click");
		$("#header_content").toggleClass("click");
		$("#main_content").toggleClass("click");
		$("#name_desktop").toggleClass("click");
		$(".sections").toggleClass("click");

		$("body").css("overflow", function(_,overflow){ 
			return overflow == "auto" ? "hidden" : "auto";
		});
	})
	$("#circle_scroll").click(function(){
		$("#line").toggleClass("click");
		$("#circle_scroll").toggleClass("click");
		$(".bubbles").toggleClass("click");
		$(".bubbles").toggleClass("off");
	})
	
	$("#go_up").click(function(){
		$(".bubbles").removeClass("click");
		$("#circle_scroll").removeClass("click");
	})

	$(window).scroll(function(){
		if($(this).scrollTop()>0) {
			$("#main_header").addClass("scroll");
			$("#circle_contener").addClass("scroll");
			$("#circle").addClass("scroll");
			$(".circle").addClass("scroll");
			$("#circle_scroll").addClass("scroll");
		}
		else {
			$("#main_header").removeClass("scroll");
			$("#circle_contener").removeClass("scroll");
			$("#circle").removeClass("scroll");
			$("#circle_scroll").removeClass("scroll");
			$("#circle_scroll").removeClass("click");
			$("#line").removeClass("click");
			$(".bubbles").removeClass("click");
		}
	})
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-80
        }, 1000);
        return false;
      }
    }
  });
});