import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { IUserData } from '../mock-data'
import { MainPageService } from './main-page.component.service'
import { filter, tap, takeUntil } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit, OnDestroy {
  @Output() public dataUser: Observable<IUserData[]>
  @Output() public displayedColumns: string[];

  private _userData$: BehaviorSubject<IUserData[]> = new BehaviorSubject(undefined)
  private _destroyed$ = new Subject<void>();

  constructor(private _mainPageService: MainPageService) { 
    this._mainPageService.getUserData();
    this.dataUser = this._userData$.asObservable();
  }

  public ngOnInit(): void {
    this.displayedColumns = ['thumbnail', 'name', 'hectares', 'lat', 'lon'];
    this._mainPageService.userData$
      .pipe(
        filter((userData) => userData !== undefined),
        tap((userData: IUserData[]) => this._userData$.next(userData)),
        takeUntil(this._destroyed$),
      ).subscribe();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
  }
}
