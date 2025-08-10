export default class Calculator {
	constructor(
		primaryOperandDisplay,
		secondaryOperandDisplay,
		operationDisplay
	) {
		this.primaryOperandDisplay = primaryOperandDisplay;
		this.secondaryOperandDisplay = secondaryOperandDisplay;
		this.operationDisplayDisplay = operationDisplay;
	}

	get primaryOperand() {
		return parseFloat(this.primaryOperandDisplay.dataset.value);
	}
	set primaryOperand(value) {
		this.primaryOperandDisplay.dataset.value = value ?? '';
		this.primaryOperandDisplay.textContent = displayNumber(value) ?? '';
	}
	get secondaryOperand() {
		return parseFloat(this.secondaryOperandDisplay.dataset.value);
	}
	set secondaryOperand(value) {
		this.secondaryOperandDisplay.dataset.value = value ?? '';
		this.secondaryOperandDisplay.textContent = displayNumber(value) ?? '';
	}
	set operation(value) {
		this.secondaryOperandDisplay.textContent = value ?? '';
	}

	addDigit(digit) {
		if (digit == '.' && this.primaryOperandDisplay.dataset.value.includes('.'))
			return;
		if (this.primaryOperand === 0) {
			this.primaryOperand = digit;
			return;
		}
		this.primaryOperand = this.primaryOperandDisplay.dataset.value + digit;
	}
	removeDigit() {
		const numberString = this.primaryOperandDisplay.dataset.value;

		if (numberString.length < 1) {
			this.primaryOperand = 0;
			return;
		}

		this.primaryOperand = numberString.substring(0, numberString.length - 1);
	}

	clear() {
		this.primaryOperand = 0;
		this.secondaryOperand = null;
		this.operation = null;
	}
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en');

function displayNumber(number) {
	const stringNumber = number?.toString() || '';
	if (stringNumber === '') return '';
	const [integer, decimal] = stringNumber.split('.');
	const formattedInteger = NUMBER_FORMATTER.format(integer);
	if (decimal == null) return formattedInteger;
	return formattedInteger + '.' + decimal;
}
