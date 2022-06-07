// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let nums = [1,2,3,0]

const containsDuplicate = (nums) => {
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]]) {
      return true
    }
    map[nums[i]] = true
  }
  return false;
}

console.log(containsDuplicate(nums));