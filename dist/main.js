(()=>{"use strict";new class{constructor(){this.weather=new class{constructor(){}async getWeather(e){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=bfe99891e1d843209e475618232903&q=${e}`),o=await t.json();this.renderData(o),console.log(o);const r=o.current.condition.text;this.getGif(r)}catch(e){console.log(e)}}async getGif(e){try{const t=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YG6xZTHIFxmPG2qrwk9CVBiNoL5r1A65&q=${e}`,{mode:"cors"}),o=await t.json();console.log(o.data.length),this.renderGif(o)}catch(e){console.log(e)}}renderData(e){const{location:{name:t,country:o},current:{condition:{text:r},cloud:n,temp_c:c,temp_f:a,wind_kph:s,wind_mph:i,pressure_mb:u,pressure_in:l}}=e;document.querySelector("#search-place").textContent=`${t} (${o})`,document.querySelector("#current-condition").textContent=r,document.querySelector("#clouds").value=n,document.querySelector("#temp").textContent=`${c} C`,document.querySelector("#wind").textContent=`${s} KPH`,document.querySelector("#pressure").textContent=`${u} MB`}renderGif(e){const t=e.data.length,o=Math.floor(Math.random()*(t+1));document.body.style.backgroundImage=`url(${e.data[o].images.original.url})`}},this.weather.getWeather("warsaw"),document.querySelector("#place").addEventListener("input",this.renderSearch.bind(this))}renderSearch(){const e=document.querySelector("#place").value;console.log(e),this.weather.getWeather(e)}}})();