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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("../../todo/entity/todo.entity");
const graphql_1 = require("@nestjs/graphql");
let Member = class Member {
    constructor(partial) {
        if (partial) {
            this.email = partial.email;
            this.password = partial.password;
            this.name = partial.name;
            this.todos = [];
        }
    }
    addTodos(todos) {
        this.todos = [...this.todos, ...todos];
    }
    changeName(name) {
        this.name = name;
    }
};
exports.Member = Member;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Member.prototype, "memberId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Member.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Member.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [todo_entity_1.Todo], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => todo_entity_1.Todo, (todo) => todo.member, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Member.prototype, "todos", void 0);
exports.Member = Member = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("member"),
    __metadata("design:paramtypes", [Object])
], Member);
//# sourceMappingURL=member.entity.js.map