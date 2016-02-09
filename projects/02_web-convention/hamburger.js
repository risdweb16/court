$(document).ready(function() {

	$('.dropDown').hide();
	$('.info').hide();

	$('.one').click(function() {
		$('.dropDown').toggle('slide'); 
	});

	$('.dropDown').click(function() {
		$('.info').slideToggle('slow');
	});

	$('.dropDown').click(function() {
		$('.dropDown').toggleClass('borderDrop');
	});

	$('.one').click(function() {
		$('.one').toggleClass('borderContainer');
	});


	$('.dropDownTwo').hide();
	$('.infoTwo').hide();

	$('.two').click(function() {
		$('.dropDownTwo').toggle('slide'); 
	});

	$('.dropDownTwo').click(function() {
		$('.infoTwo').slideToggle('slow');
	});

	$('.dropDownTwo').click(function() {
		$('.dropDownTwo').toggleClass('borderDrop');
	});

	$('.two').click(function() {
		$('.two').toggleClass('borderContainer');
	});

});