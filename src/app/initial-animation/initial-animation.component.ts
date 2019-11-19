import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationPoint } from 'src/app/initial-animation/animation-point';
import { angularMath } from 'angular-ts-math/dist/angular-ts-math';

@Component( {
    selector: 'initial-animation',
    templateUrl: './initial-animation.component.html',
    styleUrls: ['./initial-animation.component.css']
} )
export class InitialAnimationComponent implements OnInit {
    static mouseX: number;
    static mouseY: number;

    @ViewChild( 'canvas' )
    canvas: ElementRef<HTMLCanvasElement>;

    private N_POINTS = 50;

    private ctx: CanvasRenderingContext2D;

    private windowHeight;
    private windowWidth;

    private iteration = 0;

    private points: AnimationPoint[] = [];
    private polygon: AnimationPoint[] = [];

    constructor() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
    }

    onResize( event ) {
        this.windowWidth = event.target.innerWidth;
        this.windowHeight = event.target.innerHeight;
        this.canvas.nativeElement.width = event.target.innerWidth;
        this.render();
    }

    ngOnInit() {
        this.render();
    }

    private initializePoints( canvas: ElementRef<HTMLCanvasElement> ) {
        this.polygon.push( 2 * canvas.nativeElement.width / 7, canvas.nativeElement.height / 7 );
        this.polygon.push( 5 * canvas.nativeElement.width / 7, canvas.nativeElement.height / 7 );

        this.polygon.push( canvas.nativeElement.width / 7, 2 * canvas.nativeElement.height / 7 );
        this.polygon.push( 6 * canvas.nativeElement.width / 7, 2 * canvas.nativeElement.height / 7 );

        this.polygon.push( 2 * canvas.nativeElement.width / 7, 6 * canvas.nativeElement.height / 7 );
        this.polygon.push( 5 * canvas.nativeElement.width / 7, 6 * canvas.nativeElement.height / 7 );

        for ( var i = 0; i < this.N_POINTS; i++ ) {
            this.points.push( new AnimationPoint( this.randomRange( 0, canvas.nativeElement.width ),
                this.randomRange( 0, canvas.nativeElement.height ), canvas ) );
        }

    }

    private randomRange( min: number, max: number ) {
        return Math.floor( Math.random() * ( +max - +min ) ) + +min;
    }

    render() {
        this.ctx = this.canvas.nativeElement.getContext( '2d' );
        this.canvas.nativeElement.width = this.windowWidth;
        this.canvas.nativeElement.height = this.windowHeight;
        this.ctx.clearRect( 0, 0, this.windowWidth, this.windowHeight );

        this.initializePoints( this.canvas );
        this.animate();

        this.canvas.nativeElement.addEventListener( 'mousemove', function( evt ) {
            InitialAnimationComponent.mouseX = evt.clientX;
            InitialAnimationComponent.mouseY = evt.clientY;
        }, false );
    }

    getMousePos( canvas, evt ) {

    }

    animate = () => {

        requestAnimationFrame( this.animate );

        this.iteration++;
        if ( this.iteration === 2 ) {
            this.iteration = 0;
            this.ctx.clearRect( 0, 0, this.windowWidth, this.windowHeight );

            for ( var i = 0; i < this.N_POINTS; i++ ) {

                /*this.ctx.beginPath();
                this.ctx.moveTo( this.points[i].getPositionX(), this.points[i].getPositionY() );
                const nextPoints = this.points[i].getNextClosertPointsOnAPointsArray( this.points );
                this.ctx.strokeStyle = '#FFFFDD';
                if ( nextPoints[0] !== undefined ) {
                    this.ctx.lineTo( nextPoints[0].getPositionX(), nextPoints[0].getPositionY() );
                }
                if ( nextPoints[1] !== undefined ) {
                    this.ctx.lineTo( nextPoints[1].getPositionX(), nextPoints[1].getPositionY() );
                }
                this.ctx.fillStyle = this.points[i].getColor();

                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.beginPath();
                */

                this.ctx.strokeStyle = this.points[i].getColor();
                this.ctx.beginPath();
                this.ctx.arc( this.points[i].getPositionX(), this.points[i].getPositionY(), this.points[i].getRadious(), 0, 2 * Math.PI );
                this.ctx.stroke();

                //this.ctx.lineTo( nextPoints[1].getPositionX(), nextPoints[1].getPositionY() );
                //this.ctx.stroke();

                this.points[i].move( this.isPointCloseToMouse( this.points[i], ( this.windowWidth + this.windowHeight ) / 8 ) );

            }
        }
    }

    private isPointCloseToMouse( point: AnimationPoint, radious: number ): boolean {
        return ( InitialAnimationComponent.mouseX < point.getPositionX() + radious && InitialAnimationComponent.mouseX > point.getPositionX() - radious
            && InitialAnimationComponent.mouseY < point.getPositionY() + radious && InitialAnimationComponent.mouseY > point.getPositionY() - radious );
    }

}
