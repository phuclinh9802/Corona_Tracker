import { Component, OnInit } from '@angular/core';
import { CoronaService} from '../corona.service';
import { Chart } from 'node_modules/chart.js'

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
  recoverArray: Number[] = [];
  deathArray: Number[] = [];
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
        this.recoverArray.push(element.Recovered);
        this.deathArray.push(element.Deaths);
      }
    })

    console.log(this.deathArray);
    // alert(this.country);
    // var myChart = new Chart("myChart", {
    //   type: 'line',
    //   data: {
    //     labels: this.country,
    //     datasets: [
    //       { 
    //         data: this.confirmArray,
    //         label: "Confirmed",
    //         borderColor: "green",
    //         fill: false
            
    //       },
    //       { 
    //         data: this.recoverArray,
    //         label: "Recovered",
    //         borderColor: "yellow",
    //         fill: false
            
    //       },
    //       { 
    //         data: this.deathArray,
    //         label: "Deaths",
    //         borderColor: "red",
    //         fill: false
    //       }
    //     ]
    //   },
    //   // options: {
    //   //   responsive: true,
    //   //   animation: {
    //   //     duration: 0.5
    //   //   }
    //   // }
    // });
    //this.clear();
  }

  clear(): void {
    this.confirmArray = [];
  }

}
