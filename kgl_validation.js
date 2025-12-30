
// COURSEWORK 1: KGL Data Validation System

// Part A: Variable Declaration and Type Checking (20 marks)

// 1. Declare variables
let companyName = "Karibu Groceries LTD";
const minimumTonnage = 1000;
let isOperational = true;
let managerName;
const closedBranches = null;

// 2. Use typeof operator to check and log data type (5 marks)
console.log(typeof companyName);
console.log(typeof minimumTonnage);
console.log(typeof isOperational);
console.log(typeof managerName);
console.log(typeof closedBranches);

// 3. Write comments explaining why let or const was chosen (5 marks)
/*
I chose 'let' for companyName because the company name might change in the future
if the business is renamed or rebranded.

I chose 'const' for minimumTonnage because this is a fixed business rule that should
not change during program execution.

I chose 'let' for isOperational because the operational status can change (business
might close or open).

I chose 'let' for managerName because it needs to be declared now but will be assigned
a value later.

I chose 'const' for closedBranches because null represents a fixed state that won't
be reassigned.
*/

// Part B: String Manipulation and Validation (25 marks)

// 4. Declare variable with extra spaces
let dealerNameInput = " james BOND ";

// 5. String manipulation (10 marks)
let trimmedName = dealerNameInput.trim();
let lowerCaseName = trimmedName.toLowerCase();
let words = lowerCaseName.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word.charAt(0).toUpperCase();
    let remainingLetters = word.slice(1);
    let capitalizedWord = firstLetter + remainingLetters;
    capitalizedWords.push(capitalizedWord);
}

let cleanedDealerName = capitalizedWords.join(' ');

console.log(`Cleaned Dealer Name: [${cleanedDealerName}]`);

// 6. Validation check (10 marks)
if (cleanedDealerName.length >= 2 && cleanedDealerName !== "") {
    console.log("Valid dealer name");
} else {
    console.log("Invalid dealer name");
}

// Part C: Conditional Logic and Business Rules (30 marks)

// 7. Create variables for procurement record
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

// 8. Implement KGL business rules (10 marks)
if (userRole !== 'Sales Agent') {
    console.log("Error: Only Sales Agents can record produce entries");
} else {
    // Rule 2: Check tonnage (5 marks)
    if (procurementTonnage < 1000) {
        console.log("Error: Procurement tonnage must be at least 1000kg");
    }
    
    // Rule 3: Check cost (10 marks)
    let costAsNumber = Number(costInUgx);
    if (costAsNumber < 10000) {
        console.log("Error: Cost must be at least 5 digits (10000 UGX)");
    }
}

// 9. Use logical AND operator (5 marks)
if (procurementTonnage >= 1000 && costInUgx >= 10000) {
    console.log("Procurement record valid");
} else {
    console.log("Procurement record invalid");
}

// Part D: Arrays and Produce Management (25 marks)

// 10. Create array (5 marks)
let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];

// 11. Array manipulation (15 marks)
kglProduce.push('Green Peas');

kglProduce.shift();

if (kglProduce.includes('G-nuts')) {
    console.log("G-nuts exists in array");
}

console.log(kglProduce);
console.log(kglProduce.length);

// 12. Merge arrays using concat() (5 marks)
let branch2Produce = ['Maize', 'Beans'];
let allProduce = kglProduce.concat(branch2Produce);
console.log(allProduce);