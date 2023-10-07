let result = document.getElementById('result');

function addDigit(digit) {
	if (result.value == '0') {
		result.value = digit;
	} else {
		result.value += digit;
	}
}

function addOperator(operator) {
	if (result.value.slice(-1) == '+' || result.value.slice(-1) == '-' || result.value.slice(-1) == '*' || result.value.slice(-1) == '/') {
		result.value = result.value.slice(0, -1) + operator;
	} else {
		result.value += operator;
	}
}

function clearResult() {
	result.value = '0';
}

function deleteDigit() {
	result.value = result.value.slice(0, -1);
	if (result.value == '') {
		result.value = '0';
	}
}

function calculateResult() {
	result.value = eval(result.value);
}