export default function Navigation() {
  return (
    <header className="main-header">
      <nav className="main-nav" aria-label="Main navigation">
        <a className="brand-link" href="/">
          <span className="brand-dot" aria-hidden="true"></span>
          The Good Oommen
        </a>
        <div className="main-links">
          <a href="/about">About</a>
          <a href="/reflections">Reflections</a>
          <a href="/favorites">Interests</a>
        </div>
      </nav>
      <style>{`
        .main-header { background: #f8f7f2; border-bottom: 1px solid #e4dfd5; color: #153c36; }
        .main-nav { max-width: 1280px; margin: auto; min-height: 83px; padding: 1.2rem 3.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
        .brand-link { display:flex; align-items:center; gap: .7rem; font: 1.28rem Georgia, 'Times New Roman', serif; color: #153c36; text-decoration:none; white-space:nowrap; }
        .brand-dot { width: 11px; height: 11px; display:inline-block; border-radius:50%; background:#ad8a49; }
        .main-links { display:flex; gap: 2.4rem; flex-wrap: wrap; }
        .main-links a { color:#153c36; text-decoration:none; font-size:.84rem; letter-spacing:.035em; }
        .main-links a:hover { color:#14596a; }
        @media (max-width: 700px) {
          .main-nav { padding: 1.2rem 1.3rem; flex-direction:column; gap:1.1rem; }
          .brand-link { font-size:1.2rem; }
          .main-links { gap:2rem; justify-content:center; }
        }
      `}</style>
    </header>
  );
}
