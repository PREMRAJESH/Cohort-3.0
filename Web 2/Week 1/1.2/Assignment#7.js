//object of objects
const users = {
  user1: { name: "Alice", age: 22, gender: "female" },
  user2: { name: "Bob", age: 25, gender: "male" },
  user3: { name: "Charlie", age: 17, gender: "male" },
  user4: { name: "David", age: 30, gender: "male" },
  user5: { name: "Eve", age: 20, gender: "female" },
  user6: { name: "Frank", age: 19, gender: "male" },
};
function filterUsersByCriteria(userObject) {
  const result = {};

  for (const key in userObject) {
    if (userObject.hasOwnProperty(key)) {
      const user = userObject[key];
      if (user.age > 18 && user.gender.toLowerCase() === "male") {
        result[key] = user;
      }
    }
  }

  return result;
}

const filteredData = filterUsersByCriteria(users);
console.log(filteredData);
