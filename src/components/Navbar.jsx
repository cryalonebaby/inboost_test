import React from 'react';

import { BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

import Button from './Button';
import SearchBox from './SearchBox';

import styles from '../styles';

const Navbar = () => {
	return (
		<nav className={`navBar ${styles.navBar}`}>
			{/* Buttons Wrapper */}
			<div className={`left-side ${styles.navButtons}`}>
				{/* Button */}
				<Button Icon={BiPlusMedical} />
				<Button Icon={RiDeleteBin5Line} />
				<Button Icon={BiEdit} />
			</div>
			{/* SearchBox */}
			<SearchBox />
		</nav>
	);
};

export default Navbar;
