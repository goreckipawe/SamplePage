import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MineMaterialModule } from './modules/mine-material-module/mine-material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSidenavListComponent } from './components/header-sidenav-list/header-sidenav-list.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { FramesOnRecordsComponent } from './components/frames-on-records/frames-on-records.component';
import { GridPicturesComponent } from './components/grid-pictures/grid-pictures.component';
import { ConferencePlanComponent } from './components/conference-plan/conference-plan.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSidenavListComponent,
    FooterComponent,
    TestComponent,
    FramesOnRecordsComponent,
    GridPicturesComponent,
    ConferencePlanComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MineMaterialModule,
    HttpClientModule,
  ],
  providers: [MineMaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
