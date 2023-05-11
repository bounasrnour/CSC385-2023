class Person {
    private _name: string;
    private _age: number;
  
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  
    public getName(): string {
      return this._name;
    }
  
    public getAge(): number {
      return this._age;
    }
  }
  
  let person = new Person("Nour", 26);
  console.log(person.getName());
  console.log(person.getAge());
  