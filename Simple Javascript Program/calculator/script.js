let userInputs = [];
let userInputsNum = [];

//Fetch Numbers
function getNums() {
  let numOne = document.getElementById("num1").value;
  let numTwo = document.getElementById("num2").value;
  userInputs.push(numOne, numTwo);

  //string to  int of userInput Array
  userInputs.forEach((num) => {
    userInputsNum.push(Number(num));
  });

  return userInputsNum;
}

//Clear Input Fields
function clearNums() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

//Reset Num Arrays
function resetCal() {
  userInputs.length = 0;
  userInputsNum.length = 0;
  clearNums();
}
//Reset Button
function resetBtn() {
  document.getElementById("results").textContent = 0;
}

//Addition
function numAddition() {
  getNums();
  let results = userInputsNum[0] + userInputsNum[1];
  console.log(results);
  clearNums();
  resetCal();
  return (document.getElementById("results").textContent = results);
}

//subtraction
function numSubs() {
  getNums();
  let results = userInputsNum[0] - userInputsNum[1];
  console.log(results);
  clearNums();
  resetCal();
  return (document.getElementById("results").textContent = results);
}

//multiplication
function numMulti() {
  getNums();
  let results = userInputsNum[0] * userInputsNum[1];
  console.log(results);
  clearNums();
  resetCal();
  return (document.getElementById("results").textContent = results);
}

//division
function numDivision() {
  getNums();
  let results = userInputsNum[0] / userInputsNum[1];
  console.log(results);
  clearNums();
  resetCal();
  return (document.getElementById("results").textContent = results);
}
