import Weather from './Weather';

class App {
	constructor() {
		this.weather = new Weather();
		this.miles = false;
		this.searchInput = document.querySelector('#place');
		this.weather.getWeather(this.searchInput.value);

		this.searchInput.addEventListener('input', this.renderSearch.bind(this));

		document
			.querySelector('#metric')
			.addEventListener('click', this.renderDiffMetric.bind(this));
	}

	renderSearch() {
		this.weather.getWeather(this.searchInput.value);
	}

	renderDiffMetric() {
		const tempC = document.querySelector('#temp-c'),
			windKm = document.querySelector('#wind-km'),
			pressureMB = document.querySelector('#pressure-mb'),
			tempF = document.querySelector('#temp-f'),
			windM = document.querySelector('#wind-m'),
			pressureIn = document.querySelector('#pressure-in');

		if (tempC.style.display === 'inherit') {
			tempC.style.display = 'none';
			tempF.style.display = 'inherit';
			windKm.style.display = 'none';
			windM.style.display = 'inherit';
			pressureMB.style.display = 'none';
			pressureIn.style.display = 'inherit';
		} else {
			tempC.style.display = 'inherit';
			tempF.style.display = 'none';
			windKm.style.display = 'inherit';
			windM.style.display = 'none';
			pressureMB.style.display = 'inherit';
			pressureIn.style.display = 'none';
		}
	}
}

export default App;
