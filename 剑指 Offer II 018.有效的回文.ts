/*
 * @lc app=leetcode.cn id=剑指 Offer II 018 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 018] 有效的回文
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const isValid = (str: string) => {
    if (/[a-zA-Z0-9]/.test(str)) {
      return true;
    }
    return false;
  };
  const isEquals = (a: string, b: string) => {
    return a.toLocaleLowerCase() === b.toLocaleLowerCase();
  };
  let left = 0;
  let right = s.length - 1;
  if (right === 0) return true;

  while (left < right) {
    // 跳过非字母和数字的字符
    while (!isValid(s[left])) {
      left++;
    }
    while (!isValid(s[right])) {
      right--;
    }
    if (left >= right) {
      return true;
    }
    if (!isEquals(s[left], s[right])) {
      console.log(s[left], s[right]);
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// @lc code=end

/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// "a."\n
// @lcpr case=end

 */
