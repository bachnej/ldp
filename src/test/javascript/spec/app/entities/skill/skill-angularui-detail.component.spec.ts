/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { LpbTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { SkillAngularuiDetailComponent } from '../../../../../../main/webapp/app/entities/skill/skill-angularui-detail.component';
import { SkillAngularuiService } from '../../../../../../main/webapp/app/entities/skill/skill-angularui.service';
import { SkillAngularui } from '../../../../../../main/webapp/app/entities/skill/skill-angularui.model';

describe('Component Tests', () => {

    describe('SkillAngularui Management Detail Component', () => {
        let comp: SkillAngularuiDetailComponent;
        let fixture: ComponentFixture<SkillAngularuiDetailComponent>;
        let service: SkillAngularuiService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [LpbTestModule],
                declarations: [SkillAngularuiDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    SkillAngularuiService,
                    JhiEventManager
                ]
            }).overrideTemplate(SkillAngularuiDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SkillAngularuiDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SkillAngularuiService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new SkillAngularui(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.skill).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
