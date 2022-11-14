let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]


// let i = 0;
// while (i < newInventoryCarModels.length){
//   console.log(newInventoryCarModels[i]);
//   i++;
// }

let typeS1Count = 0;
for (let i = 0; i < newInventoryCarModels.length; i++){
  if (newInventoryCarModels[i] === 'S1'){
    typeS1Count++;
  }
  // else if (newInventoryCarModels[i] === 'T1'){
  //   typeS1Count++;
  // }
}

    console.log('Number of S1 Cars is:', typeS1Count);


    let lorrieCount = 0;
    for (let i = 0; i < newInventoryCarTypes.length; i++){
      if (newInventoryCarTypes[i] === 'Lorrie'){
        lorrieCount++;
      }
    }

    console.log(lorrieCount);

let averageAge = 0;

for (let i =0; i< newInventoryYearBuilt.length; i++){
  averageAge += Math.round(newInventoryYearBuilt[i] / newInventoryYearBuilt.length);
}

console.log(averageAge);


let totalValue = 0

for(let i = 0; i < newInventoryYearBuilt.length; i++){
    totalValue += (2022 - newInventoryYearBuilt[i])
}

let averageYear = (totalValue / newInventoryYearBuilt.length)
console.log('Average age is ' + averageYear + ' years.')
