
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from '../country.service';
import { Country, Currency } from '../country.model';
import { MatDialog } from "@angular/material/dialog";
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  searchForm: FormGroup;
  countries: Country[] = [];
  displayedCountries: Country[] = [];
  pageSize: number = 20;
  currency: Currency[] = [];
  //spinner
  isLoading: boolean = false;

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({
      searchValue: ''
    });
  }

  ngOnInit(): void {
    //spinner start
    this.isLoading = true;
    // spinner end
    this.fetchData();
  }

  fetchData(): void {
    //spinner
    this.isLoading = true;
    //spinner ends
    this.countryService.getCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
        this.updateDisplayedCountries();
        //spinner start
        this.isLoading = false;
        //spinner end
      },
      (error: any) => {
        console.error(error);
        //spinner start
        this.isLoading = false;
        //spinner ends
      }
    );
  }

  updateDisplayedCountries(): void {
    this.displayedCountries = this.countries.slice(0, this.pageSize);
  }

  onSearchSubmit(): void {
    const searchTerm = this.searchForm.value.searchValue.toLowerCase();
    this.displayedCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }

  onLoadMore(): void {
    const startIndex = this.displayedCountries.length;
    const endIndex = startIndex + this.pageSize;

    if (endIndex <= this.countries.length) {
      const newCountries = this.countries.slice(startIndex, endIndex);
      this.displayedCountries = [...this.displayedCountries, ...newCountries];
    }
  }

  openDialog(country: Country): void {
    this.dialog.open(PopupComponent, {
      width: '50%',
      height: '400px',
      data: country,
    });
  }


}
