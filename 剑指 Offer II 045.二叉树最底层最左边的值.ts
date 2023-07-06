/*
 * @lc app=leetcode.cn id=剑指 Offer II 045 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 045] 二叉树最底层最左边的值
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

function findBottomLeftValue(root: TreeNode | null): number {
  // 底层 -> 左侧
  // DFS
  const dfs = (root, height) => {
    if (!root) {
      return;
    }
    height++;
    if (root.left) dfs(root.left, height);
    if (root.right) dfs(root.right, height);
    if (height > maxHeight) {
      maxHeight = height;
      res = root.val;
    }
	};
	
	let maxHeight = 0;
	let res = root.val;
	dfs(root, 0);
	return res;
}
// @lc code=end

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,5,6,null,null,7]\n
// @lcpr case=end

 */
