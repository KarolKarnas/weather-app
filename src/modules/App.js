import Weather from './Weather';

class App {
	constructor() {
		this.weather = new Weather();
		this.weather.getWeather('warsaw');
        document.querySelector('#place').addEventListener('input', this.renderSearch.bind(this))
	}

    renderSearch() {
       const searchInput = document.querySelector('#place').value;
       console.log(searchInput);
       this.weather.getWeather(searchInput)
    }
}

export default App;
