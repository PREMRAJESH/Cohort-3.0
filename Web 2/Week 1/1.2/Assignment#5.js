let user = {
  user: "Prem",
  gender: "Mr. ",
  age: "22",
};

//assignment 1
function greet(user) {
  console.log("hii " + user.name + " you are " + user.age + " old.");
}

greet(user);

//assignment 2
function greets(user) {
  console.log(
    "hii " + user.gender + user.user + " you are " + user.age + " old."
  );
}
greets(user);

//assignment 3
function userss(user) {
  // Function to check if the user can vote
  function canvote(age) {
    if (age >= 18) {
      return " You can vote.";
    } else {
      return " You cannot vote.";
    }
  }

  console.log(
    "Hi " +
      user.gender +
      user.user +
      ", you are " +
      user.age +
      " years old." +
      canvote(user.age)
  );
}

userss(user);
