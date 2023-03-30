function findSum(arr)
{
    let sum = 0;
    arr.forEach( item => sum += item); 
    return sum;  
}
let arr = [];
var input = prompt("Enter a numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr.push(Number(item)));

document.getElementById("demo").innerHTML= findSum(arr);