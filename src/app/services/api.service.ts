import { Injectable }     from '@angular/core';
import  axios             from "axios";
import { AAWeatherErrorDetail , AAWeatherException} from '../exceptions/aa-weather-execption';
import { errorMessages }       from '../util/ui-text';

 
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
 
export interface Params {
	[ key: string ]: any;
}
 
export interface GetOptions {
	url: string;
	params?: Params;
}
 
export interface ErrorResponse {
	id: string;
	code: string;
	message: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiTimeout: number = 10000;

  constructor(){
    this.handleError = this.handleError.bind(this);
  }

  public getData(path: string, pathVar:string ){
      return this.getAxiosInstance().get(path + '/' + pathVar)
                  .then(result => result.data)
                  .catch(err =>   this.handleError(err))
  }

  private getAxiosInstance(){
      return axios.create({timeout: this.apiTimeout});
  }

  private handleError(error:any){
      let errors:AAWeatherErrorDetail[] = [];
      if (error.response){
          if (error.response.status && error.response.status === 400){

              errors.push( {code:'002', message:errorMessages.error400 })
          }else if (error.response.status && error.response.status === 500){

              errors.push( {code:'003', message:errorMessages.error500 })
          }
      }else{
          errors.push( {code:'001', message:errorMessages.networkError })
      }
      throw new AAWeatherException(errors);
  }
}
