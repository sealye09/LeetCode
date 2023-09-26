/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @description 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 * @solution 双指针 + 排序
 */
var threeSum = function (nums) {
  if (nums.length < 3) return result;

  const result = [];
  nums.sort((a, b) => a - b);

  // 从左到右遍历，如果当前值大于0，那么后面的值都大于0，不可能等于0
  // 如果当前值等于前一个值，那么跳过，避免重复
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return result;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    // 从左右两边向中间遍历，如果三数之和等于0，那么记录结果
    // 如果大于0，那么右指针左移，如果小于0，那么左指针右移
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // 去重(重点) 
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
      if (sum > 0) right--;
      if (sum < 0) left++;
    }
  }

  return result;
};

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
