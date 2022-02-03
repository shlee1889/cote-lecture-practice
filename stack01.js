function solution(s) {
  const stack = [];

  for (let c of s) {
    if (c === "(") { // opener
      stack.push(c);
    } else { // closer
      if(stack.length === 0) { // 스택에 문자가 없는 경우 pop불가능
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false; // 스택이 비워지면 true
}

console.log(solution("(()("));