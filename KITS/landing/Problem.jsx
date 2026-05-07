const Problem = () => {
  const fears = [
    { icon:'📋', text:'Equivocarte con la visa y perder dinero' },
    { icon:'💸', text:'Cambiar dólares de más en el aeropuerto' },
    { icon:'🧳', text:'Que la aerolínea te cobre extra por el equipaje' },
    { icon:'📞', text:'Agencias que no responden cuando más las necesitas' },
  ];

  return (
    <section style={{ padding:'96px 0', background:'#fff' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems:'center' }}>
          {/* Left: problem */}
          <div className="fade-in problem-text">
            <div className="eyebrow">El problema real</div>
            <h2 style={{ fontSize:'clamp(28px,3.5vw,42px)', fontWeight:900, color:'#0D0D0D', lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:20 }}>
              ¿Sientes que organizar tu primera salida del Perú es abrumador?
            </h2>
            <p style={{ fontSize:17, fontWeight:400, color:'#4A5278', lineHeight:1.75, marginBottom:36 }}>
              Has buscado en TikTok, leído blogs y preguntado a amigos... y sigues con miedo. No estás solo. Y <strong style={{color:'#164DF2'}}>no tiene que ser así.</strong>
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {fears.map((f,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 18px', background:'#F5F6FA', borderRadius:12, fontSize:14, fontWeight:600, color:'#0D0D0D' }}>
                  <span style={{ fontSize:22 }}>{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: comparison */}
          <div className="fade-in">
            <div style={{ background:'#F5F6FA', borderRadius:20, padding:32, boxShadow:'0 8px 32px rgba(10,36,115,0.10)' }}>
              <div style={{ textAlign:'center', fontWeight:800, fontSize:13, letterSpacing:'0.1em', textTransform:'uppercase', color:'#9BA3BF', marginBottom:24 }}>Agencia grande vs. Descúbrela</div>
              <div className="problem-compare" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                <CompareCol title="Agencia grande" color="#EF4444" dark={false} items={['Esperas días una respuesta','Asesores distintos cada vez','Precios "desde" engañosos','Logística complicada','Sin apoyo durante el viaje']} />
                <CompareCol title="Descúbrela Travel" color="#164DF2" dark={true} items={['Respuesta el mismo día','Tu asesor de inicio a fin','Precio REAL, sin sorpresas','Todo gestionado por nosotros','Acompañamiento 24/7 vía WhatsApp']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompareCol = ({ title, color, dark, items }) => (
  <div style={{ background: dark ? color : '#fff', borderRadius:14, padding:'20px 16px', boxShadow: dark ? `0 8px 32px rgba(22,77,242,0.25)` : '0 2px 8px rgba(10,36,115,0.08)' }}>
    <div style={{ fontWeight:800, fontSize:13, color: dark ? '#fff' : '#4A5278', marginBottom:16, textAlign:'center' }}>{title}</div>
    {items.map((item,i) => (
      <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:8, marginBottom:10, fontSize:12, fontWeight:600, color: dark ? 'rgba(255,255,255,0.9)' : '#4A5278', lineHeight:1.4 }}>
        <span style={{ color: dark ? '#F5A623' : '#EF4444', fontWeight:900, marginTop:1, flexShrink:0 }}>{dark ? '✓' : '✗'}</span>
        {item}
      </div>
    ))}
  </div>
);

Object.assign(window, { Problem, CompareCol });
