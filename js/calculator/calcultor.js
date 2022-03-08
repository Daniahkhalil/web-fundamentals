var shownumber =document.querySelector("#display");
var num1="";
var num2="";
var opertion="";

function press(num) {
    num1 +=num;
    shownumber.innerText=num1;
    
  }

function setOP(op){
    opertion=op;
    num2=num1;
    num1="";
}

function clr() {
    var num1="";
var num2="";
var opertion="";
    shownumber.innerText=0;
}

function calculate(){
    var number1=parseFloat(num1);
    var number2=parseFloat(num2);
    let res=0;
  switch (opertion){
      case "+":
          res=number2+number1;
          break;
     case "-":
         res=number2-number1;
         break;
     case "*":
         res=number2*number1;
         break;
     case "/":
        res=number2/number1;
        break;      
  }
 
    num1=res;
   opertion="";
   shownumber.innerText=res;
 

}

