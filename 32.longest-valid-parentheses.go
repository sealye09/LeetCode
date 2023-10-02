/*
 * @lc app=leetcode.cn id=32 lang=golang
 * @lcpr version=
 *
 * [32] 最长有效括号
 */

// @lc code=start
func longestValidParentheses(s string) int {
	if len(s) <= 1 {
		return 0
	}
	res := 0
	stack := []int{-1}
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			stack = append(stack, i) // push
		} else {
			stack = stack[:len(stack)-1] // pop
			// 栈为空，说明当前的右括号是没有被匹配的，所以将当前的右括号的下标入栈
			if len(stack) == 0 {
				stack = append(stack, i)
			} else {
				// 栈不为空，说明当前的右括号是有匹配的，所以计算当前的有效长度
				// 当前的有效长度 = 当前的下标 - 栈顶元素的下标
				res = max(res, i-stack[len(stack)-1])
			}
		}
	}

	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}

// @lc code=end

/*
// @lcpr case=start
// "(()"\n
// @lcpr case=end

// @lcpr case=start
// ")()())"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

*/

