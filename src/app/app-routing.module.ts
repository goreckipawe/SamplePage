import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferencePlanComponent } from './components/conference-plan/conference-plan.component';
import { FramesOnRecordsComponent } from './components/frames-on-records/frames-on-records.component';
import { GridPicturesComponent } from './components/grid-pictures/grid-pictures.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'pictures', component: GridPicturesComponent},
  { path: 'conference_plan', component: ConferencePlanComponent},
  { path: 'frames_on_records_component', component: FramesOnRecordsComponent},
  { path: '', redirectTo: '/frames_on_records_component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
