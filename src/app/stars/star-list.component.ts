import { Component, OnInit } from '@angular/core';
import { IStar } from "./stars";
import { StarService } from './star.service';

@Component({
    selector: 'sc-stars',
    templateUrl: './star-list.component.html',
    styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {
    pageTitle: string = 'Star List';
    showStarSystem: boolean = false;
    errorMessage: string;

    _starFilter: string;
    get starFilter(): string {
        return this._starFilter;
    }
    set starFilter(value: string) {
        this._starFilter = value;
        this.filteredStars = this.starFilter ? this.performFilter(this.starFilter) : this.stars;
    }

    filteredStars: IStar[];
    stars: IStar[]= [];

    constructor(private starService: StarService) {
        
    }

    performFilter(filterBy: string): IStar[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.stars.filter((star: IStar) =>
            star.starName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleStarSystem(): void {
        this.showStarSystem = !this.showStarSystem;
    }

    ngOnInit(): void {
        this.starService.getStars().subscribe({
            next: stars => {
                this.stars = stars;
                this.filteredStars = this.stars;
            },
            error: err => this.errorMessage = err
        })
    }
}