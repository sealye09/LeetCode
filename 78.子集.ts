/*
 * @lc app=leetcode.cn id=78 lang=typescript
 * @lcpr version=
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let ans: number[][] = [];
  let n = nums.length;

  function backTrack(idx: number, perm: number[]) {
    ans.push(perm.slice());
    for (let i = idx; i < n; i++) {
      perm.push(nums[i]);
      backTrack(i + 1, perm);
      perm.pop();
    }
  }

  backTrack(0, []);
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
