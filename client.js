const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function bonusCalculator(employee) {
  let bonusPercentage = 0;

  console.log('calculating bonus');

  if (employee.annualSalary > 65000) {
    bonusPercentage -= 0.01;
  }
  if (employee.reviewRating <= 2) {
    // return 'No Bonus';
    bonusPercentage = 0;

  } else if (employee.reviewRating === 3) {
    //return '4% bonus';
    bonusPercentage += 0.04;

  } else if (employee.reviewRating === 4) {
    //return '6% bonus';
    bonusPercentage += 0.06;

  } else if (employee.reviewRating === 5) {
    //return '10% bonus';
    bonusPercentage += 0.10;
  }
  if (employee.employeeNumber.length === 4) {
    console.log('yay bonus');
    //return 'additional 5% bonus';
    bonusPercentage += 0.05;
  }
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }
  let totalBonus = Math.round(employee.annualSalary * bonusPercentage);
  let totalCompensation = Number(employee.annualSalary) + totalBonus;

  let newEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  }
  //return totalBonus;
  //return totalCompensation;
  return newEmployee;
}//end bonusCalculator

// loops through employees
for (let i = 0; i < employees.length; i++) {
  console.log(bonusCalculator(employees[i]));
}

// console.log(bonusCalculator(employees[0]));
// console.log(bonusCalculator(employees[2]));
// console.log(bonusCalculator(employees[3]));


