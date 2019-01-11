var executed = false;
var expressionArray= [];
var firstCondition = false;
//var secondCondition = false;
function insert(num){
  if(executed == false){
  document.calc.display.value=""
  executed = true;
}
  if (num === ".") {
      if (!document.calc.display.value.includes(".")) {
        document.calc.display.value = document.calc.display.value + num;
      }
  } else {
    document.calc.display.value = document.calc.display.value + num;
  }
  if(Number(document.calc.display.value.length <= 9)){
    document.calc.display.value = document.calc.display.value
  }else{

  }
}
function clearCalc(){
  document.calc.display.value=0;
  executed = false;
}
function storeData(){

    if(firstCondition == false){
      expressionArray.push(document.calc.display.value)
    console.log(expressionArray)
  }
    else{
      expressionArray.push(document.calc.display.value)
      console.log(expressionArray)
      firstCondition = false;
    }
}
function clearOnOp(){
  document.calc.display.value= 0
  executed = false;
}
function equal(){
  let calcAnswer= eval(expressionArray);
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
