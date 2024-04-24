import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppInitialState, IConfig, TPage} from "./types";
import axios from "axios";

export const loadConfig = createAsyncThunk('config/load', async (): Promise<IConfig> => {
  const result = await axios({
    method: 'get',
    url: process.env.REACT_APP_CONFIG_FILE_PATH,
  });
  return result.data;
});

export const initialState: IAppInitialState = {
  loading: false,
  page: 'landing',
  countriesList: [],
  productsList: [],
  search: '',
  selectedCountryId: null,
  selectedProductId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setPage(state, { payload }: PayloadAction<TPage>) {
      state.page = payload;
    },
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setSelectedCountryId(state, { payload }: PayloadAction<string | null>) {
      state.selectedCountryId = payload;
    },
    setSelectedProductId(state, { payload }: PayloadAction<string | null>) {
      state.selectedProductId = payload;
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
  setPage,
  setSearch,
  setSelectedCountryId,
  setSelectedProductId,
} = appSlice.actions;

export default appSlice.reducer;
