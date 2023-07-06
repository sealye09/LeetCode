/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 0 1 2 3 4 5 6 7 8 9
var mySqrt = function (x) {
	if (x <= 1) return x;
	let left = 0, right = x;
	let mid = 0;
	while (left <= right) {
		mid = left + ((right - left) >> 1);
		if (mid * mid === x) return mid;
		if (mid * mid < x) left = mid + 1;
		if (mid * mid > x) right = mid - 1;
	}
	return left - 1;
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end


/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */


