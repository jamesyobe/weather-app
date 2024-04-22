export class WeatherHelper {
  static weatherCodeMap: Map<number, { value: string; iconPath: string }> =
    new Map();
  static initalizeCodes() {
    this.weatherCodeMap.clear();
    //Set NFL File Paths
    this.weatherCodeMap.set(0, { value: 'Clear sky', iconPath: '../../assets/weather/0.png' });
    this.weatherCodeMap.set(1, {
      value: 'Mainly clear, partly cloudy, and overcast',
      iconPath: '../../assets/weather/1.png',
    });
    this.weatherCodeMap.set(2, {
      value: 'Mainly clear, partly cloudy, and overcast',
      iconPath: '../../assets/weather/1.png',
    });
    this.weatherCodeMap.set(3, {
      value: 'Mainly clear, partly cloudy, and overcast',
      iconPath: '../../assets/weather/1.png',
    });
    this.weatherCodeMap.set(45, {
      value: 'Fog and depositing rime fog',
      iconPath: '../../assets/weather/2.png',
    });
    this.weatherCodeMap.set(48, {
      value: 'Fog and depositing rime fog',
      iconPath: '../../assets/weather/2.png',
    });
    this.weatherCodeMap.set(51, {
      value: 'Drizzle: Light, moderate, and dense intensity',
      iconPath: '../../assets/weather/3.png',
    });
    this.weatherCodeMap.set(53, {
      value: 'Drizzle: Light, moderate, and dense intensity',
      iconPath: '../../assets/weather/3.png',
    });
    this.weatherCodeMap.set(55, {
      value: 'Drizzle: Light, moderate, and dense intensity',
      iconPath: '../../assets/weather/3.png',
    });
    this.weatherCodeMap.set(56, {
      value: 'Freezing Drizzle: Light and dense intensity',
      iconPath: '../../assets/weather/4.png',
    });
    this.weatherCodeMap.set(57, {
      value: 'Freezing Drizzle: Light and dense intensity',
      iconPath: '../../assets/weather/4.png',
    });
    this.weatherCodeMap.set(61, { value: 'Clear sky', iconPath: '../../assets/weather/5.png' });
    this.weatherCodeMap.set(63, { value: 'Clear sky', iconPath: '../../assets/weather/5.png' });
    this.weatherCodeMap.set(65, { value: 'Clear sky', iconPath: '../../assets/weather/5.png' });
    this.weatherCodeMap.set(66, {
      value: '	Freezing Rain: Light and heavy intensity',
      iconPath: '../../assets/weather/6.png',
    });
    this.weatherCodeMap.set(67, {
      value: '	Freezing Rain: Light and heavy intensity',
      iconPath: '../../assets/weather/6.png',
    });
    this.weatherCodeMap.set(71, {
      value: 'Snow fall: Slight, moderate, and heavy intensity',
      iconPath: '../../assets/weather/7.png',
    });
    this.weatherCodeMap.set(73, {
      value: 'Snow fall: Slight, moderate, and heavy intensity',
      iconPath: '../../assets/weather/7.png',
    });
    this.weatherCodeMap.set(75, {
      value: 'Snow fall: Slight, moderate, and heavy intensity',
      iconPath: '../../assets/weather/7.png',
    });
    this.weatherCodeMap.set(77, { value: 'Snow grains', iconPath: '../../assets/weather/8.png' });
    this.weatherCodeMap.set(80, {
      value: 'Rain showers: Slight, moderate, and violent',
      iconPath: '../../assets/weather/9.png',
    });
    this.weatherCodeMap.set(81, {
      value: 'Rain showers: Slight, moderate, and violent',
      iconPath: '../../assets/weather/9.png',
    });
    this.weatherCodeMap.set(82, {
      value: 'Rain showers: Slight, moderate, and violent',
      iconPath: '../../assets/weather/9.png',
    });
    this.weatherCodeMap.set(85, {
      value: 'Snow showers slight and heavy',
      iconPath: '../../assets/weather/10.png',
    });
    this.weatherCodeMap.set(86, {
      value: 'Snow showers slight and heavy',
      iconPath: '../../assets/weather/10.png',
    });
    this.weatherCodeMap.set(95, {
      value: 'Thunderstorm: Slight or moderate',
      iconPath: '../../assets/weather/11.png',
    });
    this.weatherCodeMap.set(96, {
      value: 'Thunderstorm with slight and heavy hail',
      iconPath: '../../assets/weather/12.png',
    });
    this.weatherCodeMap.set(99, {
      value: 'Thunderstorm with slight and heavy hail',
      iconPath: '../../assets/weather/12.png',
    });
  }
}
