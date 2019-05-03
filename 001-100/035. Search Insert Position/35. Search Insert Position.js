/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function (nums, target) {
  if (!nums.length) return 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == target) return i
    else if (nums[i] < target && nums[i + 1] > target) return i + 1
  }
  if (target === nums[nums.length - 1]) {
    return nums.length - 1
  }
  return target > nums[nums.length - 1] ? nums.length : 0
};

var searchInsert3 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (target < nums[left]) {
    return 0;
  } else if (target > nums[right]) {
    return right + 1;
  }

  let count = 0;

  while (left < right) {
    if (left + 1 == right) {
      if (nums[left] < target) {
        return left + 1;
      } else {
        return left;
      }
    }

    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      return mid;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 0))