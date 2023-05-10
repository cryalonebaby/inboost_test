import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import styles from '../styles';

const SearchBox = () => {
	const [search, setSearch] = useState('');

	return (
		// Wrapper
		<div className={`right-side ${styles.searchWrapper}`}>
			{!search && (
				<AiOutlineSearch
					style={{ marginLeft: '95px', position: 'absolute' }}
					color="#B2B2B2"
					size="18px"
				/>
			)}
			{/* SearchBox */}
			<input
				placeholder="Search"
				value={search}
				className={styles.searchBox}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
