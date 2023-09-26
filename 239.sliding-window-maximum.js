/*
 * @lc app=leetcode.cn id=239 lang=javascript
 * @lcpr version=
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0;
  let right = k - 1;
  let res = [];
  let max = -Infinity;

  if (nums.length === 0) return [];
  if (nums.length === 1 || k === 1) return nums;

  while (right < nums.length) {
    max = Math.max(max, nums[right]);
    // 如果最大值在窗口外，重新计算最大值
    if (nums[left - 1] === max || left === 0) {
      max = -Infinity;
      for (let i = left; i <= right; i++) {
        max = Math.max(max, nums[i]);
      }
    }
    res.push(max);
    left++;
    right++;
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [1,-1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,3,-1,-3,5,3,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
