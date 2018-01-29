$(document).ready(function(){
	

	var AlfredSpeech = 'ГДЕ БЭТМЕН??НАЙДИ МНЕ ЕГО БЭЙН!!'


$('.js-showHide').click(function(){
	$('.Alfred').toggleClass('-invisible');
});

$('.js-hello').click(function(){
$('.bubble').text(AlfredSpeech);

});



});