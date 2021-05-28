import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityInfoPageComponent } from './city-info-page/city-info-page.component';
import { LabelValueRowComponent } from './shared/label-value-row/label-value-row.component';
import { ErrorDisplayComponent } from './shared/error-display/error-display.component';
import { ApiService }                 from './services/api.service';
import { CityInfoService }            from './services/city-info-service';

@NgModule({
  declarations: [
    AppComponent,
    CityInfoPageComponent,
    LabelValueRowComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService, CityInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
