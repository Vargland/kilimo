import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrecipitationPageService } from './precipitation-page.component.service'
import { filter, tap, switchMap } from 'rxjs/operators';
import { IUserData } from '../mock-data'
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'precipitation-page',
  templateUrl: './precipitation-page.component.html',
  styleUrls: ['./precipitation-page.component.scss'],
  providers: [ PrecipitationPageService ]
})

export class PrecipitationPageComponent implements OnInit {
  @Output() public displayedColumns: string[];
  @Output() public precipitationData: Observable<any[]>;
  public currentField: IUserData;

  private _currentId: number;
  private currentField$: Observable<any>;
  private _currentField$: BehaviorSubject<any[]> = new BehaviorSubject(undefined)

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _precipitationPageService: PrecipitationPageService,
  ) { 
    this._activatedRoute.paramMap.subscribe(params => this._currentId = parseInt(params.get('id')));
    this.currentField$ = this._precipitationPageService.currentField$
      .pipe(
        filter((field: IUserData) => field !== undefined),
        tap((field: IUserData): any => this.currentField = field),
        tap((field: any): any => this._currentField$.next(field.precipitationInfo)),
      );
    this.precipitationData = this._currentField$.asObservable();
    
  }
  
  public ngOnInit(): void {
    this.currentField$.subscribe();
    this._precipitationPageService.getCurrentField(this._currentId);
    this.displayedColumns = ['date', 'precipitation'];
  }
}
