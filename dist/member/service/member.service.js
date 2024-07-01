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
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const member_entity_1 = require("../entity/member.entity");
const typeorm_2 = require("typeorm");
let MemberService = class MemberService {
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
    }
    async registerMember(memberRequest) {
        const member = new member_entity_1.Member(memberRequest);
        await this.memberRepository.save(member);
        return member;
    }
    async deleteById(id) {
        const result = await this.memberRepository.delete(id);
        return result ? "successfully deleted" : "Something was wrong";
    }
    async getTodos(id) {
        const result = await this.memberRepository.findOneBy({ memberId: id });
        return result.todos;
    }
    async getAllMembers() {
        return await this.memberRepository.find();
    }
    async findById(id) {
        return await this.memberRepository.findOneBy({ memberId: id });
    }
    async updateMemberName(id, newName) {
        const result = await this.memberRepository.update({ memberId: id }, { name: newName });
        if (!result.affected) {
            return "not updated";
        }
        return await this.memberRepository.findOneBy({ memberId: id });
    }
    async updateMemberNameWithMutation(input) {
        const member = await this.memberRepository.findOne({ where: { memberId: input.id } });
        if (member == null) {
            throw new Error("Member Not Found");
        }
        member.changeName(input.name);
        return await this.memberRepository.save(member);
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MemberService);
//# sourceMappingURL=member.service.js.map