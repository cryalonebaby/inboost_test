import React from 'react';

import styles from '../styles';
import ListItem from './ListItem';

const Sidebar = () => {
	return (
		<div className={`sideBar ${styles.sideContainer}`}>
			{[...Array(40)].map(() => (
				<ListItem />
			))}
		</div>
	);
};

export default Sidebar;
