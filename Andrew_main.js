
function Auto(brand, wheels, color) {
	this.brand = brand;
	this.wheels = wheels;
	this.color = color;
}

var my_Auto = new Auto("BMW", 4, "Gray");

var my_older_Auto = new Auto("Subaru", 4, "Silver");

function Car() {
	Auto.apply(this, arguments);
	this.anything = true;
}

Car.prototype = new Auto();

var FiveSeries = new Car("BMW", 5, "Blue");
var SL550 = new Car("Mercedes", 2, "Red");







function Pet(breed_name, color) {
    this.breed_name = breed_name;
    this.color = color;
    this.owner = function(){return "Stephanie owns a " + this.color+ " " + this.breed_name + "." }}

my_dog = new Pet("puggle", "black");

Pet.prototype.bark = function() {
    return "Woof Woof!"; }

my_cat = new Pet ("persian", "white");

Pet.prototype.meow = function() {
    return "Meeowww!";
}








function Pet(color, legs, noise){
   this.color = color;
   this.legs = legs;
   
}

function Cat() {
   Pet.apply(this, arguments);
   this.noise = "meow"
   
}

function Dog() {
   Pet.apply(this, arguments);
   this.noise = "bark"
}

Cat.prototype = new Pet();
Dog.prototype = new Pet();

var kitty = new Cat("blue", 3);
var new_kitty = new Cat("red", 7);

var doggy = new Dog("black", 4);
var new_puppy = new Dog("blonde", 3);
