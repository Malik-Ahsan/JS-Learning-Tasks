function searchStr(str,ch)
{
    var count = 0;
    for (const i of str) {
        if(i == ch)
            count++;
    }
    return count;
}
var input = prompt("Enter the string: ");
var ch = prompt("Enter a character: ");
document.getElementById("demo").innerHTML = searchStr(input,ch);