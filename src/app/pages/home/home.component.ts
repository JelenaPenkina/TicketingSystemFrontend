import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newTicket: {title: string, description: string} = {title: '', description: ''};

  submitTicket() {
    console.log('New ticket: ', this.newTicket)
  }

}
