import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "../entity/member.entity";
import { MemberController } from "../controller/member.controller";
import { MemberService } from "../service/member.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Member])
    ],
    controllers: [MemberController],
    providers: [MemberService]
})
export class MemberModule { }