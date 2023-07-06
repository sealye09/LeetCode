/*
 * @lc app=leetcode.cn id=90 lang=typescript
 * @lcpr version=
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  let ans: number[][] = [];
  let len = nums.length;

  function backTrack(idx: number, perm: number[]) {
    ans.push(perm.slice());

    for (let i = idx; i < len; i++) {
      if (i > idx && nums[i - 1] === nums[i]) continue;
      perm.push(nums[i]);
      backTrack(i + 1, perm);
      perm.pop();
    }
  }

  nums.sort((a, b) => a - b);

  backTrack(0, []);
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
