let currentResult = 0;
let enteredlog=[];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function login(operation,previousres,entered,final){
    const logobj ={  //form here the object starts
        operation: operation,
        previous: previousres,
        newinput: entered,
        result: final,
   }; // object ends with semicolons

     enteredlog.push(logobj); // we push the object in the array to be stored
     console.log(logobj.operation);//this will show a particular content from the object.
     console.log(enteredlog);//now we show the object on the console panel
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  enteredlog.push(`+${enteredNumber}`);// in array also giving the sign in all;
  login('ADD',initialResult,enteredNumber,currentResult);
  //console.log(enteredlog);//to show on the console panel
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  enteredlog.push(`-${enteredNumber}`);
  //use of object for this one
  login('SUBTRACT',initialResult,enteredNumber,currentResult);

}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  enteredlog.push(`*${enteredNumber}`);
  login('MULTIPLY',initialResult,enteredNumber,currentResult);
  //console.log(enteredlog);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  enteredlog.push(`/${enteredNumber}`);
  login('DIVISION',initialResult,enteredNumber,currentResult);
  //console.log(enteredlog);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);