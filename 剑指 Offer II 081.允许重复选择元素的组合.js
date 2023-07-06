/*
 * @lc app=leetcode.cn id=剑指 Offer II 081 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 081] 允许重复选择元素的组合
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let n = candidates.length;
  let ans = [];

  function dfs(idx, sum, path) {
    if (sum === target) {
      ans.push(path.slice());
      return;
    }

    if (sum > target) return;

    for (let i = idx; i < n; i++) {
      path.push(candidates[i]);
      dfs(i, sum + candidates[i], path);
      path.pop();
    }
  }

  dfs(0, 0, []);
  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

/*
// @lcpr case=start
// [7,3,9,6]\n6\n
// @lcpr case=end


// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1]\n2\n
// @lcpr case=end

 */
