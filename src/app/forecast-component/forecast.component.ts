import { Component, OnInit, Input } from '@angular/core';
import { IForecast, IForecastInfo} from '../mock-data';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() public forecast: IForecast[];

  public forecastItem: any = [];

  constructor() { }

  public ngOnInit(): void {
    this._getForecast();
  }

  private _getForecast() {
    this.forecast.map((item) => {
      if (item.currentWeather) this.forecastItem.push(item.currentWeather);
      if (item.forecast.length) this._getNextForecast(item.forecast);
    });
  };

  private _getNextForecast(nextForecast) {
    return nextForecast.map(next => this.forecastItem.push(next))
  }
}
