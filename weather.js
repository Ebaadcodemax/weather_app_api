let currweather="	/current.json "
let kkey="a7593c20f8e04dcca81132254250509";

let wind=document.querySelector("#wind")
let humidity=document.querySelector("#humidity")
let preci=document.querySelector("#precipitation")
let loc=document.querySelector("#loc")
let temp=document.querySelectorAll(".temperature")
let btn=document.querySelector("#btn")
let input=document.querySelector("#input");
let image=document.querySelector("#image")
let temperature=document.querySelector(".temperature")
let description=document.querySelector("#description")



async function getapi() {
    let url=`http://api.weatherapi.com/v1/current.json?key=a7593c20f8e04dcca81132254250509&q=${input.value}`
    
    let respone=await fetch(url);
    let rjson= await respone.json();
    
    console.log(rjson);
    humidity.innerText=rjson.current.humidity+"%";
    wind.innerText=rjson.current.wind_kph+"kph";
    preci.innerText=rjson.current.precip_mm+"mm";
    loc.innerText=rjson.location.name
    temperature.innerText=rjson.current.feelslike_c+"°C"
    description.innerText=rjson.current.condition.text
    image.src=rjson.current.condition.icon


}



async function defaultAPI() {
    let url=`http://api.weatherapi.com/v1/current.json?key=a7593c20f8e04dcca81132254250509&q=Pune`
    
    let respone=await fetch(url);
    let rjson= await respone.json();
    
    console.log(rjson);
    humidity.innerText=rjson.current.humidity+"%";
    wind.innerText=rjson.current.wind_kph+"kph";
    preci.innerText=rjson.current.precip_mm+"mm";
    loc.innerText=rjson.location.name
    temperature.innerText=rjson.current.feelslike_c+"°C"
    description.innerText=rjson.current.condition.text
    image.src=rjson.current.condition.icon


}



defaultAPI();

input.addEventListener("keypress", function(e){
    if(e.key==="Enter"||e.code==="Enter"){
        e.preventDefault();
        console.log("enterpressed");
        getapi();
    }
});



btn.addEventListener("click",getapi)






