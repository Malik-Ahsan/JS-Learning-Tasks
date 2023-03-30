function mergeAndRemoveDuplicates(arr1,arr2)
{
    let newArr = [...arr1,...arr2];
    let uniqueArr = [];
    newArr.forEach(item => {
        if(!uniqueArr.includes(item))
            uniqueArr.push(item);
    })
    return uniqueArr;
}

let arr1 = [], arr2 = [];
var input = prompt("Enter first numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr1.push(Number(item)));

var input = prompt("Enter second numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr2.push(Number(item)));

document.getElementById("demo").innerHTML= mergeAndRemoveDuplicates(arr1,arr2);