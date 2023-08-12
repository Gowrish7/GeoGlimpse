import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComComponent } from './footer-com/footer-com.component';
//mat-card
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
//popup modal
import { MatDialogModule } from '@angular/material/dialog';

// footer
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from './popup/popup.component';

import { HomeComponent } from './home/home.component';

//github buttons
import { GithubButtonModule } from 'ng-github-button';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    FilterPipe,
    FooterComComponent,
    PopupComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    GithubButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
