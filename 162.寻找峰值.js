/**
 * [162] 寻找峰值
 *
 * @format
 * @lc app=leetcode.cn id=162 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let n = nums.length;
  let left = 0,
    right = n - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end
