// 답안

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   enqueue(newValue) {
//     const newNode = new Node(newValue);
//     if (this.head === null) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   dequeue() {
//     const value = this.head.value;
//     this.head = this.head.next;
//     this.size--;
//     return value;
//   }

//   peek() {
//     return this.head.value;
//   }

// }

// ----------------------------------------------
import {Node, Queue} from './queueByLinkedList.js';

function solution(priorities, location) {
  // 큐 생성
  const queue = new Queue(); // by linked list
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
    console.log(queue);
  } // {[2, 0], [1, 1], [3, 2], [2, 3]}
  
  priorities.sort((a, b) => b - a);

  let count = 0;
  while (queue.size > 0) { // 이 문제의 경우 항상 true
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) { // 큐의 헤드와 정렬된 배열의 요소 비교
      queue.enqueue(queue.dequeue()); // 뒷 순서로 바꾸기
    } else {
      const value = queue.dequeue();
      count++;
      if (location === value[1]) {// location은 위치 값
        return value;
      }
    }
  }

}

solution([2,1,3,2], 2);
