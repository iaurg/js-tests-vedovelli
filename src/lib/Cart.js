import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];

  addItem(item) {
    const itemToFind = { product: item.product };

    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  checkout() {
    return {
      items: this.items,
      total: this.getTotal(),
    };
  }
}
