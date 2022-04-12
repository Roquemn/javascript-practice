// This is a single line comment

/* This is a multi-line comment 

roque

*/

const myName = {
  firstname: "Roque",
  lastname: "Martinez",
  favoritefood: "Tamales",
};

console.table(myName);

// console.log("First Name: Roque")

// Length
let string = 'Supercalifragilisticexpialidocious';
console.log(string.length);

//To determine the type
console.log(typeof string);

// Number
let age = 35;
console.log(typeof age);

// Bigint
let hugeString = 123451234512345123451234512345n;
console.log(typeof hugeString);

// Boolean
let isLightOn = true;
console.log(typeof isLightOn);



// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = 'beautiful';
// Assign an adjective
let adj2 = 'acrobatic';
// Assign an adjective
let adj3 = 'big';
// Assign an adjective
let adj4 = 'clever';
// Assign an adjective
let adj5 = 'smelly';
// Assign an adjective
let adj6 = 'noisy';
// Assign an adverb
let adverb = 'softly';
// Assign a color
let color = 'green';
// Assign a noun
let noun1 = 'truck';
// Assign a noun
let noun2 = 'bicycle';
// Assign a noun
let noun3 = 'fox';
// Assign a noun
let noun4 = 'cow';
// Assign a noun
let noun5 = 'river';
// Assign a noun
let noun6 = 'tree';
// Assign a number
let num = 250;
// Assign a plural noun
let pnoun1 = 'they';

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE


//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(story);