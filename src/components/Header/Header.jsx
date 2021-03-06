import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div>
			<nav className="indigo darken-4">
				<div className="container nav-wrapper">
					<Link to="/" className="brand-logo">
						OceanOfMovies
					</Link>
					<a href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href="badges.html">Components</a>
						</li>
						<li>
							<a href="collapsible.html">Javascript</a>
						</li>
						<li>
							<a href="mobile.html">Mobile</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					<a href="sass.html">Sass</a>
				</li>
				<li>
					<a href="badges.html">Components</a>
				</li>
				<li>
					<a href="collapsible.html">Javascript</a>
				</li>
				<li>
					<a href="mobile.html">Mobile</a>
				</li>
			</ul>
		</div>
	);
}
