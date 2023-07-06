/*
 * @lc app=leetcode.cn id=剑指 Offer II 014 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 014] 字符串中的变位词
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 > len2) return false;
  let map = new Map();

  for (let i = 0; i < len1; i++) {
    let c = s1[i];
    map.set(c, (map.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
	while (right < len2) {
		let c = s2[right];
		right++;
		let count = map.get(c);
		if (!!count) {
			map.set(c, count - 1);
			if (count === 1) {
				map.delete(c);
			}
		}
		if (right - left === len1) {
			if (map.size === 0) {
				return true;
			}
			let c = s2[left];
			left++;
			let count = map.get(c);
			if (count !== undefined) {
				map.set(c, count + 1);
				if (count === 0) {
					map.delete(c);
				}
			}
		}
	}
  return false;
}
// @lc code=end

/*
// @lcpr case=start
// "eidbaooo"\n
// @lcpr case=end

// @lcpr case=start
// "eidboaoo"\n
// @lcpr case=end

 */
