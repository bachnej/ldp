import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TaskAngularui } from './task-angularui.model';
import { TaskAngularuiPopupService } from './task-angularui-popup.service';
import { TaskAngularuiService } from './task-angularui.service';

@Component({
    selector: 'jhi-task-angularui-delete-dialog',
    templateUrl: './task-angularui-delete-dialog.component.html'
})
export class TaskAngularuiDeleteDialogComponent {

    task: TaskAngularui;

    constructor(
        private taskService: TaskAngularuiService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.taskService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'taskListModification',
                content: 'Deleted an task'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-task-angularui-delete-popup',
    template: ''
})
export class TaskAngularuiDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private taskPopupService: TaskAngularuiPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.taskPopupService
                .open(TaskAngularuiDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
