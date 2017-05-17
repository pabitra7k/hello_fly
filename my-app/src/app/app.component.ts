import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router'
import {CheckinServiceService} from './checkin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CheckinServiceService]
})
export class AppComponent {
  title = 'Check In';
  checkinDetails: any;
  errorInfo: Error;

  constructor ( public checkInService: CheckinServiceService) {};

  onSubmitForm(value: object, event: any) {
    event.preventDefault();

    //this.addUserInvoked = true;


    this.checkInService.getCheckInStatus(event).subscribe(
      successRes => {
        this.checkinDetails = successRes;
        console.log('Successfully checked In');
        alert ("You have successfully checked in!!");
      },
      errorRes => {
        console.log('Please try after some time!!' + errorRes);
      },
      () => {
        console.log('Checkin details' + this.checkinDetails);
      }
    );

  }
}
