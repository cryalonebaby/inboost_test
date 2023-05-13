import React from 'react';

import ListItem from './ListItem';

import { useGlobalContext } from '../context';

import styles from '../styles';

const Sidebar = () => {
	const { notes, selected, setSelected } = useGlobalContext();

	return (
		<div className={`sideBar ${styles.sideContainer}`}>
			{notes.map((elem) => (
				<div key={elem.id}>
					<ListItem note={elem} selected={selected} setSelected={setSelected} />
				</div>
			))}
		</div>
	);
};

export default Sidebar;
