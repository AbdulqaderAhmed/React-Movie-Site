import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { APIKEY } from '../../common/API/APIKEY';
import MovieAPI from '../../common/API/MovieAPI';
import { addMovies } from '../../features/MovieSlice/movieSlice';
import MovieListing from '../Movie/MovieListing/MovieListing';

export default function Home() {
	const search = 'Harry';
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await MovieAPI.get(`?apikey=${APIKEY}&s=${search}&type=movie`).catch((err) => {
				console.log('Error is: ', err);
			});
			dispatch(addMovies(response.data));
		};
		fetchMovies();
	}, []);

	return (
		<div className="container">
			<MovieListing />
		</div>
	);
}
