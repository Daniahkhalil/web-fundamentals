function PizzaOven(crustType,sauceType,cheeses,toppings){
    var sandwich={};
    sandwich.crustType=crustType;
    sandwich.sauceType=sauceType;
    sandwich.cheeses=cheeses;
    sandwich.toppings=toppings;

    return sandwich;

}
var sandwich1=PizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]);
console.log(sandwich1);
var sandwich2=PizzaOven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(sandwich2);