import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrecipitationPageService } from './precipitation-page.component.service'
import { filter, tap } from 'rxjs/operators';
import { IUserData, IPrecipitation } from '../mock-data'
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'precipitation-page',
  templateUrl: './precipitation-page.component.html',
  styleUrls: ['./precipitation-page.component.scss'],
  providers: [ PrecipitationPageService ]
})

export class PrecipitationPageComponent implements OnInit {
  @Output() public displayedColumns: string[];
  @Output() public precipitationData: Observable<any>;
  @Output() public forecast: IPrecipitation[];

  public currentField: IUserData;

  private _currentId: number;
  private _currentField$: Observable<IUserData>;
  private _currentField: BehaviorSubject<any> = new BehaviorSubject<any>(undefined)
  private _forecast$: Observable<IPrecipitation[]>

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _precipitationPageService: PrecipitationPageService,
  ) { 
    this._activatedRoute.paramMap.subscribe(params => this._currentId = parseInt(params.get('id')));
    this._currentField$ = this._precipitationPageService.currentField$
      .pipe(
        filter((field: IUserData) => field !== undefined),
        tap((field: IUserData) => this.currentField = field),
        tap((field: IUserData) => this._currentField.next(field.precipitationInfo)),
      );
    this._forecast$ = this._precipitationPageService.forecast$
        .pipe(
          filter((forecast: IPrecipitation) => forecast !== undefined),
          tap((forecast: any) => this.forecast = forecast)
        );
    this.precipitationData = this._currentField.asObservable();
  }

  public ngOnInit(): void {
    this._currentField$.subscribe();
    this._forecast$.subscribe();
    this._precipitationPageService.getCurrentField(this._currentId);
    this._precipitationPageService.getForecast();
    this.displayedColumns = ['date', 'precipitation'];
  }
}
