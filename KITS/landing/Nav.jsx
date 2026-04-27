const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Destinos','Servicios','Proceso','Contacto'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: scrolled ? 'rgba(10,36,115,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'background 0.35s, box-shadow 0.35s',
        boxShadow: scrolled ? '0 2px 24px rgba(10,36,115,0.35)' : 'none',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', zIndex: 10 }}>
            <img
              src=".\assets\LOGO DESCUBRELA PNG.png"
              style={{
                height: 60,
                width: 'auto',
                borderRadius: 8,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F5A623'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}>
                {l}
              </a>
            ))}
            <a href="https://wa.me/51940071218" className="btn btn-wsp" style={{ padding: '10px 22px', fontSize: 13 }} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#fff',
              zIndex: 10
            }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 76,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10, 36, 115, 0.98)',
          zIndex: 800,
          backdropFilter: 'blur(14px)',
          animation: 'slideDown 0.3s ease'
        }}>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                {l}
              </a>
            ))}
            <a
              href="https://wa.me/51940071218"
              className="btn btn-wsp"
              style={{ marginTop: '16px', padding: '12px 24px', fontSize: 14, textAlign: 'center', gap: '8px' }}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z"/></svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

Object.assign(window, { Nav });
