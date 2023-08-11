import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';


// const routes: Routes = [{ path: '', redirectTo: '/countries', pathMatch: 'full' },
//   { path: 'countries', component: CountryListComponent },
// {path:'home', component:HomeComponent}];

const routes: Routes = [{ path: '', redirectTo: '/countries', pathMatch: 'full' }];

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'country-list', component: CountryListComponent },
  // Add more routes here if needed
// ];


//  const routes: Routes = [
//   { path: '', redirectTo: '/countries', pathMatch: 'full' },
//   {
//     component:HomeComponent,
//     path:''
//   },
//   {
//     component:CountryListComponent,
//     path:'country'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
