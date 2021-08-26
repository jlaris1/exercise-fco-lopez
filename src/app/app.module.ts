import { BrowserModule } from '@angular/platform-browser';

/* Angular Material **/
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

/* Angular Flex Layout **/
import { FlexLayoutModule } from "@angular/flex-layout";

/* Routing **/
import { AppRoutingModule } from './app-routing.module';

/* Components **/
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

/* Forms module**/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Authentication */
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { JwtInterceptor } from './Auth/jwt.interceptor';
import { ErrorInterceptor } from './Auth/error.interceptor';

import { VehiclesService } from './_services/vehicles.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    VehiclesService
  ],
  bootstrap: [AppComponent],
  schemas: []
})

export class AppModule { }
