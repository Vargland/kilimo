import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUserData } from '../mock-data';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})

export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) public sort: MatSort;
  @ViewChild(MapInfoWindow, {static: false}) public infoWindow: MapInfoWindow;

  @Input() public dataSource: Observable<IUserData[]>
  @Input() public displayedColumns: string[];

  public matTableDataSource: MatTableDataSource<IUserData>
  public mapProperties: any;
  public zoom: number = 10;

  constructor(private router: Router) { }

  public ngOnInit(): void { 
    this.dataSource.subscribe((dataSource) => {
      this.matTableDataSource = new MatTableDataSource(dataSource);
      this.matTableDataSource.sort = this.sort;
      this.matTableDataSource.paginator = this.paginator;
    });
  }

  public applyFilter(event: Event) {
    // TODO: FILTER ONLY BY NAME
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableDataSource.filter = filterValue.trim().toLowerCase();

    if (this.matTableDataSource.paginator) {
      this.matTableDataSource.paginator.firstPage();
    }
  }

  public goToPage(id: number) {
    this.router.navigate(['precipitation', id]);
  }

  public getCoordinates(data: IUserData) {
    return {
      lat: data.latitude,
      lng: data.longitude
    }
  }
}
