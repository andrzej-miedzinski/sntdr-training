export class User {
    constructor(
      public readonly id: string,
      public readonly name: string,
      public readonly email: string
    ) {}
  
    // Metoda biznesowa
    isValid(): boolean {
      return !!this.name && !!this.email;
    }
  }