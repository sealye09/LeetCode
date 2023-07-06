/*
 * @lc app=leetcode.cn id=77 lang=typescript
 * @lcpr version=
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let ans: number[][] = [];
  function backTrack(idx: number, perm: number[]) {
    if (perm.length === k) {
      ans.push(perm.slice());
      return;
    }

    for (let i = idx; i <= n; i++) {
      perm.push(i);
      backTrack(i + 1, perm);
      perm.pop();
    }
  }

  backTrack(1,[]);
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// 4\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */
