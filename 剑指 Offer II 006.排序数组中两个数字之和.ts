/*
 * @lc app=leetcode.cn id=剑指 Offer II 006 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 006] 排序数组中两个数字之和
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let ans: number[] = [];
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      ans = [left, right];
      break;
    }
    if (sum > target) right--;

    if (sum < target) left++;
  }

  return ans;
}
// @lc code=end

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
