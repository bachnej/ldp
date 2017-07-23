import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LpbSharedModule } from '../../shared';
import {
    TaskAngularuiService,
    TaskAngularuiPopupService,
    TaskAngularuiComponent,
    TaskAngularuiDetailComponent,
    TaskAngularuiDialogComponent,
    TaskAngularuiPopupComponent,
    TaskAngularuiDeletePopupComponent,
    TaskAngularuiDeleteDialogComponent,
    taskRoute,
    taskPopupRoute,
} from './';

const ENTITY_STATES = [
    ...taskRoute,
    ...taskPopupRoute,
];

@NgModule({
    imports: [
        LpbSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TaskAngularuiComponent,
        TaskAngularuiDetailComponent,
        TaskAngularuiDialogComponent,
        TaskAngularuiDeleteDialogComponent,
        TaskAngularuiPopupComponent,
        TaskAngularuiDeletePopupComponent,
    ],
    entryComponents: [
        TaskAngularuiComponent,
        TaskAngularuiDialogComponent,
        TaskAngularuiPopupComponent,
        TaskAngularuiDeleteDialogComponent,
        TaskAngularuiDeletePopupComponent,
    ],
    providers: [
        TaskAngularuiService,
        TaskAngularuiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LpbTaskAngularuiModule {}
