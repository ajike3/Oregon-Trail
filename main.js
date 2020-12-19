//create Traveler class
class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 5;
        this.isHealthy = true;
    }`
    hunt() {
        this.food += 2;
    }
    eat () {
        this.food -= 1;
        if(this.food ==0)
            this.isHealthy = false; 
    }   

    }   

// create an instance of the Wagon class
class wagon {
    constructor(c) {
        this.capacity = c;
        this.passenger = [];
    }
    
    getAvailableSeatCount(){
        while (this.passenger.length < this.capacity) {
            this.passengers.push(Traveler);
        }
        if (this.passenger.length < this.capacity) {
            this.passengers.push(Traveler);
        
            return this.capacity - this.passenger.length;
    }
shouldQuarantine();
    for(let i = 0; i < this.passengers.length; i++){
        if(this.passengers[i].isHealthy == false) {
            return true;    
        }
    }

    return false;

totalFood();
   let total = 0;
   for(let i =0; i< this.passengers.length; i++) {
       total += this.passenger[i].foood;
       }
       return total;   
    

      
} 
}`