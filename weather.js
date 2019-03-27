class Weather {
    constructor(){
        
        this.handleWeatherDataSuccess = this.handleWeatherDataSuccess.bind(this);
        this.handleWeatherDataError = this.handleWeatherDataError.bind(this);
        this.handleTemperature = this.handleTemperature.bind(this);
        this.clickCallBack = this.clickCallBack.bind(this);
        this.handleWeatherData();
        this.handleClick();
    }
    handleClick(){
        $(".temp").on("click", this.clickCallBack);
    }
    clickCallBack(){
        console.log(this);
        // if(tempFlagF === true){
        //     tempFlagF = false;
        // }else{
        //     tempFlagF = true;
        // }
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

    handleTemperature(response){
    this.clickCallBack();
    var tempArray = [];
    var tempFlagF = true;
    var apparentTempF = response.currently.apparentTemperature; //is in Farenheight
    var tempF = "Temperature: "+apparentTempF+" \xB0F";
    
    var apparentTempC = (apparentTempF - 32)*(5/9);
    var tempC = "Temperature: "+apparentTempC.toFixed(2)+ " \xB0C";
    
    tempArray.push(tempF, tempC);
    
    if(tempFlagF === true){
        $(".temp").append(tempF);
    } else{
        $(".temp").append(tempC);
    }
    
    }

    handleWeatherDataSuccess(response){
    this.handleTemperature(response);
    

    var icon = response.currently.icon;
    var unixTimestamp = response.currently.time;
    var currentSummary = response.currently.summary;
    
    var unixTime = new Date(unixTimestamp*1000);
    var day = unixTime.toDateString();
    var hour = unixTime.getHours();
    var minutes = unixTime.getMinutes();
    var currentTime = `Current Time: ${hour}:${minutes}`
    var currentDate = `${day}`

    //Appending to div
    
    var weatherSituation = $(".weatherSituation").attr("id", icon);
    var time = $(".time").append(currentTime);
    var date = $(".date").append(currentDate).css("font-weight","bold");
    var summary = $(".summary").append(currentSummary);

    var icons = new Skycons(),
                list  = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;
                for(i = list.length; i--; )
                icons.set(list[i], list[i]);
                icons.play();

    }
    
    handleWeatherDataError(response){
        console.log(response);
    }
}

