const arr: (string | number | boolean)[] = [true,'11',11];

arr.push(11,'sdadas', true);

// console.log(arr);


class Animal{}

class Cat extends Animal{
    isCat:boolean = true;
}

class Dog{
    isDog:boolean = false;
}

const animals:Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));

