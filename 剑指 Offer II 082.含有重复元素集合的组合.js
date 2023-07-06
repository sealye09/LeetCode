/*
 * @lc app=leetcode.cn id=剑指 Offer II 082 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 082] 含有重复元素集合的组合
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let ans = [];
  let path = [];

  function dfs(start, sum) {
    if (sum === target) {
      ans.push(path.slice());
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      sum += candidates[i];
      dfs(i + 1, sum);
      path.pop();
      sum -= candidates[i];
    }
  }

  candidates.sort((a, b) => a - b);

  dfs(0, 0);

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8,\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5,\n
// @lcpr case=end

 */
