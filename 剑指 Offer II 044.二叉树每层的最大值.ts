/*
 * @lc app=leetcode.cn id=剑指 Offer II 044 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 044] 二叉树每层的最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
  let ans: number[] = [];
  let stack: TreeNode[] = [root];
  if (!root) return ans;

  while (stack.length) {
    let len = stack.length;
    let max = -Infinity;
    while (len--) {
      let node = stack.shift();
      max = Math.max(max, node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    ans.push(max);
  }

  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,2,5,3,null,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
