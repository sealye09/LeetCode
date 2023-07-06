/*
 * @lc app=leetcode.cn id=39 lang=typescript
 * @lcpr version=
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  let ans: number[][] = [];

  function dfs(idx: number, sum: number, arr: number[]) {
    if (sum === target) {
      ans.push(arr);
      return;
    }

    if (sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      dfs(i, sum + candidates[i], [...arr, candidates[i]]);
    }
  }

  dfs(0, 0, []);

  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */
