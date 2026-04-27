/*Declarar variable para fotos de destinos
import fotoeuropa from './assets/europa.jpg';
import fotoeeuu from './assets/new_york.jpg';
import fotoasia from './assets/japon.jpg';
import fotocaribe from './assets/caribe.jpg';
import fotocolegio from './assets/escolares.jpg';
*/
const Destinations = () => {
  const [active, setActive] = React.useState(0);

  const destinations = [
    {
      id: 'europa',
      label: 'Europa',
      icon: '🗺️',
      tag: 'Schengen · ETIAS',
      title: 'Europa sin complicaciones',
      desc: 'Te guiamos con el nuevo permiso ETIAS, seguro de viaje obligatorio y sustento económico diario. Sin sorpresas en migración.',
      img: './assets/europa.jpg',
      badge: 'Más solicitado',
    },
    {
      id: 'eeuu',
      label: 'Estados Unidos',
      icon: '🗽',
      tag: 'Visa B1/B2',
      title: 'EE.UU. para peruanos',
      desc: 'Paquetes individuales y familiares con asesoría completa en el proceso de visa. Tu asesor te acompaña desde la solicitud hasta el regreso.',
      img: './assets/new_york.jpg',
      badge: null,
    },
    {
      id: 'asia',
      label: 'Asia',
      icon: '🏯',
      tag: 'Tours grupales',
      title: 'Asia sin barreras',
      desc: 'Exotismo sin barreras idiomáticas. Paquetes grupales guiados — transporte, alojamiento y guía incluidos. Tú solo disfruta.',
      img: './assets/japon.jpg',
      badge: 'Experiencia única',
    },
    {
      id: 'caribe',
      label: 'Caribe',
      icon: '🏖️',
      tag: 'Cancún · Punta Cana',
      title: 'Caribe todo incluido',
      desc: 'El escape perfecto. Full relax con sistema Todo Incluido, traslados prepagados y cero preocupaciones desde Lima.',
      img: './assets/caribe.jpg',
      badge: null,
    },
    {
      id: 'colegios',
      label: 'Colegios',
      icon: '🎓',
      tag: 'Viajes de promoción',
      title: 'Viajes de promoción seguros',
      desc: 'Itinerarios controlados, comunicación constante con padres y acompañamiento 24/7. La experiencia más memorable del colegio.',
      img: './assets/escolares.jpg',
      badge: null,
    },
  ];

  const current = destinations[active];

  return (
    <section id="destinos" style={{ padding:'96px 0', background:'#fff' }}>
      <div className="container">
        <div className="fade-in" style={{ textAlign:'center', marginBottom:56 }}>
          <div className="eyebrow">Hub de destinos</div>
          <h2 style={{ fontSize:'clamp(28px,3.5vw,42px)', fontWeight:900, color:'#0D0D0D', lineHeight:1.15, letterSpacing:'-0.02em' }}>
            ¿A dónde sueñas ir?
          </h2>
        </div>

        {/* Tab selector */}
        <div style={{ display:'flex', gap:8, marginBottom:40, overflowX:'auto', paddingBottom:4 }}>
          {destinations.map((d,i) => (
            <button key={d.id} onClick={() => setActive(i)} style={{
              display:'flex', alignItems:'center', gap:8, padding:'10px 22px',
              borderRadius:9999, border:'none', cursor:'pointer', fontFamily:'Montserrat, sans-serif',
              fontSize:13, fontWeight:700, whiteSpace:'nowrap',
              background: active===i ? '#164DF2' : '#F5F6FA',
              color: active===i ? '#fff' : '#4A5278',
              transition:'all 0.2s',
              boxShadow: active===i ? '0 4px 16px rgba(22,77,242,0.3)' : 'none',
            }}>
              <span>{d.icon}</span> {d.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center' }} className="dest-grid">

          {/* Destination card — real photo with overlay */}
          <div style={{ borderRadius:20, overflow:'hidden', boxShadow:'0 16px 48px rgba(10,36,115,0.22)', position:'relative', minHeight:380 }}>
            {/* Background photo */}
            <img
              key={current.id}
              src={current.img}
              alt={current.title}
              style={{
                position:'absolute', inset:0, width:'100%', height:'100%',
                objectFit:'cover', display:'block',
                transition:'opacity 0.4s ease, transform 0.6s ease',
              }}
            />
            {/* Dark gradient overlay */}
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(to top, rgba(5,15,50,0.90) 0%, rgba(5,15,50,0.45) 50%, rgba(5,15,50,0.15) 100%)',
            }}></div>

            {/* Content */}
            <div style={{ position:'relative', zIndex:1, height:'100%', minHeight:380, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:36 }}>
              {current.badge && (
                <div style={{ display:'inline-block', background:'#F5A623', color:'#0D0D0D', fontSize:10, fontWeight:800, padding:'5px 14px', borderRadius:9999, marginBottom:16, width:'fit-content', letterSpacing:'0.06em', textTransform:'uppercase' }}>
                  {current.badge}
                </div>
              )}
              <div style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.65)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>{current.tag}</div>
              <h3 style={{ fontSize:30, fontWeight:900, color:'#fff', lineHeight:1.15, marginBottom:12 }}>{current.title}</h3>
              <p style={{ fontSize:14, fontWeight:500, color:'rgba(255,255,255,0.82)', lineHeight:1.7, maxWidth:380 }}>{current.desc}</p>
            </div>
          </div>

          {/* Video + CTA */}
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            <div style={{ fontWeight:700, fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'#164DF2' }}>Video educativo</div>
            <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 8px 32px rgba(10,36,115,0.15)', position:'relative', aspectRatio:'16/9', background:'linear-gradient(135deg,#0A2473,#1A2D87)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:12 }}>
                <div style={{ width:56, height:56, borderRadius:'50%', background:'rgba(255,255,255,0.15)', border:'2px solid rgba(255,255,255,0.4)', display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div style={{ color:'rgba(255,255,255,0.85)', fontSize:13, fontWeight:700, textAlign:'center', maxWidth:220, lineHeight:1.4 }}>
                  "Lo que nadie te dice sobre viajar a Europa en 2026"
                </div>
              </div>
            </div>
            <a href="https://wa.me/51940071218" className="btn btn-primary" target="_blank" rel="noopener noreferrer"
              style={{ width:'fit-content' }}>
              Cotizar este destino
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .dest-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
      .dest-grid > div:last-child { order: -1; }
    }
  `;
  if (document.head) document.head.appendChild(style);
}

Object.assign(window, { Destinations });
