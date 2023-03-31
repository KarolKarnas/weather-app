import Weather from "./Weather";

class App {
	constructor() {
        this.weather = new Weather();
        this.weather.sayWeather()
        this.sayHello()
    }

	sayHello() {
		console.log('hello');
	}
}

export default App;
