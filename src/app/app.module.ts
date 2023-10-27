import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';



import { TicketListComponent } from './pages/tickets/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './pages/tickets/ticket-create/ticket-create.component';
import { TicketDetailComponent } from './pages/tickets/ticket-detail/ticket-detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { TicketEditComponent } from './pages/tickets/ticket-edit/ticket-edit.component';
import { TicketDeleteComponent } from './pages/tickets/ticket-delete/ticket-delete.component';
import { TicketCustomerComponent } from './pages/tickets/ticket-customer/ticket-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    TicketListComponent,
    TicketCreateComponent,
    TicketDetailComponent,
    RegisterComponent,
    UserProfileComponent,
    UserEditComponent,
    TicketEditComponent,
    TicketDeleteComponent,
    TicketCustomerComponent,
    

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
