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


// INPUT: employee object
// OUTPUT: "processed" employee object:
// {
//   name:
//   bonusPercentage:
//   totalCompensation:
//   totalBonus:
// }
function processEmployee(employee) {

  let bonusPercentage = calculateBonus(employee);

  let totalBonus = Math.round(bonusPercentage * Number(employee.annualSalary));

  let totalCompensation = totalBonus + Number(employee.annualSalary);

  let processedEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalBonus: totalBonus,
    totalCompensation: totalCompensation
  }

  return processedEmployee;
}

function calculateBonus(employee) {
  let bonusPercentage;

  // BASIC bonusPercentage logic:
  if (employee.reviewRating <= 2) {
    //  <=2 -- NO BONUS
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    //  ===3 - 4% BONUS
    bonusPercentage = .04;
  } else if (employee.reviewRating === 4) {
    //  ===4 - 6%
    bonusPercentage = .06;
  } else if (employee.reviewRating === 5) {
    //  ===5 - 10%
    bonusPercentage = .1;
  }

  // EXTRA bonusPercentage logic:
  if (employee.employeeNumber.length === 4) {
    // IF employeeNumber is 4 digits
    // +5% to BONUS
    bonusPercentage += .05;
  }
  if (employee.annualSalary > 65000) {
    // IF income > $65,000
    // -1% to BONUS
    bonusPercentage -= .01;
  }
  // 🔥🔥🔥 NO BONUS CAN BE > 13% or < 0% 🔥🔥🔥
  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  return bonusPercentage;
}


// Let's find out if it works:
for (let employee of employees) {
  console.log(processEmployee(employee));
}
