// allDataThunk.ts
import { AppThunk } from '../store';
import { addData } from '../Slices/allDataSlice';
import axios from 'axios';

export const chargingAllData = (page: number): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    dispatch(
      addData(
         response.data.results,
         
      )
    );
    console.log(response.data.results)
  } catch (error) {
    console.log(error);
  }
};
