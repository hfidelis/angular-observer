import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { People } from '../../models/People.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl: string = 'http://localhost:3000/people'

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.baseUrl)
                    .pipe(
                      delay(1000)
                    )
  }

  addPeople(people: People): Observable<People> {
    return this.http.post<People>(this.baseUrl, people)
  }

  deletePeople(id: number | string): Observable<People> {
    return this.http.delete<People>(`${this.baseUrl}/${id}`)
  }
}
