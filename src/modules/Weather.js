class Weather {
	constructor() {}

	async getWeather() {
		const weather = await fetch(
			'https://api.weatherapi.com/v1/current.json?key=bfe99891e1d843209e475618232903&q=rzeszow'
		);
		const weatherData = await weather.json();
        console.log(weatherData);
	}

	async getGif() {
		try {
			const search = 'christ'; // input.value
			const img = document.querySelector('#image');
			const random50 = Math.floor(Math.random() * 51);

			const gifFetch = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=YG6xZTHIFxmPG2qrwk9CVBiNoL5r1A65&q=${search}`,
				{ mode: 'cors' }
			);

			const gifResponse = await gifFetch.json();
            img.src = gifResponse.data[random50].images.original.url

		} catch (error) {
            //handle array < 50
			console.log(error);
		}
	}
}

export default Weather;
