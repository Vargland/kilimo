import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * ANGULAR MATERIAL DEPENDENCIES
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TableComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
