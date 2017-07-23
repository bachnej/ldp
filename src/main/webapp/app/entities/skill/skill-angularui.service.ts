import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SkillAngularui } from './skill-angularui.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class SkillAngularuiService {

    private resourceUrl = 'api/skills';
    private resourceSearchUrl = 'api/_search/skills';

    constructor(private http: Http) { }

    create(skill: SkillAngularui): Observable<SkillAngularui> {
        const copy = this.convert(skill);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(skill: SkillAngularui): Observable<SkillAngularui> {
        const copy = this.convert(skill);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<SkillAngularui> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(skill: SkillAngularui): SkillAngularui {
        const copy: SkillAngularui = Object.assign({}, skill);
        return copy;
    }
}
