/*
 * @lc app=leetcode.cn id=605 lang=golang
 * @lcpr version=
 *
 * [605] 种花问题
 */

// @lc code=start
func canPlaceFlowers(flowerbed []int, n int) bool {
	prev := -1
	count := 0
	for i := 0; i < len(flowerbed); i++ {
		if flowerbed[i] == 1 {
			if prev < 0 {
				count += i / 2
			} else {
				count += (i - prev - 2) / 2
			}
			if count >= n {
				return true
			}
			prev = i
		}
	}

	if prev < 0 {
		count += (len(flowerbed) + 1) / 2
	} else {
		count += (len(flowerbed) - prev - 1) / 2
	}

	return count >= n
}

// @lc code=end

/*
// @lcpr case=start
// [1,0,0,0,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,0,1]\n2\n
// @lcpr case=end

*/

