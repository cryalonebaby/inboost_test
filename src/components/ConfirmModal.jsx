import React from 'react';

import Modal from 'react-modal';
import { useGlobalContext } from '../context';
import useNotification from '../hooks/useNotification';

Modal.setAppElement('#root');

const handleModalDelete = (deleteNote, setIsOpen) => {
	deleteNote();
	setIsOpen(false);
};

const ConfirmModal = ({ isOpen, setIsOpen, deleteNote }) => {
	const { setSelected } = useGlobalContext();

	const { notify } = useNotification();

	const handleDeleteActiveNote = () => {
		deleteNote();
		setSelected({
			id: null,
			date: null,
			text: '',
		});
		notify('Successfully deteled');
	};

	return (
		<Modal isOpen={isOpen} overlayClassName="Overlay">
			<>
				<p>Are you sure to delete this note?</p>
				<button
					onClick={() => handleModalDelete(handleDeleteActiveNote, setIsOpen)}
				>
					Delete
				</button>
				<button onClick={() => setIsOpen(false)}>Close</button>
			</>
		</Modal>
	);
};

export default ConfirmModal;
