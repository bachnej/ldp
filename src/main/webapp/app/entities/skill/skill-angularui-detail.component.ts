import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { SkillAngularui } from './skill-angularui.model';
import { SkillAngularuiService } from './skill-angularui.service';

@Component({
    selector: 'jhi-skill-angularui-detail',
    templateUrl: './skill-angularui-detail.component.html'
})
export class SkillAngularuiDetailComponent implements OnInit, OnDestroy {

    skill: SkillAngularui;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private skillService: SkillAngularuiService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInSkills();
    }

    load(id) {
        this.skillService.find(id).subscribe((skill) => {
            this.skill = skill;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInSkills() {
        this.eventSubscriber = this.eventManager.subscribe(
            'skillListModification',
            (response) => this.load(this.skill.id)
        );
    }
}
