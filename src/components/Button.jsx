import React from 'react'
import PropTypes from 'prop-types'

/**
 * Primary Button
 */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',   // ✅ Default value added
    download = false // ✅ Download support
}) => {
    if (href) {
        return (
            <a 
                href={href}
                target={target}
                rel="noopener noreferrer"
                download={download ? '' : undefined}
                className={"btn btn-primary z-10 relative pointer-events-auto " + classes} // ✅ Updated class
            >
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary z-10 relative pointer-events-auto " + classes}>
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </button>
        )
    }
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.bool // ✅ Added prop type
};


/**
 * Outline Button
 */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    download = false
}) => {
    if (href) {
        return (
            <a 
                href={href}
                target={target}
                rel="noopener noreferrer"
                download={download ? '' : undefined}
                className={"btn btn-outline z-10 relative pointer-events-auto " + classes}
            >
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline z-10 relative pointer-events-auto " + classes}>
                {label}
                {icon &&
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.bool
}

export {
    ButtonPrimary,
    ButtonOutline
}
