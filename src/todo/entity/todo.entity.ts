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
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity("todo")
export class Todo {
    constructor(partial?: Partial<TodoRequest>) {
        if (partial) {
            this.title = partial.title
            this.contents = partial.contents
        }
    }

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    todoId: number

    @Field(() => String)
    @Column()
    title: string

    @Field(() => String)
    @Column()
    contents: string

    @Field(() => Date)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => Date)
    @UpdateDateColumn()
    updatedAt: Date

    @Field(() => Member, {nullable: false})
    @ManyToOne(() => Member, (member) => member.todos, {onDelete: 'CASCADE'})
    @JoinColumn({name: "memberId"})
    member: Member
}