import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Product} from "../sdl/product.object";
import {ProductService} from "../service/product.service";
import {ProductInput} from "../input/product.input";

@Resolver(() => Product)
export class ProductResolver {
    constructor(private productService: ProductService) {
    }

    @Query(() => String)
    hello(@Args('hello') hello: string): string {
        return "hello"
    }

    @Query(() => [Product])
    products(): Product[] {
        return this.productService.findALl();
    }

    @Mutation(() => Product)
    createProduct(@Args('product') productInput: ProductInput) {
        const {name, price} = productInput;
        return this.productService.createProduct(name, price);
    }
}