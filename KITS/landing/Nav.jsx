const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = ['Destinos', 'Servicios', 'Proceso', 'Contacto'];

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: scrolled || open ? 'rgba(10,36,115,0.96)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
        transition: 'background 0.35s, box-shadow 0.35s',
        boxShadow: scrolled ? '0 2px 24px rgba(10,36,115,0.35)' : 'none',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo */}
          <a href="#" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', minWidth: 0 }}>
            <img
              src="/KITS/landing/assets/LOGO DESCUBRELA PNG.png"
              alt="Descúbrela Travel"
              className="nav-logo"
              style={{ height: 60, width: 'auto', borderRadius: 8, objectFit: 'contain', display: 'block', flexShrink: 0 }}
            />
            <div style={{ lineHeight: 1, minWidth: 0 }}>
              <div className="nav-partner-text" style={{ fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>HAND TRAVEL SAC</div>
              <div className="nav-partner-sub" style={{ fontWeight: 500, fontSize: 8, color: '#F5A623', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>PARTNER</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F5A623'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}>
                {l}
              </a>
            ))}
            <a href="https://wa.me/51940071218" className="btn btn-wsp" style={{ padding: '10px 22px', fontSize: 13 }} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z" /></svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'none',
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer', position: 'relative',
              padding: 0, flexShrink: 0,
            }}>
            <span style={{
              position: 'absolute', left: 12, right: 12, height: 2, background: '#fff', borderRadius: 2,
              top: open ? '50%' : '32%',
              transform: open ? 'translateY(-50%) rotate(45deg)' : 'none',
              transition: 'top 0.25s, transform 0.25s',
            }}></span>
            <span style={{
              position: 'absolute', left: 12, right: 12, height: 2, background: '#fff', borderRadius: 2,
              top: '50%', transform: 'translateY(-50%)',
              opacity: open ? 0 : 1,
              transition: 'opacity 0.2s',
            }}></span>
            <span style={{
              position: 'absolute', left: 12, right: 12, height: 2, background: '#fff', borderRadius: 2,
              top: open ? '50%' : '68%',
              transform: open ? 'translateY(-50%) rotate(-45deg)' : 'none',
              transition: 'top 0.25s, transform 0.25s',
            }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div className="nav-mobile-panel" style={{
        position: 'fixed', top: 76, left: 0, right: 0, zIndex: 899,
        background: 'rgba(10,36,115,0.98)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.10)',
        padding: '24px 24px 32px',
        transform: open ? 'translateY(0)' : 'translateY(-20px)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        maxHeight: 'calc(100vh - 76px)',
        overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 24 }}>
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={closeMenu}
              style={{
                color: '#fff', fontSize: 18, fontWeight: 700, textDecoration: 'none',
                padding: '16px 4px', borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                transition: 'color 0.2s, padding-left 0.2s',
                transitionDelay: `${open ? i * 40 : 0}ms`,
                transform: open ? 'translateX(0)' : 'translateX(-12px)',
                opacity: open ? 1 : 0,
              }}>
              <span>{l}</span>
              <span style={{ color: '#F5A623', fontSize: 18 }}>→</span>
            </a>
          ))}
        </div>

        <a href="https://wa.me/51940071218?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20mi%20primer%20viaje"
          className="btn btn-wsp"
          target="_blank" rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ width: '100%', justifyContent: 'center', padding: '16px 24px', fontSize: 15 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z" /></svg>
          Hablar con mi asesor
        </a>
      </div>

      {/* Backdrop behind mobile menu (closes on click) */}
      <div onClick={closeMenu} style={{
        position: 'fixed', inset: 0, top: 0, zIndex: 898,
        background: 'rgba(0,0,0,0.4)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.3s',
      }}></div>
    </>
  );
};

Object.assign(window, { Nav });
