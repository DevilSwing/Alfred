$(document).ready(function(){
	
 $('.js-count').click(function(){
showBubble($('.js-firstNumber').val() + $('.js-secondNumber').val());




});

function showBubble(text) {
			$('.bubble').text(text);
			$('.bubble').addClass('-visible');
			setTimeout(function() {
				$('.bubble').removeClass('-visible');
			}, 2000);
}


});
// 	 var inputText = $('.js-firstNumber').val();

// 		if (inputText === "") {
// 				showBubble("Введи сюда что-нибудь");
// 		} else {
// 				showBubble(inputText);
// 		}
/*var AlfredSpeech = 'ГДЕ БЭТМЕН??'


$('.js-showHide').click(function(){
	$('.Alfred').toggleClass('-invisible');
});

$('.js-hello').click(function(){
$('.bubble').text(AlfredSpeech);

});

$('.js-bubble').click(function(){
	$('.bubble').toggleClass('-invisible');
});*/