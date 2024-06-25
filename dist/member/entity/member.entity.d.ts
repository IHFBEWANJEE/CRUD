import { Todo } from "../../todo/entity/todo.entity";
import { MemberRequest } from "../service/dto/request/member.dto.request";
export declare class Member {
    constructor(partial?: Partial<MemberRequest>);
    id: number;
    member_id: string;
    password: string;
    name: string;
    todos: Todo[];
}
