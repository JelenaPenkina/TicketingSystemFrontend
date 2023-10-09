import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  createButtonClicked: boolean = false;

  toggleCreateButtonClass() {
    this.createButtonClicked = !this.createButtonClicked;
  }

  newTicket: {title: string, description: string} = {title: '', description: ''};
  selectedOption: string = 'welcome'; 

  constructor(private router: Router) {}

  submitTicket() {

  
    console.log('New ticket: ', this.newTicket)
  }

  navigateToInProgress() {
    this.router.navigate(['/in-progress']);
  }

  navigateToDone() {
    this.router.navigate(['/done']);
  }


  
}