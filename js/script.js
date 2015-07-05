$(document).ready(function() {

	$('body').scrollspy({ target: '.navbar' }); /*To highlight current position on the navbar while scrolling*/

	$('#form').on('submit', function(ev) {

		// prevent from auto-submitting  
		ev.preventDefault();
		ev.stopPropagation();
        // if all is good, then submit.
		sendData();

	});

    $(".nav li a").on("click", function(){
		// so that the clicked one gets highlighted
		$(".nav li").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
});