import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WeatherContext, { CityContext } from "./Adapters/context";
import Form from "./Components/Form";
import Header from "./Components/Header";
import MyTimeline from "./Components/Timeline";
import './Styles/index.css'
import { createTheme,ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
        primary: {
            main: '#91441f',
        }
    },
    typography: {
        fontFamily: "Work+Sans",
        fontWeightLight: 100,
        fontWeightRegular: 300,
        fontWeightMedium: 300,
        fontWeightBold: 400,
    },
    autocomplete : {
        color : "rgb(144, 202, 249) !important"
    },
    "& #combo-box-demo": {
        //or could be targeted through a class
        innerWidth : "100%",
        outerWidth : "100%",
        color : "rgb(144, 202, 249) !important"
      }
    

});


export default function App() {

    // Here is the context api to serve forecast data fetched and searched city name !
    const [weatherData, updateWeatherData] = useState([])
    const [searchedCityName, updateSearchedCityName] = useState("")

    return <>
        <CityContext.Provider value={{ searchedCityName, updateSearchedCityName }}>
            <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
                <Header />
                <div id="mainContainer">
                    <Routes>
                        <Route exact path="/" element={<Navigate replace to={'/search'} />} />
                        <Route exact path="/search" element={<Form />} />
                        <Route exact path="/data" element={<MyTimeline />} />
                    </Routes>
                </div>
            </WeatherContext.Provider>
        </CityContext.Provider>

    </>

}
