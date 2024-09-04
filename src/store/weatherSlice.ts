import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeatherForecast } from "../api/weatherServices";

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ cityName, day }: { cityName: string; day: number }, thunkAPI) => {
    try {
     const data = await fetchWeatherForecast({cityName, day});
     return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
