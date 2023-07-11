/*
 * @lc app=leetcode.cn id=剑指 Offer II 023 lang=typescript
 * @lcpr version=
 *
 * [剑指 Offer II 023] 两个链表的第一个重合节点
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

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};

// @lc code=end

/*
// @lcpr case=start
// 8\n[4,1,8,4,5]\n[5,0,1,8,4,5]\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// 2\n[0,9,1,2,4]\n[3,2,4]\n3\n1\n
// @lcpr case=end

// @lcpr case=start
// 0\n[2,6,4]\n[1,5]\n3\n2\n
// @lcpr case=end

 */
