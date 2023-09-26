/*
 * @lc app=leetcode.cn id=268 lang=javascript
 * @lcpr version=
 *
 * [268] 丢失的数字
 */


/**
 * @description 用等差数列求和公式求出 0 ~ len 的和，然后减去数组的和，就是缺失的数字
 */
var sumSolution = function (nums) {
  let len = nums.length;
  let totalSum = (len * (len + 1)) / 2;

  let arrSum = nums.reduce((acc, cur) => acc + cur, 0);
  return totalSum - arrSum;
};

// @lc code=start
/**
 * 异或运算所有的数和下标，最后再异或一次len
 * nums范围是 [0, len]
 * 下标范围是 [0, len - 1]，所以异或的时候要把len也异或进去
 * 得到的结果就是缺失的数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }

  return res ^ nums.length;
};

// @lc code=end

/*
// @lcpr case=start
// [3,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [9,6,4,2,3,5,7,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
