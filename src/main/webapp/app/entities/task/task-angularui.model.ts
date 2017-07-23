import { BaseEntity } from './../../shared';

export class TaskAngularui implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public skills?: BaseEntity[],
    ) {
    }
}
