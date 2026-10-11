
/**
 * Node modules
 */
import PropTypes from 'prop-types';

const paths = {
    menu: 'M4 7h16M4 12h16M4 17h16',
    close: 'M6 6l12 12M18 6L6 18',
    download: 'M12 4v11m0 0l-4-4m4 4l4-4M5 19h14',
    arrow_downward: 'M12 5v14m0 0l-6-6m6 6l6-6',
    arrow_forward: 'M5 12h14m0 0l-6-6m6 6l-6 6',
    arrow_outward: 'M7 17L17 7M8 7h9v9'
};

const Icon = ({ name, classes = '' }) => {
  return (
    <svg
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={'shrink-0 ' + classes}
    >
        <path d={paths[name]} />
    </svg>
  )
}

Icon.propTypes = {
    name: PropTypes.oneOf(Object.keys(paths)).isRequired,
    classes: PropTypes.string
}

export default Icon
