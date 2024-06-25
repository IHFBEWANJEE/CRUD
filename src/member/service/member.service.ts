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
        this.memberRepository.delete
    }
 }