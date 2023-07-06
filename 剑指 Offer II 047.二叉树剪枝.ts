/*
 * @lc app=leetcode.cn id=剑指 Offer II 047 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 047] 二叉树剪枝
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

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  root.left =  pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) {
    root = null;
  }
  return root;
}

// @lc code=end

/*
// @lcpr case=start
// [1,null,0,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,0,0,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,0,1,1,0,1,0]\n
// @lcpr case=end

 */
