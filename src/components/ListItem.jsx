import React from 'react';

import splitText from '../utils/splitTextUtil';

import { getListFormat } from '../utils/dateUtils';

import styles from '../styles';

const ListItem = ({ note, selected, setSelected }) => {
	const isSelected = selected.id === note.id;
	const { firstParagraph, otherText } = splitText(note.text);

	const noteDate = getListFormat(note.date);

	const handleClick = () => {
		setSelected(note);
	};

	return (
		<div
			className={`${styles.listItem} ${isSelected && styles.selected}`}
			onClick={() => handleClick()}
		>
			<div className={styles.listItemContent}>
				<h5 className={styles.itemTitle}>{firstParagraph}</h5>
				<div className={styles.itemTextContainer}>
					<span className={styles.itemDate}>{noteDate}</span>
					<p className={styles.itemText}>{otherText}</p>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
