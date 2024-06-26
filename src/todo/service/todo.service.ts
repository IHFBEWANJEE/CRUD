import {Injectable} from "@nestjs/common";
import {Todo} from "../entity/todo.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TodoRequest} from "./dto/request/todo.dto.request";
import {Member} from "../../member/entity/member.entity";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
        @InjectRepository(Member)
        private memberRepository: Repository<Member>) {
    }

    async createTodo(todoRequest: TodoRequest, memberId: number): Promise<Todo> {
        const todo: Todo = new Todo(todoRequest);
        const member: Member = await this.memberRepository.findOneBy({id: memberId});
        await member.addTodo(todo);
        return await this.todoRepository.save(todo);
    }

    async deleteTodo(todoId: number, memberId: number): Promise<string> {
        const todo: Todo = await this.todoRepository.findOneBy({id: todoId});
        const member: Member = await this.memberRepository.findOneBy({id: memberId});
        return await member.deleteTodo(todo) ? `successfully deleted todo with id : ${todoId} ` : "something was wrong";
    }
}