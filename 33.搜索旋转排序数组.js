/**
 * [33] 搜索旋转排序数组
 *
 * @format
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let n = nums.length;
	let left = 0,
		right = n - 1;
	while (left <= right) {
		let mid = (left + right) >> 1;
		if (nums[mid] === target) return mid;
		// [0, mid] 有序
		if (nums[0] <= nums[mid]) {
			if (nums[mid] > target && nums[0] <= target) right = mid - 1;
			else left = mid + 1;
		}
		// [mid + 1, n - 1] 有序
		else {
			if (nums[mid] < target && nums[n - 1] >= target) left = mid + 1;
			else right = mid - 1;
		}
	};
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
// [4,5,6,7,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */
