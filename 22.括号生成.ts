/*
 * @lc app=leetcode.cn id=22 lang=typescript
 * @lcpr version=
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  let ans: string[] = [];

  function dfs(left: number, right: number, str: string) {
    if (left === n && right === n) {
      ans.push(str);
      return;
    }

    if (left < n) {
      dfs(left + 1, right, str + "(");
    }
    if (right < left) {
      dfs(left, right + 1, str + ")");
    }
  }
  dfs(0, 0, "");
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
