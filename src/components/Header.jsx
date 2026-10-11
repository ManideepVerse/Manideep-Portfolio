
/**
 * Node modules
 */
import { useState } from 'react';


/**
 * Components
 */

import Navbar from './Navbar';
import Icon from './Icon';

const Header = () => {
  const [navOpen, setNavopen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-4 pt-4 z-40">
        <div className="max-w-6xl h-14 mx-auto pl-4 pr-2 flex justify-between items-center bg-background/70 border border-line rounded-full backdrop-blur-md md:grid md:grid-cols-[1fr,auto,1fr]">
            <a
                href="/"
                className="logo flex items-center gap-3 max-w-max"
            >
                <img
                    src="/Manideep - Portfolio Images/images/logo.svg"
                    width= {28}
                    height= {28}
                    alt=""
                />

                <span className="sr-only">
                    Manideep D.
                </span>
            </a>

            <div className="relative md:justify-self-center">
                <button
                    className="menu-btn md:hidden"
                    aria-label={navOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={navOpen}
                    onClick={() => setNavopen((prev) => !prev)}
                >
                    <Icon name={navOpen ? 'close' : 'menu'} />
                </button>

                <Navbar navOpen={navOpen} closeNav={() => setNavopen(false)}/>

            </div>

            <a
                href="#contact"
                className="btn btn-secondary max-md:hidden md:justify-self-end"
            >
                Contact Me
            </a>


        </div>

    </header>
  )
}

export default Header
