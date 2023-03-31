class Weather {
	constructor() {}

	async getWeather(place) {
		try {
            const inputPlace = document.querySelector('#place')
			const searchPlace = 'kiev';
			const weather = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=bfe99891e1d843209e475618232903&q=${place}` //input.value
			);
			const weatherData = await weather.json();
			console.log(weatherData);
            console.log(weatherData.current.condition.text);
			//--------- GIF ---------

			const searchGif = weatherData.current.condition.text
			const random50 = Math.floor(Math.random() * 51);

			const gifFetch = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=YG6xZTHIFxmPG2qrwk9CVBiNoL5r1A65&q=${searchGif}`,
				{ mode: 'cors' }
			);

			const gifResponse = await gifFetch.json();
			console.log(gifResponse.data[random50].images.original.url);
			document.body.style.backgroundImage = `url(${gifResponse.data[random50].images.original.url})`;
		} catch (error) {
			//handle array < 50
			console.log(error);
		}
	}
}

export default Weather;
