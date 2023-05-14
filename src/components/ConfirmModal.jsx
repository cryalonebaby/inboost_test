import React from 'react';

import Modal from 'react-modal';
import { useGlobalContext } from '../context';
import useNotification from '../hooks/useNotification';

import { RiCloseFill } from 'react-icons/ri';

import styles from '../styles';

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
		<Modal
			className={`${styles.modalContainer} ${styles.glassEffect}`}
			isOpen={isOpen}
			overlayClassName="Overlay"
		>
			<p className={styles.modalTitle}>Are you sure to delete this note?</p>
			<button
				onClick={() => handleModalDelete(handleDeleteActiveNote, setIsOpen)}
				className={styles.modalButton}
			>
				Delete
			</button>
			<RiCloseFill
				size={'30px'}
				color="#A7003D"
				className={styles.modalClose}
				onClick={() => setIsOpen(false)}
			/>
		</Modal>
	);
};

export default ConfirmModal;
