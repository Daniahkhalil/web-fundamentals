var foot=document.querySelector(".EndOfPage");
var accept=document.querySelector("#accept");



function alert1(){
    alert("Loading weather report...");

}

function remove1(){
    foot.remove();
}
 function c2f(tempval){
     return Math.round(5/9 *tempval+32);
     
 }

 function f2c(tempval){
    return Math.round(5/9 *tempval-32);
    
}

function transfer(elem){
    for(var i=1; i<7;i++){
        var tempval = document.querySelector("#temp"+i)
        var tempspan=  tempval.innerText;
        console.log(tempval);
        console.log(c2f(tempval.innerText));
        if(elem.vlaue == "C" ){
            tempval.innerText=f2c(tempspan);

        }
        else{
            tempval.innerText=c2f(tempspan);

        }

    }


}
