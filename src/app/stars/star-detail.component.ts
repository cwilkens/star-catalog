import { Component, OnInit } from '@angular/core';
import { IStar } from './stars';

@Component({
  templateUrl: './star-detail.component.html',
  styleUrls: ['./star-detail.component.css']
})
export class StarDetailComponent implements OnInit {
  pageTitle: string = 'Star Detail';
  star: IStar;

  constructor() { }

  ngOnInit() {
  }

}
