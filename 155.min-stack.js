/*
 * @lc app=leetcode.cn id=155 lang=javascript
 * @lcpr version=
 *
 * [155] 最小栈
 * 
 * @explanation
 * min_stack 辅助栈，用来存储最小值，
 * 每次 push 的时候，都把当前的最小值存入 min_stack
 * 每次 pop 的时候，min_stack 也 pop
 * 这样 min_stack 的栈顶元素就是当前栈中的最小值
 * push(0) min_stack: [Infinity, 0]
 * push(1) min_stack: [Infinity, 0, 0]
 * push(0) min_stack: [Infinity, 0, 0, 0]
 * push(-2) min_stack: [Infinity, 0, 0, 0, -2]
 * pop() min_stack: [Infinity, 0, 0, 0]
 * pop() min_stack: [Infinity, 0, 0]
 */

// @lc code=start

var MinStack = function () {
  this.minStack = [Infinity];
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let val = this.stack.pop();
  let min = this.minStack.pop();
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"][[],[-2],[0],[-3],[],[],[],[]]\n
// @lcpr case=end

 */
