/* 구현 주의사항
    -LIFO(Last In First Out)의 stack 구현하기
    1. ts의 자료구조를 이용해서 풀지말것.(array 사용금지)
    2. 시간을 정해놓고 일정시간이 지나면 해당 내용을 찾아보기
*/

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

//불변성을 지키기위해서 readonly
type StackNode = {
  readonly value: string;

  //?: StackNode | undefined와 같음
  readonly next?: StackNode;
};

class StackBasic implements Stack {
  // readonly를 readonly로 정의하면 내부에서도 수정이 불가능하므로 private로 정의
  private _size: number = 0;
  private head?: StackNode;

  get size() {
    return this._size;
  }

  //value를 넣어주는 역할. stack 구조로 쌓여야함
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    // console.log(node);

    this.head = node;
    this._size++;
  }

  //제일 나중에 들어온것을 꺼내주는 역할을 함.
  pop(): string {
    //haed가 undefined이 올수도있지만, function 편의성과 사용성을 위해 따로 error를 미연에 방지함
    if (this.head == null) {
      throw new Error('stack is empty!');
    }

    const node = this.head;
    this.head = node?.next;
    console.log(this.head);

    this._size--;

    return node.value;
  }
}

const stack = new StackBasic();
stack.push('minwoo 1');
stack.push('minwoo 2');
stack.push('minwoo 3');
console.log(stack.size);

while (stack.size !== 0) {
  stack.pop();
}
