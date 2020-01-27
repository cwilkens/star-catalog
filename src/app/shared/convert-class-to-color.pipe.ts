import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertClassToColor'
})
export class ConvertClassToColorPipe implements PipeTransform {

    transform(value: string): string {
        return this.stellarClasses[value.charAt(0)];
    }

    stellarClasses: Record<string, string> = {
        "O": "#9bb0ff",
        "B": "#aabfff",
        "A": "#cad8ff",
        "F": "#fbf8ff",
        "G": "#fff4e8",
        "K": "#ffddb4",
        "M": "#ffbd6f",
        "S": "#ff9900",
        "C": "#ff6600",
        "L": "#ff6060",
        "T": "#ff4080",
        "Y": "#9366B4",
        "D": "#ffffff"
    }
}