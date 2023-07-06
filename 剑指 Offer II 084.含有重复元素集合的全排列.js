/*
 * @lc app=leetcode.cn id=剑指 Offer II 084 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 084] 含有重复元素集合的全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);

  function dfs(idx, path) {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 剪枝
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && vis[i - 1])) continue;

      //
      path.push(nums[i]);
      vis[i] = true;
      dfs(i + 1, path);
      vis[i] = false;
      path.pop();
    }
  }
  nums.sort((x, y) => x - y);
  dfs(0, []);
  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
