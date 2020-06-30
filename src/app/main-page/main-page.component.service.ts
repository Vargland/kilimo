import { Injectable } from '@angular/core';
import { IUserData, USER_DATA_MOCKED } from '../mock-data'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MainPageService {
  public userData$: Observable<IUserData[]>;
  
  private _userData$: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>(undefined)
   
  constructor() {
    this.userData$ = this._userData$.asObservable()
  }

  public getUserData(): void {
    return this._userData$.next(USER_DATA_MOCKED);
  }
}
