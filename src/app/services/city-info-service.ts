import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

export class CityInfoService {
    private cityInfoPath:   string;
    private apiService:     ApiService;

    constructor(){
        this.cityInfoPath   = environment.aa_weather_api_base_url  + 'weather';
        this.apiService     = new ApiService();
    }
    
    public getCityInfo(name:string){
        return this.apiService.getData(this.cityInfoPath, name);
    }
}