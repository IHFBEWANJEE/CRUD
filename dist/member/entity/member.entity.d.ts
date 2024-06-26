import { Todo } from "../../todo/entity/todo.entity";
import { MemberRequest } from "../service/dto/request/member.dto.request";
export declare class Member {
    constructor(partial?: Partial<MemberRequest>);
    id: number;
    email: string;
    password: string;
    name: string;
    todos: Todo[];
    addTodo(todo: Todo): Promise<void>;
    deleteTodo(todo: Todo): Promise<Boolean>;
}
