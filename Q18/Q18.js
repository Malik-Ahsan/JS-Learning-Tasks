let obj = {
    firstName:"Ahsan",
    lastName:"Malik",
    age:21,
    email:"ahsanakbar1010@gmail.com",
    isGraduated:false
};

output = `<h4>First Output</h4>
firstName: ${obj.firstName} <br>
lastName: ${obj.lastName} <br>
age: ${obj.age} <br>
email: ${obj.email} <br>
isGraduated: ${obj.isGraduated} <br>`;

output = output + `<h4>Second Output</h4>
firstName: ${obj["firstName"]} <br>
lastName: ${obj["lastName"]} <br>
age: ${obj["age"]} <br>
email: ${obj["email"]} <br>
isGraduated: ${obj["isGraduated"]} <br>`;

//using object destructuring
const {firstName,lastName,age,email,isGraduated} = obj;
output = output + `<h4>Third Output</h4>
firstName: ${firstName} <br>
lastName: ${lastName} <br>
age: ${age} <br>
email: ${email} <br>
isGraduated: ${isGraduated} <br>`;

document.getElementById("demo").innerHTML = output;