const SplitTitle = ({ children, color }) => {
  const words = children.split(' ').filter(w => w.length > 0);
  return (
    <span style={{ color: color || 'inherit' }}>
      {words.map((word, wi) => (
        <React.Fragment key={wi}>
          <span className="word">
            {word.split('').map((ch, ci) => (
              <span key={ci} className="char">{ch}</span>
            ))}
          </span>
          {wi < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
      {' '}
    </span>
  );
};

const Hero = () => {
  const heroRef = React.useRef(null);
  const orb1Ref = React.useRef(null);
  const orb2Ref = React.useRef(null);
  const orb3Ref = React.useRef(null);
  const [planes, setPlanes] = React.useState([]);

  // Trigger GSAP on mount — wait for DOM to be ready
  React.useEffect(() => {
    const run = () => {
      if (!window.gsap || !window.__runGSAP) return;
      // Wait until .char spans exist in the DOM
      const waitForChars = (attempts = 0) => {
        const chars = document.querySelectorAll('.split-title .char');
        if (chars.length > 0 || attempts > 20) {
          window.__runGSAP();
        } else {
          setTimeout(() => waitForChars(attempts + 1), 50);
        }
      };
      waitForChars();
    };
    // Use requestAnimationFrame to ensure React has painted
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  // Mouse parallax
  React.useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${cx * 40}px, ${cy * 30}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${cx * -30}px, ${cy * -25}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${cx * 20}px, ${cy * 40}px)`;
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  // Plane burst on CTA click
  const handleWspClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const newPlanes = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i, angle: (i / 10) * 360, x: cx, y: cy,
    }));
    setPlanes(p => [...p, ...newPlanes]);
    setTimeout(() => setPlanes([]), 900);
  };

  return (
    <section ref={heroRef} id="hero" style={{
      minHeight:'100vh', position:'relative', display:'flex', alignItems:'center',
      background:'linear-gradient(155deg, #0A2473 0%, #1A2D87 45%, #164DF2 100%)',
      overflow:'hidden',
    }}>
      {/* Parallax orbs */}
      <div ref={orb1Ref} style={{ position:'absolute', top:'-10%', right:'-6%', width:680, height:680, borderRadius:'50%', background:'rgba(245,166,35,0.07)', pointerEvents:'none', transition:'transform 0.15s ease-out' }}></div>
      <div ref={orb2Ref} style={{ position:'absolute', bottom:'-18%', left:'-8%', width:580, height:580, borderRadius:'50%', background:'rgba(22,77,242,0.18)', pointerEvents:'none', transition:'transform 0.18s ease-out' }}></div>
      <div ref={orb3Ref} style={{ position:'absolute', top:'30%', left:'25%', width:300, height:300, borderRadius:'50%', background:'rgba(245,166,35,0.04)', pointerEvents:'none', transition:'transform 0.2s ease-out' }}></div>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize:'40px 40px', pointerEvents:'none' }}></div>

      {/* Plane burst particles */}
      {planes.map(p => <PlaneBurst key={p.id} angle={p.angle} x={p.x} y={p.y} />)}

      <div className="container" style={{ paddingTop:120, paddingBottom:100, position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

          {/* Left copy */}
          <div>
            <div className="hero-eyebrow eyebrow eyebrow-white" style={{ marginBottom:16, opacity:0 }}>
              Especialistas en paquetes de viajes y vuelos internacionales
            </div>

            <h1 className="hero-h1 split-title" style={{ fontSize:'clamp(34px,4.2vw,54px)', fontWeight:900, color:'#fff', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:24 }}>
              <SplitTitle>Tu primer viaje internacional,</SplitTitle>
              <SplitTitle color="#F5A623">sin estrés, sin miedos</SplitTitle>
              <SplitTitle>y sin sorpresas.</SplitTitle>
            </h1>

            <p className="hero-sub" style={{ fontSize:17, fontWeight:500, color:'rgba(255,255,255,0.80)', lineHeight:1.75, marginBottom:40, maxWidth:480, opacity:0 }}>
              Deja de pelear con páginas web complicadas. Te llevamos de la mano a EE.UU., Europa y Asia con un asesor personal 1 a 1 por WhatsApp.
            </p>

            <div className="hero-ctas" style={{ display:'flex', gap:14, flexWrap:'wrap', opacity:0 }}>
              <a href="https://wa.me/51940071218?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20mi%20primer%20viaje"
                className="btn btn-wsp" target="_blank" rel="noopener noreferrer" onClick={handleWspClick}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.785.47 3.457 1.29 4.908L2 22l5.235-1.375A9.953 9.953 0 0012 22c5.516 0 10-4.477 10-10S17.516 2 12 2z"/></svg>
                Hablar con mi asesor personal
              </a>
              <a href="#destinos" className="btn btn-outline">Ver destinos</a>
            </div>

            <div className="hero-proof" style={{ marginTop:48, display:'flex', alignItems:'center', gap:16, padding:'16px 20px', background:'rgba(255,255,255,0.07)', borderRadius:14, backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.12)', width:'fit-content', opacity:0 }}>
              <div style={{ display:'flex' }}>
                {['#F5A623','#164DF2','#25D366','#E8EBF4'].map((c,i) => (
                  <div key={i} style={{ width:32, height:32, borderRadius:'50%', background:c, border:'2px solid rgba(10,36,115,0.6)', marginLeft:i ? -8 : 0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12 }}>
                    {['✈','🌍','🗽','⭐'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ color:'#fff', fontWeight:700, fontSize:13 }}>Cientos de peruanos</div>
                <div style={{ color:'rgba(255,255,255,0.55)', fontSize:11, fontWeight:500 }}>ya vivieron su primer viaje con nosotros</div>
              </div>
            </div>
          </div>

          {/* Right: polaroids */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:24 }}>
            <div className="hero-pol-main" style={{ background:'#fff', borderRadius:6, padding:'10px 10px 32px', boxShadow:'0 16px 48px rgba(10,36,115,0.32)', width:280 }}>
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" alt="París"
                style={{ width:'100%', height:160, objectFit:'cover', borderRadius:3, display:'block' }} />
              <div style={{ fontSize:11, fontWeight:700, color:'#4A5278', marginTop:10, textAlign:'center' }}>París, Europa 🗺️</div>
            </div>
            <div style={{ display:'flex', gap:14 }}>
              <div className="hero-pol-a" style={{ background:'#fff', borderRadius:6, padding:'8px 8px 28px', boxShadow:'0 12px 36px rgba(10,36,115,0.25)', width:134 }}>
                <img src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=400&q=80" alt="Nueva York"
                  style={{ width:'100%', height:90, objectFit:'cover', borderRadius:2, display:'block' }} />
                <div style={{ fontSize:10, fontWeight:700, color:'#4A5278', marginTop:8, textAlign:'center' }}>Nueva York 🗽</div>
              </div>
              <div className="hero-pol-b" style={{ background:'#fff', borderRadius:6, padding:'8px 8px 28px', boxShadow:'0 12px 36px rgba(10,36,115,0.25)', width:134 }}>
                <img src="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400&q=80" alt="Cancún"
                  style={{ width:'100%', height:90, objectFit:'cover', borderRadius:2, display:'block' }} />
                <div style={{ fontSize:10, fontWeight:700, color:'#4A5278', marginTop:8, textAlign:'center' }}>Cancún 🏖️</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="hero-wave" style={{ position:'absolute', bottom:0, left:0, right:0, width:'100%' }} viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff"/>
      </svg>
    </section>
  );
};

/* Plane burst particle */
const PlaneBurst = ({ angle, x, y }) => {
  const rad = (angle * Math.PI) / 180;
  const dist = 80 + Math.random() * 60;
  const tx = Math.cos(rad) * dist;
  const ty = Math.sin(rad) * dist;
  const size = 12 + Math.random() * 8;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      style={{
        position:'fixed', left:x - size/2, top:y - size/2, zIndex:9999,
        fill:'#fff', pointerEvents:'none',
        animation:`planeBurst 0.8s cubic-bezier(0.4,0,0.2,1) forwards`,
        '--tx':`${tx}px`, '--ty':`${ty}px`, '--rot':`${angle + 45}deg`,
      }}>
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  );
};

Object.assign(window, { Hero, SplitTitle, PlaneBurst });
