import { MemberService } from "../service/member.service";
import { MemberRequest } from "../service/dto/request/member.dto.request";
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    findAllMembers(): Promise<import("../entity/member.entity").Member[]>;
    registerMember(memberRequest: MemberRequest): Promise<import("../entity/member.entity").Member>;
    updateMember(id: number, newName: string): Promise<import("../entity/member.entity").Member>;
    deleteMember(id: number): Promise<import("typeorm").DeleteResult>;
}
