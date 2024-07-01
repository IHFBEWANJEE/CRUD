import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Product} from "../sdl/product.object";
import {ProductService} from "../service/product.service";
import {ProductInput} from "../input/product.input";

@Resolver(() => Product)
export class ProductResolver {
    constructor(private productService: ProductService) {
    }
}