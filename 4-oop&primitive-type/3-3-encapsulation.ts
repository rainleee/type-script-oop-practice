{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static COFFEE_GRAMM_PER_SHOT: number = 7;
    private coffeeBans: number;

    private constructor(coffeeBans: number) {
      this.coffeeBans = coffeeBans;
    }

    static makeMechine(coffeeBans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBans);
    }

    addCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(
          `value for beans should be greater than 0!! beans the number : ${beans}`
        );
      }

      this.coffeeBans += beans;
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

  //   const coffee = new CoffeeMaker(21);

  const coffee = CoffeeMaker.makeMechine(32);

  //   console.log(coffee.addCoffeeBeans(3));
  //   console.log(coffee.addCoffeeBeans(-1));

  class User {
    constructor(private _firstName: string, private _lastName: string) {
      this._firstName = _firstName;
      this._lastName = _lastName;
    }

    set firstName(firstName: string) {
      this._firstName = firstName;
    }

    get firstName() {
      return this._firstName;
    }

    get fullName(): string {
      return `${this.firstName} ${this._lastName}`;
    }
  } //end of User class

  const user = new User('lee', 'minwoo');
  console.log(user.fullName);
  user.firstName = 'ree';
  console.log(user.firstName);
}
