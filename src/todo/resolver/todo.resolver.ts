import {Resolver} from "@nestjs/graphql";
import {TodoService} from "../service/todo.service";

@Resolver()
export class TodoResolver {
    constructor(private todoService: TodoService) {
    }
}