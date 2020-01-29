import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'sc-declination',
    templateUrl: './declination.component.html'
})
export class DeclinationComponent implements OnChanges {
    @Input() declination: string;
    degrees: number;
    arcminutes: number;
    arcseconds: number;

    ngOnChanges(): void {
        // convert given string to °/′/″
        var dIndex = this.declination.indexOf('°');
        var mIndex = this.declination.indexOf('′');
        var sIndex = this.declination.indexOf('″');
        this.degrees = parseInt(this.declination.substring(0, dIndex).replace('−', '-'));
        this.arcminutes = +this.declination.substring(dIndex+1, mIndex);
        this.arcseconds = +this.declination.substring(mIndex+1, sIndex);
    }
}