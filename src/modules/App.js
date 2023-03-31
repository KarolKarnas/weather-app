import Weather from './Weather';

class App {
	constructor() {
		this.weather = new Weather();
		this.weather.getWeather('kiev');
		// this.weather.getGif();
		// this.weather.renderGif()
        document.querySelector('#place').addEventListener('input', this.renderWeather.bind(this))
	}

    renderWeather() {
       const searchInput = document.querySelector('#place').value;
       console.log(searchInput);
       this.weather.getWeather(searchInput)
    }
}

export default App;
