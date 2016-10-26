# Bonus Calculator App

You are going to write a single JavaScript file to automatically calculate employee bonus for a company.

## Data Structure

The company is providing you with a few sample arrays that serve as examples of how their data is currently being stored. Each array is like a row in a spreadsheet. And each of these arrays are stored in a main array named `employees`, which is much like an entire sheet of one spreadsheet.

### Employee Array
Each employee array currently is configured in this way:

* The first index holds the employees name.
* The second index has their employee number.
* The third index contains their annual salary.
* The fourth index contains their review rating.

## Logic
Write a function that takes in one employee array (as an argument to the function), and returns another array:

* The first index should also contain the employee's name.
* The second index should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
* The third index should be the adjusted annual compensation (base annual + bonus)
* The fourth index should be the employee's total bonus rounded to the nearest dollar.

Finally, iterate over the `employees` array and 

* use each `employee` array as input to your first function
* `console.log` the results of each iteration. 

### Individual Bonus calculation
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If they have an employee number with four digits, this means they have been with the company for longer than 15 years, 
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%. 
- No bonus can be above 13% or below 0% total.

NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.


