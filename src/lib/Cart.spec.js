import Cart from './Cart';

describe('Cart', () => {
  let cart;

  const product = {
    title: 'Cooler Titanium Max',
    price: 35190,
  };

  const product_2 = {
    title: 'Air Max',
    price: 10090,
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

  it('should update total when add and remove product from cart', () => {
    cart.addItem({
      product,
      quantity: 2,
    });

    cart.addItem({
      product: product_2,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(80470);

    cart.remove(product);

    expect(cart.getTotal()).toEqual(10090);
  });
});
