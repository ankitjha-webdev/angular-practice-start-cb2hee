import { Component } from '@angular/core';
import { PassengerI } from './passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  isOpen: boolean = false;
  // openDiv = { color: 'red', backgroundColor: 'blue' };
  openDiv = 'display:block;';

  passengers: PassengerI[] = [
    {
      id: 1,
      fullname: 'krati',
      checkedIn: true,
    },
    {
      id: 2,
      fullname: 'Ankit',
      checkedIn: false,
    },
    {
      id: 3,
      fullname: 'Nibedita',
      checkedIn: false,
    },
    {
      id: 4,
      fullname: 'Saurabh',
      checkedIn: false,
    },
    {
      id: 5,
      fullname: 'Pratap',
      checkedIn: false,
    },
  ];

  onClick() {
    this.isOpen = true;
  }
}
