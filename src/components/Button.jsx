import React from 'react';

import styles from '../styles';

const Button = ({ Icon }) => {
	return (
		<div className={`btn ${styles.navBtn}`}>
			<Icon size={'20px'} color="#686868" />
		</div>
	);
};

export default Button;
