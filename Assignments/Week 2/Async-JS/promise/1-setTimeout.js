/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function promisify(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, n * 1000);
  });
}
promisify(2).then((message) => {
  console.log(message);
});
