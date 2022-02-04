class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next; // 다음 노드가 헤드가 됨
    this.size--;
    return value; // 헤드의 value 리턴
  }

  peek() {
    return this.head.value;
  }

}

export {Node, Queue};