import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "../entity/member.entity";
import { Repository } from "typeorm";
import { MemberRequest } from "./dto/request/member.dto.request";

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(Member)
        private memberRepository: Repository<Member>) { }

    async registerMember(memberRequest: MemberRequest): Promise<Member>{
        const member = new Member()
        member.member_id = memberRequest.member_id
        member.name = memberRequest.name
        member.password = memberRequest.password
        await this.memberRepository.save(member)
        return member
    }
    async deleteById(id: number){
        return await this.memberRepository.delete(id)
    }
    async getAllMembers(): Promise<Member[]>{
        return await this.memberRepository.find()
    }
    async findById(id: number):Promise<Member>{
        return await this.memberRepository.findOneBy({ id: id })
    }
    async updateMemberName(id: number, newName: string): Promise<Member>{
        const result = await this.memberRepository.update(
            {id:id},
            {name: newName}
        )
        return result.raw
    }
 }