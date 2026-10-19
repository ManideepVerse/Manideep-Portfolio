import PropTypes from 'prop-types'
import Icon from './Icon'

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
                className={"btn btn-primary " + classes} // ✅ Updated class
            >
                {label}
                {icon &&
                    <Icon name={icon} />
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
                {icon &&
                    <Icon name={icon} />
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
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon &&
                    <Icon name={icon} />
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon &&
                    <Icon name={icon} />
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
