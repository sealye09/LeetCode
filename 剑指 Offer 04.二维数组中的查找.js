/*
 * @lc app=leetcode.cn id=剑指 Offer 04 lang=javascript
 * @lcpr version=
 *
 * [剑指 Offer 04] 二维数组中的查找
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
	let i = matrix.length - 1, j = 0;
	while (i >= 0 && j < matrix[0].length) {
		if (matrix[i][j] > target) i--;
		else if (matrix[i][j] < target) j++;
		else return true;
	}
	return false;
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end



