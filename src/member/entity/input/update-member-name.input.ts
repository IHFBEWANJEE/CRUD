import {IsNotEmpty} from "class-validator";
import {Field, ID, InputType} from "@nestjs/graphql";

@InputType()
export class UpdateMemberNameInput {
    @Field(() => ID)
    @IsNotEmpty()
    id: number

    @Field()
    @IsNotEmpty()
    name: string
}