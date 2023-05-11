import React from 'react';

import styles from '../styles';

const ListItem = () => {
	return (
		<div className={styles.listItem}>
			<div className={styles.listItemContent}>
				<h5 className={styles.itemTitle}>
					Wow, what a cool note. Wow Wow, what a cool note. Wow
				</h5>
				<div className={styles.itemTextContainer}>
					<span className={styles.itemDate}>12:17 PM</span>
					<p className={styles.itemText}>
						This is an amazing note. This is an amazing note. This is an amazing
						note. This is an amazing note.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
