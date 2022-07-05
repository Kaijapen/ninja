class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log('Name:');
        console.log(this.name);
        console.log();
    }

    showStats(){
        console.log('Name and Stats:');
        console.log('Name: ' + this.name);
        console.log('Strength: ' + this.strength);
        console.log('Speed: ' + this.speed);
        console.log('Health: ' + this.health);
    }

    drinkSake(){
        this.health += 10;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

