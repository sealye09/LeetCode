/*
 * @lc app=leetcode.cn id=47 lang=typescript
 * @lcpr version=
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  let ans: number[][] = [];
  let vis: boolean[] = new Array(nums.length).fill(false);

  const backtrack = (perm: number[]) => {
    if (perm.length === nums.length) {
      ans.push(perm.slice());
      return;
    }

    if (perm.length > nums.length) return;

    for (let i = 0; i < nums.length; i++) {
      // 剪枝
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) continue;

      perm.push(nums[i]);
      vis[i] = true;
      backtrack(perm);
      perm.pop();
      vis[i] = false;
    }
  };

  nums.sort((x, y) => x - y);
  backtrack([]);
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
