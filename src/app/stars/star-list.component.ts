import { Component, OnInit } from '@angular/core';
import { IStar } from "./stars";

@Component({
    selector: 'sc-stars',
    templateUrl: './star-list.component.html',
    styleUrls: ['./star-list.component.css']
})
export class StarListComponent implements OnInit {
    pageTitle: string = 'Star List';
    showStarSystem: boolean = false;

    _starFilter: string;
    get starFilter(): string {
        return this._starFilter;
    }
    set starFilter(value: string) {
        this._starFilter = value;
        this.filteredStars = this.starFilter ? this.performFilter(this.starFilter) : this.stars;
    }

    filteredStars: IStar[];
    stars: IStar[]= [
        {
            "starId": 1,
            "starSystem": "Alpha Centauri",
            "starName": "Proxima Centauri",
            "starDistance": 4.2441,
            "apparentMag": "11.09",
            "stellarClass": "M5.5Ve",
            "rightAscension": " 14h 29m 43.0s",
            "declination": "−62° 40′ 46″"
        },
        {
            "starId": 2,
            "starSystem": "Alpha Centauri",
            "starName": "α Centauri A (HD 128620)",
            "starDistance": 4.3650,
            "apparentMag": "0.01",
            "stellarClass": "G2V",
            "rightAscension": "14h 39m 36.5s",
            "declination": "−60° 50′ 02″"
        },
        {
            "starId": 3,
            "starSystem": "Alpha Centauri",
            "starName": "α Centauri B (HD 128621)",
            "starDistance": 4.3650,
            "apparentMag": "1.34",
            "stellarClass": "K1V",
            "rightAscension": "14h 39m 35.1s",
            "declination": "−60° 50′ 14″"
        },
        {
            "starId": 4,
            "starSystem": "Barnard's Star",
            "starName": "Barnard's Star (BD+04°3561a)",
            "starDistance": 5.9577,
            "apparentMag": "9.53",
            "stellarClass": "M4.0Ve",
            "rightAscension": "17h 57m 48.5s",
            "declination": "+04° 41′ 36″"
        },
        {
            "starId": 5,
            "starSystem": "Luhman 16",
            "starName": "Luhman 16A",
            "starDistance": 6.5029,
            "apparentMag": "10.7 J",
            "stellarClass": "L8±1",
            "rightAscension": "10h 49m 15.57s",
            "declination": "−53° 19′ 06″"
        },
        {
            "starId": 6,
            "starSystem": "Luhman 16",
            "starName": "Luhman 16B",
            "starDistance": 6.5029,
            "apparentMag": "",
            "stellarClass": "T1±2",
            "rightAscension": "10h 49m 15.57s",
            "declination": "−53° 19′ 06″"
        },
        {
            "starId": 7,
            "starSystem": "WISE 0855−0714",
            "starName": "WISE 0855−0714",
            "starDistance": 7.26,
            "apparentMag": "25.0 J",
            "stellarClass": "Y2",
            "rightAscension": " 08h 55m 10.83s",
            "declination": "−07° 14′ 42.5″"
        },
        {
            "starId": 8,
            "starSystem": "Wolf 359",
            "starName": "Wolf 359 (CN Leonis)",
            "starDistance": 7.856,
            "apparentMag": "13.44",
            "stellarClass": "M6.0V",
            "rightAscension": "10h 56m 29.2s",
            "declination": "+07° 00′ 53″	"
        }
    ];

    constructor() {
        this.filteredStars = this.stars;
        this.starFilter = '';
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
        console.log('In OnInit');
    }
}