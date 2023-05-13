import React, { useState, useEffect } from 'react';

import { useGlobalContext } from '../context';

import { getFullFormat } from '../utils/dateUtils';

import styles from '../styles';
import useNotification from '../hooks/useNotification';

const Workspace = () => {
	const { selected, updateNote, editId, setEditId } = useGlobalContext();

	const [text, setText] = useState('');
	const [timeoutId, setTimeoutId] = useState(null);

	const isEditingNote = editId === selected.id;

	const fullFormat = getFullFormat(selected.date);

	const { notify } = useNotification();

	const handleChange = (e) => {
		if (isEditingNote) {
			clearTimeout(timeoutId);
			setText(e.target.value);
		}
	};

	const handleSave = () => {
		if (text !== selected.text) {
			updateNote({
				...selected,
				text: text,
			});
			notify('Successfully saved', { theme: 'colored' });
		}
		setEditId(0);
	};

	//* Decounce mechanism for saving
	useEffect(() => {
		const id = setTimeout(handleSave, 2000);
		setTimeoutId(id);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [text]);

	//* Fixing the problem with async state change in React
	useEffect(() => {
		setText(selected.text);
	}, [selected.text]);

	return (
		<div className={styles.workspaceContainer}>
			<div className={styles.workspaceContent}>
				{!selected.id ? (
					<h3 className={styles.workspaceDate}>
						Choose your note or add new one
					</h3>
				) : (
					<h3 className={styles.workspaceDate}>
						{fullFormat} {isEditingNote ? '(Edit*)' : '(Readonly)'}
					</h3>
				)}

				<textarea
					className={`textSpace ${styles.workspaceText}`}
					name="note"
					value={text}
					onChange={handleChange}
					readOnly={!isEditingNote}
				></textarea>
			</div>
		</div>
	);
};

export default Workspace;
