import { Todo } from "../../todo/entity/todo.entity";
export declare class Member {
    id: number;
    member_id: string;
    password: string;
    name: string;
    todos: Todo[];
}
