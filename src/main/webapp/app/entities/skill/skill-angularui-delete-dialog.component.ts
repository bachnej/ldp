import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { SkillAngularui } from './skill-angularui.model';
import { SkillAngularuiPopupService } from './skill-angularui-popup.service';
import { SkillAngularuiService } from './skill-angularui.service';

@Component({
    selector: 'jhi-skill-angularui-delete-dialog',
    templateUrl: './skill-angularui-delete-dialog.component.html'
})
export class SkillAngularuiDeleteDialogComponent {

    skill: SkillAngularui;

    constructor(
        private skillService: SkillAngularuiService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.skillService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'skillListModification',
                content: 'Deleted an skill'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-skill-angularui-delete-popup',
    template: ''
})
export class SkillAngularuiDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private skillPopupService: SkillAngularuiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.skillPopupService
                .open(SkillAngularuiDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
