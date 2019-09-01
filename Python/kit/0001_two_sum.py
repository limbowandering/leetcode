class Solution:
    def two_sum(self, nums, target):
        map = {}
        for i in range(len(nums)):
            if nums[i] in map:
                return map[nums[i]], i
            else:
                map[target - nums[i]] = i