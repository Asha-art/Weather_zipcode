
// var request = require('request');
//   var $ = require('jquery');
// request.$ =$;
/*
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);
*/
// using jQuery

$('.button').click(function(){
    var zipcode = $(".zipcode").val();
    var key = '3874ba64c15c3a576a52afc64374f3a0';
//  // Enter key press
//  $(".zipcode").on( "keypress", function(event) {
//     if (event.which == 13) {
//         event.preventDefault();
//         $(".button").submit();
//     }
//   });
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        dataType:'json',
        type: 'GET',
        data:{ zip:zipcode, appid:key, units:'imperial'},
   
            success: function(data){
                var x='';
                
                var y='';
                var city ='';
                var timezone_city=data['timezone'];
                //var timezone =  moment().format('MMMM Do YYYY, h:mm:ss a');
                var timezone =  moment().utcOffset(timezone_city/60).format('MMMM Do YYYY, h:mm:ss a');
                console.log(timezone);

                $.each(data.weather, function(index,val){
                
               city =city+data.name + ", " + data.sys.country ;
               timezone = timezone ;

               var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                var weatherIcon = "<img src='" + iconUrl  + "'>"
                x = x +  data.main.temp + "&deg F " +weatherIcon ;               
                y = y + "Humidity: "+data.main.humidity + "%   ";
                feels =val.description+",   Feels like: "+Math.round(data.main.feels_like)+"&deg,  "+ " Low: " + Math.round(data.main.temp_min) +"&deg,  "+ "High: "+Math.round(data.main.temp_max)+"&deg ";
                console.log(data);

                 $(".city").html(city);
                 $(".timezone").html(timezone);
                 $(".temp").html(x);
                //  $(".icon").html("<img src='" + iconUrl  + "'>");
                 $(".lowHigh").html(feels);
                
                 $(".humidity").html(y);
                
                 });
             
             }
          });
        })




/*
// to display in the browser with npm
//var moment = require('moment');
//moment().format();
//moment().format('MMMM Do YYYY, h:mm:ss a');

var http = require('http');
var apiKey = '3874ba64c15c3a576a52afc64374f3a0';
var url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid=${apiKey}`
var server = http.createServer(function(request,response){
    var request = require('request');
request(url, function (err, res, body) {
    var time = moment() 
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);    // this returns in jumbled text JSON
    let weather = JSON.parse(body) // convert it into readable text
console.log(weather);
        response.write("<html><body><div class='display'>");
        response.write("It is "+weather.main.temp+" degrees in "+ weather.name);
        response.write("</div></body></html>");
response.end();
    }     
    })                      
  }).listen(8010);
  */


            /*using JS

var button = document.querySelector('.button');
var inputValue = document.querySelector('.input');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&APPID=3874ba64c15c3a576a52afc64374f3a0')
    .then(response => response.json())
    .then(data => {
        var nameValue = data ['name'];
        var tempValue= data['main']['temp'];
        var descValue =data['weather']['o']['description'];
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    
    .catch(err => alert("wrong Zipcode"))
})
*/