let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["Rahul", "Sita", "Amit", "Vikram", "Priya"];
let employees = [
  { employeeId: 1, name: "Rahul" },
  { employeeId: 2, name: "Sita" },
  { employeeId: 3, name: "Amit" },
];

let contacts = [
  { phoneNumber: "1234567890", name: "Rahul", address: "123 Street, City" },
  { phoneNumber: "0987654321", name: "Sita", address: "456 Avenue, City" },
  { phoneNumber: "1112223334", name: "Amit", address: "789 Boulevard, City" },
];

/*
Exercise 1: Find a Number in the Array

Create an endpoint numbers/find that finds a specific number in an array of unique numbers.

API Call:

<http://localhost:3000/numbers/find/5>
*/

function findNumber(eachNumber, numberToFind) {
  return eachNumber === numberToFind;
}
app.get("/numbers/find/:providedNumber", (req, res) => {
  let numberToFind = parseInt(req.params.providedNumber);
  let result = numbers.find((eachNum) => findNumber(eachNum, numberToFind));
  res.json(result);
});

/*
Exercise 2:Find a Name in the Array

Create an endpoint names/find/:name that finds a specific name in an array of unique names.

API Call:

<http://localhost:3000/names/find/Sita>

Expected Output:

'Sita'
*/
function findByName(eachName, nameTofind) {
  return eachName == nameTofind;
}
app.get("/names/find/:providedName", (req, res) => {
  let nameTofind = req.params.providedName;
  let result = names.find((eachName) => findByName(eachName, nameTofind));
  res.json(result);
});

/*
Exercise 3: Find an Employee by ID

Create an endpoint employees/find/:id that finds an employee by their unique employee ID.

API Call:

<http://localhost:3000/employees/find/2>

Expected Output:

{ 'employeeId': 2, 'name': 'Sita' }
*/
function findByEmpId(eachEmp, empId) {
  return eachEmp.employeeId === empId;
}
app.get("/employees/find/:providedId", (req, res) => {
  let empId = parseInt(req.params.providedId);
  let result = employees.find((eachEmp) => findByEmpId(eachEmp, empId));
  res.json(result);
});
/*
Exercise 4: Find a Contact by Phone Number

Create an endpoint /contacts/find/:phoneNumber that finds a contact by their unique phone number.

API Call:

<http://localhost:3000/contacts/find/1234567890>

Expected Output:

{ 'phoneNumber': '1234567890', 'name': 'Rahul', 'address': '123 Street, City' }
*/
function findByPhoneNumber(eachContact, phoneNumber) {
  return eachContact.phoneNumber === phoneNumber;
}
app.get("/contacts/find/:providedPhone", (req, res) => {
  let phoneNumber = req.params.providedPhone;
  let result = contacts.find((eachContact) =>
    findByPhoneNumber(eachContact, phoneNumber),
  );
  res.json(result);
});
