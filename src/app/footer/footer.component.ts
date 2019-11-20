import { Component, OnInit } from '@angular/core';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
} )
export class FooterComponent implements OnInit {

    faArrowRight = faAngleDoubleUp;

    constructor() { }

    ngOnInit() {
    }

}
