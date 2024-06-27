import {Field, ID, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@InputType()
export class UpdateMemberNameInput {
    @Field(() => ID)
    @IsNotEmpty()
    id: number

    @Field(() => String)
    @IsNotEmpty()
    name: string
}