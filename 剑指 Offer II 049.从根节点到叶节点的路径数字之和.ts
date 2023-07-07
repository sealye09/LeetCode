/*
 * @lc app=leetcode.cn id=剑指 Offer II 049 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 049] 从根节点到叶节点的路径数字之和
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

function sumNumbers(root: TreeNode | null): number {
  const results: number[] = [];

  const dfs = (node: TreeNode | null, sum: number): number => {
    if (!node) return 0;
    const newSum = sum * 10 + node.val;
    console.log(newSum);

    if (node.left) sum = dfs(node.left, newSum);
    if (node.right) sum = dfs(node.right, newSum);
    if (!node.left && !node.right) results.push(newSum);
  };

  dfs(root, 0);
  console.log(results);
  return results.reduce((a, b) => a + b, 0);
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,0,5,1]\n
// @lcpr case=end

 */
