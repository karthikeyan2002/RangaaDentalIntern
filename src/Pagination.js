import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className='relative inline-flex rounded-md ' aria-label='Pagination'>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a
							href='/#'
							onClick={() => paginate(number)}
							className='bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
