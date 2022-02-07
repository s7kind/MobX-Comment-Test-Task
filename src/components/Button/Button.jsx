import React from 'react';
import PropTypes from 'prop-types';

import './button.scss'

const Button = ({onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className={'primary__btn'}>
            <span>{children}</span>
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
}

export default Button;