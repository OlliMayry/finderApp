import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



export interface ApiResult {
  page: number;
  _embedded: any[];
  _links: [];
  name: string;
  id: string;
  }

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }

  getTopRatedEvents(page = 1): Observable<ApiResult> {
   return this.http.get<ApiResult>(
/*     'https://app.ticketmaster.com/discovery/v2/events?apikey=PpctKoGuRkIEpAzTtHnGwrdA2UnLA3rj&locale=*&countryCode=FI' */


    `${environment.baseUrl}?apikey=${environment.apiKey}&countryCode=FI`

   );     
  }

  getEventDetails(id: string) {
    return this.http.get(
      `${environment.baseUrl}/${id}.json?apikey=${environment.apiKey}`


/*       `${environment.baseUrl}events/${id}?api_key=${environment.apiKey}` */
    );
  }
}
