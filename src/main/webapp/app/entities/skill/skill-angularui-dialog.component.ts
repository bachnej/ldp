import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { SkillAngularui } from './skill-angularui.model';
import { SkillAngularuiPopupService } from './skill-angularui-popup.service';
import { SkillAngularuiService } from './skill-angularui.service';
import { TaskAngularui, TaskAngularuiService } from '../task';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-skill-angularui-dialog',
    templateUrl: './skill-angularui-dialog.component.html'
})
export class SkillAngularuiDialogComponent implements OnInit {

    skill: SkillAngularui;
    isSaving: boolean;

    tasks: TaskAngularui[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private skillService: SkillAngularuiService,
        private taskService: TaskAngularuiService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.taskService.query()
            .subscribe((res: ResponseWrapper) => { this.tasks = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.skill.id !== undefined) {
            this.subscribeToSaveResponse(
                this.skillService.update(this.skill));
        } else {
            this.subscribeToSaveResponse(
                this.skillService.create(this.skill));
        }
    }

    private subscribeToSaveResponse(result: Observable<SkillAngularui>) {
        result.subscribe((res: SkillAngularui) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: SkillAngularui) {
        this.eventManager.broadcast({ name: 'skillListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackTaskById(index: number, item: TaskAngularui) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-skill-angularui-popup',
    template: ''
})
export class SkillAngularuiPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private skillPopupService: SkillAngularuiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.skillPopupService
                    .open(SkillAngularuiDialogComponent as Component, params['id']);
            } else {
                this.skillPopupService
                    .open(SkillAngularuiDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
