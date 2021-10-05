{
  interface Props {
    a?: number;
    b?: string;
  }

  const obj: Props = { a: 5 };

  const obj2: Required<Props> = { a: 5, b: 'aa' };

  interface CatInfo {
    age: number;
    breed: string;
  }

  type CatName = 'miffy' | 'boris' | 'mordred';

  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
  };

  console.log(cats.boris, cats.boris.age);
}
