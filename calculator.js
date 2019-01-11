var executed = false;
var expressionArray= [];
//var firstCondition = false;
//var secondCondition = false;
function insert(num){
  if(executed == false){
  document.calc.display.value=""
  executed = true;
}
  expressionArray.push(num)

  console.log(expressionArray.join(''))
  if (num === ".") {
      if (!document.calc.display.value.includes(".")) {
        document.calc.display.value = document.calc.display.value + num;
      }
  } else {
    document.calc.display.value = document.calc.display.value + num;
  }
  if(Number(document.calc.display.value.length <= 8)){
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
  }
}
function clearCalc(){
  document.calc.display.value=0;
  executed = false;
    expressionArray = [];
}
function clearOnOp(){
  document.calc.display.value= 0
  executed = false;
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
}
function equal(){
  let calcAnswer= eval(expressionArray.join(''));
    expressionArray = [];
    expressionArray = [calcAnswer];
  if(calcAnswer > 999999999){
    document.calc.display.value = calcAnswer.toExponential(9)
  }else{
    document.calc.display.value=calcAnswer.toLocaleString("en")
  }

  if(document.calc.display.value === "Infinity" || document.calc.display.value === "∞") {
    document.calc.display.value = "ERROR";
  }
}
function numberNegation(){
  document.calc.display.value=document.calc.display.value *-1
}

function numberPercentage(){
  document.calc.display.value=document.calc.display.value/100
}
