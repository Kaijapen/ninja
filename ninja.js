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


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
