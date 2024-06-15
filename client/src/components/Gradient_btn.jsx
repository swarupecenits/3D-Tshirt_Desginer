import React from 'react';
import PropTypes from 'prop-types';

const Gradient_btn = ({ label, handleClick, customStyles }) => {
    return (
        <button
            type="button"
            className={`inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25  hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85 ${customStyles}`}
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
};

Gradient_btn.defaultProps = {
    handleClick: () => { },
    customStyles: '',
};

export default Gradient_btn;
