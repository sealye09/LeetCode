/*
 * @lc app=leetcode.cn id=912 lang=javascript
 * @lcpr version=
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, left, right) {
  if (left >= right) return;

  let pivotIdx = Math.floor(Math.random() * (right - left + 1)) + left;
  let pivot = nums[pivotIdx];

  let i = left;
  let j = right;
  while (i <= j) {
    while (nums[i] < pivot) {
      i++;
    }
    while (nums[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  quickSort(nums, left, j);
  quickSort(nums, i, right);
}

function mergeSort(nums, left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);

  let i = left;
  let j = mid + 1;
  let temp = [];
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(nums[i]);
    i++;
  }

  while (j <= right) {
    temp.push(nums[j]);
    j++;
  }

  for (let i = left; i <= right; i++) {
    nums[i] = temp[i - left];
  }
}

// @lc code=end

/*
// @lcpr case=start
// [5,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,2,0,0]\n
// @lcpr case=end

 */
