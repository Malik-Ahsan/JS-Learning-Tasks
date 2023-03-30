function removeDuplicates(arr)
{
    let uniqueArr = [];
    arr.forEach(item => {
        if(!uniqueArr.includes(item))
            uniqueArr.push(item);
    })
    return uniqueArr;
}

let arr = [];
var input = prompt("Enter a numeric array separated by commas: ");
input = input.split(",");
input.forEach(item => arr.push(Number(item)));

document.getElementById("demo").innerHTML= removeDuplicates(arr);