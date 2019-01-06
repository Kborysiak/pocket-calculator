function insert(num){
  document.calc.display.value = document.calc.display.value + num;
}
function clearCalc(){
  document.calc.display.value="";

}
function equal(){
  let calcAnswer= document.calc.display.value;
  if(calcAnswer){
    document.calc.display.value=eval(calcAnswer);
  }
  if(document.calc.display.value === "Infinity") {
    document.calc.display.value = "ERROR";
  }
}
function numberNegation(){
  document.calc.display.value=document.calc.display.value *-1
}

function numberPercentage(){
  document.calc.display.value=document.calc.display.value/100
}
