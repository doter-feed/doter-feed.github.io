$(document).ready(function() { 
	$('#waitlist-thanks').hide();

	$("#join-waitlist").submit(function(event) {
		  event.preventDefault();
		  var $form = $(this),
		    url = $form.attr('action');

		  $('#btn-betalist').text('Loading..');

		  var posting = $.post(url, {
		    email: $('#email').val()
		  });
		  
		  /* Alerts the results */
		  posting.done(function(data) {
		    $('#waitlist-thanks').show();
		    $("#join-waitlist").hide();
		  });
		  posting.fail(function() {
		  	$('#waitlist-thanks').show();
		    $('#waitlist-thanks').text('failed');
		  });
	});
});