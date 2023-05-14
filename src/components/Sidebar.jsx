import React from 'react';

import ListItem from './ListItem';

import { useGlobalContext } from '../context';

import styles from '../styles';

const Sidebar = ({ sidebarOpen }) => {
	const { filteredNotes, selected, setSelected } = useGlobalContext();

	return (
		<div
			className={`sideBar ${styles.sideContainer} ${
				!sidebarOpen && 'sideBarClose'
			}`}
		>
			<div className={styles.sideInnerWrap}>
				{filteredNotes.map((elem) => (
					<div key={elem.id}>
						<ListItem
							note={elem}
							selected={selected}
							setSelected={setSelected}
						/>
					</div>
				))}
				{filteredNotes.length === 0 && (
					<p className={styles.emptyList}>The list is empty</p>
				)}
			</div>
		</div>
	);
};

export default React.memo(Sidebar);
