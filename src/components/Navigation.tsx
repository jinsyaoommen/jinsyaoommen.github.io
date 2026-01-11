export default function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#2d2d2d',
      color: 'white',
    }}>
      <a
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          color: 'white',
          fontSize: '1.1rem',
          fontWeight: 500,
        }}
      >
        <img
          src="/Headshot.jpeg"
          alt="Jinsy Oommen"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        Jinsy Oommen
      </a>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="/about" style={{ textDecoration: 'none', color: 'white', fontSize: '0.875rem' }}>
          About
        </a>
        <a href="/favorites" style={{ textDecoration: 'none', color: 'white', fontSize: '0.875rem' }}>
          A few of my favorite things...
        </a>
        <a href="/blog" style={{ textDecoration: 'none', color: 'white', fontSize: '0.875rem' }}>
          Reflections
        </a>
      </div>
    </nav>
  );
}
