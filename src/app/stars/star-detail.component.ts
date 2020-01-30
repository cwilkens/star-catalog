import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IStar } from './stars';

@Component({
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.css']
})
export class StarDetailComponent implements OnInit {
  pageTitle: string = 'Star Detail';
  star: IStar;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    // temporarily hardcode for development
    this.star = {
      "starId": 8,
      "starSystem": "Wolf 359",
      "starName": "Wolf 359 (CN Leonis)",
      "starDistance": 7.856,
      "apparentMag": "13.44",
      "stellarClass": "M6.0V",
      "rightAscension": "10h 56m 29.2s",
      "declination": "+07° 00′ 53″"
    };
  }

  onBack(): void {
    this.router.navigate(['/stars']);
  }
}
