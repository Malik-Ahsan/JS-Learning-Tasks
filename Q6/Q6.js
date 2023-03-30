function getAllCombination(str)
{
    let combins = [];

    function generateCombination(prefix,remainStr)
    {
        if(remainStr.length === 0)
            combins.push(prefix);
        else
        {
            for (let i = 0; i < remainStr.length; i++)
            {
                generateCombination(prefix + remainStr[i],remainStr.slice(0,i)+remainStr.slice(i+1));
            }
        }
    }

    generateCombination("",str);
    return combins;
}
var input = prompt("Enter the string: ");
document.getElementById("demo").innerHTML=getAllCombination(input);