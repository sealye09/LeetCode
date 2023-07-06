/**
 * [704] 二分查找
 *
 * @format
 * @lc app=leetcode.cn id=704 lang=javascript
 * @lcpr version=
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
		right = nums.length - 1;
	// 区间 [left, right] 左闭右闭
	// 循环条件 相等 [1, 1] 区间合法
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
		if (target === nums[mid]) return mid;
		// 边界更新 nums[mid] 已经判断过大小
		// right = mid - 1, left = mid + 1
    if (target < nums[mid]) {
      right = mid - 1;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    }
  }
  return -1;
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end

/*
// @lcpr case=start
// [-1,0,3,5,9,12]\n9\n
// @lcpr case=end

// @lcpr case=start
// [5]\n-5\n
// @lcpr case=end

// @lcpr case=start
// [-1,0,3,5,9,12]\n2\n
// @lcpr case=end

 */
