import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	movies: {}
};

export const moveSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		addMovies: (state, action) => {
			state.movies = action.payload;
		}
	}
});

export const { addMovies } = moveSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export default moveSlice.reducer;
