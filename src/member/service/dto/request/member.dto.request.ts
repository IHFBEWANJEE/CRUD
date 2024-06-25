import { IsNotEmpty, MinLength } from "class-validator"

export class MemberRequest {
    @IsNotEmpty()
    readonly member_id: string
    @IsNotEmpty()
    @MinLength(2)
    readonly password: string
    @IsNotEmpty()
    readonly name: string
}