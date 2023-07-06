/*
 * @lc app=leetcode.cn id=剑指 Offer II 007 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 007] 数组中和为 0 的三个数
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let reuslt: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        reuslt.push([nums[i], nums[left], nums[right]]);
        while (nums[left] == nums[left + 1]) left++;
        while (nums[right] == nums[right - 1]) right--;
        left++;
      }
      if (sum < 0) left++;
      else right--;
    }
    while (nums[i] == nums[i + 1]) i++;
  }
  return reuslt;
}
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
