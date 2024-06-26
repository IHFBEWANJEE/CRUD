import { Member } from "../../member/entity/member.entity";
import { TodoRequest } from "../service/dto/request/todo.dto.request";
export declare class Todo {
    constructor(partial?: Partial<TodoRequest>);
    id: number;
    title: string;
    contents: string;
    createdAt: Date;
    updatedAt: Date;
    member: Member;
}
