/**
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * @format
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let left = 0, right = nums.length - 1;
	let mid = 0;
	while (left <= right) {
		mid = left + ((right - left) >> 1);
		if (nums[mid] === target) break;
		if (nums[mid] < target) left = mid + 1;
		if (nums[mid] > target) right = mid - 1;

	}
	if (nums[mid] != target) return [-1, -1];
	// 存在目标元素，更新边界
	left = mid, right = mid;
	while (nums[left] === target || nums[right] === target) {
		if (nums[left] === target) left--;
		if (nums[right] === target) right++;
	}
	return [left + 1, right - 1];
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end

/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,3,3,3,4,5,9]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
