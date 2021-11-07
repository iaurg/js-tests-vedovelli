import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Cooler Titanium Max',
    price: 35190,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when call getTotal() in a newly created cart', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and receive the total amount of cart', () => {
    const item = {
      product,
      quantity: 2,
    };

    cart.addItem(item);

    expect(cart.getTotal()).toEqual(70380);
  });

  it('should ensure no more than one product exists at a time', () => {
    cart.addItem({
      product,
      quantity: 2,
    });

    cart.addItem({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(35190);
  });
});
