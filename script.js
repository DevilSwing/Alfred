$(document).ready(function(){
	
 	$('.js-plus').click(function(){
	 	showBubble(Number(getFirstWord()) + Number(getSecondWord()));
	 	if (checkInputData().isNumber) {
	 			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
	 		} else {
	 			 if (checkInputData().empty) {
	 			 	showBubble('ПУСТО');
	 			 } else {
	 			 	showBubble(getFirstWord() + ' ' + getSecondWord());
	 			 }
	 		}
	});

	 	$('.js-minus').click(function(){
	 	showBubble(Number(getFirstWord()) - Number(getSecondWord()));
	 	if (checkInputData().isNumber) {
	 			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
	 		} else {
	 			 if (checkInputData().empty) {
	 			 	showBubble('ПУСТО');
	 			 } else {
	 			 	showBubble(getFirstWord() + ' ' + getSecondWord());
	 			 }
	 		}
	});
	 	$('.js-multiply').click(function(){
	 	showBubble(Number(getFirstWord()) * Number(getSecondWord()));
	 	if (checkInputData().isNumber) {
	 			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
	 		} else {
	 			 if (checkInputData().empty) {
	 			 	showBubble('ПУСТО');
	 			 } else {
	 			 	showBubble(getFirstWord() + ' ' + getSecondWord());
	 			 }
	 		}
	});
	 	$('.js-divide').click(function(){
	 		if (checkInputData().isNumber) {
	 			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
	 		} else {
	 			 if (checkInputData().empty) {
	 			 	showBubble('ПУСТО');
	 			 } else {
	 			 	showBubble(getFirstWord() + ' ' + getSecondWord());
	 			 }
	 		}
	 	
	});

	// ====================================
	// ====================================

 	function showNotNumericData(){
 		if {getSecondWord() ==0
 		} else {
 			return{
 				isNumber:true;
 				showBubble('пенёк');
 			}
 		} 

 	}

	function checkInputData() {
		if ($.isNumeric(getFirstWord()) && $.isNumeric(getFirstWord())) {
			return {
				isNumber:true;
				
			};	
		} else if (getFirstWord() === '' && getSecondWord() === '') {
			return {
				isNumber:  false,
				empty: true
			};
		} else {
			return {
				isNumber:  false,
				empty: false
			};
		}
	}

	function getFirstWord() {
 		return $('.js-firstNumber').val();
 	};

	function getSecondWord() {
 		return $('.js-secondNumber').val();
 	};

	function showBubble(text) {
		$('.bubble').text(text);
		$('.bubble').addClass('-visible');
		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		}, 2000);
	}


});
// let firstWord = Number($('.js-firstNumber').val());
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