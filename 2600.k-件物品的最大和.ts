/*
 * @lc app=leetcode.cn id=2600 lang=typescript
 * @lcpr version=
 *
 * [2600] K 件物品的最大和
 */

// @lc code=start
function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number,
): number {
  if (k <= numOnes) {
    return k;
  } else if (k <= numOnes + numZeros) {
    return numOnes;
  } else {
    return numOnes - (k - numOnes - numZeros);
  }
}
// @lc code=end

/*
// @lcpr case=start
// 3\n2\n0\n2\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n0\n4\n
// @lcpr case=end

 */
