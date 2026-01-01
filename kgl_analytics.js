
// COURSEWORK 3: KGL Analytics and Reporting System

// Part A: Higher Order Functions - Data Transformation

// 1. Create array of procurement records 
let procurementRecords = [
    {
        id: 1001,
        dealerName: "Kampala Suppliers",
        produceType: "Beans",
        tonnageInKgs: 1500,
        costInUgx: 75000,
        procurementDate: new Date('2025-01-15')
    },
    {
        id: 1002,
        dealerName: "Entebbe Farmers",
        produceType: "Maize",
        tonnageInKgs: 2000,
        costInUgx: 100000,
        procurementDate: new Date('2025-01-16')
    },
    {
        id: 1003,
        dealerName: "Jinja Traders",
        produceType: "G-nuts",
        tonnageInKgs: 1200,
        costInUgx: 84000,
        procurementDate: new Date('2025-01-17')
    },
    {
        id: 1004,
        dealerName: "Kampala Suppliers",
        produceType: "Soybeans",
        tonnageInKgs: 1800,
        costInUgx: 90000,
        procurementDate: new Date('2025-01-18')
    },
    {
        id: 1005,
        dealerName: "Mbarara Growers",
        produceType: "Cow peas",
        tonnageInKgs: 1600,
        costInUgx: 96000,
        procurementDate: new Date('2025-01-19')
    },
    {
        id: 1006,
        dealerName: "Entebbe Farmers",
        produceType: "Beans",
        tonnageInKgs: 2200,
        costInUgx: 110000,
        procurementDate: new Date('2025-01-20')
    }
];

// 2. Use map() to add costPerKg property 
let recordsWithCostPerKg = procurementRecords.map(record => {
    return {
        ...record,
        costPerKg: (record.costInUgx / record.tonnageInKgs).toFixed(2)
    };
});

console.log(recordsWithCostPerKg);

// 3. Use filter() to get records with tonnage >= 1800 
let filteredRecords = recordsWithCostPerKg.filter(record => {
    return record.tonnageInKgs >= 1800;
});

console.log(filteredRecords);
console.log(`Filtered records count: ${filteredRecords.length}`);

// 4. Use reduce() to calculate totals
let totals = procurementRecords.reduce((accumulator, record) => {
    return {
        totalTonnage: accumulator.totalTonnage + record.tonnageInKgs,
        totalCost: accumulator.totalCost + record.costInUgx
    };
}, {totalTonnage: 0, totalCost: 0});

console.log(`Total tonnage: ${totals.totalTonnage}`);
console.log(`Total cost: ${totals.totalCost}`);

// Part B: Sets for Unique Data Management 

// 5. Function to get unique dealers 
function getUniqueDealers(records) {
    let dealerSet = new Set();
    
    for (let record of records) {
        dealerSet.add(record.dealerName);
    }
    
    let uniqueDealers = Array.from(dealerSet);
    
    console.log(uniqueDealers);
    return uniqueDealers;
}

getUniqueDealers(procurementRecords);

// 6. Create Set and authorization function
let authorizedRoles = new Set(['Manager', 'Director']);

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole);
}

console.log(isAuthorizedForProcurement('Manager'));
console.log(isAuthorizedForProcurement('Sales Agent'));

// Part C: Maps for Price Management 

// 7. Create Map with price list
let kglPriceList = new Map();
kglPriceList.set('Beans', 5500);
kglPriceList.set('Grain Maize', 4800);
kglPriceList.set('Cow peas', 6000);
kglPriceList.set('G-nuts', 7200);
kglPriceList.set('Soybeans', 5800);

// 8. Function to calculate sale total
function calculateSaleTotal(produceName, tonnageInKgs) {
    let pricePerKg = kglPriceList.get(produceName);
    
    if (pricePerKg === undefined) {
        return "Price not found";
    }
    
    return pricePerKg * tonnageInKgs;
}

console.log(calculateSaleTotal('Beans', 1500));
console.log(calculateSaleTotal('G-nuts', 2000));
console.log(calculateSaleTotal('Maize', 1000));

// 9. Loop through Map and find highest price 
for (let [name, price] of kglPriceList) {
    console.log(`Produce: [${name}], Price per Kg: [${price}] UGX`);
}

let highestPrice = Math.max(...kglPriceList.values());
console.log(`Highest price: ${highestPrice}`);