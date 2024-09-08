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
    
// Log the sales array, sum, and average inside the function
console.log("Sales array:", sales);
console.log("Sum of sales:", sum);
console.log("Average sales:", average);
    return average;}

    //Task 2 Determine Performance Rating
function determinePerformanceRating(averageSales) {
if (averageSales > 10000) 
    {return "Excellent"; } 
else if (averageSales >= 7000 && averageSales <= 10000) {
    return "Good";}
else if (averageSales >= 4000 && averageSales < 7000) {
    return "Satisfactory";}
else {return "Needs Improvement";}}
console.log("Performance Rating", determinePerformanceRating)

// Task 3 Top and Bottom Performers

function findTopAndBottomPerformers(salespeople) {
    return salespeople.reduce((result, salesperson) => 
({topPerformer: salesperson.totalSales > result.topPerformer.totalSales ? salesperson : result.topPerformer,
bottomPerformer: salesperson.totalSales < result.bottomPerformer.totalSales ? salesperson : result.bottomPerformer}),
 { topPerformer: salespeople[0], bottomPerformer: salespeople[0] });}
 console.log("Top Performer:",topPerformer);
 console.log("Bottom Performer:",bottomPerformer);
 
