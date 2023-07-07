/*
 * @lc app=leetcode.cn id=剑指 Offer II 048 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 048] 序列化与反序列化二叉树
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  return bfs(root);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {}

function bfs(root: TreeNode | null): string {
  const res: string[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      res.push("null");
      continue;
    }
    res.push(node.val.toString());
    queue.push(node.left);
    queue.push(node.right);
  }
  return res.join(",");
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
