import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Todo } from "./todo.entity";

@Entity("member")
export class Member{
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