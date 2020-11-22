var weather , city, temp

function setup() {
  createCanvas(600,400);
  city = prompt("Enter City:")
  //console.log("City is "+city)

  getWeather(city)
}

function draw() {
  background(255,255,255); 
  textSize(20) ;
  console.log(temp)
  if(!temp){
    
    text("Loading temperature of "+city + "....",200,200);
 
  }
  else{
    text("Temperature at "+city+" is "+temp, 200,200)
  }
  
}
async function getWeather(_city){
  
  var URI = "http://api.positionstack.com/v1/forward?access_key=7990f16b1591cace53933a68b6f5d786&query="+_city
  //console.log("URI is "+URI)
  var response=await fetch(URI)
  var responseJSON=await response.json()
  var latitude = responseJSON.data[0].latitude;
  var longitude = responseJSON.data[0].longitude;
  //console.log(responseJSON.data[0].latitude)
  //console.log(responseJSON.data[0].longitude)
  var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
  var response1 = await fetch(url);
  var responseJSON1 = await response1.json()
  //console.log(responseJSON1)
  
  temp = responseJSON1.main.temp;
  //console.log(temp)
  


}