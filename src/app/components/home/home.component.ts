﻿import { Component } from '@angular/core';

@Component({ templateUrl: './home.component.html' })
export class HomeComponent {
    loading = false;

    constructor() { }

    ngOnInit() {
        //this.loading = true;
    }
}