

/**
 * Node modules
 */
import PropTypes from 'prop-types';

/**
 * Small chapter label for the storytelling layout. It is a navigation aid, separate from the
 * portfolio copy; `as` lets it act as the section heading where a section has no heading of its own.
 */
const ChapterMark = ({ number, title, as: Tag = 'p', classes = 'reveal mb-10 lg:mb-14' }) => {
  return (
    <Tag className={'chapter ' + classes}>
        <span className="text-accent">Chapter {number}</span>

        <span className="w-10 h-px bg-slate-700" aria-hidden="true"></span>

        {title}
    </Tag>
  )
}

ChapterMark.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    as: PropTypes.string,
    classes: PropTypes.string
}

export default ChapterMark
