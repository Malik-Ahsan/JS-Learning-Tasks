function isValidURL(str)
{
    let regExp = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return regExp.test(str);
}
var input = prompt("Enter a URL: ");
document.getElementById("demo").innerHTML = isValidURL(input);