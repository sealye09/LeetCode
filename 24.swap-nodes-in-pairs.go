/*
 * @lc app=leetcode.cn id=24 lang=golang
 * @lcpr version=
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	var pre, cur, next *ListNode = nil, head, head.Next
	for cur != nil && next != nil {
		cur.Next = next.Next
		next.Next = cur
		if pre != nil {
			pre.Next = next
		} else {
			head = next
		}
		pre = cur
		cur = cur.Next
		if cur != nil {
			next = cur.Next
		}
	}

	return head
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

*/

