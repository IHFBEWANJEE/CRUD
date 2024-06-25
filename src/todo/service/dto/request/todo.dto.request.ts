import {IsNotEmpty} from "class-validator";

export class TodoRequest {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    contents: string
}