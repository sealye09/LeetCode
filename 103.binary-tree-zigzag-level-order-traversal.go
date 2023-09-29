/*
 * @lc app=leetcode.cn id=103 lang=golang
 * @lcpr version=
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) [][]int {
	path := make([][]int, 0)
	flag := true
	queue := make([]*TreeNode, 0)
	if root == nil {
		return path
	}

	queue = append(queue, root)
	for len(queue) > 0 {
		level := make([]int, 0)
		for i := len(queue); i > 0; i-- {
			root = queue[0]
			queue = queue[1:]
			level = append(level, root.Val)

			if root.Left != nil {
				queue = append(queue, root.Left)
			}
			if root.Right != nil {
				queue = append(queue, root.Right)
			}
		}

		if !flag {
			for i, j := 0, len(level)-1; i < j; i, j = i+1, j-1 {
				level[i], level[j] = level[j], level[i]
			}
		}
		flag = !flag
		path = append(path, level)
	}

	return path
}

// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

*/

