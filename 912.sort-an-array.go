/*
 * @lc app=leetcode.cn id=912 lang=golang
 * @lcpr version=
 *
 * [912] 排序数组
 */

// @lc code=start
func sortArray(nums []int) []int {
	quickSort(nums, 0, len(nums)-1)
	return nums
}

func partition(nums []int, left, right int) int {
	pivot := threeOfMid(nums, left, right)
	i, j := left, right
	for i < j {
		for i < j && nums[j] >= pivot {
			j--
		}
		for i < j && nums[i] <= pivot {
			i++
		}
		nums[i], nums[j] = nums[j], nums[i]
	}
	nums[left], nums[i] = nums[i], nums[left]
	return i
}

func threeOfMid(nums []int, left, right int) int {
	mid := left + (right-left)/2
	if nums[left] > nums[right] {
		nums[left], nums[right] = nums[right], nums[left]
	}
	if nums[mid] > nums[right] {
		nums[mid], nums[right] = nums[right], nums[mid]
	}
	if nums[mid] > nums[left] {
		nums[mid], nums[left] = nums[left], nums[mid]
	}
	return nums[left]
}

func quickSort(nums []int, left, right int) {
	if left >= right {
		return
	}

	pivot := partition(nums, left, right)
	quickSort(nums, left, pivot-1)
	quickSort(nums, pivot+1, right)
}

// @lc code=end

/*
// @lcpr case=start
// [5,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,2,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [-4,0,7,4,9,-5,-1,0,-7,-1]\n
// @lcpr case=end
*/

