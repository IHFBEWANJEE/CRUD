import { Member } from "../entity/member.entity";
import { Repository } from "typeorm";
import { MemberRequest } from "./dto/request/member.dto.request";
export declare class MemberService {
    private memberRepository;
    constructor(memberRepository: Repository<Member>);
    registerMember(memberRequest: MemberRequest): Promise<Member>;
    deleteById(id: number): Promise<string>;
    getAllMembers(): Promise<Member[]>;
    findById(id: number): Promise<Member>;
    updateMemberName(id: number, newName: string): Promise<Member>;
}
