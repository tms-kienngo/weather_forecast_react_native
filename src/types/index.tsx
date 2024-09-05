
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

