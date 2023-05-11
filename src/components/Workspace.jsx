import React from 'react';

import styles from '../styles';

const Workspace = () => {
	return (
		<div className={styles.workspaceContainer}>
			<div className={styles.workspaceContent}>
				<h3 className={styles.workspaceDate}>May 10, 2018 at 12:17 PM</h3>
				<textarea
					className={`textSpace ${styles.workspaceText}`}
					name="note"
					value={'123'}
				></textarea>
			</div>
		</div>
	);
};

export default Workspace;
