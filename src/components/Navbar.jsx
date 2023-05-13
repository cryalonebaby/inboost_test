import React, { useState } from 'react';

import { BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

import Button from './Button';
import SearchBox from './SearchBox';

import { useGlobalContext } from '../context';
import { generateEmptyNote } from '../data/templateNote';

import ConfirmModal from './ConfirmModal';

import styles from '../styles';
import useNotification from '../hooks/useNotification';

const Navbar = () => {
	const { selected, addNoteToDb, deleteNote, setEditId } = useGlobalContext();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const emptyNote = generateEmptyNote();

	const MemoizedButton = React.memo(Button);
	const MemoizedSearchBox = React.memo(SearchBox);

	const { notify } = useNotification();

	const handleDeleteNote = () => {
		if (selected.id) {
			setIsModalOpen(true);
		}
	};

	const handleAddNote = () => {
		addNoteToDb(emptyNote);
		notify('Successfully added new note!', { theme: 'colored' });
	};

	return (
		<nav className={`navBar ${styles.navBar}`}>
			{/* Buttons Wrapper */}
			<div className={`left-side ${styles.navButtons}`}>
				{/* Button */}
				<MemoizedButton
					Icon={BiPlusMedical}
					func={() => handleAddNote()}
					tooltip={'Add note'}
				/>
				<MemoizedButton
					Icon={RiDeleteBin5Line}
					func={() => handleDeleteNote()}
					tooltip={'Delete note'}
				/>
				<MemoizedButton
					Icon={BiEdit}
					func={() => setEditId(selected.id)}
					tooltip={'Enable edit mode'}
				/>
			</div>
			{/* SearchBox */}
			<MemoizedSearchBox />

			<ConfirmModal
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				deleteNote={() => deleteNote(selected.id)}
			/>
		</nav>
	);
};

export default Navbar;
