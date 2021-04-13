import React from 'react'
import PropTypes from "prop-types"


function ThemedButton({ theme,  label, ...restProps }) {
    return (
        <div>
            <button className={`btn btn-${theme}`} {...restProps}>
                {label}
            </button>
        </div>
    )
}

ThemedButton.defaultProps = {
    theme: "default",
};

ThemedButton.propTypes = {
    theme: PropTypes.string,
    label: PropTypes.string.isRequired,
}

export default ThemedButton;