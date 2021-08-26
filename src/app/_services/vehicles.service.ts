import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Automobile } from '../_entities/automobile';

@Injectable()
export class VehiclesService {
    private readonly url: string;

    constructor(private http: HttpClient) { 
        this.url = `${environment.apiUrl}/automobile`;
    }

    getAutomobiles() {
        return this.http.get<Automobile[]>(this.url).toPromise();
    }
}