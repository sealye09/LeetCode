/*
 * @lc app=leetcode.cn id=剑指 Offer II 083 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 083] 没有重复元素集合的全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];
  let path = [];
  let n = nums.length;

  function dfs(start) {
    if (start === n) {
      ans.push([...path]);
      return;
    }

    if (start > n) return;

    for (let i = 0; i < n; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      dfs(start + 1);
      path.pop();
    }
  }

  dfs(0);
  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
