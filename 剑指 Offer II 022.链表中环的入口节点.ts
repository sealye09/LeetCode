/*
 * @lc app=leetcode.cn id=剑指 Offer II 022 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 022] 链表中环的入口节点
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

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  if (!head) return null;

  while (fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let temp = head;
      while (temp !== slow) {
        temp = temp.next;
        slow = slow.next;
      }
      return temp;
    }
  }
  return null;
  // https://leetcode.cn/problems/c32eOV/solution/jian-zhi-offer-ii-022-lian-biao-zhong-hu-8f1m/
}
// @lc code=end

/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */
