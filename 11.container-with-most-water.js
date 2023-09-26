/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 双指针：
 * 1. 两个指针分别指向数组的头和尾
 * 2. 计算两个指针所指向的容器的容量
 * 3. 移动指针，指向较小的那个指针
 * 4. 重复 2-3
 * 5. 返回最大的容量
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length < 2) return 0;

  let left = 0;
  let right = height.length - 1;
  let res = Math.min(height[left], height[right]) * (right - left);

  while (left < right) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
