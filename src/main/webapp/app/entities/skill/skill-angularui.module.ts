import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LpbSharedModule } from '../../shared';
import {
    SkillAngularuiService,
    SkillAngularuiPopupService,
    SkillAngularuiComponent,
    SkillAngularuiDetailComponent,
    SkillAngularuiDialogComponent,
    SkillAngularuiPopupComponent,
    SkillAngularuiDeletePopupComponent,
    SkillAngularuiDeleteDialogComponent,
    skillRoute,
    skillPopupRoute,
} from './';

const ENTITY_STATES = [
    ...skillRoute,
    ...skillPopupRoute,
];

@NgModule({
    imports: [
        LpbSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SkillAngularuiComponent,
        SkillAngularuiDetailComponent,
        SkillAngularuiDialogComponent,
        SkillAngularuiDeleteDialogComponent,
        SkillAngularuiPopupComponent,
        SkillAngularuiDeletePopupComponent,
    ],
    entryComponents: [
        SkillAngularuiComponent,
        SkillAngularuiDialogComponent,
        SkillAngularuiPopupComponent,
        SkillAngularuiDeleteDialogComponent,
        SkillAngularuiDeletePopupComponent,
    ],
    providers: [
        SkillAngularuiService,
        SkillAngularuiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LpbSkillAngularuiModule {}
