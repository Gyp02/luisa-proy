import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/coolever/home/home.component';
import { ContactComponent } from './component/coolever/contact/contact.component';

const routes: Routes = [
{ path: 'Coolever/Home/Coolever/Contact', redirectTo: "Coolever/Contact", pathMatch:'full'},
{ path: 'Coolever/Contact/Coolever/Home', redirectTo: "Coolever/Home", pathMatch:'full'},
{path:'Coolever/Home', component:HomeComponent},
{path:'Coolever/Contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
