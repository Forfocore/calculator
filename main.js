$(document).ready(function() {

let calculator = {
	numberA:null,
	numberB:null,
	func:null,
	output:null,
	enter:null

}

$('#1').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 1;
		calculator.output = 1;
		}
	else {
		calculator.numberB = 1;
		calculator.output = 1;
	}
	output()
});

$('#2').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 2;
		calculator.output = 2;
		}
	else {
		calculator.numberB = 2;
		calculator.output = 2;
	}
	output()

});

$('#3').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 3;
		calculator.output = 3;
		}
	else {
		calculator.numberB = 3;
		calculator.output = 3;
	}
	output()

});

$('#4').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 4;
		calculator.output = 4;
		}
	else {
		calculator.numberB = 4;
		calculator.output = 4;
	}
	output()

});

$('#5').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 5;
		calculator.output = 5;
		}
	else {
		calculator.numberB = 5;
		calculator.output = 5;
	}
	output()

});

$('#6').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 6;
		calculator.output = 6;
		}
	else {
		calculator.numberB = 6;
		calculator.output = 6;
	}
	output()

});

$('#7').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 7;
		calculator.output = 7;
		}
	else {
		calculator.numberB = 7;
		calculator.output = 7;
	}
	output()

});

$('#8').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 8;
		calculator.output = 8;
		}
	else {
		calculator.numberB = 8;
		calculator.output = 8;
	}
	output()

});

$('#9').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 9;
		calculator.output = 9;
		}
	else {
		calculator.numberB = 9;
		calculator.output = 9;
	}
	output()

});

$('#0').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = 0;
		calculator.output = 0;
		}
	else {
		calculator.numberB = 0;
		calculator.output = 0;
	}
	output()

});


$('#plus').click(function() {
	console.log('plus');
	calculator.func = 'plus'

});

$('#enter').click(function() {
	console.log('enter');
	if (calculator.func === 'plus') {
		calculator.enter = calculator.numberA + calculator.numberB;
		calculator.output =calculator.enter;
	}
	output();
});

function output() {
	$('#output').text(calculator.output);


}



});