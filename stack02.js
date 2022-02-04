// 답안

function solution(s) {
  const count = 0;

  for (let c of s) {
    if (c === "(") {
      count += 1;
    } else { 
      if(count === 0) {
        return false;
      } else {
        count -= 1;
      }
    }
  }
  return count === 0
}

console.log(solution("(()("));