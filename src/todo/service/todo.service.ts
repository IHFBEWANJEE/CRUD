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
        const createdTodo = await this.todoRepository.save(todo);

        const member: Member = await this.memberRepository.findOneBy({memberId: memberId});
        member.addTodos([createdTodo]);

        await this.memberRepository.save(member);

        return createdTodo;
    }

    async deleteTodo(todoId: number, memberId: number): Promise<string> {
        const todo: Todo = await this.todoRepository.findOneBy({todoId: todoId});
        const member: Member = await this.memberRepository.findOneBy({memberId: memberId});

        this.removeTodo(member, todo);
        await this.todoRepository.delete({todoId: todoId});

        await this.memberRepository.save(member);
        return "success";
    }

    private addTodo(member: Member, todo: Todo) {
        member.todos.push(todo);
    }

    private removeTodo(member: Member, todo: Todo) {
        const index: number = member.todos.findIndex(t => t.todoId === todo.todoId);
        if (index > -1) {
            member.todos.splice(index, 1);
        }
    }
}