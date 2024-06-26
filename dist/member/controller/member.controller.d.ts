import { MemberService } from "../service/member.service";
import { MemberRequest } from "../service/dto/request/member.dto.request";
import { Member } from "../entity/member.entity";
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    findAllMembers(): Promise<Member[]>;
    registerMember(memberRequest: MemberRequest): Promise<Member>;
    updateMember(id: number, newName: string): Promise<Member | string>;
    deleteMember(id: number): Promise<string>;
}
