/*
 * @lc app=leetcode.cn id=剑指 Offer II 001 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 001] 整数除法
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
  let res = 0;

  while (a > 0) {
    a -= b;
    res++;
  }

  return res - 1;
};
// @lc code=end

/*
// @lcpr case=start
// 15\n2\n
// @lcpr case=end

// @lcpr case=start
// 7\n-3\n
// @lcpr case=end

// @lcpr case=start
// 0\n1\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */
