const sum = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sum(5));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a Map to store the number and its index
  const map = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const difference = target - currentNumber;

    // Check if the difference is already in the Map
    if (map.has(difference)) {
      // If found, return the indices
      return [map.get(difference), i];
    }

    // Otherwise, add the current number and its index to the Map
    map.set(currentNumber, i);
  }

  // If no solution is found (though the problem guarantees there is one)
  return [];
};
console.log(twoSum([3, 2, 4], 6));
