/*
 * @lc app=leetcode.cn id=40 lang=typescript
 * @lcpr version=
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  let ans: number[][] = [];

  function dfs(idx: number, sum: number, path: number[]) {
    if (sum === target) {
      ans.push(path.slice());
      return;
    }

    if (sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      dfs(i + 1, sum + candidates[i], path);
      path.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  dfs(0, 0, []);

  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8,\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5,\n
// @lcpr case=end

 */
