export class Order {
    constructor(
      public readonly id: string,
      public readonly product: string,
      public readonly quantity: number
    ) {}
  
    // Metoda biznesowa
    isValid(): boolean {
      return !!this.product && !!this.quantity;
    }
  }