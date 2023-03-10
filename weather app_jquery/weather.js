$( document ).ready(function() {
    const api_key= `1cf6276866cb359a9fdc0983f05f10bb`;
    $(".weatherConditions").hide();
  $(document).on("submit", "#searchForm", function (e) {
    e.preventDefault();
    $(".weatherConditions").hide();
    let city=$("#search").val();    
    getWeather(city);
  })
  const getWeather= async(city) =>
  {
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    try{
    const response = await fetch(api);
    const data= await response.json();
    if(response.status!=200)
    {
        alert("Please Enter A Valid City Name");
    }
    else {
        renderData(data);
    }
     }
     catch(error){
       alert("error in loading api");
     }
  }
  const renderData=(data) =>
  {
    $(".weatherConditions").show(function()
    {
        $("#weatherType").text("weather conditions:"+data.weather[0].main);
        $("#cityTemperature").text("city temperature:"+data.main.temp+"°C ");
        $("#windSpeed").text('Wind Speed:'+data.wind.speed+"m/s");
    });
    
    
  }

});