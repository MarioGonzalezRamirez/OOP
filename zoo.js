// function sleep(name){
//         console.log(name + " sleeps for 8 hours");
// }
var animalPopulation = 0;

function run(){

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("fish");
    rarity.eat("marshmallows");

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    var stinger = new Bee("Stinger");
    stinger.eat("fish");
    stinger.eat("pollen");

    var p1 = new Polygon(20,40);
    var p2 = new Polygon(100,200);

    var animals = [tigger, pooh, rarity, gemma, stinger];

    var zoebot =  new Zookeeper('John');

    zoebot.feedAnimals(animals,'cheese');

    Animal.getPopulation();
    

    p1.sayName();
    p1.sayHistory();
    p2.sayName();
    p2.sayHistory();




}

// function eat(name,food){
//     console.log(name + " eats " + food);
//     food == this.favoriteFood  ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep(name);
// }

class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;

    }

    sleep() {
    console.log(this.name + " sleeps for 8 hours");
    }

    eat( food) {
    console.log(this.name + " eats " + food);
    food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    static getPopulation(){
        return animalPopulation;
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animalPopulation + " total animals");
        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }

}

class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");

    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
}
class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        console.log(this.name + " never sleeps");
    }

    eat(food) {
        if(food == this.favoriteFood){
            super.eat('pollen');
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food) ;
        }
    }
}
class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");

    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        if(food == this.favoriteFood){
            super.eat('leaves');
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food) ;
        }

    }
}
class Unicorn extends Animal {
    constructor(name) {
        super(name,"marshmallows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
}



class Shape {

    constructor(name) {
        this.name = name;
        this.special = true;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}

class Polygon extends Shape {

    constructor(height, width) {
        super('Polygon');
        this.height = height;
        this.width = width;
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}





































