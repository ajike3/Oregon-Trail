
class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 2;
    }
    eat () {
        if(this.food ==0){      
            this.isHealthy = false; 
        }   
            else{
                this.food -=1;
        }
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
    join () {
        if (this.getAvailableSeatCount()>0){
            this.passengers.push(passengers)
        }
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
       total += this.passenger[i].food;
       }
        return total;   
    

      
    } 
}