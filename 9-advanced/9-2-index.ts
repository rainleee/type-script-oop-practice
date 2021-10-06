{
  // Utility Type Index type
  // index를 추적해서 key안에 있는 value를 type으로 지정할 수 있다.

  const obj = {
    name: 'minwoo',
  };

  obj.name; //minwoo
  obj['name']; //minwoo

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; //string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  //Animal[key]만 받는 type을 정의할 수 있다.
  type Keys = keyof Animal; //'name' | 'age' | 'gender'

  const keys: Keys[] = ['age', 'gender', 'name'];
  const key: Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'minwoo',
    gender: 'female',
  };
}
