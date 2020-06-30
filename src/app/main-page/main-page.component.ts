import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUserData } from '../mock-data'
import { MainPageService } from './main-page.component.service'
import { filter, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  @Output() public dataUser: Observable<IUserData[]>
  @Output() public displayedColumns: string[];

  private _userData$: BehaviorSubject<IUserData[]> = new BehaviorSubject(undefined)

  constructor(private _mainPageService: MainPageService) { 
    this._mainPageService.getUserData();
    this.dataUser = this._userData$.asObservable();
  }

  public ngOnInit(): void {
    this.displayedColumns = ['thumbnail', 'name', 'hectares', 'lat', 'lon'];
    this._mainPageService.userData$
      .pipe(
        filter((userData) => userData !== undefined),
        map((userData: IUserData[]) => this._userData$.next(userData))
      ).subscribe();
  }
}