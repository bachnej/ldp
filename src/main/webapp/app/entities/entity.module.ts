import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LpbTaskAngularuiModule } from './task/task-angularui.module';
import { LpbSkillAngularuiModule } from './skill/skill-angularui.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        LpbTaskAngularuiModule,
        LpbSkillAngularuiModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LpbEntityModule {}
