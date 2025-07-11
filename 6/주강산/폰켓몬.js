// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const max = nums.length / 2;
    const unique = new Set(nums);
    return Math.min(unique.size, max);
}