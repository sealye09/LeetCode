/*
 * @lc app=leetcode.cn id=92 lang=golang
 * @lcpr version=
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseBetween(head *ListNode, left int, right int) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	dummy := &ListNode{Next: head}
	prev := dummy
	for i := 0; i < left-1; i++ {
		prev = prev.Next
	}
	rightNode := prev
	for i := 0; i < right-left+1; i++ {
		rightNode = rightNode.Next
	}

	// 断开链表
	leftNode := prev.Next
	curr := rightNode.Next
	prev.Next = nil
	rightNode.Next = nil

	reverseList(leftNode)

	prev.Next = rightNode
	leftNode.Next = curr

	return dummy.Next
}

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	curr := head
	for curr != nil {
		next := curr.Next
		curr.Next = prev

		prev = curr
		curr = next
	}
	return prev
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

*/

