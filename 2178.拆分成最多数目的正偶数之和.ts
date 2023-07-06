/*
 * @lc app=leetcode.cn id=2178 lang=typescript
 * @lcpr version=
 *
 * [2178] 拆分成最多数目的正偶数之和
 */

// @lc code=start
function maximumEvenSplit(finalSum: number): number[] {
  if (finalSum % 2 === 1) return [];

  let ans: number[] = [];

  for (let i = 2; i <= finalSum; i += 2) {
    ans.push(i);
    finalSum -= i;
  }

  ans[ans.length - 1] += finalSum;
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// 12\n
// @lcpr case=end

// @lcpr case=start
// 7\n
// @lcpr case=end

// @lcpr case=start
// 28\n
// @lcpr case=end

 */
