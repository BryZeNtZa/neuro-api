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
exports.TreatmentRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const treatment_schema_1 = require("../domain/schemas/treatment.schema");
let TreatmentRepository = class TreatmentRepository {
    constructor(model) {
        this.model = model;
    }
    async findOne(treatmentFilterQuery) {
        return this.model.findOne(treatmentFilterQuery);
    }
    async find(treatmentsFilterQuery) {
        return this.model.find(treatmentsFilterQuery);
    }
    async create(treatment) {
        const newTreatment = new this.model(treatment);
        return newTreatment.save();
    }
    async findOneAndUpdate(treatmentFilterQuery, treatment) {
        return this.model.findOneAndUpdate(treatmentFilterQuery, treatment, {
            new: true,
        });
    }
    async update(id, treatment) {
        return await this.model.findByIdAndUpdate(id, treatment).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
};
TreatmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(treatment_schema_1.Treatment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TreatmentRepository);
exports.TreatmentRepository = TreatmentRepository;
//# sourceMappingURL=treatment.repository.js.map