import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  getTutors  from './tutorsApi'


const baseURL = 'http://localhost:3000'

export const getTutorsAsync = createAsyncThunk('tutors/getTutors', () => {
  const tutors =  getTutors(baseURL);
  return tutors
})

const initialState = {
    loading: false,
    tutors: []
  };

  export const tutorsSlice = createSlice({
    name: 'tutors',
    initialState,
    extraReducers: {
      [getTutorsAsync.pending]: (state) => {
        state.loading = true;
      },
      [getTutorsAsync.fulfilled]: (state, action) => {
        state.loading = false;
        state.tutors = action.payload;
        console.log(action.payload)
      },
    }
  })

  export default tutorsSlice.reducer