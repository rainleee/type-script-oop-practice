{
  //utility Type map type

  //readonly, add variable etc.. 여러가지 조건을 할때마다 type을 새로 생성💩
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  // 위에처럼 안하고 재사용성을 높이기위해서 할수 있는것이 map type이다.

  //[1, 2].map(item => item * item); //output: [1,4]
  // 위처럼 기존에 있던값을 변경가능하게 만드는게 map타입.

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; //for...in
  };

  type Animal = {
    name: string;
    age: number;
  };

  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: 'dsds',
  };

  const animal: Optional<Animal> = {
    age: 11,
  };

  // readOnly
  const animalReadOnly: Readonly<Optional<Animal>> = {
    age: 22,
  };
  const readOnlyAnimal: ReadOnly<Animal> = {
    age: 22,
    name: 'cat',
  };

  // readOnlyAnimal.age = 23;

  const array: Optional<Array<number>> = [22, 23];

  animal.age = 33;
  // array.map(i => console.log(i));

  // test code
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const objVideo: Nullable<Video> = {
    title: 'DP',
    author: 'minwoo',
  };
}
