import { Component } from '@angular/core';
import { SamplePageDataDownloadService } from './services/sample-page-data-download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SamplePage';

  constructor(private samplePageDataDownloadService: SamplePageDataDownloadService) { }

  ngOnInit(): void {
    this.samplePageDataDownloadService.getAgenda();//pobranie wszystkich prelekcji
  }
}
