import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Agenda, Lecture, PathUser } from '../models/agenda';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {filter, shareReplay, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SamplePageDataDownloadService {

  private _agenda = new BehaviorSubject<Agenda>(null);
  private _agenda_user = new BehaviorSubject<PathUser[]>([]);
  private dataStore: {agenda: Agenda, agenda_user: PathUser[]} = {agenda: null, agenda_user: []}; //deklaracja zmienych z danymi wraz z wartościami startowymi
  readonly agenda = this._agenda.asObservable();
  readonly agenda_user = this._agenda_user.asObservable();

  constructor(private http: HttpClient) { }

  private BASE_URL = `${environment.BASE_URL}`;//pobranie linku bazowego ze zmiennych środowiskowych
  private GET_AGENDA = `${this.BASE_URL}getAgenda`;
  private POST_AGENDA_USER_ADD = `${this.BASE_URL}agendaUserAdd`;
  private GET_AGENDA_USER_GET = `${this.BASE_URL}agendaUserGet`;

  getAgenda(){//metoda do pobrania wszystkich danych do prelekcji 
    this.http.get<Agenda>(this.GET_AGENDA).pipe(filter(Boolean), shareReplay(), map(({data}) => data)).subscribe(data => {
        this.dataStore.agenda = data;
        this._agenda.next(Object.assign({}, this.dataStore).agenda);
      }, err => {
        console.log(err);
      }
    );
  }

  getAgendaUser(){//metoda do pobrania prelekcji wybranych przez urzytkownika
    this.http.get<PathUser[]>(this.GET_AGENDA_USER_GET).pipe(filter(Boolean), shareReplay(), map(({data}) => data)).subscribe(data => {
        this.dataStore.agenda_user = data;
        this._agenda_user.next(Object.assign({}, this.dataStore).agenda_user);
      }, err => {
        console.log(err);
      }
    );
  }

  agendaUserAdd(lecture: Lecture[]): Observable<Lecture[]> {//metoda do zapisania prelekcji wybranych przez urzytkownika
    return this.http.post<Lecture[]>(this.POST_AGENDA_USER_ADD, lecture);
  }
}
