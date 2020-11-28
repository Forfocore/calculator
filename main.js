$(document).ready(function() {

let calculator = {
	numberA:null,
	numberB:null,
	func:null,
	output:null,
	enter:null

}

$('#1').click(function() {
	number(1)
	output()
});

$('#2').click(function() {
	number(2)
	output()

});

$('#3').click(function() {
	number(3)
	output()

});

$('#4').click(function() {
	number(4)
	output()

});

$('#5').click(function() {
	number(5)
	output()

});

$('#6').click(function() {
	number(6)
	output()

});

$('#7').click(function() {
	number(7)
	output()

});

$('#8').click(function() {
	number(8)
	output()

});

$('#9').click(function() {
	number(9)
	output()

});

$('#0').click(function() {
	number(0)
	output()

});


$('#plus').click(function() {
	console.log('plus');
	calculator.func = 'plus'

});

$('#min').click(function() {
	console.log('min');
	calculator.func = 'min'

});

$('#del').click(function() {
	console.log('del');
	calculator.func = 'del'

});

$('#umn').click(function() {
	console.log('umn');
	calculator.func = 'umn'

});

$('#enter').click(function() {
	console.log('enter');
	if (calculator.func === 'plus') {
		calculator.enter = calculator.numberA + calculator.numberB;
		calculator.output =calculator.enter;
	}

	if (calculator.func === 'min') {
		calculator.enter = calculator.numberA - calculator.numberB;
		calculator.output =calculator.enter;
	}

	if (calculator.func === 'del') {
		calculator.enter = calculator.numberA / calculator.numberB;
		calculator.output =calculator.enter;
	}

	if (calculator.func === 'umn') {
		calculator.enter = calculator.numberA * calculator.numberB;
		calculator.output =calculator.enter;
	}

	output();
});


function number (number) {
	if (calculator.numberA === null) {
		calculator.numberA = number;
		calculator.output = number;
		}

	else {
		calculator.numberB = number;
		calculator.output = number;
	}

}


function output() {
	$('#output').text(calculator.output);


}



});