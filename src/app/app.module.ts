import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartingComponent } from './charting/charting.component';
import { NewsComponent } from './news/news.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    ChartingComponent,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
