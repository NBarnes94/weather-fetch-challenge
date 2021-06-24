import React, { Component  } from 'react'

type Weather = {
    locationWeather:{
        weather:{
            description: string;
        }
        main:{
            temp:string
        }
    }
    currentLat: number,
    currentLong: number
}


type Geolocation = {
    coords:{
        latitude: number,
        longitude: number
    }
}


export default class Location extends Component<{}, Weather>{
        constructor(props: {} ){
            super(props);
            this.state={
                locationWeather:{
                    weather:{
                        description: ""
                    },
                    main:{
                        temp:""
                    }
                },
                currentLat: 0,
                currentLong: 0 
            }
            this.success = this.success.bind(this)
        }

            success(pos: Geolocation){
                console.log(pos);
                let crd = pos.coords;
                this.setState({currentLat: crd.latitude, currentLong: crd.longitude});
                console.log(this.state.currentLat, this.state.currentLong);
                
                
            }

            fetchWeather(){
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentLat}&lon=${this.state.currentLong}&appid=${}` //adding api key later so that i can push to github
                
                fetch(url)
                .then((res) => res.json())
                // .then((fetchData) => data: string)

            }

        // logLatAndLon(): void{
        //     navigator.geolocation.getCurrentPosition((position) =>{
        //         this.setState.latitude = position.coords.latitude;
        //         //let lon: number = position.coords.longitude
        //         return lat
        //     });
        //     console.log(this.state.latitude, this.state.longitude);
        //     console.log(lat);
            
        // }
        componentDidMount(){
            navigator.geolocation.getCurrentPosition(this.success);
            // this.fetchWeather()
        }
    render(){
        return(
            <div>
                <h1>I am this location {this.state.currentLat}, {this.state.currentLong} </h1>
            </div>
        )
    }
}

