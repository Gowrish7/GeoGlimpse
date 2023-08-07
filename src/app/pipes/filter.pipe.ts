import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(countries: Country[], searchTerm: string): Country[] {
    if (!searchTerm) {
      return countries;
    }
    
    searchTerm = searchTerm.toLowerCase();

    return countries.filter(country => {
      return country.name.toLowerCase().includes(searchTerm);
    });
  }
}
