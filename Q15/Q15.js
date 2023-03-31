function replace(str)
{
    str = str.replace(/\-/g," ");
    str = str.replace(/\&/g," ");
    str = str.replace(/\./g," ");
    str = str.replace(/\s/g,"");
    return str;
}
var input = prompt("Enter a URL: ");
document.getElementById("demo").innerHTML = replace(input);