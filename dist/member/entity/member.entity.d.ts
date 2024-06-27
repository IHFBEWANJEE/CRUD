import { Todo } from "../../todo/entity/todo.entity";
import { MemberRequest } from "../service/dto/request/member.dto.request";
export declare class Member {
    constructor(partial?: Partial<MemberRequest>);
    memberId: number;
    email: string;
    password: string;
    name: string;
    todos: Todo[];
    addTodos(todos: Todo[]): void;
    changeName(name: string): void;
}
