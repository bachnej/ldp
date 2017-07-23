import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TaskAngularuiComponent } from './task-angularui.component';
import { TaskAngularuiDetailComponent } from './task-angularui-detail.component';
import { TaskAngularuiPopupComponent } from './task-angularui-dialog.component';
import { TaskAngularuiDeletePopupComponent } from './task-angularui-delete-dialog.component';

export const taskRoute: Routes = [
    {
        path: 'task-angularui',
        component: TaskAngularuiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.task.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'task-angularui/:id',
        component: TaskAngularuiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.task.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const taskPopupRoute: Routes = [
    {
        path: 'task-angularui-new',
        component: TaskAngularuiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.task.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'task-angularui/:id/edit',
        component: TaskAngularuiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.task.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'task-angularui/:id/delete',
        component: TaskAngularuiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.task.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
