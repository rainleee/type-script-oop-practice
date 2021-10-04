{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('fulltime pay!!');
    }

    fullTimeWork() {
      console.log('fullTimeWork!!!');
    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('parttime pay!!');
    }

    partTimeWork() {
      console.log('partTimeWork!!!');
    }
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();

    return employee;
  }

  const lee = new FullTimeEmployee();
  const minwoo = new PartTimeEmployee();

  // const leeAfterPay = pay(lee);
  // leeAfterPay.fullTimeWork();
  // const minwooAfterPay = pay(minwoo);
  // minwooAfterPay.partTimeWork();

  // obj와 key를 불러내는 함수를 만든다.
  /**
   *
   */
  const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const obj = {
    name: 'minwoo',
    age: 32,
  };

  const obj2 = {
    animal: 'cat',
  };

  console.log(getValue(obj, 'age'));
  console.log(getValue(obj2, 'animal'));
}
