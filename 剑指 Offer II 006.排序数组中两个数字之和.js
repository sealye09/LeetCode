/*
 * @lc app=leetcode.cn id=剑指 Offer II 006 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer II 006] 排序数组中两个数字之和
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let n = numbers.length;
	for (let i = 0; i < n; i++) {
		let newTarget = target - numbers[i];
		let left = i + 1, right = n - 1;
		while (left <= right) {
			let mid = (left + right) >> 1;
			if (numbers[mid] === newTarget) return [i, mid];
			if (numbers[mid] < newTarget) left = mid + 1;
			if (numbers[mid] > newTarget) right = mid - 1;
		}
	}
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end


/*
// @lcpr case=start
// [1,2,4,6,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n-1\n
// @lcpr case=end

 */


