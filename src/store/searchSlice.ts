import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getLocations } from "../api/weatherServices";

const initialState: LocationState = {
  loading: false,
  error: null,
  locations: [],
};

export const fetchLocations = createAsyncThunk(
  "search/fetchLocations",
  async ({ query }: { query: string }, thunkAPI) => {
    try {
      const locations = await getLocations(query);
      return locations;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearLocations: (state) => {
      state.locations = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchLocations.fulfilled,
        (state, action: PayloadAction<LocationSearch[]>) => {
          state.loading = false;
          state.locations = action.payload;
        }
      )
      .addCase(fetchLocations.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearLocations } = searchSlice.actions;
export default searchSlice.reducer;
