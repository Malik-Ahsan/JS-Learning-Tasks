function strChSwap(str){
    len = str.length;
    if (len < 1)
        return "String length should be greater than 1";
    else
    {  
        var newStr=""; 
        newStr = str[len-1];
        for(var i = 1; i < len-1 ; i++)
        {
            newStr += str[i];
        }
        if (len !== 1)
            newStr += str[0];
        return newStr;
    }
}
var input = prompt("Enter a string: ");
document.getElementById("demo").innerHTML = strChSwap(input);