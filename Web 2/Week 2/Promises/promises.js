const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // or false for failure
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
    return "Another successful operation!";
  })
  .then((anotherResult) => {
    console.log(anotherResult); // 'Another successful operation!'
  })
  .catch((error) => {
    console.error(error);
  });
