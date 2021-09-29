{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static COFFEE_GRAMM_PER_SHOT: number = 7;
    coffeeBans: number;

    constructor(coffeeBans: number) {
      this.coffeeBans = coffeeBans;
    }

    static makeMechine(coffeeBans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBans);
    }

    makeCoffee(shots: number, hasMilk?: boolean): CoffeeCup {
      if (this.coffeeBans < CoffeeMaker.COFFEE_GRAMM_PER_SHOT * shots)
        throw new Error(
          `Not enough coffee beans! coffee beans gramms: ${this.coffeeBans}`
        );

      this.coffeeBans -= CoffeeMaker.COFFEE_GRAMM_PER_SHOT * shots;

      return {
        shots,
        hasMilk: hasMilk ? hasMilk : false,
      };
    }
  } //end of class

  const coffee = new CoffeeMaker(21);

  console.log(coffee.makeCoffee(2, true));
  console.log(coffee);

  console.log(CoffeeMaker.makeMechine(16).makeCoffee(2));
  // console.log(coffee2.makeCoffee(2));
}
