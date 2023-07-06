/*
 * @lc app=leetcode.cn id=2679 lang=typescript
 * @lcpr version=
 *
 * [2679] 矩阵中的和
 */

// @lc code=start
function matrixSum(nums: number[][]): number {
  let res = 0;
  for (const row of nums) {
    row.sort((a, b) => b - a);
  }

  console.log(nums);
  for (let i = 0; i < nums[0].length; i++) {
    let max = 0;
    for (let row of nums) {
      max = Math.max(row[i], max);
    }
    res += max;
  }

  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1]]\n
// @lcpr case=end

 */
