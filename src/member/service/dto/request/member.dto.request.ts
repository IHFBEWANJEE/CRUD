import { IsNotEmpty, MinLength } from "class-validator"

export class MemberRequest {
    @IsNotEmpty()
    member_id: string

    @IsNotEmpty()
    @MinLength(2)
    password: string

    @IsNotEmpty()
    name: string
}