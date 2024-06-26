import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Member} from "../entity/member.entity";
import {Repository} from "typeorm";
import {MemberRequest} from "./dto/request/member.dto.request";

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
}