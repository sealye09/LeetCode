/*
 * @lc app=leetcode.cn id=剑指 Offer 55 - II lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer 55 - II] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  const getDepth = (root: TreeNode | null): number => {
    if (!root) return 0;
    let left = getDepth(root.left) + 1;
    let right = getDepth(root.right) + 1;
    return Math.max(left, right);
  };
  if (!root) return true;
  let left = getDepth(root.left);
  let right = getDepth(root.right);
  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}
// @lc code=end
