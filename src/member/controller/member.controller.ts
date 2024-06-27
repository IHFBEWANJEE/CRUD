import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {MemberService} from "../service/member.service";
import {MemberRequest} from "../service/dto/request/member.dto.request";
import {Member} from "../entity/member.entity";

@Controller("members")
export class MemberController {
    constructor(private memberService: MemberService) {
    }

    @Get("")
    async findAllMembers(): Promise<Member[]> {
        return await this.memberService.getAllMembers();
    }

    @Post("")
    async registerMember(@Body() memberRequest: MemberRequest): Promise<Member> {
        return await this.memberService.registerMember(memberRequest)
    }

    @Put(":id")
    async updateMember(@Param("id") id: number, @Body('name') newName: string): Promise<Member | string> {
        return await this.memberService.updateMemberName(id, newName)
    }

    @Delete(":id")
    async deleteMember(@Param("id") id: number): Promise<string> {
        return await this.memberService.deleteById(id)
    }
}