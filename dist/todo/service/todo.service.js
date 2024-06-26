"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("../entity/todo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const member_entity_1 = require("../../member/entity/member.entity");
let TodoService = class TodoService {
    constructor(todoRepository, memberRepository) {
        this.todoRepository = todoRepository;
        this.memberRepository = memberRepository;
    }
    async createTodo(todoRequest, memberId) {
        const todo = new todo_entity_1.Todo(todoRequest);
        const member = await this.memberRepository.findOneBy({ id: memberId });
        await member.addTodo(todo);
        return await this.todoRepository.save(todo);
    }
    async deleteTodo(todoId, memberId) {
        const todo = await this.todoRepository.findOneBy({ id: todoId });
        const member = await this.memberRepository.findOneBy({ id: memberId });
        return member.deleteTodo(todo) ? `successfully deleted todo with id : ${todoId} ` : "something was wrong";
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.Todo)),
    __param(1, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TodoService);
//# sourceMappingURL=todo.service.js.map