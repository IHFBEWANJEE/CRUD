import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Member} from "../../member/entity/member.entity";
import {TodoRequest} from "../service/dto/request/todo.dto.request";

@Entity("todo")
export class Todo {
    constructor(partial?: Partial<TodoRequest>) {
        if (partial) {
            this.title = partial.title
            this.contents = partial.contents
        }
    }

    @PrimaryGeneratedColumn()
    todoId: number

    @Column()
    title: string

    @Column()
    contents: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Member, (member) => member.todos, {onDelete: 'CASCADE'})
    @JoinColumn({name: "memberId"})
    member: Member
}