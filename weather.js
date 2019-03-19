class Weather {
    constructor(){
        this.handleWeatherDataSuccess = this.handleWeatherDataSuccess.bind(this);
        this.handleWeatherDataError = this.handleWeatherDataError.bind(this);
        this.handleWeatherData();
    }
    handleWeatherData(){
        $.ajax({
            url: "darksky.php",
            dataType: "json",
            method: "get",
            success: this.handleWeatherDataSuccess,
            error: this.handleWeatherDataError
        })
    }
    handleWeatherDataSuccess(response){
    console.log("it works", response);
    var apparentTemp = response.currently.apparentTemperature;
    var tempF = `${apparentTemp} F ${String.fromCharCode(176)}`
    var icon = response.currently.icon;
    var unixTimestamp = response.currently.time;
    
    var unixTime = new Date(unixTimestamp*1000);
    var day = unixTime.toDateString();
    var hour = unixTime.getHours();
    var minutes = unixTime.getMinutes();
    var currentDate = `${hour}:${minutes}, ${day}`

    $(".weather").append(tempF, icon, currentDate);
    }
    handleWeatherDataError(response){
        console.log(response);
    }
}

