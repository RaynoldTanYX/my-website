import React, { useEffect } from 'react';
import DataGovSGService from '../API/DataGovSGService';

const RainApp = () => {

    const [dataAirTemp, setDataAirTemp] = React.useState();
    const [dataRainfall, setDataRainfall] = React.useState();
    const [dataRelHumidity, setDataRelHumidity] = React.useState();

    const [dataRetrieved, setDataRetrieved] = React.useState(false);
    const [stationsSelected, setStationsSelected] = React.useState(false);

    useEffect(() => {
        RetrieveData();
    }, [])

    const RetrieveData = () => {
        console.log("Retrieving data");
        return Promise.all([
            DataGovSGService.Get_AirTemp(),
            DataGovSGService.Get_Rainfall(),
            DataGovSGService.Get_RelHumidity()
        ])
        .then((response) => {
            console.log("Data retrieved", response);
            setDataAirTemp(response[0].data);
            setDataRainfall(response[1].data);
            setDataRelHumidity(response[2].data);
            setDataRetrieved(true);
        })
        .catch((error) => {
            console.log(error);
        })
        
        
        
    }

    const RenderRetrievingData = () => {
        return (
            <div>
                Retrieving data...
            </div>
        )
    }

    const RenderStationSelection = () => {
        return (
            <div>
                <p>{dataAirTemp.metadata.stations[0].name}</p>
            </div>
        )
    }

    const RenderData = () => {
        return (
            <div>
                {dataAirTemp.items[0].readings[0]}
            </div>
        )
    }

    return (
        !dataRetrieved ? RenderRetrievingData() :
        !stationsSelected ? RenderStationSelection() :
        RenderData()
    );
    
}

export default RainApp;