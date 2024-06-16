import React from 'react';
import PropTypes from 'prop-types';

const Gradient_btn = ({ label, handleClick, customStyles, variant }) => {
    const baseStyles = 'inline-block px-6 py-2.5 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25';
    const filledStyles = 'text-white bg-gradient-to-tl from-purple-700 to-pink-500 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85';
    const outlineStyles = 'text-neutral-50 border-2 border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-lg active:opacity-85';

    const appliedStyles = variant === 'outline' ? `${baseStyles} ${outlineStyles}` : `${baseStyles} ${filledStyles}`;

    return (
        <button
            type="button"
            className={`${appliedStyles} ${customStyles}`}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

Gradient_btn.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    customStyles: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outline']),
};

Gradient_btn.defaultProps = {
    handleClick: () => { },
    customStyles: '',
    variant: 'filled',
};

export default Gradient_btn;
