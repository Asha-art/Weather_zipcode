
// var request = require('request');
//   var $ = require('jquery');
// request.$ =$;
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

  $(document).ready(function(){
	$('#getWeatherForcast').click(function(){
		var zipcode = $('#zip').val();
		var key = 'c65692185192c2852cfc0a2ec9095d2a'

		$.ajax({
			url:'https://api.openweathermap.org/data/2.5/weather',
			dataType:'json',
			type:'GET',
			data:{zip:zipcode, appid:key, units:'imperial'},

			success: function(data){
				var wf = '';
				$.each(data.weather,function(index, val){
					wf += '<p><b>'+data.name+'</b></p>'+data.main.temp+ '&deg;F '+' | '+ val.main+", "+val.description
				});
				$('#showWeatherForcast').html(wf);
			}
		})
	})
})

// in the browser
/*
const input = document.querySelector('.input');
const api = {
    key : '3874ba64c15c3a576a52afc64374f3a0',
    baseurl:'https://api.openweathermap.org/data/2.5/weather'
}

// $('button').addEventListener('keypress',setQuery);
// function setQuery(evt){
//     if(evt.keyCode ===13){
//         getResults(input.value);
//         console.log(input.value);
//     }
// }*/

//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid
/*
    $('.button').click(function(){
        var zipcode = $(".input").val();
        var key = '3874ba64c15c3a576a52afc64374f3a0';
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType:'json',
            type: 'GET',
            data:{ q:zipcode, appid:key, units:'imperial'},
       
                success: function(data){
                    var x='';
                    $.each(data.weather,function(index,val){
                    x = x + "is"+data.name+" is "+ data.main.temp + " F " + val.main + " , "+val.description
                    });
                    console.log(data);
                    $(".display").html(x);
                }

        });
     });

*/




//var moment = require('moment');
//moment().format('MMMM Do YYYY, h:mm:ss a');
/*
// to display in the terminal
var http = require('http');

var apiKey = '3874ba64c15c3a576a52afc64374f3a0';
//let zipcode = "28173";
var url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid=${apiKey}`
var server = http.createServer(function(request,response){
    var request = require('request');
request(url, function (err, res, body) {
    // if(err){
    //   console.log('error:', error);
    // } else {
    //   console.log('body:', body);    // this returns in jumbled text JSON
    let weather = JSON.parse(body) // convert it into readable text
console.log(weather);
        response.write("<html><body><div class='display'>");
        response.write("It is "+weather.main.temp+" degrees in "+ weather.name);
        response.write("</div></body></html>");
response.end();
// let message = ('It is '+weather.main.temp+' degrees in '+ weather.name ) ;
// // console.log(message);

    // }     
    })                      
  }).listen(8082);
  */





/*
function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.Key}`)
    .then(weather =>{
         return weather.json(); 
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location.city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location.date');
    date.innerText = dateBuilder(now);
}*/



/*
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