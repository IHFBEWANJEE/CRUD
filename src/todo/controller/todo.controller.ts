import {Body, Controller, Delete, Param, Post} from "@nestjs/common";
import {TodoService} from "../service/todo.service";
import {TodoRequest} from "../service/dto/request/todo.dto.request";
import {Todo} from "../entity/todo.entity";

@Controller("todo")
export class TodoController {
    constructor(
        private todoService: TodoService) {
    }

    @Post("/:memberId/create")
    async createTodo(@Param("memberId") memberId: number, @Body() todoRequest: TodoRequest): Promise<Todo> {
        return await this.todoService.createTodo(todoRequest, memberId);
    }

    @Delete("/:memberId/delete/:todoId")
    async deleteTodo(@Param("memberId") memberId: number, @Param("todoId") todoId: number): Promise<string> {
        return await this.todoService.deleteTodo(todoId, memberId);
    }
}
