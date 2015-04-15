# Group based STI activity

You are going to write functionality to automatically calculate STI (‘short term incentive’ or ‘bonus’) for a company.

They are providing you a sample array that is an example of how their data is currently being stored. 
They agree that the method in which it is stored is not exactly elegant or ideal. However the task at hand is to deal 
with the current format.

The array currently is configured in this way:
The first item holds the employees name.
The second item has their employee number.
The third item is their annual salary.
The fourth item is their review rating.

Once the array reaches the next name, a new employee is reached, thus starting a new series. 

Write functionality that consumes the one array, and produces another array that contains:
- The first item should also contain the employees name.
- The second item should contain the percentage of STI the employee is to receive.
- The third item should be the adjusted annual compensation (base annual + STI)
- The fourth item should be the employees total bonus rounded to the nearest dollar.

To calculate an individuals STI:
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If they have 4 employee numbers, this means they have been with the company for longer than 15 years, 
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%. 
- No bonus can be above 13% total.
