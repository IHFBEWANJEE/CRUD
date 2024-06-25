import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Member } from "../../member/entity/member.entity";

@Entity("todo")
export class Todo{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    contents: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Member, (member) => member.todos)
    @JoinColumn({ name: 'member_id' })
    member: Member
}