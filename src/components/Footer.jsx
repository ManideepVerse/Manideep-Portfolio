

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/ManideepVerse'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manideep-d/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/Apex14Apex'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/dmd23604?igsh=aTZndGRtN3BxYXR5'
    },

];

const linkClasses = "block text-sm text-muted py-1.5 transition-colors hover:text-accent";


const Footer = () => {
  return (
    <footer className="relative border-t border-line overflow-hidden">
        <div className="container pt-12 pb-8">

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 reveal">

                <div className="lg:col-span-6">
                    <a
                      href="/"
                      className="logo block max-w-max"
                    >
                        <img
                          src="/Manideep - Portfolio Images/images/logo.svg"
                          width={40}
                          height={40}
                          alt="Manideep D., home"
                        />
                    </a>
                </div>

                <div className="lg:col-span-3">
                    <p className="eyebrow mb-3">Sitemap</p>

                    <ul>
                        {sitemap.map(({ label, href }, key) => (
                            <li key={key}>
                                <a
                                href={href}
                                className={linkClasses}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <p className="eyebrow mb-3">Socials</p>

                    <ul>
                        {socials.map(({ label, href }, key) => (
                            <li key={key}>
                                <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-line">
                <p className="text-muted text-sm">
                    &copy; {new Date().getFullYear()}
                </p>

                <a
                    href="#home"
                    className="eyebrow transition-colors hover:text-accent"
                >
                    Back to top
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer
