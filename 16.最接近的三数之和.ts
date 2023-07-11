/*
 * @lc app=leetcode.cn id=16 lang=typescript
 * @lcpr version=
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let ans = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < len - 2; i++) {
    const curr = nums[i];
    if (i > 0 && curr === nums[i - 1]) {
      continue; // 优化三
    }

    // 优化一
    let sum = curr + nums[i + 1] + nums[i + 2];
    if (sum > target) {
      // 后面无论怎么选，选出的三个数的和不会比 s 还小
      if (sum - target < minDiff) {
        ans = sum;
      }
      break;
    }

    // 优化二
    sum = curr + nums[len - 2] + nums[len - 1];
    if (sum < target) {
      // x 加上后面任意两个数都不超过 s，所以下面的双指针就不需要跑了
      if (target - sum < minDiff) {
        minDiff = target - sum;
        ans = sum;
      }
      continue;
    }

    // 双指针
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      sum = curr + nums[j] + nums[k];
      if (sum === target) {
        return target;
      }
      if (sum > target) {
        if (sum - target < minDiff) {
          // s 与 target 更近
          minDiff = sum - target;
          ans = sum;
        }
        k--;
      } else {
        // s < target
        if (target - sum < minDiff) {
          // s 与 target 更近
          minDiff = target - sum;
          ans = sum;
        }
        j++;
      }
    }
  }
  return ans;
}
// @lc code=end

/*
// @lcpr case=start
// [-1,2,1,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,0]\n-100\n
// @lcpr case=end

 */
