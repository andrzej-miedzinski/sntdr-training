export class OrderProcessor {
    processOrder(order: any) {
      if (!order.items || order.items.length === 0) {
        throw new Error('Order must contain at least one item.');
      }
      if (!order.customer || !order.customer.email) {
        throw new Error('Customer email is required.');
      }
  
      console.log(`Processing order for ${order.customer.email}`);
      // Logika przetwarzania zamówienia...
    }
  }