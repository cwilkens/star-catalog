import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IStar } from './stars';
import { StarService } from './star.service';

@Component({
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.css']
})
export class StarDetailComponent implements OnInit {
  pageTitle: string = 'Star Details';
  star: IStar;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private starService: StarService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.starService.getStar(id).subscribe({
      next: star => this.star = star,
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/stars']);
  }
}
  