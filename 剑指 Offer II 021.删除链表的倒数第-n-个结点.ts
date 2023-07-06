/*
 * @lc app=leetcode.cn id=剑指 Offer II 021 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 021] 删除链表的倒数第 n 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let left = dummy;
  let right = dummy;
  while (n--) {
    right = right.next;
  }
  while (right.next) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummy.next;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
