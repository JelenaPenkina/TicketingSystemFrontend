import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTicketComponent } from './edit.component';

const routes: Routes = [
 
  { path: 'edit-ticket/:id', component: EditTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
