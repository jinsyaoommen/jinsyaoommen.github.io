export default function Navigation() {
  return (
    <header className="editorial-site-header">
      <div className="editorial-nav-inner">
        <a className="editorial-brand" href="/" aria-label="Jinsy Oommen">
          <svg className="editorial-j" viewBox="0 0 52 58" width="37" height="42" role="img" aria-label="Jeweled letter J">
            <defs>
              <linearGradient id="jMetalNav" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ad7d38" />
                <stop offset=".38" stopColor="#e7ce8c" />
                <stop offset=".64" stopColor="#b88c41" />
                <stop offset="1" stopColor="#f1deb0" />
              </linearGradient>
            </defs>
            <path d="M17 8 H43" stroke="url(#jMetalNav)" strokeWidth="2.3" strokeLinecap="round" />
            <path d="M31 9 V37 C31 48 25 52 17 52 C10 52 6 49 5 43" fill="none" stroke="#324e57" strokeWidth="5" strokeLinecap="round" />
            <path d="M34 9 V37 C34 49 27 55 17 55 C9 55 4 51 2 44" fill="none" stroke="url(#jMetalNav)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M36 11 L42 5 L48 11 L42 17 Z" fill="#0c7182" stroke="#c49a55" strokeWidth="1.4" />
            <path d="M42 5 V17 M36 11 H48" stroke="#e8e5ce" strokeWidth=".7" opacity=".8" />
            <circle cx="11" cy="42" r="2.2" fill="#966caa" stroke="#cba76a" strokeWidth="1" />
            <circle cx="18" cy="54" r="1.7" fill="#2e8495" />
          </svg>
          <span>Jinsy Oommen</span>
        </a>
        <nav className="editorial-navigation" aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/reflections">Reflections</a>
          <a href="/favorites">Interests</a>
        </nav>
      </div>
    </header>
  );
}
