let wagon2 = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`Wagon Seat Count?: ${ wagon2.getAvailableSeatCount() } – EXPECTED: 2. The wagon2  starts with 2 seats. We haven't added travelers to the wagon2 yet.`)
wagon2.join(henrietta);
console.log(`Wagon Seat Count? ${ wagon2.getAvailableSeatCount() }  EXPECTED: 1. Henrietta just joined.`)
wagon2.join(juan);
wagon2.join(maude);  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon2.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt();   // Henrietta goes in search of food.
juan.eat();         // Juan eats – as Juan does. 🤣
juan.eat();         // Juan has run out of food!
console.log(juan);
console.log(`Wagon Should Quarantine?: ${ wagon2.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon2.totalFood() } – EXPECTED: 3.`);