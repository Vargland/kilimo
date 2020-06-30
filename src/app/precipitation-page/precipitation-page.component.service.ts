import { Observable, BehaviorSubject } from 'rxjs';
import { USER_DATA_MOCKED, IUserData} from '../mock-data';

export class PrecipitationPageService {
  public currentField$: Observable<any>;

  private _currentField: BehaviorSubject<IUserData> = new BehaviorSubject<IUserData>(undefined);

  constructor() {
    this.currentField$ = this._currentField.asObservable();
  }

  public getCurrentField(id: number): void {
    const fieldData: IUserData = USER_DATA_MOCKED.find(field => field.id === id);

    this._currentField.next(fieldData);
  }
}
