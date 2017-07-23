import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SkillAngularuiComponent } from './skill-angularui.component';
import { SkillAngularuiDetailComponent } from './skill-angularui-detail.component';
import { SkillAngularuiPopupComponent } from './skill-angularui-dialog.component';
import { SkillAngularuiDeletePopupComponent } from './skill-angularui-delete-dialog.component';

export const skillRoute: Routes = [
    {
        path: 'skill-angularui',
        component: SkillAngularuiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.skill.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'skill-angularui/:id',
        component: SkillAngularuiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.skill.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const skillPopupRoute: Routes = [
    {
        path: 'skill-angularui-new',
        component: SkillAngularuiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.skill.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'skill-angularui/:id/edit',
        component: SkillAngularuiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.skill.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'skill-angularui/:id/delete',
        component: SkillAngularuiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'lpbApp.skill.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
