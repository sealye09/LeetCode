/*
 * @lc app=leetcode.cn id=9 lang=typescript
 * @lcpr version=
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;
  let str = x.toString();

  let left = 0;
  let right = str.length - 1;
  while (left < right && str[left] === str[right]) {
    left++;
    right--;
  }
  if (left >= right) return true;
  else return false;
}
// @lc code=end

/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 101\n
// @lcpr case=end

 */
