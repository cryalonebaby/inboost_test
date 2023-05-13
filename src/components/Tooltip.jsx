import React from 'react';
import { Tooltip as ReactToolTip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Tooltip = ({ tooltip }) => {
	return <ReactToolTip id={tooltip} place="top" effect="solid" />;
};

export default Tooltip;
