/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * 中心扩散
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 2) return s;

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let start = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let currLen = 1;
    left = i - 1;
    right = i + 1;
    // 中心向左扩散
    while (left >= 0 && s[left] === s[i]) {
      left--;
      currLen++;
    }
    // 中心向右扩散
    while (right < len && s[right] === s[i]) {
      right++;
      currLen++;
    }

    while (left >= 0 && right < len && s[left] === s[right]) {
      currLen += 2;
      right++;
      left--;
    }

    if (currLen > maxLen) {
      maxLen = currLen;
      start = left;
    }
  }
  console.log(maxLen);
  return s.substr(start + 1, maxLen);
};
// @lc code=end

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = longestPalindrome;
// @lcpr-after-debug-end