import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "../entity/todo.entity";
import {TodoController} from "../controller/todo.controller";
import {TodoService} from "../service/todo.service";
import {Member} from "../../member/entity/member.entity";
import {TodoResolver} from "../resolver/todo.resolver";

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo, Member]),
    ],
    controllers: [TodoController],
    providers: [TodoService, TodoResolver]
})
export class TodoModule {
}