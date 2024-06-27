import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class ProductInput {
    @Field()
    name: string

    @Field()
    price: number
}