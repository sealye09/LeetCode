/*
 * @lc app=leetcode.cn id=剑指 Offer 55 - I lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer 55 - I] 二叉树的深度
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

function maxDepth(root: TreeNode | null): number {
  const getDepth = (root: TreeNode | null): number => {
    if (!root) return 0;
    let left = getDepth(root.left) + 1;
    let right = getDepth(root.right) + 1;
    return Math.max(left, right);
  };
  return getDepth(root);
}
// @lc code=end
