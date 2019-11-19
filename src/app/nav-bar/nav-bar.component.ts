import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component( {
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
} )
export class NavBarComponent implements OnInit {

    show: boolean = false;

    constructor() { }

    toggleCollapse() {
        this.show = !this.show;
    }

    @HostListener( 'window:scroll', ['$event'] )
    onWindowScroll( e ) {
        const canvasHeight = +document.getElementById( 'animation_canvas' ).getAttribute( 'height' );

        if ( window.pageYOffset > canvasHeight ) {
            let element = document.getElementById( 'navbar' );
            element.classList.add( 'sticky' );
        } else {
            let element = document.getElementById( 'navbar' );
            element.classList.remove( 'sticky' );
        }
    }

    ngOnInit() {
    }

}
