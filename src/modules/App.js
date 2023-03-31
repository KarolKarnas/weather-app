import Weather from './Weather';

class App {
	constructor() {
		this.weather = new Weather();
		this.weather.getWeather();
		this.weather.getGif();
		// this.weather.renderGif()
	}
}

export default App;
