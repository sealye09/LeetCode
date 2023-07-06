/*
 * @lc app=leetcode.cn id=剑指 Offer II 085 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 085] 生成匹配的括号
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let left = 0;
  let right = 0;
  let res = [];

  function dfs(str) {
    // terminator
    if (left === n && right === n) {
      res.push(str);
      return;
    }

    if (left < n) {
      left++;
      dfs(str + "(");
      left--;
    }
    if (right < left) {
      right++;
      dfs(str + ")");
      right--;
    }
  }
  dfs("");
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
