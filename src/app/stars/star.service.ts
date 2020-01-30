import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IStar } from './stars';

@Injectable({
    providedIn: 'root'
})
export class StarService {
    private productUrl = 'api/stars/stars.json';

    constructor(private http: HttpClient) {}

    getStars(): Observable<IStar[]> {
        return this.http.get<IStar[]>(this.productUrl)
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getStar(id: number): Observable<IStar> {
        return this.getStars()
        .pipe(
            map((stars: IStar[]) => stars.find(s => s.starId === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a read world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}