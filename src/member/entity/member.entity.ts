import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Todo} from "../../todo/entity/todo.entity";
import {MemberRequest} from "../service/dto/request/member.dto.request";

@Entity("member")
export class Member {
    constructor(partial?: Partial<MemberRequest>) {
        if (partial) {
            this.email = partial.email;
            this.password = partial.password;
            this.name = partial.name;
            this.todos = [];
        }
    }

    @PrimaryGeneratedColumn({name: "member_id"})
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @OneToMany(() => Todo, (todo) => todo.member, {eager: true})
    todos: Todo[];

    async addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    async deleteTodo(todo: Todo): Promise<Boolean> {
        const index: number = this.todos.findIndex(t => t.id === todo.id);
        if (index > -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
}