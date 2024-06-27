import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Order} from "../../order/sdl/order.object";

@ObjectType()
export class Product {
    @Field(() => ID)
    id: number;

    @Field()
    name: string

    @Field()
    price: number

    @Field(() => [Order], {nullable: true})
    orders: Order[]
}