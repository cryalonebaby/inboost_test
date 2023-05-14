import React, { useEffect, useRef } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import { useGlobalContext } from '../context';

import styles from '../styles';

const SearchBox = () => {
	const { search, setSearch } = useGlobalContext();
	const inputRef = useRef(null);

	const handleInputChange = (e) => {
		const { value } = e.target;

		setSearch(value);
	};

	//* Fixed lost focus problem
	useEffect(() => {
		inputRef.current.focus();
	}, [search]);

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
				ref={inputRef}
				placeholder="Search"
				value={search}
				className={styles.searchBox}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default React.memo(SearchBox);
