import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieListing() {
	const movies = useSelector((state) => state.movie.movies);
	let list =
		movies.Response === 'True'
			? movies.Search.map((movie, index) => {
					return (
						<div className="col s6 m3 l3">
							<MovieCard key={index} data={movie} />
						</div>
					);
				})
			: alert('error');

	return (
		<div className="">
			<div className="row">{list}</div>
		</div>
	);
}
