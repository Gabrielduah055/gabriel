import { FaGithub, FaLinkedinIn, FaInstagram, FaFileAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiPeerlist } from 'react-icons/si';
import type { ReactNode } from 'react';

const links: { label: string; href: string; external: boolean; download?: boolean; icon: ReactNode }[] = [
  { label: 'GitHub',    href: 'https://github.com/Gabrielduah055',                              external: true,  icon: <FaGithub /> },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/gabrial-agyeman-duah-298870299/',    external: true,  icon: <FaLinkedinIn /> },
  { label: 'Twitter',   href: 'https://x.com/GabrielDuah8',                                    external: true,  icon: <FaXTwitter /> },
  { label: 'Resume',    href: '/Gabriel Agyeman Duah Resume - Software Developer.pdf',                                                     external: false, download: true, icon: <FaFileAlt /> },
  { label: 'Peerlist',  href: 'https://peerlist.io/gabriela_tech',                              external: true,  icon: <SiPeerlist /> },
  { label: 'Instagram', href: 'https://www.instagram.com/duah4731/',                            external: true,  icon: <FaInstagram /> },
];

export default function Footer() {
  return (
    <footer>
      <p>© 2026 Gabriel Duah</p>
      <div className="footer-links">
        {links.map(({ label, href, external, download, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            {...(download && { download: 'Gabriel_Duah_Resume.pdf' })}
          >
            <span className="footer-link-icon">{icon}</span>
            <span className="footer-link-label">{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
