import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IStar } from './stars';
import { StarService } from './star.service';

@Component({
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.css']
})
export class StarDetailComponent implements OnInit, AfterViewChecked {
  pageTitle: string = 'Star Details';
  star: IStar;
  starRightAscension: number;
  starDeclination: number;
  errorMessage: string;
  @ViewChild('canvas', { static: false })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private starService: StarService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.starService.getStar(id).subscribe({
      next: star => {
        this.star = star;
        this.drawStarInLocalSpace();
      },
      error: err => this.errorMessage = err
    })
  }

  onDecimalRightAscension(decimal: number) {
    this.starRightAscension = decimal;
    this.drawStarInLocalSpace();
  }

  onDecimalDeclination(decimal: number) {
    this.starDeclination = decimal;
    this.drawStarInLocalSpace();
  }

  ngAfterViewChecked(): void {
    this.drawStarInLocalSpace();
  }

  private drawStarInLocalSpace() {
    if (!this.star || !this.starDeclination || !this.starRightAscension)
    {
      return;
    }
    this.ctx = this.canvas.nativeElement.getContext('2d');
    let nativeCanvas = this.canvas.nativeElement;
    let cWidth = nativeCanvas.offsetWidth;
    let cHeight = nativeCanvas.offsetHeight;
    nativeCanvas.width = cWidth;
    nativeCanvas.height = cHeight;
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, cWidth, cHeight);
    // calculate rough region to render into.
    // smallest of either dimension (half-vertical because of projection angle)
    // then 90% for buffer space.
    let maxSize = Math.min(cWidth, cHeight) * 0.9;
    this.ctx.strokeStyle = '#888888';
    this.ctx.beginPath();
    this.ctx.ellipse(cWidth / 2, cHeight / 2, maxSize / 2, maxSize / 4, 0, 0, 2 * Math.PI);
    this.ctx.stroke();
    // draw a line from center to position on the celestial equator plane
    // our circle is a unit circle of 5 parsecs (16.3078 ly)
    let unitLength = (this.star.starDistance / 16.3078) * maxSize/2;
    // trig to get length on equator plane
    let planeLength = unitLength * Math.cos(this.starDeclination);
    // trig to get height off of equator plane
    let planeHeight = unitLength * Math.sin(this.starDeclination);
    // trig to get ending position on the plane
    let planeIntersectX = planeLength * Math.cos(this.starRightAscension);
    let planeIntersectY = planeLength * Math.sin(this.starRightAscension);
    this.ctx.strokeStyle = '#EE8888';
    this.ctx.beginPath();
    this.ctx.moveTo(cWidth / 2, cHeight / 2);
    this.ctx.lineTo(cWidth / 2 + planeIntersectX, cHeight / 2 + planeIntersectY / 2);
    this.ctx.lineTo(cWidth / 2 + planeIntersectX, cHeight / 2 + planeIntersectY / 2 + planeHeight);
    this.ctx.stroke();
    // draw point at middle
    this.ctx.fillStyle = '#ff0000';
    this.ctx.fillRect(cWidth / 2 - 2, cHeight / 2 - 2, 4, 4);
    // label
    this.ctx.fillStyle = '#444444';
    let adjust = maxSize * 10/9 * 0.48;
    this.ctx.fillText("5 parsec sphere", (cWidth/2) - cWidth*(9/20), (cHeight/2) - cHeight*(6/20));
  }

  onBack(): void {
    this.router.navigate(['/stars']);
  }
}
