/*
 * @lc app=leetcode.cn id=367 lang=javascript
 * @lcpr version=
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num < 2) return num;
	let left = 0, right = num;
	let mid = 0;
	while (left <= right) {
		mid = (left + right) >> 1;
		if (mid * mid === num) return true;
		if (mid * mid < num) left = mid + 1;
		if (mid * mid > num) right = mid - 1;
	}
	return false;
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end


/*
// @lcpr case=start
// 16\n
// @lcpr case=end

// @lcpr case=start
// 14\n
// @lcpr case=end

 */


