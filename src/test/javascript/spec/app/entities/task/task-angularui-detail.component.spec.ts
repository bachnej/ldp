/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { LpbTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { TaskAngularuiDetailComponent } from '../../../../../../main/webapp/app/entities/task/task-angularui-detail.component';
import { TaskAngularuiService } from '../../../../../../main/webapp/app/entities/task/task-angularui.service';
import { TaskAngularui } from '../../../../../../main/webapp/app/entities/task/task-angularui.model';

describe('Component Tests', () => {

    describe('TaskAngularui Management Detail Component', () => {
        let comp: TaskAngularuiDetailComponent;
        let fixture: ComponentFixture<TaskAngularuiDetailComponent>;
        let service: TaskAngularuiService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [LpbTestModule],
                declarations: [TaskAngularuiDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    TaskAngularuiService,
                    JhiEventManager
                ]
            }).overrideTemplate(TaskAngularuiDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TaskAngularuiDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TaskAngularuiService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new TaskAngularui(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.task).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
