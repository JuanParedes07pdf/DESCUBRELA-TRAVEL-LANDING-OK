const Services = () => {
  const pillars = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4"/><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/>
        </svg>
      ),
      title:'Asesoría Migratoria y Legal',
      desc:'Te guiamos paso a paso con requisitos de visas, ETIAS, vacunas y bolsa de viaje. Sin enredos legales.',
      tag:'Visas · ETIAS · Seguros',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
      ),
      title:'Asesor 1 a 1 por WhatsApp',
      desc:'La misma persona que te cotiza, te arma la maleta y te responde un domingo si tu vuelo se atrasa.',
      tag:'Respuesta mismo día',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      title:'Transparencia, Cero Sorpresas',
      desc:'Te decimos el costo REAL. Incluyendo propinas, traslados y seguros. Nada de precios "desde" engañosos.',
      tag:'Precio total real',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title:'Preparación Pre-Viaje',
      desc:'Checklists de equipaje, consejos para evitar estafas en el aeropuerto y tips de tarjetas de crédito.',
      tag:'Checklist · Tips · Guías',
    },
  ];

  return (
    <section id="servicios" style={{ padding:'96px 0', background:'#F5F6FA' }}>
      <div className="container">
        <div className="fade-in" style={{ textAlign:'center', marginBottom:64 }}>
          <div className="eyebrow">Nuestros 4 pilares</div>
          <h2 style={{ fontSize:'clamp(28px,3.5vw,42px)', fontWeight:900, color:'#0D0D0D', lineHeight:1.15, letterSpacing:'-0.02em', maxWidth:560, margin:'0 auto' }}>
            Así es como eliminamos el miedo al primer viaje
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
          {pillars.map((p,i) => (
            <div key={i} className="fade-in" style={{ background:'#fff', borderRadius:16, padding:28, boxShadow:'0 4px 20px rgba(10,36,115,0.10)', transition:'transform 0.25s, box-shadow 0.25s', cursor:'default' }}
              data-gsap="service-card"
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 48px rgba(10,36,115,0.18)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 20px rgba(10,36,115,0.10)'}}>
              <div style={{ color:'#164DF2', marginBottom:18 }}>{p.icon}</div>
              <div style={{ fontSize:16, fontWeight:800, color:'#0D0D0D', marginBottom:10, lineHeight:1.3 }}>{p.title}</div>
              <div style={{ fontSize:13, fontWeight:400, color:'#4A5278', lineHeight:1.7, marginBottom:16 }}>{p.desc}</div>
              <div style={{ display:'inline-block', background:'#EEF2FF', color:'#164DF2', fontSize:10, fontWeight:700, padding:'5px 12px', borderRadius:9999, letterSpacing:'0.06em' }}>{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Services });
