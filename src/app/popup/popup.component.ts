import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Country } from '../country.model';
import { Language } from '../country.model';


@Component({
  selector: 'app-popup',
  styleUrls: ['./popup.component.css'],
  template: `


    <mat-card>
  <div class="header-container">
      <h2 class="Weighted-font" fxLayout="row">{{ country.name }}</h2>
      <div class="spacer"></div>
      <button mat-button (click)="closeDialog()" >X</button>
    </div>


      <img
        [src]="country.flags.svg"
        alt="{{ country.name }} Flag"
        width="28%"
        margin="2%"
        height="150px"
        
        style="padding-left: 20px;"
      />
      <div class="outer-popup-box">
      <mat-card-content align="start" >
      <div class="row-container">
        <span class="Weighted-font">Capital:</span
        ><span class="country-space">{{ country.capital }}</span>
        <br>
        <span class="Weighted-font">Continent :</span
        ><span>{{ country.region }}</span>
        <br>
        
        <span class="Weighted-font">Currencies:</span>
          <span *ngFor="let curr of country.currencies"
            >{{ curr.name }}{{ $last ? '' : '' }}</span>
            <br>
       
        <span class="Weighted-font">Languages:</span>
          <span *ngFor="let language of country.languages; let last = last">
            <span>{{ language.name }}</span
            >{{ !last ? ', ' : '' }}
          </span>
          <br>
        
        
        <span class="Weighted-font">Population:</span><span>{{ country.population }}</span>
        <br>
        <span class="Weighted-font">Timezone:</span><span> {{ country.timezones[0] }}</span>
      </div>
      </mat-card-content>
      </div>
    </mat-card>
  `,
})
export class PopupComponent {
  $last: any;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public country: Country,
    @Inject(MAT_DIALOG_DATA) public language: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
