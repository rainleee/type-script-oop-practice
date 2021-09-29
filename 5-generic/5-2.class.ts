{
  //either: a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rigthValue: R) {}

    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rigthValue;
    }
  }

  const either = new SimpleEither('hello', 222);
  const either2 = new SimpleEither(333, 222);
}
