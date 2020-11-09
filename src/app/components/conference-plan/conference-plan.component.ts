import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Agenda, Lecture, Path, PathUser } from 'src/app/models/agenda';
import { SamplePageDataDownloadService } from 'src/app/services/sample-page-data-download.service';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-conference-plan',
  templateUrl: './conference-plan.component.html',
  styleUrls: ['./conference-plan.component.scss']
})
export class ConferencePlanComponent implements OnInit {

  agenda: Observable<Agenda>;
  agenda_user: Observable<PathUser[]>;
  paths: Path[];
  paths_user: PathUser[];
  selecting_topics: Lecture[] = [];
  paths_user_hidden: boolean = false;

  constructor(private samplePageDataDownloadService: SamplePageDataDownloadService, public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.agenda = this.samplePageDataDownloadService.agenda; //pobranie wcześniej załadowanych danych o prelekcjach

    this.agenda.subscribe(res => {
      if (res != null) {
        this.paths = res.paths;
      }
    }, err => {
      console.log(err);
    });
  }

  selectingTopics(index_p, index_t){//metoda dodająca prelekcję wybraną przez użytkownika do jego zbioru prelekcji
    const lecture: Lecture = {} as Lecture;

    lecture.path_id = index_p;
    lecture.topic_id = index_t;

    this.selecting_topics.push(lecture);
  }

  saveSelectedLectures(){//metoda do zapisania danych wybranych przez użytkownika
    let success: number = 0;
    if (this.selecting_topics.length > 0) {
      this.samplePageDataDownloadService.agendaUserAdd(this.selecting_topics).subscribe(res => {
        success = res.success;//błąd może się pokazywać ponieważ nie robiłem już interfejsu do danych tego typu i nie wpływa na działanie aplikacji

        if (success === 0) {
          this.dialogInformation("The lectures overlap!");
        } else if (success === 1) {
          const selecting_topics_json = JSON.stringify(this.selecting_topics);
          localStorage.setItem('selecting_topics', selecting_topics_json);
          this.dialogInformation("The lectures have been saved!");
        } else if (success === 3) {
          this.dialogInformation("An error occurred while saving!");
        }

        this.selecting_topics = [];
      }, err => {
        console.log(err);
      });
    } else {
      this.dialogInformation("Lectures were not selected!");
    }
  }

  showSelectedUserLectures(){//metoda do pobrania danych wybranych przez użytkownika
    this.samplePageDataDownloadService.getAgendaUser();
    this.agenda_user = this.samplePageDataDownloadService.agenda_user;

    this.agenda_user.subscribe(res => {
      if (res != null) {
        this.paths_user = res;
      }
    }, err => {
      console.log(err);
    });

    if (this.paths_user.length > 0) {
      this.paths_user_hidden = true;
    } else {
      this.paths_user_hidden = false;
      this.dialogInformation("The user does not have a saved plan!");
    }
  }

  dialogInformation(information: string){//metoda odpowiadająza za komunikat dla użytkownika
    this.dialog.open(InformationComponent, {
      data: information,
      disableClose: true
    });
  }

  saveThePlan(){//metoda do generowania pliku html
    let content = document.documentElement.innerHTML;//pobranie zawartości strony
    content = content.replace(/<mat-toolbar.*>.*?<\/mat-toolbar>/ig,'');//usunięcie niechcianych tagów
    content = content.replace(/<buttons.*>.*?<\/buttons>/ig,'');
    content = content.replace(/<app-footer.*>.*?<\/app-footer>/ig,'');
    let a = document.createElement('a');//stworzenie linku
    let file = new Blob([content], {type: 'text/plain'});//załadowanie zawartości pliku
    a.href = URL.createObjectURL(file);// pliku
    a.download = 'Plan prelekcji.html';//ustawienie nazwy plikowi 
    a.click();//kliknięcie na stworzony link/tag a
  }

}
