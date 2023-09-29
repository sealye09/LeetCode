/*
 * @lc app=leetcode.cn id=94 lang=golang
 * @lcpr version=
 *
 * [94] 二叉树的中序遍历
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
func inorderTraversal(root *TreeNode) []int {
	var path []int
	var stack []*TreeNode
	for root != nil || len(stack) > 0 {
		if root != nil {
			stack = append(stack, root)
			root = root.Left
			continue
		}

		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		path = append(path, root.Val)
		root = root.Right
	}

	return path

	// 递归
	// var inOrder = func(root *TreeNode) {
	// 	if root == nil {
	// 		return
	// 	}

	// 	inOrder(root.Left)
	// 	path = append(path, root.Val)
	// 	inOrder(root.Right)
	// }
}

// @lc code=end

/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

*/

