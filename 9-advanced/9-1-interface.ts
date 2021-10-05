// type과 interface의 차이
{
  interface PositionInterface {
    x: number;
    y: number;
  }

  //interface는 두번(혹은 여러번) 정의할 경우 구현 시 모든값이 들어가 있어야 된다.
  //only interfaces can be merged.
  interface PositionInterface {
    y: number;
  }

  //Type는 2번 정의할 수 없다.(인터페이스와 차이점)
  type PositionType = {
    x: number;
    y: number;
  };

  type Name = Person['name']; //string

  type Person = {
    name: string;
    age: number;
  };

  //union type은 절대 interface로 구현할 수 없다.
  type Direction = 'up' | 'down';

  const person: Person = { name: 'minwoo', age: 32 };
  const name: Name = person['name'];
  const name2: Name = 'minwoo2';

  console.log(name, name2);

  //★ class
  class Pos1 implements PositionType {
    x: number = 0;
    y: number = 0;
  }

  class Pos2 implements PositionInterface {
    x: number = 0;
    y: number = 0;
  }

  //Extends
  interface ZPositionInterface extends PositionInterface {
    Z: number;
  }

  type ZPositionType = PositionType & { z: number };

  const objZ: ZPositionType = {
    x: 1,
    y: 2,
    z: 3,
  };

  //★ variable
  const objType: PositionType = {
    x: 1,
    y: 2,
  };

  const objInterface: PositionInterface = {
    x: 1,
    y: 2,
  };
}
