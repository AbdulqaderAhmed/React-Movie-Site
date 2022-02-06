import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDeatil from './components/Movie/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<Header />
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:imdbID" element={<MovieDeatil />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<footer>
					<Footer />
				</footer>
			</Router>
		</div>
	);
}

export default App;
