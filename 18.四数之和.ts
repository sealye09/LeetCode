/*
 * @lc app=leetcode.cn id=18 lang=typescript
 * @lcpr version=
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  if (len < 4) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    // 相邻的两个数相等，跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 最小的四个数相加都大于 target，后面的数就不用看了
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    // 当前数加上后面三个数都小于 target，当前数就不用看了
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

    for (let j = i + 1; j < len - 2; j++) {
      // 相邻的两个数相等，跳过
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      // 最小的四个数相加都大于 target，后面的数就不用看了
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      // 当前数加上后面三个数都小于 target，当前数就不用看了
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          // 相邻的两个数相等，跳过
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [1,0,-1,0,-2,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n8\n
// @lcpr case=end

 */
