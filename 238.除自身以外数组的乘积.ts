/*
 * @lc app=leetcode.cn id=238 lang=typescript
 * @lcpr version=
 *
 * [238] 除自身以外数组的乘积
 */
//   1 2 3 4
// 0 1 2 6 24
// @lc code=start
/**
 * 前缀和后缀
 */
function productExceptSelf(nums: number[]): number[] {
  let res = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left *= nums[i];
	}
	console.log(res);
  for (let i = nums.length - 1; i > 0; i--) {
    right *= nums[i];
    res[i - 1] *= right;
  }
  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */
