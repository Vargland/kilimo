import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * ANGULAR MATERIAL DEPENDENCIES
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

/**
 * COMPONENTS
 */
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TableComponent } from './table-component/table-component.component';
import { PrecipitationPageComponent } from './precipitation-page/precipitation-page.component';
import { ForecastComponent } from './forecast-component/forecast.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'precipitation/:id',
    component: PrecipitationPageComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TableComponent,
    PrecipitationPageComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
