import { BehaviorSubject, Observable } from 'rxjs';
import { FORECAST, IUserData, IForecast, USER_DATA_MOCKED } from '../mock-data';

export class PrecipitationPageService {
  public currentField$: Observable<any>;
  public forecast$: Observable<any>;

  private _currentField: BehaviorSubject<IUserData> = new BehaviorSubject<IUserData>(undefined);
  private _forecast: BehaviorSubject<IForecast[]> = new BehaviorSubject<IForecast[]>(undefined);
  
  constructor() {
    this.currentField$ = this._currentField.asObservable();
    this.forecast$ = this._forecast.asObservable();
  }

  public getCurrentField(id: number): void {
    const fieldData: IUserData = USER_DATA_MOCKED.find(field => field.id === id);

    this._currentField.next(fieldData);
  }

  public getForecast(): void {
    this._forecast.next(FORECAST)
  }
}
