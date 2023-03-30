function insertMultipleArray(arr1,arr2,arr3)
{
    let res = [];
    let newArr = [], duplicates = [];
    newArr.push(arr1);
    newArr.push(arr2);
    newArr.push(arr3);

    newArr.forEach(array => {
        array.forEach(item => {
            if(duplicates.includes(item))
                return;
            if(newArr.filter(a => a.includes(item)).length>1)
                duplicates.push(item);
        });
    });

    newArr.flat().forEach(item => {
        if(!duplicates.includes(item))
            res.push(item);
    });

    return res;
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