import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Todo} from "../../todo/entity/todo.entity";
import {MemberRequest} from "../service/dto/request/member.dto.request";
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
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

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    memberId: number;

    @Field(() => String)
    @Column({unique: true})
    email: string;

    @Field(() => String)
    @Column()
    password: string;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => [Todo], {nullable: true})
    @OneToMany(() => Todo, (todo) => todo.member, {eager: true, cascade: true})
    todos: Todo[];

    addTodos(todos: Todo[]) {
        this.todos = [...this.todos, ...todos];
    }

    changeName(name: string) {
        this.name = name;
    }
}