import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Order {
    @Field(() => ID)
    id: number;

    @Field()
    productId: number

    @Field()
    date: Date
}