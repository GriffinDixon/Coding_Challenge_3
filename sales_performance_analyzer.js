// Task 1 Calculat Average Sales
function calculateAverageSales(sales) {
// Check if the input array is empty to avoid division by zero
if (sales.length === 0) {
     return 0;}
    
// Calculate the sum of all sales figures
let sum = 0;
for (let i = 0; i < sales.length; i++) {
sum += sales[i];}
    
// Calculate the average by dividing the sum by the number of elements
let average = sum / sales.length;
    return average;}

console.log("Sales array:", sales);
console.log("Sum of sales:", sum);
console.log("Average sales", average);
