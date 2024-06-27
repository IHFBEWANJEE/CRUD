import {Module} from "@nestjs/common";
import {ProductResolver} from "../resolver/product.resolver";
import {ProductService} from "../service/product.service";

@Module({
    providers: [ProductResolver, ProductService],
})
export class ProductModule {
}