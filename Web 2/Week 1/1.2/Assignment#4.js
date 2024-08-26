function sumofn(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumofn(6));

function sumofarray() {
  let add = [1, 2, 3, 4, 4, 5];
  let sum = 0; // Initialize sum
  for (let i = 0; i < add.length; i++) {
    sum += add[i];
  }
  console.log(sum);
}

sumofarray();
let user = ["harkirat", "prem", "dev", "cohort"];
for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}
