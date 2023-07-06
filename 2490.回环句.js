/*
 * @lc app=leetcode.cn id=2490 lang=javascript
 * @lcpr version=
 *
 * [2490] 回环句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let len = sentence.length;

  if (sentence[0] !== sentence[len - 1]) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (sentence[i] === " " && sentence[i + 1] !== sentence[i - 1]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

/*
// @lcpr case=start
// "leetcode exercises sound delightful"\n
// @lcpr case=end

// @lcpr case=start
// "eetcode"\n
// @lcpr case=end

// @lcpr case=start
// "Leetcode is cool"\n
// @lcpr case=end

 */
