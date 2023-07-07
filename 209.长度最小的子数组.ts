/*
 * @lc app=leetcode.cn id=209 lang=typescript
 * @lcpr version=
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
	let len = nums.length;
	if (!len) return 0;
	let res = Infinity;
	let left = 0;
	let right = 0;
	let sum = 0;
	while (right < len) {
		// right ++
		while (right < len && sum < target) {
			sum += nums[right];
			right++;
		}
		// left++
		while (left < right && sum >= target) { 
			res = Math.min(res, right - left);
			sum -= nums[left];
			left++;
		}
	}

	return res === Infinity ? 0 : res;
};
// @lc code=end



/*
// @lcpr case=start
// 7\n[2,3,1,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// 4\n[1,4,4]\n
// @lcpr case=end

// @lcpr case=start
// 11\n[1,1,1,1,1,1,1,1]\n
// @lcpr case=end

 */

