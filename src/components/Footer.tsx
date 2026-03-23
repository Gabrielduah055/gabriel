const links = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Resume', href: '#' },
];

export default function Footer() {
  return (
    <footer>
      <p>© 2026 Gabriel Duah</p>
      <div className="footer-links">
        {links.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
