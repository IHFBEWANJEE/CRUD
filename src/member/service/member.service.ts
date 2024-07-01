import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Member} from "../entity/member.entity";
import {Repository} from "typeorm";
import {MemberRequest} from "./dto/request/member.dto.request";
import {UpdateMemberNameInput} from "../entity/input/update-member-name.input";
import {Todo} from "../../todo/entity/todo.entity";

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member)
        private memberRepository: Repository<Member>) {
    }

    async registerMember(memberRequest: MemberRequest): Promise<Member> {
        const member = new Member(memberRequest);
        await this.memberRepository.save(member);
        return member;
    }

    async deleteById(id: number): Promise<string> {
        const result = await this.memberRepository.delete(id);
        return result ? "successfully deleted" : "Something was wrong";
    }

    async getTodos(id: number): Promise<Todo[]> {
        const result = await this.memberRepository.findOneBy({memberId: id});
        return result.todos;
    }

    async getAllMembers(): Promise<Member[]> {
        return await this.memberRepository.find();
    }

    async findById(id: number): Promise<Member> {
        return await this.memberRepository.findOneBy({memberId: id});
    }

    async updateMemberName(id: number, newName: string): Promise<Member | string> {
        const result = await this.memberRepository.update(
            {memberId: id},
            {name: newName}
        );
        if (!result.affected) {
            return "not updated";
        }
        return await this.memberRepository.findOneBy({memberId: id});
    }

    async updateMemberNameWithMutation(input: UpdateMemberNameInput): Promise<Member> {
        const member: Member = await this.memberRepository.findOne({where: {memberId: input.id}});
        if (member == null) {
            throw new Error("Member Not Found");
        }
        member.changeName(input.name);
        return await this.memberRepository.save(member);
    }
}