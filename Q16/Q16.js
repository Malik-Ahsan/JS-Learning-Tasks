function insertMultipleArray(arr1,arr2,arr3)
{
    let newArr = [];
    newArr.push(arr1);
    newArr.push(arr2);
    newArr.push(arr3);

    let message = "";
    newArr.forEach((array,index) => {
        message += `Array ${index+1} is: ${array} <br>`;
    });
    return message;
}

let arr1 = [], arr2 = [], arr3 = [];
var input = prompt("Enter first numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr1.push(Number(item)));

var input = prompt("Enter second numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr2.push(Number(item)));

var input = prompt("Enter third numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr3.push(Number(item)));

document.getElementById("demo").innerHTML= insertMultipleArray(arr1,arr2,arr3);