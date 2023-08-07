
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { CountryService } from '../country.service';
// import { Country } from '../country.model';

// @Component({
//   selector: 'app-country-list',
//   templateUrl: './country-list.component.html',
//   styleUrls: ['./country-list.component.css']
// })
// export class CountryListComponent implements OnInit {
//   searchForm: FormGroup;
//   countries: Country[] = [];
//   displayedCountries: Country[] = [];

//   constructor(private countryService: CountryService, private fb: FormBuilder) {
//     this.searchForm = this.fb.group({
//       searchValue: ''
//     });
//   }

//   ngOnInit(): void {
//     this.fetchData();
//   }

//   fetchData(): void {
//     this.countryService.getCountries().subscribe(
//       (data: Country[]) => {
//         this.countries = data;
//         this.displayedCountries = data; 
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }

//   onSearchSubmit(): void {
//     const searchTerm = this.searchForm.value.searchValue.toLowerCase();
//     this.displayedCountries = this.countries.filter(country =>
//       country.name.toLowerCase().includes(searchTerm)
//     );
//   }

//   onCardClicked() {
//     alert('jai');
//   }

//   onLoadMore() :void{

//   }
// }

// chatgpt



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from '../country.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  searchForm: FormGroup;
  countries: Country[] = [];
  displayedCountries: Country[] = [];
  pageSize: number = 16;

  constructor(private countryService: CountryService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchValue: ''
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.countryService.getCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
        this.updateDisplayedCountries();
      },
      (error: any) => {
        console.error(error);
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
} 



