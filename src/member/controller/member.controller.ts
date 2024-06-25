import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MemberService } from "../service/member.service";
import { MemberRequest } from "../service/dto/request/member.dto.request";

@Controller("member")
export class MemberController {
    constructor(private memberService: MemberService) { }
    @Get("all")
    findAllMembers(){
        return this.memberService.getAllMembers()
    }
    @Post("register")
    registerMember(@Body() memberRequest: MemberRequest){
        return this.memberService.registerMember(memberRequest)
    }
    @Put("update/:id")
    updateMember(@Param("id") id: number, @Body('name') newName: string) {
        return this.memberService.updateMemberName(id, newName)
    }
    @Delete("delete/:id")
    deleteMember(@Param("id") id: number){
        return this.memberService.deleteById(id)
    }
}