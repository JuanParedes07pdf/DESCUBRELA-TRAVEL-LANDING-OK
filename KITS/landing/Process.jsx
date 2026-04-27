const Process = () => {
  const steps = [
    { num:'01', icon:'💬', title:'Escríbenos', desc:'Un mensaje a WhatsApp contándonos a dónde sueñas ir y cuándo quieres viajar.' },
    { num:'02', icon:'🗺️', title:'Diseñamos tu ruta', desc:'Tu asesor personal te envía opciones transparentes con el costo total real. Sin "desde".' },
    { num:'03', icon:'✅', title:'Preparamos todo', desc:'Gestionamos reservas, seguros de viaje y te damos la lista de empaque exacta.' },
    { num:'04', icon:'✈️', title:'Viajas seguro', desc:'Te acompañamos por chat durante todo tu viaje hasta que regreses a casa en Lima.' },
  ];

  return (
    <section id="proceso" style={{ padding:'96px 0', background:'#0A2473', position:'relative', overflow:'hidden' }}>
      {/* Decorative */}
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:500, height:500, borderRadius:'50%', background:'rgba(22,77,242,0.2)', pointerEvents:'none' }}></div>

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div className="fade-in" style={{ textAlign:'center', marginBottom:64 }}>
          <div className="eyebrow eyebrow-white">Proceso simple</div>
          <h2 style={{ fontSize:'clamp(28px,3.5vw,42px)', fontWeight:900, color:'#fff', lineHeight:1.15, letterSpacing:'-0.02em' }}>
            Cómo empezar tu aventura
          </h2>
          <p style={{ fontSize:16, fontWeight:500, color:'rgba(255,255,255,0.65)', marginTop:14, maxWidth:480, margin:'14px auto 0' }}>
            Solo 4 pasos y tu asesor personal hace el resto.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }} className="process-grid">
          {steps.map((s,i) => (
            <div key={i} className="fade-in" style={{ position:'relative' }}>
              {/* Connector line */}
              {i < steps.length-1 && (
                <div style={{ position:'absolute', top:28, left:'calc(50% + 28px)', right:'-50%', height:2, background:'rgba(255,255,255,0.15)', zIndex:0 }}></div>
              )}
              <div data-gsap="process-step" style={{ background:'rgba(255,255,255,0.07)', borderRadius:16, padding:'28px 22px', border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(8px)', position:'relative', zIndex:1, textAlign:'center',
                transition:'background 0.25s, transform 0.25s', cursor:'default' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.12)';e.currentTarget.style.transform='translateY(-4px)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.07)';e.currentTarget.style.transform='translateY(0)'}}>
                {/* Step number */}
                <div style={{ width:52, height:52, borderRadius:'50%', background:'#164DF2', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', boxShadow:'0 8px 24px rgba(22,77,242,0.4)', fontSize:20 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize:10, fontWeight:800, color:'rgba(245,166,35,0.8)', letterSpacing:'0.12em', marginBottom:8 }}>{s.num}</div>
                <div style={{ fontSize:16, fontWeight:800, color:'#fff', marginBottom:10, lineHeight:1.3 }}>{s.title}</div>
                <div style={{ fontSize:13, fontWeight:400, color:'rgba(255,255,255,0.65)', lineHeight:1.7 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="fade-in" style={{ textAlign:'center', marginTop:60 }}>
          <a href="https://wa.me/51940071218?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20mi%20primer%20viaje" className="btn btn-wsp" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:16, padding:'16px 40px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z"/></svg>
            Comenzar mi primer viaje ahora
          </a>
        </div>
      </div>
    </section>
  );
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 1024px) {
      .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .process-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
      .process-grid > div > div:first-child { display: none; }
    }
  `;
  if (document.head) document.head.appendChild(style);
}

Object.assign(window, { Process });
