const Footer = () => {
  const socials = [
    {
      label: 'Instagram', color: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.5" fill="#fff" stroke="none" /></svg>,
      href: 'https://www.instagram.com/descubrelatravel/'
    },
    {
      label: 'Facebook', color: '#1877F2',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
      href: 'https://www.facebook.com/descubrelatravel/'
    },
    {
      label: 'TikTok', color: '#010101',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z" /></svg>,
      href: 'https://www.tiktok.com/@descubrelatravel'
    },
    {
      label: 'Gmail', color: '#EA4335',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
      href: 'mailto:descubrela18@gmail.com'
    },
  ];

  const links = [
    { title: 'Destinos', items: ['Europa', 'Estados Unidos', 'Asia', 'Caribe', 'Viajes de Colegios'] },
    { title: 'Servicios', items: ['Asesoría Migratoria', 'Paquetes Individuales', 'Tours Grupales', 'Seguros de Viaje'] },
    { title: 'Contacto', items: ['WhatsApp: +51 940 071 218', 'CC Comercial 21 de Julio', 'Int 544 - Pasaje 2, Lima'] },
    {
      title: 'Legal', items: [
        { label: 'Términos y Condiciones', href: '/terminos' },
        { label: 'Políticas de Reembolso', href: '/politicas-reembolso' },
        { label: 'Política de Privacidad', href: '/privacidad' },
      ]
    },
  ];

  const linkItemStyle = { fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.65)', cursor: 'pointer', transition: 'color 0.2s', textDecoration: 'none', display: 'block' };

  return (
    <footer id="contacto" style={{ background: '#0A2473', color: '#fff' }}>
      <div className="container" style={{ padding: '72px 24px 40px' }}>

        {/* ── ROW 1: Brand + Tagline + Socials ── */}
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <img src="/KITS/landing/assets/ISOLOGO.png" alt="Descúbrela Travel" className="footer-logo-1"
                style={{ width: 56, height: 'auto', borderRadius: 8, objectFit: 'contain', display: 'block', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img src="/KITS/landing/assets/DESCUBRELA.png" alt="DescubreLA Travel" className="footer-logo-2"
                  style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
                <div className="footer-partner-text" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(245,166,35,0.95)', marginTop: 4, letterSpacing: '0.08em' }}>HAND TRAVEL SAC</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 380 }}>
              Especialistas en acompañar a peruanos en su primer viaje internacional. Tu asesor personal 1 a 1 por WhatsApp.
            </p>
          </div>

          <div className="footer-social-block">
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 38, height: 38, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, opacity 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="https://wa.me/51940071218" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', background: '#25D366', color: '#fff', borderRadius: 9999, fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 14px rgba(37,211,102,0.32)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(37,211,102,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,211,102,0.32)'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z" /></svg>
              +51 940 071 218
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.10)', margin: '36px 0 36px' }}></div>

        {/* ── ROW 2: Link columns (4 equal) ── */}
        <div className="footer-links">
          {links.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(item => {
                  const isLink = typeof item === 'object';
                  const label = isLink ? item.label : item;
                  return isLink ? (
                    <a key={label} href={item.href} style={linkItemStyle}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}>
                      {label}
                    </a>
                  ) : (
                    <div key={label} style={linkItemStyle}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}>
                      {label}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.10)', margin: '36px 0 24px' }}></div>

        {/* ── ROW 3: Copyright + Partners ── */}
        <div className="footer-bottom">
          <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.40)' }}>
            © 2025 Descúbrela Travel · HAND TRAVEL SAC. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Partners tecnológicos</div>
            <img src="/KITS/landing/assets/amadeus logo blanco.png" alt="Amadeus"
              style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.6, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.target.style.opacity = '0.95'} onMouseLeave={e => e.target.style.opacity = '0.6'} />
            <img src="/KITS/landing/assets/sabe logo.png" alt="Sabre"
              style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.6, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.target.style.opacity = '0.95'} onMouseLeave={e => e.target.style.opacity = '0.6'} />
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
