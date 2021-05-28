import { Component, Input, OnInit } from '@angular/core';
import { AAWeatherErrorDetail }     from 'src/app/exceptions/aa-weather-execption';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html'
})
export class ErrorDisplayComponent implements OnInit {
  @Input() errors: AAWeatherErrorDetail[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
