import React from 'react';

import styles from '../styles';

const Button = ({ Icon, func }) => {
	return (
		<div className={`btn ${styles.navBtn}`} onClick={func}>
			<Icon size={'20px'} color="#686868" />
		</div>
	);
};

export default Button;
