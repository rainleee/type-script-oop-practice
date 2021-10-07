const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(y.toString());

// x와 y는 같은 object를 참조하고있다. 즉 프로토타입 obj를 참조하고있음.
console.log(x.__prototype__ === y.__prototype__);
console.log(x.valueOf === y.valueOf);

// array는 Array를 exteans하고 Array는 Object를 extends한다.
const array = [];
console.log(array);

console.clear();

// constructor function
function CoffeeMachine(beans) {
  this.beans = beans;

  // Instance membver level
  // 각 객체를 만들때마다 객체안에 들어있는 fn
  //   this.makeCoffee = shots => {
  //     console.log('makeing... coffee for instance');
  //   };
}

// Prototype member level
// 각 객체에 선언하지않고 Array에 한번 선언된 fn을 불러오는것처럼 CoffeeMachine에 한번 선언하고 재사용이 가능함.
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('makeing... coffee');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(10);

console.log(machine1);
console.log(machine2);
// console.log(machine1.makeCoffee(1));
machine1.makeCoffee(1);

function LatteMachine(milk) {
  this.milk = milk;
}

// CoffeeMachine inheritance
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(12121);

console.clear();
console.log(latteMachine);
latteMachine.makeCoffee(121);
