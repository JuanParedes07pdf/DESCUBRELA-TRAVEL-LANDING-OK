/*Declarar variable para fotos de destinos
import fotoeuropa from '/KITS/landing/assets/europa.jpg';
import fotoeeuu from '/KITS/landing/assets/new_york.jpg';
import fotoasia from '/KITS/landing/assets/japon.jpg';
import fotocaribe from '/KITS/landing/assets/caribe.jpg';
import fotocolegio from '/KITS/landing/assets/escolares.jpg';
*/
const Destinations = () => {
  const [active, setActive] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const destinations = [
    {
      id: 'europa',
      label: 'Europa',
      icon: '🗺️',
      tag: 'Schengen · ETIAS',
      title: 'Europa sin complicaciones',
      desc: 'Te guiamos con el nuevo permiso ETIAS, seguro de viaje obligatorio y sustento económico diario. Sin sorpresas en migración.',
      img: '/KITS/landing/assets/europa.jpg',
      badge: 'Más solicitado',
    },
    {
      id: 'eeuu',
      label: 'Estados Unidos',
      icon: '🗽',
      tag: 'Visa B1/B2',
      title: 'EE.UU. para peruanos',
      desc: 'Paquetes individuales y familiares con asesoría completa en el proceso de visa. Tu asesor te acompaña desde la solicitud hasta el regreso.',
      img: '/KITS/landing/assets/new_york.jpg',
      badge: null,
    },
    {
      id: 'asia',
      label: 'Asia',
      icon: '🏯',
      tag: 'Tours grupales',
      title: 'Asia sin barreras',
      desc: 'Exotismo sin barreras idiomáticas. Paquetes grupales guiados — transporte, alojamiento y guía incluidos. Tú solo disfruta.',
      img: '/KITS/landing/assets/japon.jpg',
      badge: 'Experiencia única',
    },
    {
      id: 'caribe',
      label: 'Caribe',
      icon: '🏖️',
      tag: 'Cancún · Punta Cana',
      title: 'Caribe todo incluido',
      desc: 'El escape perfecto. Full relax con sistema Todo Incluido, traslados prepagados y cero preocupaciones desde Lima.',
      img: '/KITS/landing/assets/caribe.jpg',
      badge: null,
    },
    {
      id: 'colegios',
      label: 'Colegios',
      icon: '🎓',
      tag: 'Viajes de promoción',
      title: 'Viajes de promoción seguros',
      desc: 'Itinerarios controlados, comunicación constante con padres y acompañamiento 24/7. La experiencia más memorable del colegio.',
      img: '/KITS/landing/assets/escolares.jpg',
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
        <div className="dest-tabs" style={{ display:'flex', gap:8, marginBottom:40, overflowX:'auto', paddingBottom:4 }}>
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
        <div className="grid-2" style={{ alignItems:'center' }}>

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

          {/* Video educativo — formato vertical 9:16 (Reel-style) */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:22 }}>
            <div style={{ alignSelf:'flex-start', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ display:'inline-flex', width:8, height:8, borderRadius:'50%', background:'#F5A623', boxShadow:'0 0 0 4px rgba(245,166,35,0.18)' }}></span>
              <span style={{ fontWeight:800, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'#164DF2' }}>Video educativo</span>
            </div>

            {/* Phone-frame video container */}
            <div onClick={togglePlay}
              style={{
                position:'relative',
                width:'100%', maxWidth:300, aspectRatio:'9 / 16',
                borderRadius:32,
                background:'linear-gradient(155deg, #0A2473 0%, #1A2D87 60%, #164DF2 100%)',
                padding:8,
                boxShadow:'0 24px 60px rgba(10,36,115,0.32), 0 0 0 1px rgba(255,255,255,0.06) inset',
                cursor:'pointer',
                transition:'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>

              <div style={{ position:'relative', width:'100%', height:'100%', borderRadius:24, overflow:'hidden', background:'#000' }}>
                <video
                  ref={videoRef}
                  src="/KITS/landing/assets/video-educativo.mp4"
                  poster="/KITS/landing/assets/video-educativo-poster.jpg"
                  playsInline
                  muted={isMuted}
                  loop
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                />

                {/* Top gradient + label */}
                <div style={{ position:'absolute', top:0, left:0, right:0, padding:'14px 16px 28px', background:'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)', display:'flex', alignItems:'center', gap:8, pointerEvents:'none' }}>
                  <div style={{ width:6, height:6, borderRadius:'50%', background:'#F5A623' }}></div>
                  <span style={{ color:'#fff', fontSize:11, fontWeight:700, letterSpacing:'0.05em' }}>@descubrelatravel</span>
                </div>

                {/* Big play overlay (hides while playing) */}
                <div style={{
                  position:'absolute', inset:0,
                  display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:14,
                  background: isPlaying ? 'transparent' : 'linear-gradient(to top, rgba(5,15,50,0.55), rgba(5,15,50,0.15))',
                  opacity: isPlaying ? 0 : 1,
                  transition:'opacity 0.35s ease',
                  pointerEvents: isPlaying ? 'none' : 'auto',
                }}>
                  <div style={{ width:68, height:68, borderRadius:'50%', background:'rgba(255,255,255,0.18)', border:'2px solid rgba(255,255,255,0.6)', display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(8px)', boxShadow:'0 8px 32px rgba(0,0,0,0.35)' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" style={{ marginLeft:3 }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                  <div style={{ color:'#fff', fontSize:13, fontWeight:700, textAlign:'center', maxWidth:220, lineHeight:1.4, padding:'0 16px', textShadow:'0 2px 12px rgba(0,0,0,0.45)' }}>
                    "Lo que nadie te dice sobre viajar a Europa en 2026"
                  </div>
                </div>

                {/* Mute toggle — visible while playing */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Activar audio' : 'Silenciar'}
                  style={{
                    position:'absolute', bottom:14, right:14,
                    width:38, height:38, borderRadius:'50%',
                    border:'1px solid rgba(255,255,255,0.4)',
                    background:'rgba(0,0,0,0.45)', backdropFilter:'blur(8px)',
                    cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
                    opacity: isPlaying ? 1 : 0, transition:'opacity 0.3s',
                    pointerEvents: isPlaying ? 'auto' : 'none',
                  }}>
                  {isMuted ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
                  )}
                </button>
              </div>
            </div>

            <a href={`https://wa.me/51940071218?text=Hola%2C%20quiero%20cotizar%20${encodeURIComponent(current.label)}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer"
              style={{ width:'fit-content' }}>
              Cotizar este destino
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Destinations });
