class Weather {
	constructor() {}

	async getWeather(place) {
		try {
			const weather = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=bfe99891e1d843209e475618232903&q=${place}` //input.value
			);
			const weatherData = await weather.json();
			this.renderData(weatherData);
			console.log(weatherData);
			//--------- GIF ---------

			const currentConditionText = weatherData.current.condition.text;
			this.getGif(currentConditionText);
		} catch (error) {
			console.log(error);
		}
	}

	async getGif(currentConditionText) {
		try {
			const gifFetch = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=YG6xZTHIFxmPG2qrwk9CVBiNoL5r1A65&q=${currentConditionText}`,
				{ mode: 'cors' }
			);

			const gifResponse = await gifFetch.json();
			console.log(gifResponse.data.length);
			this.renderGif(gifResponse)

		} catch (error) {
			//handle array < 50
			console.log(error);
		}
	}

	renderData(data) {
		const location = data.location.name;
		document.querySelector('#search-place').textContent = location;
	}

	renderGif(gifResponse) {
        //check how many gifs there are
        const arrLength = gifResponse.data.length;
        // draw random gif
        const randomNumArrLength = Math.floor(Math.random() * (arrLength + 1));
        // console.log(gifResponse.data[randomNumArrLength].images.original.url);
        //change bg image
        document.body.style.backgroundImage = `url(${gifResponse.data[randomNumArrLength].images.original.url})`;
    }
}

export default Weather;
