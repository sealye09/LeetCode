/*
 * @lc app=leetcode.cn id=82 lang=golang
 * @lcpr version=
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	dummy := &ListNode{Next: head}
	p := dummy
	next := p.Next
	nextNext := next.Next
	for p != nil && next != nil && nextNext != nil {
		if next.Val == nextNext.Val {
			for nextNext != nil && next.Val == nextNext.Val {
				nextNext = nextNext.Next
			}
			p.Next = nextNext
			next = nextNext
			if nextNext != nil {
				nextNext = nextNext.Next
			}
		} else {
			p = p.Next
			next = next.Next
			nextNext = nextNext.Next
		}
	}

	return dummy.Next
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

*/

