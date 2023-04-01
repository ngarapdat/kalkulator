const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number => {
    calculatorScreen.value = number
})

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNummber)
    })
})
let prevNumber = ''
let calculationOperator = ''
let currentNummber = '0'

const inputNumber = (number) => {
    if (currentNummber === '0') {
        currentNummber = number
    } else {
        currentNummber += number
    }

}
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) => {
    if (calculationOperator === '') {
         prevNumber = currentNummber
    }
   
    calculationOperator = operator
    currentNummber = '0'

}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNummber)

})
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result =parseFloat(prevNumber) + parseFloat(currentNummber)
            break
        case '-':
            result = prevNumber - currentNummber
            break
        case '*':
            result = prevNumber * currentNummber
            break
        case '/':
            result = prevNumber / currentNummber
            break
        default:
            break
    }
    currentNummber = result
    calculationOperator=''
}
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNummber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNummber='0'
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNummber)
})
inputDecimal = (dot) => {
    if (currentNummber.includes('.')) {
        return
    } else {
        currentNummber += dot
    }
}