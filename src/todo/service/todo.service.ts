import {Injectable} from "@nestjs/common";
import {Todo} from "../entity/todo.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TodoRequest} from "./dto/request/todo.dto.request";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>) {
    }

    async createTodo(todoRequest: TodoRequest): Promise<Todo> {
        const todo = new Todo(todoRequest);
        return await this.todoRepository.save(todo)
    }
}