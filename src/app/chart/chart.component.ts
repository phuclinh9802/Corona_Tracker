import { Component, OnInit } from '@angular/core';
import { CoronaService} from '../corona.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  countries: any;
  confirmed: any;
  recovered: any;
  deaths: any;
  country: any;

  confirmArray: Number[] = [];
  constructor(private corona : CoronaService) { }

  ngOnInit(): void {
    this.corona.getCountries().subscribe((data) => {
      this.countries = data;
    })
  }

  getCountry(country: any) {
    this.country = country;
  }
  getInfo(): void {
    this.corona.getInfoByCountries(this.country).subscribe((data) => {
      for (let element of data) {
        this.confirmArray.push(element.Confirmed);
      }
    })
    // alert(this.country);
  }

}
