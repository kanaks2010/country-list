import {Component, OnInit} from '@angular/core';
import {CountryService} from "./service/country.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  title = 'Country List';
  countryList: any;
  filteredCountry: any;
  isLoading: boolean | undefined;
  search: any;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.getAllCountryList();
  }

  getAllCountryList() {
    this.isLoading = true;
    this.countryService.getAllCountryList().subscribe((res) => {
      this.countryList = res;
      this.filteredCountry = res;
      this.isLoading = false;
    })
  }

  filterCountry(searchText: any) {
    if (searchText.length > 0) {
      this.filteredCountry = this.countryList.filter((country: { name: { common: string; }; }) => country.name.common.toLowerCase() === searchText.toLowerCase());
    } else {
      this.filteredCountry = this.countryList;
    }
  }
}
