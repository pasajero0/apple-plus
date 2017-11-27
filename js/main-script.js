$('div.search').on('click', '#searchbutton', () => {
	$('#searchplace').css('display', 'inline-flex');
});

$('.close-btn').on('click', () => {
    $('#searchplace').css('display', 'none');
});

const animateNumb = () => {
		$('#animNumb3')
		.prop('number', 0)
		.animateNumber(
		{
		  number: 3
		},
		5000
		);

		$('#animNumb60')
		.prop('number', 0)
		.animateNumber(
		{
		  number: 60
		},
		5000
		);

		$('#animNumb150')
		.prop('number', 0)
		.animateNumber(
		{
		  number: 150
		},
		5000
		);
};

var numberAnimationStop = false;

$(window).scroll(function(){
	const st = $(this).scrollTop();
	if (st >= 270 && !numberAnimationStop){
		animateNumb();
		numberAnimationStop = true;
	}
});