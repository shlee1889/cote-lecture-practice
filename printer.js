// 나의 풀이
// 오답

function solution(priorities, location) {
  
  let answer = 0;
  const h = priorities[location];
  const max = Math.max(...priorities);
  const maxIdx = priorities.indexOf(max);
  const deletedArr = priorities.splice(0, maxIdx);
  priorities.splice(priorities.length-1, 0, deletedArr);
  answer = priorities.indexOf(h) + 1;
  
  return answer;


}

console.log(solution([2,1,3,2], 2));