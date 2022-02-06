import React from 'react';

export default function Footer() {
	const year = new Date();
	return (
		<div>
			<footer className="page-footer black">
				<div className="container center">© {year.getFullYear()} inc, All rights reserved </div>
			</footer>
		</div>
	);
}
