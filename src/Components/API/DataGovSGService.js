import axios from 'axios';
import { DATA_GOV_SG_URL } from '../../Constants'

class DataGovSGService {
    
    Get_AirTemp() {
        return axios.get(DATA_GOV_SG_URL + "/v1/environment/air-temperature");
    }
    
    Get_Rainfall() {
        return axios.get(DATA_GOV_SG_URL + "/v1/environment/rainfall");
    }
    
    Get_RelHumidity() {
        return axios.get(DATA_GOV_SG_URL + "/v1/environment/relative-humidity");
    }
}

export default new DataGovSGService();