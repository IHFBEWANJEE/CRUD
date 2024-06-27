import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Member} from "../entity/member.entity";
import {MemberController} from "../controller/member.controller";
import {MemberService} from "../service/member.service";
import {Todo} from "../../todo/entity/todo.entity";
import {MemberResolver} from "../resolver/member.resolver";

@Module({
    imports: [
        TypeOrmModule.forFeature([Member, Todo])
    ],
    controllers: [MemberController],
    providers: [MemberService, MemberResolver]
})
export class MemberModule {
}