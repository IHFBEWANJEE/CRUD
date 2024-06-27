import {Injectable} from "@nestjs/common";
import {Product} from "../sdl/product.object";
import {Order} from "../../order/sdl/order.object";

@Injectable()
export class ProductService {
    private order: Order = {
        id: 1, productId: 1, date: Date.prototype
    }
    private products: Product[] = [
        {id: 1, name: "one", price: 1, orders: [this.order]}
    ];

    findALl(): Product[] {
        return this.products;
    }

    createProduct(name: string, price: number): Product {
        const newProduct = {
            id: 2,
            name: name,
            price: price,
            orders: null
        };
        this.products.push(newProduct);
        return newProduct;
    }
}