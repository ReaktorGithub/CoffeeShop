import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppInitialState, IConfig} from "./types";
import axios from "axios";
import putValueToArray from "../utils/putValueToArray";

export const loadConfig = createAsyncThunk('config/load', async (): Promise<IConfig> => {
  const result = await axios({
    method: 'get',
    url: process.env.REACT_APP_CONFIG_FILE_PATH,
  });
  return result.data;
});

export const initialState: IAppInitialState = {
  loading: false,
  countriesList: [],
  productsList: [],
  search: '',
  selectedCountryIds: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setSelectedCountryId(state, { payload }: PayloadAction<string>) {
      state.selectedCountryIds = putValueToArray(state.selectedCountryIds, payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadConfig.fulfilled, (state, action) => {
        state.countriesList = action.payload.countries;
        state.productsList = action.payload.products;
        state.loading = false;
      })
      .addCase(loadConfig.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadConfig.rejected, (state) => {
        console.log('Error while loading config');
        state.loading = false;
      })
  },
});

export const {
  setLoading,
  setSearch,
  setSelectedCountryId,
} = appSlice.actions;

export default appSlice.reducer;
