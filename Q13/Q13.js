function searchDate(str)
{
    let matches = str.match(/\d{2}-\d{2}-\d{4}/g);
    return matches;
}
var input = prompt("Enter the string including date format(dd-mm-yyyy): ");
document.getElementById("demo").innerHTML = searchDate(input);