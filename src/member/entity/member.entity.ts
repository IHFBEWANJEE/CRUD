import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "../../todo/entity/todo.entity";
import { MemberRequest } from "../service/dto/request/member.dto.request";

@Entity("member")
export class Member{
    constructor(partial?: Partial<MemberRequest>) {
        if(partial){
            this.member_id = partial.member_id
            this.password = partial.password
            this.name = partial.name
        }
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    member_id: string

    @Column()
    password: string

    @Column()
    name: string

    @OneToMany(() => Todo, (todo) => todo.id)
    todos: Todo[]
}