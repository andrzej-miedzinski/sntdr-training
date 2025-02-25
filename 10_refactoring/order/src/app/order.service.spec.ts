import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });
    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('powinien pobrać zamówienia', () => {
    const mockOrders = [{ id: 1, name: 'Order 1' }];

    service.getOrders().subscribe(orders => {
      expect(orders).toEqual(mockOrders);
    });

    const req = httpMock.expectOne('/api/orders');
    expect(req.request.method).toBe('GET');
    req.flush(mockOrders);
  });

  it('powinien dodać zamówienie', () => {
    const mockOrder = { id: 1, name: 'New Order' };

    service.addOrder(mockOrder).subscribe(response => {
      expect(response).toEqual(mockOrder);
    });

    const req = httpMock.expectOne('/api/orders');
    expect(req.request.method).toBe('POST');
    req.flush(mockOrder);
  });
});