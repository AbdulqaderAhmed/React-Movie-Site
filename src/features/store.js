import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/MovieSlice/movieSlice';

export const store = configureStore({
	reducer: {
		movie: movieReducer
	}
});
