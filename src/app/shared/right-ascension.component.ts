import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'sc-right-ascension',
    templateUrl: './right-ascension.component.html'
})
export class RightAscensionComponent implements OnChanges {
    @Input() rightAscension: string;
    hours: number;
    minutes: number;
    seconds: number;

    ngOnChanges(): void {
        // convert given string to h/m/s
        var hIndex = this.rightAscension.indexOf('h');
        var mIndex = this.rightAscension.indexOf('m');
        var sIndex = this.rightAscension.indexOf('s');
        this.hours = +this.rightAscension.substring(0, hIndex);
        this.minutes = +this.rightAscension.substring(hIndex+1, mIndex);
        this.seconds = +this.rightAscension.substring(mIndex+1, sIndex);
        
        // redraw (future) circle
    }
} 