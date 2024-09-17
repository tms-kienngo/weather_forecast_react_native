import { WeatherDetailParam } from "../screens/weather_detail/WeatherDetailScreen";

interface WeatherState {
    loading: boolean;
    error: string | null;
    weather: Weather | null;
}

interface LocationState {
    loading: boolean;
    error: string | null;
    locations: LocationSearch[];
}

interface ThemeState {
    darkMode: boolean;
}

export type RootStackParamList = {
    Home: undefined;
    WeatherDetail: WeatherDetailParam;
}