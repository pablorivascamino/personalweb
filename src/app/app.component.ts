import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {

    title = 'curriculum';
    faArrowRight = faArrowRight;

    ngOnInit(): void {
        AOS.init();
    }
}
