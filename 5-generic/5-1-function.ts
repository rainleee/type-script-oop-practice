{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('error');
    }
    return arg;
  }

  //function 에서 generic 사용법. 보통 <>안에 내용을 길게 입력하지않고 T를 입력하여
  //제네릭 함수라는것을 알 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('error');
    }
    return arg;
  }

  const number = checkNotNull(123);
}
