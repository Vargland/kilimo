import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUserData } from './mock-data'
import { MainPageService } from './main-page.component.service'
import { filter, map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @Output() public dataUser: Observable<IUserData[]>
  private _userData$: BehaviorSubject<IUserData[]> = new BehaviorSubject(undefined)

  constructor(private _mainPageService: MainPageService) { 
    this._mainPageService.getUserData();
    this.dataUser = this._userData$.asObservable();
  }

  public ngOnInit(): void {
    this._mainPageService.userData$
      .pipe(
        filter((userData) => userData !== undefined),
        // TODO: FIX THAT any
        map((userData: IUserData[]): any => this._userData$.next(userData))
      ).subscribe();
  }
}
