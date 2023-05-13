import React from 'react';

import { BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

import Button from './Button';
import SearchBox from './SearchBox';

import { useGlobalContext } from '../context';

import styles from '../styles';

const templateNote = {
	id: Math.floor(Math.random() * 100000000),
	date: new Date(),
	text: '',
};

const Navbar = () => {
	const { selected, addNoteToDb, deleteNote, setEditId } = useGlobalContext();

	return (
		<nav className={`navBar ${styles.navBar}`}>
			{/* Buttons Wrapper */}
			<div className={`left-side ${styles.navButtons}`}>
				{/* Button */}
				<Button Icon={BiPlusMedical} func={() => addNoteToDb(templateNote)} />
				<Button Icon={RiDeleteBin5Line} func={() => deleteNote(selected.id)} />
				<Button Icon={BiEdit} func={() => setEditId(selected.id)} />
			</div>
			{/* SearchBox */}
			<SearchBox />
		</nav>
	);
};

export default Navbar;
