import { Todo } from "../entity/todo.entity";
import { Repository } from "typeorm";
import { TodoRequest } from "./dto/request/todo.dto.request";
import { Member } from "../../member/entity/member.entity";
export declare class TodoService {
    private todoRepository;
    private memberRepository;
    constructor(todoRepository: Repository<Todo>, memberRepository: Repository<Member>);
    createTodo(todoRequest: TodoRequest, memberId: number): Promise<Todo>;
    deleteTodo(todoId: number, memberId: number): Promise<string>;
}
