/*
 * @lc app=leetcode.cn id=46 lang=typescript
 * @lcpr version=
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let ans: number[][] = [];
  let path: number[] = [];

  function dfs(idx: number) {
    if (idx === nums.length) {
      ans.push(path.slice());
      return;
    }
    if (idx > nums.length) return;

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      dfs(idx + 1);
      path.pop();
    }
  }

  dfs(0);
  return ans;
}
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
