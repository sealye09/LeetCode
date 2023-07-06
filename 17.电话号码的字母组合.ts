/*
 * @lc app=leetcode.cn id=17 lang=typescript
 * @lcpr version=
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
	if(digits.length === 0) return [];
  let ans: string[] = [];
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  function dfs(idx: number, str: string) {
    if (idx >= digits.length) {
      ans.push(str);
      return;
    }

    let letters = map[digits[idx]];
    for (let letter of letters) {
      dfs(idx + 1, str + letter);
    }
  }

  dfs(0, "");
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
