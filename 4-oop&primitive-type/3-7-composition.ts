{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //milk steamer
  class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Fancy!!!! Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //milk 추가 X
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //sugar mixer
  class CandySugarMixer implements SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup {
      console.log(`Adding candy sugar...🍭`);
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class SugarMixer implements SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup {
      console.log(`Adding sugar...🍭`);
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class NoSugar implements SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //다용도 커피머신
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarSource
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const sweetCoffee = new CoffeeMachine(32, new NoMilk(), new SugarMixer());
  sweetCoffee.makeCoffee(2);
  const latteCoffee = new CoffeeMachine(
    32,
    new FancyMilkSteamer(),
    new CandySugarMixer()
  );
  latteCoffee.makeCoffee(2);
}
