
/**
 * Node modules 
 */

import { useRef, useEffect } from 'react';
import PropTypes from "prop-types";

const Navbar = ({ navOpen, closeNav }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
      lastActiveLink.current = document.querySelector('.nav-link.active');
      if (lastActiveLink.current) {
          activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
          activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
          activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
          activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
      }
  };

  const setActiveLink = (link) => {
      lastActiveLink.current?.classList.remove('active');
      link.classList.add('active');
      lastActiveLink.current = link;

      activeBox.current.style.top = link.offsetTop + 'px';
      activeBox.current.style.left = link.offsetLeft + 'px';
      activeBox.current.style.width = link.offsetWidth + 'px';
      activeBox.current.style.height = link.offsetHeight + 'px';
  };

  useEffect(() => {
      // Activate the link of the last section whose top has passed the middle of the screen.
      // Links hidden by CSS (Contact on desktop) are skipped.
      const activeCurrentSection = () => {
          const links = [...document.querySelectorAll('.nav-link')];
          const current = links.findLast((link) => link.offsetParent &&
              document.querySelector(link.hash)?.getBoundingClientRect().top <= window.innerHeight / 2);

          if (current && current !== lastActiveLink.current) setActiveLink(current);
      };

      initActiveBox();
      activeCurrentSection();
      window.addEventListener('resize', initActiveBox);
      window.addEventListener('scroll', activeCurrentSection, { passive: true });

      return () => {
          window.removeEventListener('resize', initActiveBox);
          window.removeEventListener('scroll', activeCurrentSection);
      };
  }, []);

  const activeCurrentLink = (event) => {
      setActiveLink(event.currentTarget);
      closeNav();
  };

  const navItems = [
      // Keep this in page order: the scroll spy activates the last link whose section has been reached
      { label: 'Home', link: '#home', className: 'nav-link active' },
      { label: 'Work', link: '#work', className: 'nav-link' },
      { label: 'About', link: '#about', className: 'nav-link' },
      { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  return (
      <nav aria-label="Primary" className={'navbar ' + (navOpen ? 'active' : '')}>
          {navItems.map(({ label, link, className }, key) => (
              <a
                  href={link}
                  key={key}
                  ref={className.includes('active') ? lastActiveLink : null}
                  className={className}
                  onClick={activeCurrentLink}
              >
                  {label}
              </a>
          ))}
          <div className="active-box" ref={activeBox}></div>
      </nav>
  );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    closeNav: PropTypes.func.isRequired
}
export default Navbar