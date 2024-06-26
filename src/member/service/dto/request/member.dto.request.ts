import { IsNotEmpty, MinLength } from "class-validator"

export class MemberRequest {
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @MinLength(2)
    password: string

    @IsNotEmpty()
    name: string
}