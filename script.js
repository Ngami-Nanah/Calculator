class Calculator {
  constructor(previousOperandTextElement, currentoperandTextElement) {
    this.previous0perandTextElement = previous0perandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
this.currentOperand = this.currentoperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = number this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.currentOperand !== '') {
      thia.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperandTextElement
this.currentOperand = ''
  }

  compute() {
let computation
const prev = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)
if (isNan(prev || isNan(current)) return
switch (this.operation) {
  case '+':
  computation = prev + current
  break
  case '-'
  computation = prev - current
  break
  case '*'
  computation = prev * current
  break
  case '÷'
  computation = prev / current
  break
  default:
  return
}
this.currentOperand= computation
this.operation = undefined
this.previousOperand = ''
  }

getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parsefloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNan(IntegerDigits)) {
    integerDisplay = ''
  } else {
    IntegerDisplay intergerDigits.toLocalString('en',{maximumfractionDigits: 0})
  }
  if (decimalDigits !=null) {
    return '$(IntegerDisplay).$(decimalDigits)'
  } else {
    return integerDisplay
  }
}

  updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperand
  if (this.Operation != null) {
    this.previous0perandTextElement.InnerText =
    '${this.getDisplayNumber(this.previousOperand)} ${this.Operation}
  } else {
    this.previous0perandTextElement.InnerText = ''
  }
  }
}



const numberButtons = document.querrySelectorAll('[data-number]')
const operationButtons = document.querrySelectorAll('[data-operation]')
const equalsButton = document.querrySelector('[data-equals]')
const deleteButton = document.querrySelector('[data-delete]')
const allClearButton = document.querrySelector('[data-allclear]')
const previous0perandTextElement = document.querrySelector('[data-previous-operand]')
const currentOperandTextElement = document.querrySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click, () =>' {
    calculator.appendNumber(Button.InnerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click, () =>' {
    calculator.appendOperation(Button.InnerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clean()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})
