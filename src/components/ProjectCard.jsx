
/**
 * Node modules
 */
import PropTypes from 'prop-types';

/**
 * Components
 */
import Icon from './Icon';

const linkIcon = "[&>svg]:transition-transform hover:[&>svg]:translate-x-0.5 hover:[&>svg]:-translate-y-0.5 motion-reduce:[&>svg]:transition-none";

/**
 * One featured project: an oversized title that overlaps the top of its preview,
 * a drifting outline numeral, and the copy beside it.
 * `lead` gives the preview more room; `flip` mirrors the composition.
 */
const ProjectCard = ({
    id,
    preview,
    title,
    category,
    desc,
    features,
    tags,
    projectLink,
    demoLink,
    index,
    tone,
    lead = false,
    flip = false,
    classes = ''
}) => {
  return (
    <article
        id={id}
        data-journey-stop
        style={{ '--tone': tone }}
        className={"relative " + classes}
    >

        <span
            data-drift
            aria-hidden="true"
            className={"text-outline absolute -top-[0.3em] lg:-top-[0.55em] font-display font-bold text-[clamp(7rem,22vw,17rem)] leading-none pointer-events-none select-none " + (flip ? 'left-0' : 'right-0')}
        >
            {index}
        </span>

        <h3 className={"project-title relative z-10 -mb-[0.2em] " + (flip ? 'lg:text-right' : '')}>
            {title}
        </h3>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

            <figure className={(lead ? 'lg:col-span-8 ' : 'lg:col-span-7 ') + (flip ? 'lg:order-last' : '')}>
                <div className={"stage group " + (lead ? 'aspect-[16/11] sm:aspect-[16/10] lg:aspect-[5/4]' : 'aspect-[16/11]')}>
                    {preview}
                </div>
            </figure>

            <div className={(lead ? 'lg:col-span-4 ' : 'lg:col-span-5 ') + 'lg:pt-6'}>

                <p className="eyebrow flex items-center gap-3">
                    <span className="w-8 h-px bg-[var(--tone)]" aria-hidden="true"></span>

                    {category}
                </p>

                <p className="mt-5 text-lg text-muted">
                    {desc}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm">
                    {features.map((feature, key) => (
                        <li
                            key={key}
                            className="flex gap-3"
                        >
                            <span className="w-1.5 h-1.5 mt-[0.45rem] rounded-full bg-[var(--tone)] shrink-0" aria-hidden="true"></span>

                            {feature}
                        </li>
                    ))}
                </ul>

                <ul className="slashed mt-6 font-mono text-xs text-muted">
                    {tags.map((label, key) => (
                        <li key={key}>
                            {label}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 mt-8">
                    <a
                        href={projectLink}
                        target='_blank'
                        rel="noopener noreferrer"
                        className={"btn btn-outline " + linkIcon}
                    >
                        View on GitHub<span className="sr-only">: {title}</span>

                        <Icon name="arrow_outward" />
                    </a>

                    {/* Only pass demoLink for a deployment that has been checked and works */}
                    {demoLink &&
                        <a
                            href={demoLink}
                            target='_blank'
                            rel="noopener noreferrer"
                            className={"btn btn-primary " + linkIcon}
                        >
                            Live demo<span className="sr-only">: {title}</span>

                            <Icon name="arrow_outward" />
                        </a>
                    }
                </div>

            </div>

        </div>

    </article>
  )
}

ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    preview: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    index: PropTypes.string.isRequired,
    tone: PropTypes.string.isRequired,
    lead: PropTypes.bool,
    flip: PropTypes.bool,
    classes: PropTypes.string
}

export default ProjectCard
