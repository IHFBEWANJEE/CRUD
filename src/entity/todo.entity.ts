import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Member } from "./member.entity";

@Entity("todo")
export class Todo{
    @PrimaryGeneratedColumn()
    id: number
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
    @ManyToOne(() => Member, (member) => member.id)
    @JoinColumn({ name: 'member_id' })
    member: Member
}