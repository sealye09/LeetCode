/*
 * @lc app=leetcode.cn id=61 lang=golang
 * @lcpr version=
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
	if k == 0 || head == nil || head.Next == nil {
		return head
	}

	slow, fast := head, head
	for i := 0; i < k; i++ {
		if fast.Next == nil {
			fast = head
		} else {
			fast = fast.Next
		}
	}

	for fast.Next != nil {
		slow = slow.Next
		fast = fast.Next
	}

	fast.Next = head
	head = slow.Next
	slow.Next = nil

	return head
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n2\n
// @lcpr case=end
*/

