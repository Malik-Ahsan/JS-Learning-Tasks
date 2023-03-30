function reverseNum(num)
{
    var res = 0;
    while(num!=0)
    {
        res = res * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return res;
}
var input = prompt("Enter a number: ");
document.getElementById("demo").innerHTML=reverseNum(input);