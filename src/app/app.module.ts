import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';

import { MessageService } from './services/message.service';
import { InitialAnimationComponent } from './initial-animation/initial-animation.component';

@NgModule( {
    declarations: [
        AppComponent,
        InputUserDataFormComponent,
        InitialAnimationComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
