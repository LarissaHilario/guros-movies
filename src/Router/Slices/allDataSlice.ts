// allDataSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AllDataState {
  movies: [];
  genres: any[];
  totalPages: number;
  allData:[]
}

const initialState: AllDataState = {
  movies: [],
  genres: [],
  totalPages: 0,
  allData:[]
};

export const fetchGenres = createAsyncThunk(
  'allData/fetchGenres',
  async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
    return response.data.genres;
  }
);

const allDataSlice = createSlice({
  name: 'allData',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      state.movies = action.payload.movies;
      state.totalPages = action.payload.totalPages;
      state.allData = action.payload
      console.log(state.allData);
      
    },
    cleanAllData: (state) => {
      state.movies = [];
      state.totalPages = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.genres = action.payload;
    });
  },
});

export const { addData, cleanAllData } = allDataSlice.actions;

export default allDataSlice.reducer;
