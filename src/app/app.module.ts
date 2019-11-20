import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';

import { MessageService } from './services/message.service';
import { InitialAnimationComponent } from './initial-animation/initial-animation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AboutInformationComponent } from './about-information/about-information.component';
import { SkillsInformationComponent } from './skills-information/skills-information.component';
import { InViewportModule } from 'ng-in-viewport';
import { FooterComponent } from './footer/footer.component';

@NgModule( {
    declarations: [
        AppComponent,
        InputUserDataFormComponent,
        InitialAnimationComponent,
        NavBarComponent,
        AboutInformationComponent,
        SkillsInformationComponent,
        FooterComponent
    ],
    imports: [
        InViewportModule,
        ScrollToModule.forRoot(),
        BrowserAnimationsModule,
        FontAwesomeModule,
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
