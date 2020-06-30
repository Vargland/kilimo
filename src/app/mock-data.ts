export interface IUserData {
  id: number,
  country?: string,
  state?: string,
  currentDate: string,
  fieldName: string,
  hectares: number,
  latitude: number,
  longitude: number,
  image: string,
  precipitationInfo: IPrecipitation[]
}

export interface IPrecipitation {
  date: string,
  totalPrecipitation: number,
}

export interface IForecast {
  id: number,
  currentWeather: IForecastInfo,
  forecast: IForecastInfo[],
}

export interface IForecastInfo {
  date?: string,
  temp?: number,
  chanceOfRain: number,
  humidity: number,
  min: number,
  max: number,
}

export const USER_DATA_MOCKED: IUserData[] = [
  {
    id: 1,
    country: 'Argentina',
    state: 'Cordoba',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Molinos',
    hectares: 3000,
    image: 'https://placeimg.com/640/480/any',
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      },
     ],
  },
  {
    id: 2,
    country: 'Chile',
    state: 'Santiago ',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Cañuelas',
    hectares: 3000,
    image: 'https://placeimg.com/640/480/any',
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      }
     ],
  },
  {
    id: 3,
    country: 'Argentina',
    state: 'Buenos Aires',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Fantasia 1',
    image: 'https://placeimg.com/640/480/any',
    hectares: 3200,
    
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      }
     ],
  },
  {
    id: 4,
    country: 'Argentina',
    state: 'Buenos Aires',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Fantasia 2',
    hectares: 500,
    image: 'https://placeimg.com/640/480/any',
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      }
     ],
  },
  {
    id: 5,
    country: 'USA',
    state: 'IOWA',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Slipknot',
    hectares: 1000,
    image: 'https://placeimg.com/640/480/any',
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      }
     ],
  },
  {
    id: 6,
    country: 'Peru',
    state: 'Puno',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Viracocha',
    hectares: 1500,
    image: 'https://placeimg.com/640/480/any',
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      }
     ],
  },
  {
    id: 7,
    country: 'Argentina',
    state: 'Cordoba',
    currentDate: '23/06/2020',
    longitude: -32.416668,
    latitude: -64.183334,
    fieldName: 'Molinos',
    hectares: 3000,
    image: 'https://placeimg.com/640/480/any',
    precipitationInfo: [
      {
        date: '22/06/2020',
        totalPrecipitation: 5000,
      },
      {
        date: '21/06/2020',
        totalPrecipitation: 1000,
      },
      {
        date: '20/06/2020',
        totalPrecipitation: 0,
      }
     ],
  },
]

export const FORECAST: IForecast[] = [
  {
    id: 1,
    currentWeather:
      {
        temp: 20,
        chanceOfRain: 10,
        humidity: 67,
        min: 10,
        max: 25,
      },
    forecast: [
      {
        date: '24/06/2020',
        chanceOfRain: 20,
        humidity: 80,
        min: 12,
        max: 25,
      },
      {
        date: '25/06/2020',
        chanceOfRain: 90,
        humidity: 90,
        min: 13,
        max: 27,
      },
      {
        date: '26/06/2020',
        chanceOfRain: 98,
        humidity: 97,
        min: 15,
        max: 29,
      },
    ],
  }
]
