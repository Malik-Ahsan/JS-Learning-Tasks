var a = prompt("Enter three number separated by commas: ");
a = a.split(',');
let x = Number(a[0]);
let y = Number(a[1]);
let z = Number(a[2]);

if(x>y && x>z)
{
    if(y>z)
        alert(x+", "+y+", "+z);
    else
        alert(x+", "+z+", "+y);
}
else if(y>x && y>z)
{
    if(x>z)
        alert(y+", "+x+", "+z);
    else
        alert(y+", "+z+", "+x);
}
else
{
    if(x>y)
        alert(z+", "+x+", "+y);
    else
        alert(z+", "+y+", "+x);
}