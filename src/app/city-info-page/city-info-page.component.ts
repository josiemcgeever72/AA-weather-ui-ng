import { Component, OnInit }                        from '@angular/core';
import * as moment                                  from 'moment';
import { AAWeatherErrorDetail, AAWeatherException } from '../exceptions/aa-weather-execption';
import { CityInfoService }                          from '../services/city-info-service';
import { CityInfo }                                 from '../types';

@Component({
  selector: 'app-city-info-page',
  templateUrl: './city-info-page.component.html'
})
export class CityInfoPageComponent implements OnInit {

  cityList:       string[];
  selectedCity:   string;
  cityFound:      boolean;
  cityInfo:       CityInfo;
  ciService:      CityInfoService;
  errors:         AAWeatherErrorDetail[];

  constructor(service: CityInfoService) {
    this.ciService = service;

    this.cityList     = ['Beijing', 'Nairobi', 'New York', 'Mumbai', 'Paris', 'Sydney'];
    this.selectedCity = 'Mumbai';
    this.cityFound = false;
    this.cityInfo = { location:   {country: '', region: '', latitude: '', longitude: '', localDateTime: ''} ,
                      weather:    {description: '', iconUrl: '', tempInCelius:'' },
                      astronomy:  {sunrise: '', sunset:'', moonPhase: ''} ,
                      name: ''};
    this.errors   = [];
  };
    
  ngOnInit(): void {  }

  public onCityChanged(city:string) {
    this.selectedCity= city;
    this.cityFound= false;
    this.errors = [];
    this.ciService.getCityInfo(this.selectedCity)
    .then((cityInfo: CityInfo) => { this.cityInfo = cityInfo; 
                                    this.cityInfo.location.localDateTime= moment(this.cityInfo.location.localDateTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm');
                                    this.cityInfo.astronomy.sunrise= moment(this.cityInfo.astronomy.sunrise, 'HH:mm:ss').format('HH:mm A');
                                    this.cityInfo.astronomy.sunset= moment(this.cityInfo.astronomy.sunset, 'HH:mm:ss').format('HH:mm A');
                                    this.cityFound= true})
    .catch ((errObj: AAWeatherException)  => this.errors = errObj.errors);
  }

  public getWeatherDisplayText (){
    return this.cityInfo.weather.tempInCelius + '\u00b0C ' + '(' + this.cityInfo.weather.description + ') ' 
  } 
}
