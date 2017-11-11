$('div.search').on('click', '#searchbutton', () => {
	$('#searchplace').css('display', 'inline-flex');
});

$('.close-btn').on('click', () => {
    $('#searchplace').css('display', 'none');
});