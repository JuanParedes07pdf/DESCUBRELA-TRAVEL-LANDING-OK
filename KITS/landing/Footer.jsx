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
    {
      title: 'Destinos', items: [
        'Europa', 'Estados Unidos', 'Asia', 'Caribe', 'Viajes de Colegios']
    },
    { title: 'Servicios', items: ['Asesoría Migratoria', 'Paquetes Individuales', 'Tours Grupales', 'Seguros de Viaje'] },
    { title: 'Contacto', items: ['WhatsApp: +51 940 071 218', 'Lima, Perú'] },
  ];

  return (
    <footer id="contacto" style={{ background: '#0A2473', color: '#fff' }}>
      {/* Main footer */}
      <div className="container" style={{ padding: '72px 24px 48px' }}>
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            {/* Contenedor de las dos imágenes */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img src="./assets/ISOLOGO.png" alt="Descúbrela Travel" className="footer-logo-1"
                style={{ width: 60, height: "auto", borderRadius: 8, objectFit: 'contain', display: 'block', flexShrink: 0 }} />

              {/* Aquí va tu imagen con las letras y la razón social */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <img src="./assets/DESCUBRELA.png" alt="DescubreLA Travel" className="footer-logo-2"
                  style={{ height: '35px', width: 'auto', objectFit: 'contain' }} />
                <div className="footer-partner-text" style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginTop: 4, letterSpacing: '0.02em' }}>HAND TRAVEL SAC</div>
              </div>
            </div>

            <p style={{ fontSize: 13, fontWeight: 400, color: 'rgba(255,255,255,0.60)', lineHeight: 1.75, marginBottom: 24, maxWidth: 240, textAlign: 'left' }}>
              Especialistas en acompañar a peruanos en su primer viaje internacional. Tu asesor personal 1 a 1 por WhatsApp.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}>
                  {s.icon}
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/51940071218" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#18c055', color: '#0a3ad6', borderRadius: 9999, fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              +51 940 071 218
            </a>
          </div> {/* <--- AHORA EL DIV SÍ CIERRA AL FINAL DE LA COLUMNA */}
          {/* Link columns */}
          {links.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5A623', marginBottom: 18 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(item => (
                  <div key={item} style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.65)', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.10)', marginBottom: 32 }}></div>

        {/* Partner logos + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.35)' }}>
            © 2025 Descúbrela Travel. Todos los derechos reservados.
          </div>
          {/* Partner logos — white filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Partners tecnológicos</div>
            <img src=".\assets\amadeus logo blanco.png" alt="Amadeus"
              style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.55, transition: 'opacity 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.target.style.opacity = '0.9'} onMouseLeave={e => e.target.style.opacity = '0.55'} />
            <img src=".\assets\sabe logo.png" alt="Sabre"
              style={{ height: 22, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.55, transition: 'opacity 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.target.style.opacity = '0.9'} onMouseLeave={e => e.target.style.opacity = '0.55'} />
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
