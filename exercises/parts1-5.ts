// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let kilometersToMars: number = 225000000;
let kilometersToMoon: number = 384400;


// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLotascation")
// function getDaysToLocation(kilometersAway: number): number {
//     let milesToLocation: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesToLocation / speedMph;
//     let daysToLoaction: number = hoursToLocation / 24;
    
//     return daysToLoaction;
// };


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.





// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor( name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesToLocation: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesToLocation / this.speedMph;
        let daysToLoaction: number = hoursToLocation / 24;
        
        return daysToLoaction;
    };
}

let spaceShuttle = new Spacecraft('Determination', 17500);

console.log( `It takes ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars aboard the ${spaceShuttle.name}` );
console.log( `It takes ${spaceShuttle.getDaysToLocation(kilometersToMoon)} days to reach the Moon aboard the ${spaceShuttle.name}` );

// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
