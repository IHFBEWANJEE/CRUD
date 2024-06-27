import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {MemberService} from "../service/member.service";
import {Member} from "../entity/member.entity";
import {UpdateMemberNameInput} from "../entity/input/update-member-name.input";

@Resolver()
export class MemberResolver {
    constructor(private memberService: MemberService) {
    }

    @Query(() => [Member])
    async findAllMembers(): Promise<Member[]> {
        return await this.memberService.getAllMembers();
    }

    @Query(() => Member)
    async findMember(@Args('id') id: number): Promise<Member> {
        return await this.memberService.findById(id);
    }

    @Mutation(() => Member)
    async updateMember(@Args('input') input: UpdateMemberNameInput): Promise<Member> {
        return await this.memberService.updateMemberNameWithMutation(input);
    }
}