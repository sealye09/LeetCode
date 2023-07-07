/*
 * @lc app=leetcode.cn id=560 lang=typescript
 * @lcpr version=
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  let ans = 0;
  let preSum = 0;
  let hash = new Map<number, number>();
  hash.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    if (hash.has(preSum - k)) {
      ans += hash.get(preSum - k)!;
    }
    if (hash.has(preSum)) {
      hash.set(preSum, hash.get(preSum)! + 1);
    } else {
      hash.set(preSum, 1);
    }
  }

  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n3\n
// @lcpr case=end

 */
