/*
 * @lc app=leetcode.cn id=102 lang=golang
 * @lcpr version=
 *
 * [102] 二叉树的层序遍历
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
func levelOrder(root *TreeNode) [][]int {
	var path [][]int
	if root == nil {
		return path
	}

	var queue []*TreeNode = []*TreeNode{root}
	for len(queue) > 0 {
		var level []int
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

