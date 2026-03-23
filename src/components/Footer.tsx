const links = [
  { label: 'GitHub', href: 'https://github.com/Gabrielduah055', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabrial-agyeman-duah-298870299/', external: true },
  { label: 'Twitter', href: 'https://x.com/GabrielDuah8', external: true },
  { label: 'Resume', href: '#', external: false },
  { label: 'Peerlist', href: 'https://peerlist.io/gabriela_tech', external: true },
  { label: 'instagram', href: 'https://www.instagram.com/duah4731/', external: false },
];

export default function Footer() {
  return (
    <footer>
      <p>© 2026 Gabriel Duah</p>
      <div className="footer-links">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
