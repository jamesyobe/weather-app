export interface WeatherInterface {
  current_weather: {
    temperature: number;

    time: Date;

    weathercode: number;

    winddirection: number;

    windspeed: number;
  };

  daily: {
    precipitation_sum: string;

    temperature_2m_max: string;

    temperature_2m_min: string;

    time: Date;

    weathercode: string;
  };
  daily_units: {
    precipitation_sum: string;

    temperature_2m_max: string;

    temperature_2m_min: string;

    time: Date;

    weathercode: string;
  };

  elevation: number;

  generationtime_ms: number;

  latitude: number;

  longitude: number;

  timezone: string;

  timezone_abbreviation: string;

  utc_offset_seconds: number;
}
