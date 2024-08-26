//array of objects
const students = [
  { name: "Prem", age: 21, gender: "male" },
  { name: "Ashley", age: 29, gender: "female" },
  { name: "John", age: 17, gender: "male" },
  { name: "Robin", age: 30, gender: "Female" },
];

const filteredData = students.filter(function (student) {
  return student.age > 18 && student.gender.toLowerCase() === "male";
});

console.log(filteredData);
