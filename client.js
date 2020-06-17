const employees = [{
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



//Plan
/* Loop over the `employees`
array and do the following:
    *
    use each employee object as the input to the function
described below.*`console.log`
the results of each iteration.
##Function Logic
Write a declared
function that takes in one ** Employee ** object(as an argument to the
    function), and returns a new ** object ** with the following properties:
*/
let newArray = [];

function bonusCalc(employees) {

    for (let i = 0; i < employees.length; i++) {
        console.log(eachCalculation(employees[i]));
        newArray.push(eachCalculation(employees[i]));

    } //end For loop
    return;
}

function eachCalculation(employee) {
    let bonusObject = {};
    if (employee.reviewRating <= 2) {
        bonusObject.bonusPercentage = 0;
    } else if (employee.reviewRating === 3) {
        bonusObject.bonusPercentage = 4;
    } else if (employee.reviewRating === 4) {
        bonusObject.bonusPercentage = 6;
    } else if (employee.reviewRating === 5) {
        bonusObject.bonusPercentage = 10;
    }

    if (employee.employeeNumber.length == 4) {
        bonusObject.bonusPercentage += 5;
    }

    if (parseInt(employee.annualSalary) > 65000) {
        bonusObject.bonusPercentage -= 1;
    }

    if (bonusObject.bonusPercentage < 0) {
        bonusObject.bonusPercentage = 0;
    }

    if (bonusObject.bonusPercentage > 13) {
        bonusObject.bonusPercentage = 13;
    }

    bonusObject.name = employee.name;
    bonusObject.totalCompensation = employee.annualSalary * (1 + (bonusObject.bonusPercentage * .01));
    bonusObject.totalBonus = parseInt(employee.annualSalary * (bonusObject.bonusPercentage * .01));

    return bonusObject;

} //end eachCalculation
//begin display
$(document).ready(calcButton);
function calcButton() {
    $("#calculatorButton").on('click', calcButtonFunction);
}
function calcButtonFunction(){
    bonusCalc(employees);
    let el = $( "#employeeList" );
    for (let i = 0; i < newArray.length; i++) {
        el.append("<li> Employee Name: " + newArray[i].name + '<br> Bonus Percentage:' +
        newArray[i].bonusPercentage + '<br> Total Compensation: ' + newArray[i].totalCompensation +
        '<br> Total Bonus:' + newArray[i].totalBonus + " </li>");
    }
    return;
} //end calcButtonFunction



/*
let bonusObject = {
    name: employeeName,
    bonusPercentage: bonus,
    totalCompensation: annualSalary * (1 + (bonus * .01)),
    totalBonus: annualSalary * (bonus * .01)
}

let El = $( "#whateverTheIDIs");
El.append("<li>" + WhateverWeWantToAppend + "</li>"")
*/
