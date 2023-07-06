/**
 * [4] 寻找两个正序数组的中位数
 *
 * @format
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length,
    m = nums2.length;
  let newArr = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  });
  console.log(newArr);
  let mid = (m + n) >> 1;
  if ((m + n) % 2) {
    return newArr[mid];
  } else {
    return (newArr[mid] + newArr[mid - 1]) / 2.0;
  }
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=
// paramTypes= []
// returnType=
// @lcpr-div-debug-arg-end

/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [3]\n[-2,-1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = findMedianSortedArrays;
// @lcpr-after-debug-end