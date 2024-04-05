
class CartItem {
    product: any;
    quantity: number;

    constructor(product: any, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}

export { CartItem };