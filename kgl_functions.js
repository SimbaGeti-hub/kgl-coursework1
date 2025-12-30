
// COURSEWORK 2: KGL Inventory Processing System

// Part A: Function Implementation (30 marks)

// 1. Function to calculate procurement cost (10 marks)
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    if (typeof tonnageInKg !== 'number' || typeof pricePerKg !== 'number') {
        return "Invalid input";
    }
    if (tonnageInKg <= 0 || pricePerKg <= 0) {
        return "Invalid input";
    }
    return tonnageInKg * pricePerKg;
}

console.log(calculateProcurementCost(1500, 50));
console.log(calculateProcurementCost(-100, 50));

// 2. Arrow function to validate buyer name (10 marks)
const validateBuyerName = (buyerName) => {
    if (typeof buyerName === 'string' && buyerName.length >= 2 && buyerName.trim() !== "") {
        return true;
    }
    return false;
};

console.log(validateBuyerName('John Doe'));
console.log(validateBuyerName('A'));

// 3. Function with switch statement (10 marks)
function checkUserAuthorization(role) {
    switch(role) {
        case 'Manager':
            return 'procurement_and_sales';
        case 'Sales Agent':
            return 'sales_only';
        case 'Director':
            return 'view_aggregations';
        default:
            return 'unauthorized';
    }
}

console.log(checkUserAuthorization('Manager'));
console.log(checkUserAuthorization('Sales Agent'));

// Part B: Object Creation and Manipulation (35 marks)

// 4. Function to create sales record (15 marks)
function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    return {
        id: Math.floor(Math.random() * 9000) + 1000,
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    };
}

// 5. Create and manipulate sales record (10 marks)
let salesRecord = createSalesRecord('Beans', 2000, 'Maganjo', 100000);
console.log(salesRecord);

salesRecord.isCreditSale = true;

salesRecord['dueDate'] = new Date('2025-01-15');

let propertyNames = Object.keys(salesRecord);
console.log(propertyNames);

// 6. Loop through object (10 marks)
for (let property in salesRecord) {
    console.log(`Property: [${property}], Value: [${salesRecord[property]}]`);
}

// Part C: Loop Implementation and Data Processing (35 marks)

// 7. Traditional for loop (15 marks)
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;
for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}

let averageDailyTonnage = totalTonnage / weeklyTonnage.length;

console.log(`Total tonnage: ${totalTonnage}kg`);
console.log(`Average daily tonnage: ${averageDailyTonnage}kg`);

// 8. For...of loop with continue (15 marks)
let salesRecords = [
    createSalesRecord('Beans', 1500, 'Buyer1', 75000),
    createSalesRecord('Maize', 2000, 'Buyer2', 100000),
    createSalesRecord('G-nuts', 1000, 'Buyer3', 50000),
    createSalesRecord('Soybeans', 1800, 'Buyer4', 90000),
    createSalesRecord('Cow peas', 1200, 'Buyer5', 60000)
];

salesRecords[1].isCreditSale = true;
salesRecords[3].isCreditSale = true;

let creditSalesCount = 0;
for (let record of salesRecords) {
    if (!record.isCreditSale) {
        continue;
    }
    creditSalesCount++;
}

console.log(`Total credit sales: [${creditSalesCount}]`);

// 9. For loop with break (5 marks)
let inventory = [
    {name: 'Beans', tonnage: 500},
    {name: 'Maize', tonnage: 0},
    {name: 'G-nuts', tonnage: 300}
];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].tonnage === 0) {
        console.log(`Manager Alert: [${inventory[i].name}] is out of stock`);
        break;
    }
}