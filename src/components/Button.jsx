import React from 'react';

import Tooltip from './Tooltip';
import styles from '../styles';

const Button = ({ Icon, func, tooltip }) => {
	return (
		<>
			<div
				className={`btn ${styles.navBtn}`}
				onClick={func}
				data-tooltip-id={tooltip}
				data-tooltip-content={tooltip}
			>
				<Icon size={'20px'} color="#686868" />
			</div>
			<Tooltip tooltip={tooltip} />
		</>
	);
};

export default Button;
