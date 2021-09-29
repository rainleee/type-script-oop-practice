// shot: number;
// coffeeBeans: number;
// milk: number;
{
  type CoffeeCup = {
    order: 'americano' | 'latte';
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  interface LatteMaker extends CoffeeMaker {
    makeLatte(shots: number, milk: number): CoffeeCup;
  }

  class Coffee {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private _coffeeBeans = 0;
    private _milk = 0;
    private _shot = 0;

    constructor(coffeeBeans: number, milk: number) {
      this._coffeeBeans = coffeeBeans;
      this._milk = milk;
    }
    set coffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this._coffeeBeans = coffeeBeans;
    }
    get coffeeBeans() {
      return this._coffeeBeans;
    }

    set milk(milk: number) {
      if (milk < 0) {
        `value for milk should be greater than 0!! milk gramms : ${milk}`;
      }
      this._milk = milk;
    }
    get milk() {
      return this._milk;
    }
  }

  class CoffeeMachineImpl extends Coffee implements LatteMaker {
    constructor(coffeeBeans: number, milk: number) {
      super(coffeeBeans, milk);
    }

    private makeShot(shots: number) {
      console.log(`customer shots : ${shots}`);
    }
    //Latte make private method
    private heatMilk() {
      console.log('heating milk...🔥🔥');
    }
    private makeMilkFroth(milk: number) {
      if (milk < 0) {
        throw new Error(
          `value for milk should be greater than 0!! milk gramms : ${milk}`
        );
      }
      console.log('shaking milk....👨‍🍳');
      console.log('complete milk froth!!');
    }

    private extract(
      shots: number,
      order: 'americano' | 'latte',
      hasMilk: boolean
    ): CoffeeCup {
      return {
        order,
        shots,
        hasMilk,
      };
    }

    //default coffee
    makeCoffee(): CoffeeCup {
      return {
        order: 'americano',
        shots: 2,
        hasMilk: false,
      };
    }

    makeLatte(shots: number, milk: number): CoffeeCup {
      if (shots < 0) {
        throw new Error(
          `value for shots should be greater than 0!! input shots: ${shots}`
        );
      }

      this.makeShot(shots);
      this.heatMilk();
      this.makeMilkFroth(milk);

      return this.extract(shots, 'latte', true);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {}
  }

  const coffee = new CoffeeMachineImpl(32, 10);
  console.log(coffee.makeLatte(2, 10));
  console.log(coffee.makeCoffee());
}
