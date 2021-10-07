// this는 호출한 것을 가르킴. 아래와 같은경우는 전역을 호출하여 window가 호출됨
console.log(this);

function simpleFunc() {
  // window를 호출
  console.log(this);
}

class Counter {
  count = 0;
  // increse = function () {
  // arraow fn을 이용하면 선언될 당시의 scope, this context를 유지한다. bind() 불필요
  increse = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increse();

const caller = counter.increse; // bind를 안할 시 global scope 호출
// const caller = counter.increse.bind(counter);
caller();

// function 으로 선언한 것은 window.을 통해 접근이 가능하다.
// 하지만 let const로 선언한 키워드는 window.로 접근이 불가능하다.
// window = global scope
// let,const = local scope
const con = 'const';
console.log(window.con); // undefined

// 예외사항: var는 window로 호출할 수 있다.

var badVar = 'bad';
console.log(window.badVar);

class Bob {}

const bob = new Bob();
bob.run = counter.increse;
bob.run();

// Javascript의 this는 호출한것을 가르키기 떄문에 this가 원래의도와 다르게 될 수 있으므로 bind해야함
