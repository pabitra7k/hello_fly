import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CheckinSuccessComponent } from './checkin-success/checkin-success.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';

const appRoutes: Routes = [
  { path: 'checkin',
    component: CheckinSuccessComponent,
  },
  {
    path: 'flightinfo',
    component: FlightInfoComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CheckinSuccessComponent,
    FlightInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
