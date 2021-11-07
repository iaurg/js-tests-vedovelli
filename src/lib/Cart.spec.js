import Cart from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when call getTotal() in a newly created cart', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and receive the total amount of cart', () => {
    const item = {
      product: {
        title: 'Cooler Titanium Max',
        price: 35190,
      },
      quantity: 2,
    };

    cart.addItem(item);

    expect(cart.getTotal()).toEqual(70380);
  });
});
