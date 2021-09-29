//stack 자료구조 구현.
//1. array를 사용하지 않을것.
//2.LIFO(Last in First out)의 stack의 형태로 구현할것.
//3. undefiend를 어떻게할지 생각하고, 외부에서 자료수정이 되지 않게 만들것.

{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type NodeStack = {
    readonly value: string;
    readonly next?: NodeStack;
  };

  class StackImple implements Stack {
    private _size: number = 0;

    //head는 앞의 정보를 가지고 있어야함.
    private head?: NodeStack;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: string) {
      if (this._size === this.capacity) {
        throw new Error('the size is full');
      }
      const node: NodeStack = { value, next: this.head };

      //head.next가 undefined면 맨앞에 있는 stack이다.
      this.head = node;
      console.log(this.head);

      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error('next value is empty!');
      }

      const node = this.head;
      this.head = node.next;
      //   console.log(this.head);

      this._size--;
      return node.value;
    }
  }

  const stack = new StackImple(3);
  stack.push('value 1');
  stack.push('value 2');
  stack.push('value 3');

  console.log(stack.size);

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
