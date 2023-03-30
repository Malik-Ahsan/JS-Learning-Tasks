text = "<ul>";
for(var i = 0 ; i <=15 ; i++)
{
    if(i%2==0)
        text += "<li>" + i + " is even </li>"
    else
        text += "<li>" + i + " is odd </li>"
}
text += "</ul>"
document.getElementById("demo").innerHTML = text;