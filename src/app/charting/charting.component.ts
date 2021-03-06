import { Component, OnInit } from '@angular/core';
import { CoronaService} from '../corona.service';
import { Chart } from 'node_modules/chart.js'
import { discardPeriodicTasks } from '@angular/core/testing';
@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent implements OnInit {
  countries: any;
  confirmed: any;
  recovered: any;
  deaths: any;
  country: any;

  confirmArray: Number[] = [];
  recoverArray: Number[] = [];
  deathArray: Number[] = [];
  days: Number[] = [];
  day: any = 0;
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
    alert("Information has been received!");
    this.corona.getInfoByCountries(this.country).subscribe((data) => {
      for (let element of data) {
        this.day = this.day + 1;
        this.days.push(this.day);
        this.confirmArray.push(element.Confirmed);
        this.recoverArray.push(element.Recovered);
        this.deathArray.push(element.Deaths);
      }
    })
    
  }
  showChart(): void {
    var button = document.getElementById("showButton");
    button.addEventListener("click", function(){
      myChart.destroy();
    });
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {

        labels: this.days,
        datasets: [
          { 
            data: this.confirmArray,
            label: "Confirmed",
            borderColor: "green",
            backgroundColor: "rgba(0,128,0,0.4)",
            fontColor: "#eee",
            fill: true
            
          },
          { 
            data: this.recoverArray,
            label: "Recovered",
            borderColor: "yellow",
            backgroundColor: "rgba(255,255,0,0.5)",
            fontColor: "#eee",
            fill: true
            
          },
          { 
            data: this.deathArray,
            label: "Deaths",
            borderColor: "red",
            fontColor: "#eee",
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Total # of Days',
              fontColor: '#eee'
            },
            gridLines: {
              display: true,
              color: '#aaa',
              lineWidth: 1
            },
            ticks: {
              fontColor: "white",
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: '# of People',
              fontColor: '#eee'
            },
            gridLines: {
              display: true,
              color: '#aaa',
              lineWidth: 1
            },
            ticks: {
              fontColor: "white",
            }
          }]
        }
      }
      // options: {
      //   responsive: true,
      //   animation: {
      //     duration: 0.5
      //   }
      // }
    });
    //this.clear();
  }

  clear(): void {
    alert("Information has been cleared! Now you can search for new information.");
    this.confirmArray = [];
    this.deathArray = [];
    this.recoverArray = [];
    this.days = [];
  }

}
