var executed = false;
var expressionArray= [];
var decStatus = false;
var piStatus = false;
var decInserted = false;
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var opInserted = false;
var lastSym = false;
//var firstCondition = false;
//var secondCondition = false;
function insert(num){
  if(executed == false){
  document.calc.display.value=""
  executed = true;
}
if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expressionArray[expressionArray.length - 1] == '*' || expressionArray[expressionArray.length - 1] == '/' || expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-'){
    expressionArray.splice(expressionArray.length -1 , 1)
    expressionArray.push(num)
    opInserted = true;
    console.log("raw array" , expressionArray)
  }
}







  if(opInserted == false){
    document.calc.display.value = document.calc.display.value + num;
    expressionArray.push(num)
      console.log("joined array" , expressionArray.join(''))
  }

  if(Number(document.calc.display.value.length) <= 10){
    document.calc.display.value = document.calc.display.value
  }else{
    document.getElementById("buttonNum0").disabled = true;
    document.getElementById("buttonNum1").disabled = true;
    document.getElementById("buttonNum2").disabled = true;
    document.getElementById("buttonNum3").disabled = true;
    document.getElementById("buttonNum4").disabled = true;
    document.getElementById("buttonNum5").disabled = true;
    document.getElementById("buttonNum6").disabled = true;
    document.getElementById("buttonNum7").disabled = true;
    document.getElementById("buttonNum8").disabled = true;
    document.getElementById("buttonNum9").disabled = true;
    document.getElementById("decimalButton").disabled = true;
    document.getElementById("piButton").disabled = true;
  }

  if(decInserted == false){
 let commaInput = Number(document.calc.display.value.split(",").join("")).toLocaleString();
 document.calc.display.value = commaInput;
  }
}
function clearCalc(){
  lastSym = false;
  opInserted = false
  document.calc.display.value=0;
   i = i = 7;
  executed = false;
  decStatus = false;
  piStatus = false;
  decInserted = false;
  console.log("status", lastSym, opInserted, executed, decStatus, piStatus, decInserted)
    expressionArray = [];
    document.getElementById("buttonNum0").disabled = false;
    document.getElementById("buttonNum1").disabled = false;
    document.getElementById("buttonNum2").disabled = false;
    document.getElementById("buttonNum3").disabled = false;
    document.getElementById("buttonNum4").disabled = false;
    document.getElementById("buttonNum5").disabled = false;
    document.getElementById("buttonNum6").disabled = false;
    document.getElementById("buttonNum7").disabled = false;
    document.getElementById("buttonNum8").disabled = false;
    document.getElementById("buttonNum9").disabled = false;
    document.getElementById("piButton").disabled = false;
    document.getElementById("decimalButton").disabled = false;
}
function clearOnOp(){
  opInserted = false
   i = i = 7;
  symbolStatus = false
  firstPercent = false;
  document.calc.display.value= 0
  executed = false;
  decStatus = false;
  piStatus = false;
  decInserted = false;
  document.getElementById("buttonNum0").disabled = false;
  document.getElementById("buttonNum1").disabled = false;
  document.getElementById("buttonNum2").disabled = false;
  document.getElementById("buttonNum3").disabled = false;
  document.getElementById("buttonNum4").disabled = false;
  document.getElementById("buttonNum5").disabled = false;
  document.getElementById("buttonNum6").disabled = false;
  document.getElementById("buttonNum7").disabled = false;
  document.getElementById("buttonNum8").disabled = false;
  document.getElementById("buttonNum9").disabled = false;
 document.getElementById("piButton").disabled = false;
  document.getElementById("decimalButton").disabled = false;
}
function equal(){
  symbolStatus = false
  firstPercent = false;
  piStatus = false;
  lastSym = true;
  document.getElementById("decimalButton").disabled = true;
  document.getElementById("buttonNum0").disabled = true;
  document.getElementById("buttonNum1").disabled = true;
  document.getElementById("buttonNum2").disabled = true;
  document.getElementById("buttonNum3").disabled = true;
  document.getElementById("buttonNum4").disabled = true;
  document.getElementById("buttonNum5").disabled = true;
  document.getElementById("buttonNum6").disabled = true;
  document.getElementById("buttonNum7").disabled = true;
  document.getElementById("buttonNum8").disabled = true;
  document.getElementById("buttonNum9").disabled = true;
  document.getElementById("piButton").disabled = true;
  let calcAnswer= eval(expressionArray.join(''));
    expressionArray = [];
    expressionArray = [calcAnswer];
    console.log("evaluated raw", calcAnswer)
  if(calcAnswer > 999999999 || calcAnswer < -999999999){
    document.calc.display.value = calcAnswer.toExponential(9)
  }else{
    document.calc.display.value=calcAnswer.toLocaleString("en")
  }

  if(document.calc.display.value === "Infinity" || document.calc.display.value === "∞" || document.calc.display.value === "NaN") {
    document.calc.display.value = "ERROR";
  }
}
function numberNegation(){
  document.calc.display.value = document.calc.display.value.split(",").join('')
  document.calc.display.value = document.calc.display.value * -1
  document.calc.display.value = Number(document.calc.display.value.split(",").join('')).toLocaleString();
    expressionArray[expressionArray.length - expressionArray.length ]= expressionArray[expressionArray.length - expressionArray.length] *-1
    console.log("negatedNumber" , expressionArray)
}

function numberPercentage(){
  document.calc.display.value = document.calc.display.value.split(",").join("")
if(lastSym = false){
  if(firstPercent == false){
    let numsCount = document.calc.display.value.length
    numsCount = numsCount -1
    console.log("nums", numsCount)
  let amountToBeRemoved = expressionArray.length - numsCount
  while(expressionArray.length >= amountToBeRemoved){
    expressionArray.pop();
  }
  document.calc.display.value = document.calc.display.value / 100
expressionArray[amountToBeRemoved] = document.calc.display.value
  console.log(expressionArray)
  firstPercent = true;
}else{
  let numsCount2 = document.calc.display.value.length

  numsCount2 = numsCount2 - i
  console.log("nums2", numsCount2)

  let amountToBeRemoved2 = expressionArray.length - numsCount2
expressionArray.splice(expressionArray.length -1)
  document.calc.display.value = document.calc.display.value / 100
  expressionArray[amountToBeRemoved2] = document.calc.display.value

  if(document.calc.display.value<= 0.9999999){
    let expon= Number(document.calc.display.value)
    console.log(typeof expon);
    document.calc.display.value = expon.toExponential(9)
  }
  i = i+2;
  console.log("percentaged array", expressionArray)
}
}else{
  document.calc.display.value = document.calc.display.value / 100
  expressionArray = []
  expressionArray.push(document.calc.display.value)
  let expon= Number(document.calc.display.value)
  console.log(typeof expon);
  if(document.calc.display.value>= 0.9999999){
  document.calc.display.value = expon.toExponential(9)
}
}
}

function decimalInsert(num){
  if(decStatus == false){
    document.calc.display.value = document.calc.display.value + num
    expressionArray.push(num)
    console.log("decimal array", expressionArray)
    decStatus = true;
    decInserted = true;
    document.getElementById("decimalButton").disabled = true;
  }
}
function piInsert(num){
  if(piStatus == false){
    document.calc.display.value = ''
    document.calc.display.value = document.calc.display.value + num
    expressionArray.push(num)
    console.log("array and pi", expressionArray)
    piStatus = true;
  }
}
