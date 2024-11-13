/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let firstNumber = ''
let secondNumber = ''
let mathOperator = null
let result = 0

/*------------------------ Cached Element References ------------------------*/

const displayElement = document.querySelector('.display')
const buttonsElement = document.querySelectorAll('.button')
const equalButtonElement = document.getElementById('equal')
const clear = document.getElementById("clear")

/*-------------------------------- Functions --------------------------------*/

const display = (event) => {
    if (event.target.classList.contains('number'))  {
        if (mathOperator === null){
            firstNumber += event.target.innerText
            displayElement.innerText = firstNumber
        } else {
            secondNumber += event.target.innerText
            displayElement.innerText = firstNumber + mathOperator + secondNumber
        }
    } else if (event.target.classList.contains('operator'))  {
        let selectedOperator = event.target.classList.contains('operator')
        if (selectedOperator !== 'C') {
            if (firstNumber !== '') {
                mathOperator = event.target.innerText
                displayElement.innerText = firstNumber + mathOperator
                calculatorFunction()
            }
        } else {
            displayElement.innerText = ''
            firstNumber = ''
            secondNumber = ''
            mathOperator = null
            result = 0
        }
    } else if (equalButtonElement)  {
        calculatorFunction()
    } 
}

const clearFunction = () => document.location.reload()

const calculatorFunction = () => {
    if (firstNumber !== '' && secondNumber !== '' && mathOperator) {
        let num1 = parseFloat(firstNumber)
        let num2 = parseFloat(secondNumber)

        if (mathOperator === '+') {
            result = num1 + num2
            displayElement.innerText = mathOperator
        } else if (mathOperator === '-') {
            result = num1 - num2
        } else if (mathOperator === '*') {
            result = num1 * num2
        } else if (mathOperator === '/') {
            result = num1 / num2
        } 

        displayElement.innerText = result
    }
  }

/*----------------------------- Event Listeners -----------------------------*/

buttonsElement.forEach((button) => {
    button.addEventListener('click', display)
})

clear.addEventListener("click", clearFunction)