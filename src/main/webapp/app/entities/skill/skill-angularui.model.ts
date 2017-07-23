import { BaseEntity } from './../../shared';

export class SkillAngularui implements BaseEntity {
    constructor(
        public id?: number,
        public skillTitle?: string,
        public minSalary?: number,
        public maxSalary?: number,
        public tasks?: BaseEntity[],
    ) {
    }
}
