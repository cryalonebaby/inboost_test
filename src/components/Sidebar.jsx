import React from 'react';

import ListItem from './ListItem';

import { useGlobalContext } from '../context';

import styles from '../styles';

const Sidebar = () => {
	const { notes, selected, setSelected, search } = useGlobalContext();

	const filterListBySearch = (list, text) => {
		return text.trim() === ''
			? list
			: list.filter((note) => note.text.includes(text));
	};

	const listNotes = filterListBySearch(notes, search);

	return (
		<div className={`sideBar ${styles.sideContainer}`}>
			{listNotes.map((elem) => (
				<div key={elem.id}>
					<ListItem note={elem} selected={selected} setSelected={setSelected} />
				</div>
			))}
			{listNotes.length === 0 && <p>The list is empty</p>}
		</div>
	);
};

export default Sidebar;
