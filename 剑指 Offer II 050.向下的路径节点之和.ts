/*
 * @lc app=leetcode.cn id=剑指 Offer II 050 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 050] 向下的路径节点之和
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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  let res = 0;
  let hash = new Map<number, number>();
  hash[0] = 1;

  const dfs = (node: TreeNode | null, sum: number, prefixSum: number): void => {
    if (!node) return;
    prefixSum += node.val;
    if (hash[prefixSum - targetSum]) res += hash[prefixSum - targetSum];
    hash[prefixSum] = (hash[prefixSum] || 0) + 1;
    dfs(node.left, sum, prefixSum);
    dfs(node.right, sum, prefixSum);

    hash[prefixSum]--;
  };

  dfs(root, targetSum, 0);
  return res;
}
// @lc code=end

/*
// @lcpr case=start
// [10,5,-3,3,2,null,11,3,-2,null,1]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [-2,null,-3]\n-3\n
// @lcpr case=end

 */
