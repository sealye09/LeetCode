/*
 * @lc app=leetcode.cn id=剑指 Offer II 019 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 019] 最多删除一个字符得到回文
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  if (s.length < 2) return true;

  const check = () => {
    while (l < r && s[l] === s[r]) {
      l++;
      r--;
    }
    return l >= r;
  };

  if (check()) return true;

  l++;
  if (check()) return true;
  l--;
  r--;
  if (check()) return true;
  return false;
}
// @lc code=end

/*
// @lcpr case=start
// "aba"\n
// @lcpr case=end

// @lcpr case=start
// "abca"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n
// @lcpr case=end

// @lcpr case=start
// "eeccccbebaeeabebccceea"\n
// @lcpr case=end

// @lcpr case=start
// "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"\n
// @lcpr case=end

 */
