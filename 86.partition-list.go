/*
 * @lc app=leetcode.cn id=86 lang=golang
 * @lcpr version=
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {
	if head == nil {
		return head
	}

	leftDummy := &ListNode{}
	rightDummy := &ListNode{}

	left := leftDummy
	right := rightDummy

	p := head

	for p != nil {
		if p.Val < x {
			left.Next = p
			left = left.Next
		} else {
			right.Next = p
			right = right.Next
		}
		p = p.Next
	}

	right.Next = nil
	left.Next = rightDummy.Next

	return leftDummy.Next
}

// @lc code=end

/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

*/

