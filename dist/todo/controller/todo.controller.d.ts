import { TodoService } from "../service/todo.service";
import { TodoRequest } from "../service/dto/request/todo.dto.request";
import { Todo } from "../entity/todo.entity";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    createTodo(memberId: number, todoRequest: TodoRequest): Promise<Todo>;
    deleteTodo(memberId: number, todoId: number): Promise<string>;
}
