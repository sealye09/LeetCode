/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!Array.isArray(strs) || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  if (strs[0] === "") return "";

  let len = strs[0].length;
  let prefix = "";
  // aaab
  // aaddlkjkljklss
  // aa

  for (let i = 0; i < len; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      // 如果当前字符不相等，或者已经到了最后一个字符，就返回当前的prefix
      if (i === strs[j].length || strs[j][i] !== char) return prefix;
    }
    prefix += char;
  }

  return prefix;
};
// @lc code=end

/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */
