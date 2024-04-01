/**
 * @description
 * - lower 와 higher 사이의 무작위 정수를 출력합니다.
 * - 경계값 (lower, higher 로 설정된 값) 이 출력될 수 있습니다.
 * @param {number} lower
 * @param {number} higher
 * @returns {number}
 */
export const getRandomNumberInRange = (lower, higher) =>
  Math.floor(Math.random() * (higher - lower + 1)) + lower
