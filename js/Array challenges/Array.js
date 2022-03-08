//Always Hungry
function alwaysHungry(arr) {
    // your code here 
    var count=0;
    for(var i=0;i< arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
            count++;
            
        }

        }
        if(count ==0){
            console.log("I'm hungry");

        }
    }
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(var i=0 ; i<arr.length; i++){
        if(arr[i] > 5){
            filteredArr.push(arr[i]);

        }

    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greated than the average
    var avg=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
        console.log("The sum"+sum);
    
    }
    avg=sum/arr.length;
    console.log("The avg "+avg);
    for(var i=0; i<arr.length;i++){
        if(arr[i] > avg){
            count++;

        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//Array Reverse
function reverse(arr) {
    var ret = [];
    for(var i=(arr.length-1); i>=0 ;i--){
        ret.push(arr[i]);
    }
    return ret;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=2;i < n ; i++){
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]