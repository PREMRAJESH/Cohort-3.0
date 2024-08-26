// Week 1/1.2/Assignment#2.js
function canvote(age) {
  if (age < 18) {
    return "cannot vote";
  } else if (age >= 18) {
    return "can vote";
  }
}

console.log(canvote(13));
