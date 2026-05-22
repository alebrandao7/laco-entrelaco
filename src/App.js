import { useState } from "react";

// ── TESTE DE IMAGEM ────────────────────────────────────────────────────────
const TesteImg = () => {
  const [status, setStatus] = useState("carregando...");
  const url = "https://res.cloudinary.com/djeliz676/image/upload/v1779469881/34234_qq54ml.jpg";
  return (
    <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",background:"#222",padding:16,borderRadius:12,zIndex:999,width:300,textAlign:"center"}}>
      <p style={{color:"#fff",fontSize:11,marginBottom:8}}>TESTE: {status}</p>
      <img src={url} style={{width:"100%",borderRadius:8}}
        onLoad={()=>setStatus("✅ FUNCIONOU!")}
        onError={e=>setStatus("❌ ERRO: "+e.type)}/>
    </div>
  );
};
// ── Cores do logo ──────────────────────────────────────────────────────────
const VERDE  = "#2D5A27";   // verde escuro do logo
const VINHO  = "#8B1A2A";   // vermelho vinho do &
const VERDE2 = "#4A7A42";   // verde médio
const CREAM  = "#F5F0E8";   // creme suave
const DARK   = "#0A0A0A";   // fundo preto
const CARD   = "#111111";   // card escuro
const CARD2  = "#181818";   // card secundário
const GOLD   = "#8B1A2A";   // acento = vinho
const GOLD2  = "#C8A0A8";   // vinho claro

// Links Cloudinary — funcionam em qualquer app
const CL = "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/";
const IMGS = {
  i1:  CL+"v1779469881/34224_qq2r2s.jpg",
  i2:  CL+"v1779469881/34234_qq54ml.jpg",
  i3:  CL+"v1779469881/WhatsApp_Image_2026-05-22_at_12.32.19_zxzfwy.jpg",
  i4:  CL+"v1779469881/6645645_dd5hsu.jpg",
  i5:  CL+"v1779469881/WhatsApp_Image_2026-05-14_at_10.42.33243_mgvwgz.jpg",
  i6:  CL+"v1779469880/WhatsApp_Image_2026-05-14_at_09.35.4832_lgalxx.jpg",
  i7:  CL+"v1779469881/34224_qq2r2s.jpg",
  i8:  CL+"v1779469881/34234_qq54ml.jpg",
  i9:  CL+"v1779469881/6645645_dd5hsu.jpg",
  i10: CL+"v1779469881/WhatsApp_Image_2026-05-22_at_12.32.19_zxzfwy.jpg",
  i11: CL+"v1779469880/WhatsApp_Image_2026-05-14_at_09.35.4832_lgalxx.jpg",
  i12: CL+"v1779469881/WhatsApp_Image_2026-05-14_at_10.42.33243_mgvwgz.jpg",
  i13: CL+"v1779469881/34224_qq2r2s.jpg",
  i14: CL+"v1779469881/34234_qq54ml.jpg",
  i15: CL+"v1779469881/WhatsApp_Image_2026-05-22_at_12.32.19_zxzfwy.jpg",
};

const CORES = {
  vinho:     { name:"Vinho",            hex:"#7B1A2A" },
  vermelho:  { name:"Vermelho",         hex:"#C0392B" },
  verde:     { name:"Verde Floresta",   hex:"#2D5A27" },
  branco:    { name:"Branco",           hex:"#F5F5F0" },
  champagne: { name:"Champagne",        hex:"#C8B89A" },
  dourado:   { name:"Dourado Metálico", hex:"#CFB53B" },
  rosa:      { name:"Rosa Antigo",      hex:"#C9788A" },
  preto:     { name:"Preto",            hex:"#111111" },
  prata:     { name:"Prata",            hex:"#B8B8C0" },
};

const PRODUCTS = [
  {
    sku:"V", name:"Laço Veludo Vermelho",
    subtitle:"Linha clássica — do 20cm ao 100cm",
    category:"Veludo",
    material:"100% poliéster",
    acabamento:"Estrutura interna, centro franzido",
    aplicacao:"Árvore / Portal / Painel / Fachada",
    sizes:[{label:"20cm",ref:"20V"},{label:"30cm",ref:"30V"},{label:"40cm",ref:"40V"},{label:"50cm",ref:"50V"},{label:"60cm",ref:"60V"},{label:"80cm",ref:"80V"},{label:"100cm",ref:"100V"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco,CORES.champagne,CORES.preto],
    tag:"Mais Vendido", tagColor:VINHO,
    photos:[IMGS.i6, IMGS.i1, IMGS.i5],
    desc:"O clássico da linha. Veludo 100% poliéster com volume generoso e estrutura que mantém o formato. Disponível do 20cm ao 100cm. Ideal para qualquer aplicação natalina.",
  },
  {
    sku:"VDup", name:"Laço Duplo Veludo",
    subtitle:"Volume duplo para impacto máximo",
    category:"Veludo",
    material:"100% poliéster",
    acabamento:"Dupla camada de veludo, centro reforçado",
    aplicacao:"Topo de árvore grande / Portal / Painel central",
    sizes:[{label:"30cm",ref:"30VDup"},{label:"40cm",ref:"40VDup"},{label:"50cm",ref:"50VDup"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco,CORES.champagne],
    tag:"Volume Extra", tagColor:"#5A1A6A",
    photos:[IMGS.i2, IMGS.i7],
    desc:"Laço com dupla camada de veludo que multiplica o volume e o impacto visual. Perfeito para topos de árvores de grande porte e portais de shoppings.",
  },
  {
    sku:"Val/GL", name:"Laço Veludo — Gravata Longa",
    subtitle:"Cauda longa — efeito cascata na árvore",
    category:"Veludo",
    material:"100% poliéster",
    acabamento:"Cauda longa dupla, costura francesa",
    aplicacao:"Topo de árvore / Portal / Coluna",
    sizes:[{label:"30cm",ref:"30Val/GL"},{label:"40cm",ref:"40Val/GL"},{label:"50cm",ref:"50Val/GL"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.verde,CORES.rosa,CORES.branco,CORES.champagne],
    tag:"Cauda Longa", tagColor:VERDE,
    photos:[IMGS.i3, IMGS.i11],
    desc:"Laço com gravata (cauda) longa que cria efeito cascata ao descer pela árvore ou coluna. Muito procurado para decorações residenciais premium e eventos temáticos.",
  },
  {
    sku:"Val/Lin", name:"Laço Veludo Ale — Lindíssimo",
    subtitle:"Linha premium — até 90cm",
    category:"Veludo",
    material:"100% poliéster",
    acabamento:"Acabamento premium, volume superior",
    aplicacao:"Shoppings / Praças / Eventos corporativos",
    sizes:[{label:"30cm",ref:"30Val/Lin"},{label:"60cm",ref:"60Val/Lin"},{label:"90cm",ref:"90Val/Lin"}],
    prazo:"10–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco,CORES.champagne,CORES.dourado],
    tag:"Premium", tagColor:"#7A5A00",
    photos:[IMGS.i4, IMGS.i10],
    desc:"O topo da linha Ale. Volume e acabamento superiores, disponível até 90cm. Para decorações onde o impacto visual é prioridade máxima.",
  },
  {
    sku:"VaL", name:"Laço Veludo Ale",
    subtitle:"Modelo Ale — perfil arredondado diferenciado",
    category:"Veludo",
    material:"100% poliéster",
    acabamento:"Perfil arredondado, alças largas",
    aplicacao:"Árvore / Parede / Vitrine",
    sizes:[{label:"30cm",ref:"30VaL"},{label:"40cm",ref:"40VaL"},{label:"50cm",ref:"50VaL"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco],
    tag:"Modelo Ale", tagColor:VERDE,
    photos:[IMGS.i8, IMGS.i13],
    desc:"Modelo Ale com perfil diferenciado e alças largas arredondadas. Design exclusivo que se destaca em vitrines e decorações de alto padrão.",
  },
  {
    sku:"VXC", name:"Laço Veludo Meio Xadrez",
    subtitle:"Veludo + detalhe xadrez central",
    category:"Estampado",
    material:"100% poliéster",
    acabamento:"Corpo veludo, centro em xadrez contrastante",
    aplicacao:"Árvore / Guirlanda / Decoração temática",
    sizes:[{label:"20cm",ref:"20VXC"},{label:"30cm",ref:"30VXC"},{label:"40cm",ref:"40VXC"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho],
    tag:"Estampado", tagColor:"#5B3A1A",
    photos:[IMGS.i9, IMGS.i12],
    desc:"Corpo em veludo vermelho com centro decorativo em tecido xadrez. Detalhe que agrega charme e personalidade à decoração natalina tradicional.",
  },
  {
    sku:"VP/TX/TP", name:"Linha Estampada",
    subtitle:"Poá · Xadrez · Listra — vermelho e branco",
    category:"Estampado",
    material:"90% poliéster / 10% algodão",
    acabamento:"Estampas tradicionais natalinas",
    aplicacao:"Árvore / Guirlanda / Porta / Decoração geral",
    sizes:[{label:"20cm",ref:"20VP/TX/TP"},{label:"30cm",ref:"30VP/TX/TP"},{label:"40cm",ref:"40VP/TX/TP"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vermelho],
    tag:"Tradicional", tagColor:"#C0392B",
    photos:[IMGS.i13, IMGS.i14],
    desc:"Linha com três estampas clássicas — Poá (VP), Xadrez (TX) e Listra (TP) — todas em vermelho e branco.",
  },
  {
    sku:"LDR/LDRD", name:"Laço Lamê Dourado",
    subtitle:"Simples e Duplo — brilho metálico permanente",
    category:"Lamê",
    material:"100% poliéster metalizado",
    acabamento:"Costura selada, brilho permanente",
    aplicacao:"Presépio / Arranjos / Composição temática ouro",
    sizes:[{label:"20cm",ref:"20LDR"},{label:"30cm",ref:"30LDR"},{label:"40cm",ref:"40LDR"},{label:"Duplo 20cm",ref:"20LDRD"},{label:"Duplo 30cm",ref:"30LDRD"},{label:"Duplo 40cm",ref:"40LDRD"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.dourado,CORES.prata],
    tag:"Metálico", tagColor:"#8B6914",
    photos:[IMGS.i15, IMGS.i4],
    desc:"Tecido lamê metalizado com brilho intenso e permanente. Simples (LDR) ou em dupla camada (LDRD). Ideal para presépios e composições douradas.",
  },
  {
    sku:"CXPI", name:"Caixa Presente Iluminada",
    subtitle:"Veludo vermelho + LED morno — uso interno",
    category:"Iluminado",
    material:"Madeira + veludo + fita LED 220V",
    acabamento:"Revestida em veludo vermelho, laço Lamê Dourado",
    aplicacao:"Vitrine / Hall de entrada / Uso interno",
    sizes:[{label:"40×40cm — 36W",ref:"CXPI 40X40"},{label:"45×45cm — 48W",ref:"CxPI 45X45"},{label:"50×50cm — 58W",ref:"CxPI 50X50"}],
    prazo:"10–20 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.dourado],
    tag:"🔆 Iluminado", tagColor:"#8B6914",
    photos:[IMGS.i1, IMGS.i2],
    desc:"Caixa presente revestida em veludo vermelho com laço Lamê Dourado e iluminação LED morna 220V. Consumo de 36W a 58W. Uso interno.",
  },
];

const CATEGORIES = ["Todos","Veludo","Lamê","Estampado","Iluminado"];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  ::-webkit-scrollbar{width:0;}
  .pf{font-family:'Playfair Display',serif;}
  .dm{font-family:'DM Sans',sans-serif;}
  .mn{font-family:'DM Mono',monospace;}
  .btn{cursor:pointer;border:none;transition:all 0.18s;font-family:'DM Sans',sans-serif;}
  .btn:active{transform:scale(0.97);}
  .card{transition:transform 0.2s,box-shadow 0.2s;cursor:pointer;}
  .card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(139,26,42,0.2);}
  .chip{cursor:pointer;transition:all 0.15s;}
  .ov{position:fixed;inset:0;background:rgba(0,0,0,0.92);display:flex;align-items:flex-end;justify-content:center;z-index:200;backdrop-filter:blur(12px);}
  .md{background:#111;border-radius:28px 28px 0 0;width:100%;max-width:420px;max-height:94vh;overflow-y:auto;border-top:2px solid #2D5A27;}
  input{outline:none;font-family:'DM Sans',sans-serif;background:none;}
  input::placeholder{color:rgba(255,255,255,0.2);}
  textarea{outline:none;resize:none;font-family:'DM Sans',sans-serif;background:none;}
  textarea::placeholder{color:rgba(255,255,255,0.2);}
`;

// Logo SVG fiel ao original enviado
const Logo = ({size=36}) => (
  <svg width={size*4.2} height={size} viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27" letterSpacing="-1">laço</text>
    <text x="118" y="66" fontFamily="Georgia,serif" fontSize="58" fontStyle="italic" fill="#8B1A2A" letterSpacing="0">&</text>
    <text x="148" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27" letterSpacing="-1">entrelaço</text>
  </svg>
);

// Foto com fallback
const Img = ({src, style, alt=""}) => {
  const [err,setErr] = useState(false);
  if(err) return <div style={{...style,background:"#1A1A1A",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32}}>🎀</div>;
  return <img src={src} alt={alt} style={{...style,objectFit:"cover",display:"block"}} onError={()=>setErr(true)}/>;
};

// Slider de fotos
const Slider = ({photos, height=200}) => {
  const [idx,setIdx] = useState(0);
  if(!photos?.length) return <div style={{width:"100%",height,background:"#1A1A1A",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32}}>🎀</div>;
  return(
    <div style={{position:"relative",width:"100%",height,overflow:"hidden",background:"#111"}}>
      <Img src={photos[idx]} style={{width:"100%",height:"100%"}}/>
      {photos.length>1&&<>
        <button onClick={e=>{e.stopPropagation();setIdx(i=>(i-1+photos.length)%photos.length);}}
          style={{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.55)",border:"none",color:"#fff",width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>‹</button>
        <button onClick={e=>{e.stopPropagation();setIdx(i=>(i+1)%photos.length);}}
          style={{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.55)",border:"none",color:"#fff",width:30,height:30,borderRadius:"50%",cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>›</button>
        <div style={{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",display:"flex",gap:5}}>
          {photos.map((_,i)=><div key={i} style={{width:6,height:6,borderRadius:"50%",background:i===idx?"#fff":"rgba(255,255,255,0.3)",transition:"background 0.2s"}}/>)}
        </div>
      </>}
    </div>
  );
};

export default function App() {
  const [cat,setCat]         = useState("Todos");
  const [modal,setModal]     = useState(null);
  const [selSize,setSelSize] = useState(0);
  const [selColor,setSelColor]= useState(0);
  const [qty,setQty]         = useState(1);
  const [screen,setScreen]   = useState("catalog");
  const [cart,setCart]       = useState([]);
  const [form,setForm]       = useState({nome:"",whats:"",cidade:"",obs:""});
  const [sent,setSent]       = useState(false);

  const filtered = PRODUCTS.filter(p=>cat==="Todos"||p.category===cat);
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const openModal = p=>{ setModal(p); setSelSize(0); setSelColor(0); setQty(1); };
  const addToCart = ()=>{ if(!modal) return; setCart(c=>[...c,{product:modal,size:modal.sizes[selSize],color:modal.cores[selColor],qty,id:Date.now()}]); setModal(null); };
  const removeFromCart = id=>setCart(c=>c.filter(i=>i.id!==id));

  const Tag = ({label,color})=>(
    <span className="mn" style={{background:color+"22",color,fontSize:8,fontWeight:700,letterSpacing:1.5,padding:"2px 8px",borderRadius:4,border:`1px solid ${color}44`,display:"inline-block"}}>{label.toUpperCase()}</span>
  );

  // ── CATALOG ──────────────────────────────────────────────────────────────
  const CatalogScreen = ()=>(
    <div style={{padding:"20px 16px 0"}}>
      {/* Header com logo */}
      <div style={{textAlign:"center",marginBottom:20,paddingTop:4}}>
        <Logo size={32}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:10,marginBottom:2}}>
          <div style={{height:1,flex:1,background:`linear-gradient(90deg,transparent,${VERDE}88)`}}/>
          <div style={{width:5,height:5,borderRadius:"50%",background:VINHO}}/>
          <div style={{height:1,flex:1,background:`linear-gradient(90deg,${VERDE}88,transparent)`}}/>
        </div>
        <p className="dm" style={{color:"rgba(255,255,255,0.25)",fontSize:11,marginTop:6,letterSpacing:1}}>Shoppings · Praças · Eventos · Decoração</p>
      </div>

      {/* Categorias */}
      <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,marginBottom:14}}>
        {CATEGORIES.map(c=>(
          <button key={c} className="btn chip mn" onClick={()=>setCat(c)} style={{
            padding:"6px 14px",borderRadius:20,fontSize:9,letterSpacing:1.5,whiteSpace:"nowrap",
            background:cat===c?VERDE:"rgba(255,255,255,0.04)",
            color:cat===c?"#fff":"rgba(255,255,255,0.35)",
            border:cat===c?`1px solid ${VERDE2}`:"1px solid rgba(255,255,255,0.08)",
            fontWeight:cat===c?700:400,
          }}>{c.toUpperCase()}</button>
        ))}
      </div>

      <p className="mn" style={{color:"rgba(255,255,255,0.18)",fontSize:9,letterSpacing:1,marginBottom:12}}>{filtered.length} PRODUTOS</p>

      <div style={{display:"flex",flexDirection:"column",gap:10,paddingBottom:100}}>
        {filtered.map(p=>(
          <div key={p.sku} className="card" onClick={()=>openModal(p)}
            style={{background:CARD,borderRadius:18,overflow:"hidden",border:"1px solid rgba(45,90,39,0.2)"}}>
            <Slider photos={p.photos} height={190}/>
            <div style={{padding:"13px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                <div style={{flex:1}}>
                  <Tag label={p.tag} color={p.tagColor}/>
                  <p className="pf" style={{color:"#fff",fontSize:17,lineHeight:1.2,marginTop:5}}>{p.name}</p>
                  <p className="dm" style={{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:1}}>{p.subtitle}</p>
                </div>
              </div>
              <p className="mn" style={{color:`${VERDE}88`,fontSize:8,letterSpacing:1,marginBottom:8}}>REF: {p.sku} · {p.sizes.length} TAM.</p>
              <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:10}}>
                {p.cores.slice(0,7).map((c,i)=>(
                  <div key={i} title={c.name} style={{width:12,height:12,borderRadius:"50%",background:c.hex,border:c.hex==="#F5F5F0"?"1px solid rgba(255,255,255,0.4)":"none",boxShadow:"0 1px 3px rgba(0,0,0,0.5)"}}/>
                ))}
                <span className="mn" style={{color:"rgba(255,255,255,0.18)",fontSize:8,marginLeft:2}}>{p.cores.length} COR{p.cores.length>1?"ES":""}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <p className="mn" style={{color:"rgba(255,255,255,0.18)",fontSize:8,letterSpacing:1}}>PRAZO MÉDIO</p>
                  <p className="dm" style={{color:"rgba(255,255,255,0.4)",fontSize:11}}>{p.prazo}</p>
                </div>
                <div style={{background:`${VERDE}22`,border:`1px solid ${VERDE}55`,borderRadius:10,padding:"7px 14px"}}>
                  <span className="mn" style={{color:VERDE2,fontSize:10,letterSpacing:1}}>VER DETALHES →</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── ORÇAMENTO ─────────────────────────────────────────────────────────────
  const OrcamentoScreen = ()=>(
    <div style={{padding:"28px 16px 0"}}>
      <button className="btn" onClick={()=>setScreen("catalog")} style={{color:VERDE2,fontSize:12,marginBottom:20,display:"flex",alignItems:"center",gap:6,background:"none",border:"none"}}>← Voltar</button>
      <Logo size={26}/>
      <p className="pf" style={{color:"#fff",fontSize:24,marginTop:12,marginBottom:20}}>Meu Orçamento</p>

      {cart.length===0?(
        <div style={{textAlign:"center",padding:"50px 20px"}}>
          <p style={{fontSize:40,marginBottom:12}}>🎀</p>
          <p className="pf" style={{color:"rgba(255,255,255,0.3)",fontSize:18}}>Nenhum item adicionado</p>
          <p className="dm" style={{color:"rgba(255,255,255,0.2)",fontSize:12,marginTop:6,marginBottom:20}}>Navegue pelo catálogo e adicione produtos</p>
          <button className="btn" onClick={()=>setScreen("catalog")} style={{background:VERDE,color:"#fff",padding:"12px 28px",borderRadius:12,fontWeight:700,fontSize:12,letterSpacing:1}}>VER CATÁLOGO</button>
        </div>
      ):(
        <>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
            {cart.map(item=>(
              <div key={item.id} style={{background:CARD,borderRadius:14,padding:"12px",border:"1px solid rgba(45,90,39,0.2)",display:"flex",gap:10,alignItems:"center"}}>
                <div style={{width:46,height:46,borderRadius:10,overflow:"hidden",flexShrink:0}}>
                  <Img src={item.product.photos[0]} style={{width:"100%",height:"100%"}}/>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <p className="pf" style={{color:"#fff",fontSize:13,marginBottom:2}}>{item.product.name}</p>
                  <p className="mn" style={{color:VERDE2,fontSize:8,letterSpacing:1,marginBottom:3}}>{item.size.ref}</p>
                  <div style={{display:"flex",gap:5,alignItems:"center"}}>
                    <div style={{width:9,height:9,borderRadius:"50%",background:item.color.hex,border:"1px solid rgba(255,255,255,0.2)"}}/>
                    <span className="mn" style={{color:"rgba(255,255,255,0.28)",fontSize:9}}>{item.color.name} · {item.qty}un.</span>
                  </div>
                </div>
                <button className="btn" onClick={()=>removeFromCart(item.id)} style={{color:"rgba(255,80,80,0.4)",fontSize:18,background:"none",border:"none",padding:"4px 8px"}}>✕</button>
              </div>
            ))}
          </div>

          <div style={{background:CARD,borderRadius:16,padding:"18px",border:"1px solid rgba(45,90,39,0.2)",marginBottom:14}}>
            <p className="mn" style={{color:VERDE2,fontSize:9,letterSpacing:2.5,marginBottom:14}}>SEUS DADOS</p>
            {[{key:"nome",label:"Nome / Empresa",ph:"Ex: Shopping Parque D. Pedro"},{key:"whats",label:"WhatsApp",ph:"(11) 99999-9999"},{key:"cidade",label:"Cidade / Estado",ph:"São Paulo, SP"}].map(f=>(
              <div key={f.key} style={{marginBottom:11}}>
                <p className="mn" style={{color:"rgba(255,255,255,0.25)",fontSize:8,letterSpacing:1,marginBottom:4}}>{f.label.toUpperCase()}</p>
                <input value={form[f.key]} onChange={e=>setForm(p=>({...p,[f.key]:e.target.value}))} placeholder={f.ph}
                  style={{width:"100%",padding:"10px 12px",borderRadius:10,color:"#fff",fontSize:13,border:"1px solid rgba(45,90,39,0.3)",background:"rgba(255,255,255,0.03)"}}/>
              </div>
            ))}
            <div>
              <p className="mn" style={{color:"rgba(255,255,255,0.25)",fontSize:8,letterSpacing:1,marginBottom:4}}>OBSERVAÇÕES</p>
              <textarea value={form.obs} onChange={e=>setForm(p=>({...p,obs:e.target.value}))}
                placeholder="Tema, data do evento, quantidades, detalhes especiais..." rows={3}
                style={{width:"100%",padding:"10px 12px",borderRadius:10,color:"#fff",fontSize:13,border:"1px solid rgba(45,90,39,0.3)",background:"rgba(255,255,255,0.03)"}}/>
            </div>
          </div>

          <button className="btn" onClick={()=>{ if(form.nome&&form.whats) setScreen("success"); }}
            style={{width:"100%",background:VERDE,color:"#fff",padding:"17px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,marginBottom:80,boxShadow:`0 4px 20px ${VERDE}55`}}>
            ENVIAR SOLICITAÇÃO DE ORÇAMENTO
          </button>
        </>
      )}
    </div>
  );

  // ── SUCCESS ───────────────────────────────────────────────────────────────
  const SuccessScreen = ()=>(
    <div style={{padding:"60px 32px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:500}}>
      <div style={{width:80,height:80,borderRadius:"50%",background:`${VERDE}22`,border:`2px solid ${VERDE}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:24}}>🎀</div>
      <Logo size={24}/>
      <p className="pf" style={{color:VERDE2,fontSize:22,marginTop:16,marginBottom:8}}>Solicitação enviada!</p>
      <p className="dm" style={{color:"rgba(255,255,255,0.4)",fontSize:13,lineHeight:1.8,marginBottom:32}}>
        Nossa equipe entrará em contato<br/>em até <span style={{color:VERDE2}}>24 horas</span> pelo WhatsApp.
      </p>
      <button className="btn" onClick={()=>{setScreen("catalog");setCart([]);setForm({nome:"",whats:"",cidade:"",obs:""});}}
        style={{background:VERDE,color:"#fff",padding:"14px 32px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:1.5}}>
        VOLTAR AO CATÁLOGO
      </button>
    </div>
  );

  // ── MODAL ─────────────────────────────────────────────────────────────────
  const Modal = ()=>{
    if(!modal) return null;
    const p=modal;
    return(
      <div className="ov" onClick={()=>setModal(null)}>
        <div className="md" onClick={e=>e.stopPropagation()}>
          <Slider photos={p.photos} height={260}/>
          <div style={{padding:"18px 16px 44px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <Tag label={p.tag} color={p.tagColor}/>
              <span className="mn" style={{color:`${VERDE}88`,fontSize:8}}>REF: {p.sku}</span>
            </div>
            <p className="pf" style={{color:"#fff",fontSize:22,marginBottom:2}}>{p.name}</p>
            <p className="dm" style={{color:"rgba(255,255,255,0.3)",fontSize:12,marginBottom:12}}>{p.subtitle}</p>
            <p className="dm" style={{color:"rgba(255,255,255,0.45)",fontSize:13,lineHeight:1.7,marginBottom:16}}>{p.desc}</p>

            <div style={{background:"rgba(45,90,39,0.08)",borderRadius:14,padding:"13px",border:"1px solid rgba(45,90,39,0.2)",marginBottom:16}}>
              <p className="mn" style={{color:VERDE2,fontSize:8,letterSpacing:2.5,marginBottom:10}}>FICHA TÉCNICA</p>
              {[{l:"Composição",v:p.material},{l:"Acabamento",v:p.acabamento},{l:"Aplicação",v:p.aplicacao},{l:"Mínimo",v:p.minimo},{l:"Prazo",v:p.prazo}].map((r,i,arr)=>(
                <div key={i} style={{display:"flex",gap:10,padding:"6px 0",borderBottom:i<arr.length-1?"1px solid rgba(255,255,255,0.04)":"none"}}>
                  <span className="mn" style={{color:"rgba(255,255,255,0.22)",fontSize:9,minWidth:68}}>{r.l}</span>
                  <span className="dm" style={{color:"rgba(255,255,255,0.55)",fontSize:12}}>{r.v}</span>
                </div>
              ))}
            </div>

            <p className="mn" style={{color:"rgba(255,255,255,0.25)",fontSize:8,letterSpacing:2,marginBottom:8}}>TAMANHO</p>
            <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
              {p.sizes.map((s,i)=>(
                <button key={i} className="btn chip" onClick={()=>setSelSize(i)} style={{padding:"8px 10px",borderRadius:10,background:selSize===i?VERDE:"rgba(255,255,255,0.04)",color:selSize===i?"#fff":"rgba(255,255,255,0.45)",border:selSize===i?`1px solid ${VERDE2}`:"1px solid rgba(255,255,255,0.08)",fontSize:10,fontWeight:700,fontFamily:"'DM Mono',monospace"}}>{s.label}</button>
              ))}
            </div>

            <p className="mn" style={{color:"rgba(255,255,255,0.25)",fontSize:8,letterSpacing:2,marginBottom:8}}>COR</p>
            <div style={{display:"flex",gap:7,marginBottom:16,flexWrap:"wrap"}}>
              {p.cores.map((c,i)=>(
                <div key={i} onClick={()=>setSelColor(i)} style={{display:"flex",alignItems:"center",gap:5,padding:"5px 10px",borderRadius:20,cursor:"pointer",background:selColor===i?"rgba(45,90,39,0.2)":"rgba(255,255,255,0.04)",border:selColor===i?`1.5px solid ${VERDE2}`:"1px solid rgba(255,255,255,0.08)",transition:"all 0.15s"}}>
                  <div style={{width:11,height:11,borderRadius:"50%",background:c.hex,flexShrink:0,border:c.hex==="#F5F5F0"?"1px solid rgba(255,255,255,0.3)":"none",boxShadow:"0 1px 3px rgba(0,0,0,0.5)"}}/>
                  <span className="mn" style={{color:selColor===i?VERDE2:"rgba(255,255,255,0.35)",fontSize:9}}>{c.name}</span>
                </div>
              ))}
            </div>

            <div style={{background:"rgba(45,90,39,0.1)",borderRadius:10,padding:"8px 13px",marginBottom:16,display:"flex",justifyContent:"space-between"}}>
              <span className="mn" style={{color:"rgba(255,255,255,0.25)",fontSize:9}}>REF. SELECIONADA</span>
              <span className="mn" style={{color:VERDE2,fontSize:9}}>{p.sizes[selSize].ref} · {p.cores[selColor].name}</span>
            </div>

            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
              <p className="mn" style={{color:"rgba(255,255,255,0.25)",fontSize:8,letterSpacing:2}}>QUANTIDADE</p>
              <div style={{display:"flex",alignItems:"center",gap:12,background:"rgba(255,255,255,0.04)",borderRadius:10,padding:"6px 14px",border:"1px solid rgba(255,255,255,0.08)"}}>
                <button className="btn" onClick={()=>setQty(q=>Math.max(1,q-1))} style={{color:VINHO,fontSize:20,width:24,textAlign:"center",background:"none",border:"none"}}>−</button>
                <span className="mn" style={{color:"#fff",fontSize:15,minWidth:16,textAlign:"center"}}>{qty}</span>
                <button className="btn" onClick={()=>setQty(q=>q+1)} style={{color:VERDE,fontSize:20,width:24,textAlign:"center",background:"none",border:"none"}}>+</button>
              </div>
            </div>

            <button className="btn" onClick={addToCart} style={{width:"100%",background:VERDE,color:"#fff",padding:"16px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,boxShadow:`0 4px 20px ${VERDE}44`}}>
              ADICIONAR AO ORÇAMENTO
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ── SHELL ─────────────────────────────────────────────────────────────────
  return(
    <div style={{minHeight:"100vh",background:"#050505",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif"}}>
      <style>{CSS}</style>
      <TesteImg/>
      <div style={{width:420,height:820,background:DARK,borderRadius:52,overflow:"hidden",display:"flex",flexDirection:"column",position:"relative",
        boxShadow:`0 60px 160px rgba(0,0,0,0.98), 0 0 0 1px ${VERDE}44, inset 0 0 40px rgba(45,90,39,0.03)`}}>
        {/* Status bar */}
        <div style={{padding:"14px 28px 0",display:"flex",justifyContent:"space-between",flexShrink:0}}>
          <span className="mn" style={{color:"rgba(255,255,255,0.15)",fontSize:11}}>9:41</span>
          <div style={{width:70,height:5,background:"rgba(255,255,255,0.06)",borderRadius:3}}/>
          <span style={{color:"rgba(255,255,255,0.15)",fontSize:11}}>●●●</span>
        </div>

        <div style={{flex:1,overflowY:"auto",paddingBottom:80}}>
          {screen==="catalog"   && <CatalogScreen/>}
          {screen==="orcamento" && <OrcamentoScreen/>}
          {screen==="success"   && <SuccessScreen/>}
        </div>

        {/* Bottom nav */}
        {screen!=="success"&&(
          <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(5,5,5,0.98)",backdropFilter:"blur(20px)",borderTop:`1px solid ${VERDE}33`,display:"flex",justifyContent:"space-around",padding:"10px 0 22px"}}>
            {[{id:"catalog",label:"CATÁLOGO",icon:"◆"},{id:"orcamento",label:"ORÇAMENTO",icon:cartCount>0?`(${cartCount})`:"○"}].map(t=>(
              <button key={t.id} className="btn" onClick={()=>setScreen(t.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"4px 20px",background:"none",border:"none"}}>
                <span className="mn" style={{color:screen===t.id?VERDE2:"rgba(255,255,255,0.18)",fontSize:cartCount>0&&t.id==="orcamento"?13:10,fontWeight:cartCount>0&&t.id==="orcamento"?700:400,transition:"color 0.2s"}}>{t.icon}</span>
                <span className="mn" style={{fontSize:8,letterSpacing:1.5,color:screen===t.id?VERDE2:"rgba(255,255,255,0.18)",transition:"color 0.2s"}}>{t.label}</span>
              </button>
            ))}
          </div>
        )}
        <Modal/>
      </div>
    </div>
  );
}
