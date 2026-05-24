import { useState } from "react";

// ── Cores light mode inspiradas no logo ───────────────────────────────────
const VERDE   = "#2D5A27";
const VERDE2  = "#4A7A42";
const VERDES  = "#E8F0E6";  // verde suave fundo
const VINHO   = "#8B1A2A";
const VINHOL  = "#F5E8EA";  // vinho suave fundo
const BG      = "#FAF8F5";  // creme quente
const CARD    = "#FFFFFF";
const CARD2   = "#F5F0EB";
const TEXT    = "#1A1A1A";
const TEXT2   = "#555555";
const TEXT3   = "#888888";
const BORDER  = "#E8E0D8";

// Fotos reais Cloudinary — mapeadas por produto
const CL = "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/";
const F = {
  veludo:        CL+"v1779469881/6645645_dd5hsu.jpg",
  veludo_duplo:  CL+"v1779473535/IMG-20260514-WA0090_sbll3w.jpg",
  ale_grav:      CL+"v1779473529/IMG-20260514-WA0055_czzsdi.jpg",
  ale_lind:      CL+"v1779473526/IMG-20260514-WA0043_adzjdk.jpg",
  ale:           CL+"v1779473531/IMG-20260514-WA0063_ksi7lc.jpg",
  vxadrez:       CL+"v1779473528/IMG-20260514-WA0053_iccnuq.jpg",
  vlistra:       CL+"v1779473527/IMG-20260514-WA0050_wfq7pi.jpg",
  vdourado:      CL+"v1779639514/WhatsApp_Image_2026-05-14_at_09.35.20121_rkokfs.jpg",
  vmeiox:        CL+"v1779469881/34224_qq2r2s.jpg",
  vfita:         CL+"v1779639354/WhatsApp_Image_2026-05-14_at_09.35.28_yhifod.jpg",
  vxdz_central:  CL+"v1779639425/WhatsApp_Image_2026-05-14_at_09.35.3011_xnhc2h.jpg",
  tlistra:       CL+"v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  txadrez:       CL+"v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  tpoa:          CL+"v1779473525/IMG-20260514-WA0042_sfbrs6.jpg",
  lame:          CL+"v1779473531/IMG-20260514-WA0060_vuq21n.jpg",
  lame_duplo:    CL+"v1779473534/IMG-20260514-WA0083_czzytz.jpg",
};

const CORES = {
  vinho:     { name:"Vinho",            hex:"#7B1A2A" },
  vermelho:  { name:"Vermelho",         hex:"#C0392B" },
  verde:     { name:"Verde Floresta",   hex:"#2D5A27" },
  branco:    { name:"Branco",           hex:"#F5F5F0" },
  champagne: { name:"Champagne",        hex:"#C8B89A" },
  dourado:   { name:"Dourado Metálico", hex:"#CFB53B" },
  rosa:      { name:"Rosa Antigo",      hex:"#C9788A" },
  preto:     { name:"Preto",            hex:"#2A2A2A" },
  prata:     { name:"Prata",            hex:"#B8B8C0" },
};

const PRODUCTS = [
  {
    sku:"V", name:"Laço Veludo Vermelho",
    subtitle:"Linha clássica — do 20cm ao 100cm",
    category:"Veludo", material:"100% poliéster",
    acabamento:"Estrutura interna, centro franzido",
    aplicacao:"Árvore / Portal / Painel / Fachada",
    sizes:[{label:"20cm",ref:"20V"},{label:"30cm",ref:"30V"},{label:"40cm",ref:"40V"},{label:"50cm",ref:"50V"},{label:"60cm",ref:"60V"},{label:"80cm",ref:"80V"},{label:"100cm",ref:"100V"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco,CORES.champagne,CORES.preto],
    tag:"Mais Vendido", tagColor:VINHO, tagBg:VINHOL,
    photos:[F.veludo],
    desc:"O clássico da linha. Veludo 100% poliéster com volume generoso e estrutura que mantém o formato. Disponível do 20cm ao 100cm.",
  },
  {
    sku:"VDup", name:"Laço Duplo Veludo Vermelho",
    subtitle:"Volume duplo para impacto máximo",
    category:"Veludo", material:"100% poliéster",
    acabamento:"Dupla camada de veludo, centro reforçado",
    aplicacao:"Topo de árvore grande / Portal / Painel central",
    sizes:[{label:"30cm",ref:"30VDup"},{label:"40cm",ref:"40VDup"},{label:"50cm",ref:"50VDup"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco,CORES.champagne],
    tag:"Volume Extra", tagColor:"#5A1A6A", tagBg:"#F3EAF8",
    photos:[F.veludo_duplo],
    desc:"Laço com dupla camada de veludo que multiplica o volume e o impacto visual. Perfeito para topos de árvores de grande porte.",
  },
  {
    sku:"Val/GL", name:"Laço Veludo Ale — Grav. Longa",
    subtitle:"Cauda longa — efeito cascata na árvore",
    category:"Veludo", material:"100% poliéster",
    acabamento:"Cauda longa dupla, costura francesa",
    aplicacao:"Topo de árvore / Portal / Coluna",
    sizes:[{label:"30cm",ref:"30Val/GL"},{label:"40cm",ref:"40Val/GL"},{label:"50cm",ref:"50Val/GL"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.verde,CORES.rosa,CORES.branco,CORES.champagne],
    tag:"Cauda Longa", tagColor:VERDE, tagBg:VERDES,
    photos:[F.ale_grav],
    desc:"Laço com gravata (cauda) longa que cria efeito cascata ao descer pela árvore ou coluna. Muito procurado para decorações premium.",
  },
  {
    sku:"Val/Lin", name:"Laço Veludo Ale — Lindíssimo",
    subtitle:"Linha premium — até 90cm",
    category:"Veludo", material:"100% poliéster",
    acabamento:"Acabamento premium, volume superior",
    aplicacao:"Shoppings / Praças / Eventos corporativos",
    sizes:[{label:"30cm",ref:"30Val/Lin"},{label:"60cm",ref:"60Val/Lin"},{label:"90cm",ref:"90Val/Lin"}],
    prazo:"10–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco,CORES.champagne,CORES.dourado],
    tag:"Premium", tagColor:"#7A5A00", tagBg:"#FDF5E0",
    photos:[F.ale_lind],
    desc:"O topo da linha Ale. Volume e acabamento superiores, disponível até 90cm. Para decorações onde o impacto visual é prioridade.",
  },
  {
    sku:"VaL", name:"Laço Veludo Ale Vermelho",
    subtitle:"Modelo Ale — perfil arredondado diferenciado",
    category:"Veludo", material:"100% poliéster",
    acabamento:"Perfil arredondado, alças largas",
    aplicacao:"Árvore / Parede / Vitrine",
    sizes:[{label:"30cm",ref:"30VaL"},{label:"40cm",ref:"40VaL"},{label:"50cm",ref:"50VaL"}],
    prazo:"7–15 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho,CORES.verde,CORES.branco],
    tag:"Modelo Ale", tagColor:VERDE, tagBg:VERDES,
    photos:[F.ale],
    desc:"Modelo Ale com perfil diferenciado e alças largas arredondadas. Design exclusivo que se destaca em vitrines e decorações de alto padrão.",
  },
  {
    sku:"VX", name:"Laço Veludo Vermelho / Xadrez",
    subtitle:"Veludo com detalhe xadrez",
    category:"Estampado", material:"90% poliéster / 10% algodão",
    acabamento:"Corpo veludo, gravata xadrez",
    aplicacao:"Árvore / Guirlanda / Decoração rústica",
    sizes:[{label:"20cm",ref:"20VX"},{label:"30cm",ref:"30VX"},{label:"40cm",ref:"40VX"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho],
    tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5",
    photos:[F.vxadrez],
    desc:"Corpo em veludo vermelho com detalhe em xadrez. Perfeito para decorações temáticas com estilo country e rústico.",
  },
  {
    sku:"VL", name:"Laço Veludo Vermelho / Listra",
    subtitle:"Veludo com faixa listrada",
    category:"Estampado", material:"90% poliéster / 10% algodão",
    acabamento:"Corpo veludo, detalhe listrado",
    aplicacao:"Árvore / Guirlanda / Vitrine",
    sizes:[{label:"20cm",ref:"20VL"},{label:"30cm",ref:"30VL"},{label:"40cm",ref:"40VL"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho],
    tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5",
    photos:[F.vlistra],
    desc:"Veludo vermelho com faixa listrada que traz movimento e dinamismo à decoração.",
  },
  {
    sku:"VD", name:"Laço Veludo Vermelho / Dourado",
    subtitle:"Veludo com acabamento dourado",
    category:"Estampado", material:"90% poliéster / 10% algodão",
    acabamento:"Corpo veludo, detalhe dourado",
    aplicacao:"Árvore / Composição premium",
    sizes:[{label:"20cm",ref:"20VD"},{label:"30cm",ref:"30VD"},{label:"40cm",ref:"40VD"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.dourado],
    tag:"Veludo + Ouro", tagColor:"#7A5A00", tagBg:"#FDF5E0",
    photos:[F.vdourado],
    desc:"Combinação sofisticada de veludo vermelho com acabamento dourado. Para composições natalinas de alto padrão.",
  },
  {
    sku:"VXC", name:"Laço Veludo Vermelho / Meio Xadrez",
    subtitle:"Veludo + detalhe xadrez central",
    category:"Estampado", material:"100% poliéster",
    acabamento:"Corpo veludo, centro em xadrez contrastante",
    aplicacao:"Árvore / Guirlanda / Decoração temática",
    sizes:[{label:"20cm",ref:"20VXC"},{label:"30cm",ref:"30VXC"},{label:"40cm",ref:"40VXC"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho],
    tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5",
    photos:[F.vmeiox],
    desc:"Corpo em veludo vermelho com centro decorativo em tecido xadrez. Detalhe que agrega charme à decoração natalina tradicional.",
  },
  {
    sku:"V/FiC", name:"Laço Veludo Vermelho / Fita",
    subtitle:"Veludo com fita decorativa",
    category:"Estampado", material:"100% poliéster",
    acabamento:"Corpo veludo, fita decorativa central",
    aplicacao:"Árvore / Guirlanda / Composição",
    sizes:[{label:"20cm",ref:"20V/FiC"},{label:"30cm",ref:"30V/FiC"},{label:"40cm",ref:"40V/FiC"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.vermelho],
    tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5",
    photos:[F.vfita],
    desc:"Laço de veludo vermelho com fita decorativa. Elegante e versátil para qualquer composição natalina.",
  },
  {
    sku:"VXP", name:"Laço Veludo Verm. XDZ/VM/PT Central",
    subtitle:"Veludo xadrez vermelho e preto",
    category:"Estampado", material:"100% poliéster",
    acabamento:"Xadrez vermelho e preto central",
    aplicacao:"Árvore / Decoração temática",
    sizes:[{label:"20cm",ref:"20VXP"},{label:"30cm",ref:"30VXP"},{label:"40cm",ref:"40VXP"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.preto],
    tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5",
    photos:[F.vxdz_central],
    desc:"Laço com xadrez vermelho e preto no centro. Visual marcante para decorações temáticas e modernas.",
  },
  {
    sku:"TL", name:"Laço Tecido Listra Verm. / Branco",
    subtitle:"Tecido listrado clássico natalino",
    category:"Estampado", material:"100% poliéster",
    acabamento:"Listra vermelho e branco",
    aplicacao:"Árvore / Decoração geral",
    sizes:[{label:"20cm",ref:"20TL"},{label:"30cm",ref:"30TL"},{label:"40cm",ref:"40TL"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vermelho],
    tag:"Tradicional", tagColor:VINHO, tagBg:VINHOL,
    photos:[F.tlistra],
    desc:"Listra vermelho e branco — o clássico natalino em tecido leve e durável.",
  },
  {
    sku:"TX", name:"Laço Tecido Xadrez Verm. / Branco",
    subtitle:"Xadrez vermelho e branco",
    category:"Estampado", material:"100% poliéster",
    acabamento:"Xadrez vermelho e branco",
    aplicacao:"Árvore / Decoração temática",
    sizes:[{label:"20cm",ref:"20TX"},{label:"30cm",ref:"30TX"},{label:"40cm",ref:"40TX"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vermelho],
    tag:"Tradicional", tagColor:VINHO, tagBg:VINHOL,
    photos:[F.txadrez],
    desc:"Xadrez vermelho e branco — charme e tradição para qualquer composição natalina.",
  },
  {
    sku:"TP", name:"Laço Tecido Poá Verm. / Branco",
    subtitle:"Poá vermelho e branco",
    category:"Estampado", material:"100% poliéster",
    acabamento:"Poá vermelho e branco",
    aplicacao:"Árvore / Decoração temática",
    sizes:[{label:"20cm",ref:"20TP"},{label:"30cm",ref:"30TP"},{label:"40cm",ref:"40TP"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.vermelho],
    tag:"Tradicional", tagColor:VINHO, tagBg:VINHOL,
    photos:[F.tpoa],
    desc:"Poá vermelho e branco — alegre e festivo para decorações natalinas tradicionais.",
  },
  {
    sku:"LDR", name:"Laço Lamê Dourado",
    subtitle:"Brilho metálico permanente",
    category:"Lamê", material:"100% poliéster metalizado",
    acabamento:"Costura selada, brilho permanente",
    aplicacao:"Presépio / Arranjos / Composição ouro",
    sizes:[{label:"20cm",ref:"20LDR"},{label:"30cm",ref:"30LDR"},{label:"40cm",ref:"40LDR"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.dourado,CORES.prata],
    tag:"Metálico", tagColor:"#7A5A00", tagBg:"#FDF5E0",
    photos:[F.lame],
    desc:"Tecido lamê metalizado com brilho intenso e permanente. Ideal para presépios e composições douradas.",
  },
  {
    sku:"LDRD", name:"Laço Lamê Dourado Duplo",
    subtitle:"Dupla camada metálica — impacto máximo",
    category:"Lamê", material:"100% poliéster metalizado",
    acabamento:"Dupla camada, brilho intensificado",
    aplicacao:"Presépio / Portal / Decoração central",
    sizes:[{label:"20cm",ref:"20LDRD"},{label:"30cm",ref:"30LDRD"},{label:"40cm",ref:"40LDRD"}],
    prazo:"5–10 dias úteis", minimo:"1 unidade",
    cores:[CORES.dourado,CORES.prata],
    tag:"Duplo Metálico", tagColor:"#7A5A00", tagBg:"#FDF5E0",
    photos:[F.lame_duplo],
    desc:"Versão dupla do Lamê Dourado. Duas camadas que multiplicam o brilho e o volume.",
  },
  {
    sku:"CXPI", name:"Caixa Presente Iluminada",
    subtitle:"Veludo vermelho + LED morno — uso interno",
    category:"Iluminado", material:"Madeira + veludo + fita LED 220V",
    acabamento:"Revestida em veludo vermelho, laço Lamê Dourado",
    aplicacao:"Vitrine / Hall de entrada / Uso interno",
    sizes:[{label:"40×40cm 36W",ref:"CXPI 40X40"},{label:"45×45cm 48W",ref:"CxPI 45X45"},{label:"50×50cm 58W",ref:"CxPI 50X50"}],
    prazo:"10–20 dias úteis", minimo:"1 unidade",
    cores:[CORES.vinho,CORES.dourado],
    tag:"Iluminado", tagColor:"#7A5A00", tagBg:"#FDF5E0",
    photos:[F.veludo, F.lame],
    desc:"Caixa presente revestida em veludo vermelho com laço Lamê Dourado e iluminação LED morna 220V. Consumo de 36W a 58W. Uso interno.",
  },
];

const CATEGORIES = ["Todos","Veludo","Lamê","Estampado","Iluminado"];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  ::-webkit-scrollbar{width:4px;}
  ::-webkit-scrollbar-track{background:#F0EBE5;}
  ::-webkit-scrollbar-thumb{background:#C8B8B0;border-radius:2px;}
  .pf{font-family:'Playfair Display',serif;}
  .dm{font-family:'DM Sans',sans-serif;}
  .mn{font-family:'DM Mono',monospace;}
  .btn{cursor:pointer;border:none;transition:all 0.18s;font-family:'DM Sans',sans-serif;}
  .btn:active{transform:scale(0.97);}
  .card{transition:transform 0.2s,box-shadow 0.2s;cursor:pointer;}
  .card:hover{transform:translateY(-3px);box-shadow:0 8px 32px rgba(139,26,42,0.12);}
  .chip{cursor:pointer;transition:all 0.15s;}
  .ov{position:fixed;inset:0;background:rgba(30,15,15,0.6);display:flex;align-items:flex-end;justify-content:center;z-index:200;backdrop-filter:blur(8px);}
  .md{background:#FAF8F5;border-radius:28px 28px 0 0;width:100%;max-width:420px;max-height:94vh;overflow-y:auto;border-top:2px solid #2D5A27;}
  input{outline:none;font-family:'DM Sans',sans-serif;background:none;}
  input::placeholder{color:#B8A8A0;}
  textarea{outline:none;resize:none;font-family:'DM Sans',sans-serif;background:none;}
  textarea::placeholder{color:#B8A8A0;}
`;

const Logo = () => (
  <svg width="200" height="44" viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27" letterSpacing="-1">laço</text>
    <text x="118" y="66" fontFamily="Georgia,serif" fontSize="58" fontStyle="italic" fill="#8B1A2A">&</text>
    <text x="148" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27" letterSpacing="-1">entrelaço</text>
  </svg>
);

const Img = ({src, style}) => {
  const [err,setErr] = useState(false);
  if(err) return <div style={{...style,background:CARD2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32}}>🎀</div>;
  return <img src={src} alt="" style={{...style,objectFit:"cover",display:"block"}} onError={()=>setErr(true)}/>;
};

const Slider = ({photos, height=200}) => {
  const [idx,setIdx] = useState(0);
  if(!photos?.length) return <div style={{width:"100%",height,background:CARD2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32}}>🎀</div>;
  return(
    <div style={{position:"relative",width:"100%",height,overflow:"hidden",background:CARD2}}>
      <Img src={photos[idx]} style={{width:"100%",height:"100%"}}/>
      {photos.length>1&&<>
        <button onClick={e=>{e.stopPropagation();setIdx(i=>(i-1+photos.length)%photos.length);}}
          style={{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.85)",border:"none",color:TEXT,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>‹</button>
        <button onClick={e=>{e.stopPropagation();setIdx(i=>(i+1)%photos.length);}}
          style={{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.85)",border:"none",color:TEXT,width:28,height:28,borderRadius:"50%",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>›</button>
        <div style={{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",display:"flex",gap:5}}>
          {photos.map((_,i)=><div key={i} style={{width:6,height:6,borderRadius:"50%",background:i===idx?"#fff":"rgba(255,255,255,0.5)",boxShadow:"0 1px 3px rgba(0,0,0,0.3)",transition:"background 0.2s"}}/>)}
        </div>
      </>}
    </div>
  );
};

const Tag = ({label,color,bg})=>(
  <span className="mn" style={{background:bg,color,fontSize:8,fontWeight:700,letterSpacing:1.5,padding:"3px 8px",borderRadius:4,border:`1px solid ${color}33`,display:"inline-block"}}>{label.toUpperCase()}</span>
);

export default function App() {
  const [cat,setCat]           = useState("Todos");
  const [modal,setModal]       = useState(null);
  const [selSize,setSelSize]   = useState(0);
  const [selColor,setSelColor] = useState(0);
  const [qty,setQty]           = useState(1);
  const [screen,setScreen]     = useState("catalog");
  const [cart,setCart]         = useState([]);
  const [form,setForm]         = useState({nome:"",whats:"",cidade:"",obs:""});

  const filtered = PRODUCTS.filter(p=>cat==="Todos"||p.category===cat);
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const openModal = p=>{ setModal(p); setSelSize(0); setSelColor(0); setQty(1); };
  const addToCart = ()=>{ if(!modal) return; setCart(c=>[...c,{product:modal,size:modal.sizes[selSize],color:modal.cores[selColor],qty,id:Date.now()}]); setModal(null); };
  const removeFromCart = id=>setCart(c=>c.filter(i=>i.id!==id));
  const sendOrcamento = ()=>{ if(form.nome&&form.whats) setScreen("success"); };

  const CatalogScreen = ()=>(
    <div style={{padding:"20px 16px 0"}}>
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:22,paddingTop:4}}>
        <Logo/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:10,marginBottom:6}}>
          <div style={{height:1,flex:1,background:`linear-gradient(90deg,transparent,${VERDE}55)`}}/>
          <div style={{width:4,height:4,borderRadius:"50%",background:VINHO}}/>
          <div style={{height:1,flex:1,background:`linear-gradient(90deg,${VERDE}55,transparent)`}}/>
        </div>
        <p className="dm" style={{color:TEXT3,fontSize:11,letterSpacing:1}}>Shoppings · Praças · Eventos · Decoração</p>
      </div>

      {/* Categorias */}
      <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,marginBottom:14}}>
        {CATEGORIES.map(c=>(
          <button key={c} className="btn chip mn" onClick={()=>setCat(c)} style={{
            padding:"6px 14px",borderRadius:20,fontSize:9,letterSpacing:1.5,whiteSpace:"nowrap",
            background:cat===c?VERDE:CARD,
            color:cat===c?"#fff":TEXT3,
            border:cat===c?`1px solid ${VERDE2}`:`1px solid ${BORDER}`,
            fontWeight:cat===c?700:400,
            boxShadow:cat===c?"0 2px 8px rgba(45,90,39,0.2)":"none",
          }}>{c.toUpperCase()}</button>
        ))}
      </div>

      <p className="mn" style={{color:TEXT3,fontSize:9,letterSpacing:1,marginBottom:12}}>{filtered.length} PRODUTOS</p>

      <div style={{display:"flex",flexDirection:"column",gap:12,paddingBottom:100}}>
        {filtered.map(p=>(
          <div key={p.sku} className="card" onClick={()=>openModal(p)}
            style={{background:CARD,borderRadius:18,overflow:"hidden",border:`1px solid ${BORDER}`,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
            <Slider photos={p.photos} height={190}/>
            <div style={{padding:"14px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                <div style={{flex:1}}>
                  <Tag label={p.tag} color={p.tagColor} bg={p.tagBg}/>
                  <p className="pf" style={{color:TEXT,fontSize:17,lineHeight:1.2,marginTop:6}}>{p.name}</p>
                  <p className="dm" style={{color:TEXT3,fontSize:11,marginTop:2}}>{p.subtitle}</p>
                </div>
              </div>
              <p className="mn" style={{color:VERDE2,fontSize:8,letterSpacing:1,marginBottom:8,opacity:0.7}}>REF: {p.sku} · {p.sizes.length} TAM.</p>

              {/* Cores */}
              <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:12}}>
                {p.cores.slice(0,7).map((c,i)=>(
                  <div key={i} title={c.name} style={{width:13,height:13,borderRadius:"50%",background:c.hex,border:c.hex==="#F5F5F0"?`1px solid ${BORDER}`:"none",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/>
                ))}
                <span className="mn" style={{color:TEXT3,fontSize:8,marginLeft:2}}>{p.cores.length} CORES</span>
              </div>

              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${BORDER}`}}>
                <div>
                  <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1}}>PRAZO</p>
                  <p className="dm" style={{color:TEXT2,fontSize:11,marginTop:2}}>{p.prazo}</p>
                </div>
                <div style={{background:VERDE,borderRadius:10,padding:"8px 16px",boxShadow:"0 2px 8px rgba(45,90,39,0.25)"}}>
                  <span className="mn" style={{color:"#fff",fontSize:10,letterSpacing:1}}>VER DETALHES →</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const OrcamentoScreen = ()=>(
    <div style={{padding:"28px 16px 0"}}>
      <button className="btn" onClick={()=>setScreen("catalog")} style={{color:VERDE,fontSize:12,marginBottom:20,display:"flex",alignItems:"center",gap:6,background:"none",border:"none",fontWeight:600}}>← Voltar</button>
      <Logo/>
      <p className="pf" style={{color:TEXT,fontSize:24,marginTop:12,marginBottom:20}}>Meu Orçamento</p>

      {cart.length===0?(
        <div style={{textAlign:"center",padding:"50px 20px"}}>
          <p style={{fontSize:48,marginBottom:12}}>🎀</p>
          <p className="pf" style={{color:TEXT2,fontSize:18}}>Nenhum item adicionado</p>
          <p className="dm" style={{color:TEXT3,fontSize:12,marginTop:6,marginBottom:24}}>Navegue pelo catálogo e adicione produtos</p>
          <button className="btn" onClick={()=>setScreen("catalog")} style={{background:VERDE,color:"#fff",padding:"12px 28px",borderRadius:12,fontWeight:700,fontSize:12,letterSpacing:1,boxShadow:"0 2px 8px rgba(45,90,39,0.3)"}}>VER CATÁLOGO</button>
        </div>
      ):(
        <>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
            {cart.map(item=>(
              <div key={item.id} style={{background:CARD,borderRadius:14,padding:"12px",border:`1px solid ${BORDER}`,display:"flex",gap:10,alignItems:"center",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                <div style={{width:46,height:46,borderRadius:10,overflow:"hidden",flexShrink:0,border:`1px solid ${BORDER}`}}>
                  <Img src={item.product.photos[0]} style={{width:"100%",height:"100%"}}/>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <p className="pf" style={{color:TEXT,fontSize:13,marginBottom:2}}>{item.product.name}</p>
                  <p className="mn" style={{color:VERDE,fontSize:8,letterSpacing:1,marginBottom:3}}>{item.size.ref}</p>
                  <div style={{display:"flex",gap:5,alignItems:"center"}}>
                    <div style={{width:9,height:9,borderRadius:"50%",background:item.color.hex,border:`1px solid ${BORDER}`}}/>
                    <span className="mn" style={{color:TEXT3,fontSize:9}}>{item.color.name} · {item.qty}un.</span>
                  </div>
                </div>
                <button className="btn" onClick={()=>removeFromCart(item.id)} style={{color:"#C0392B",fontSize:16,background:"none",border:"none",padding:"4px 8px",opacity:0.6}}>✕</button>
              </div>
            ))}
          </div>

          <div style={{background:CARD,borderRadius:16,padding:"18px",border:`1px solid ${BORDER}`,marginBottom:14,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
            <p className="mn" style={{color:VERDE,fontSize:9,letterSpacing:2.5,marginBottom:14}}>SEUS DADOS</p>
            {[{key:"nome",label:"Nome / Empresa",ph:"Ex: Shopping Parque D. Pedro"},{key:"whats",label:"WhatsApp",ph:"(11) 99999-9999"},{key:"cidade",label:"Cidade / Estado",ph:"São Paulo, SP"}].map(f=>(
              <div key={f.key} style={{marginBottom:11}}>
                <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:4}}>{f.label.toUpperCase()}</p>
                <input value={form[f.key]} onChange={e=>setForm(p=>({...p,[f.key]:e.target.value}))} placeholder={f.ph}
                  style={{width:"100%",padding:"10px 12px",borderRadius:10,color:TEXT,fontSize:13,border:`1px solid ${BORDER}`,background:BG}}/>
              </div>
            ))}
            <div>
              <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:4}}>OBSERVAÇÕES</p>
              <textarea value={form.obs} onChange={e=>setForm(p=>({...p,obs:e.target.value}))}
                placeholder="Tema, data do evento, quantidades, detalhes especiais..." rows={3}
                style={{width:"100%",padding:"10px 12px",borderRadius:10,color:TEXT,fontSize:13,border:`1px solid ${BORDER}`,background:BG}}/>
            </div>
          </div>

          <button className="btn" onClick={sendOrcamento}
            style={{width:"100%",background:VERDE,color:"#fff",padding:"17px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,marginBottom:80,boxShadow:"0 4px 16px rgba(45,90,39,0.3)"}}>
            ENVIAR SOLICITAÇÃO DE ORÇAMENTO
          </button>
        </>
      )}
    </div>
  );

  const SuccessScreen = ()=>(
    <div style={{padding:"60px 32px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:500}}>
      <div style={{width:80,height:80,borderRadius:"50%",background:VERDES,border:`2px solid ${VERDE}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:24}}>🎀</div>
      <Logo/>
      <p className="pf" style={{color:VERDE,fontSize:22,marginTop:16,marginBottom:8}}>Solicitação enviada!</p>
      <p className="dm" style={{color:TEXT2,fontSize:13,lineHeight:1.8,marginBottom:32}}>
        Nossa equipe entrará em contato<br/>em até <span style={{color:VERDE,fontWeight:600}}>24 horas</span> pelo WhatsApp.
      </p>
      <button className="btn" onClick={()=>{setScreen("catalog");setCart([]);setForm({nome:"",whats:"",cidade:"",obs:""}); }}
        style={{background:VERDE,color:"#fff",padding:"14px 32px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:1.5,boxShadow:"0 4px 16px rgba(45,90,39,0.3)"}}>
        VOLTAR AO CATÁLOGO
      </button>
    </div>
  );

  const Modal = ()=>{
    if(!modal) return null;
    const p=modal;
    return(
      <div className="ov" onClick={()=>setModal(null)}>
        <div className="md" onClick={e=>e.stopPropagation()}>
          <div style={{borderRadius:"28px 28px 0 0",overflow:"hidden"}}>
            <Slider photos={p.photos} height={260}/>
          </div>
          <div style={{padding:"18px 16px 44px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <Tag label={p.tag} color={p.tagColor} bg={p.tagBg}/>
              <span className="mn" style={{color:TEXT3,fontSize:8}}>REF: {p.sku}</span>
            </div>
            <p className="pf" style={{color:TEXT,fontSize:22,marginBottom:2}}>{p.name}</p>
            <p className="dm" style={{color:TEXT3,fontSize:12,marginBottom:12}}>{p.subtitle}</p>
            <p className="dm" style={{color:TEXT2,fontSize:13,lineHeight:1.7,marginBottom:16}}>{p.desc}</p>

            {/* Ficha técnica */}
            <div style={{background:VERDES,borderRadius:14,padding:"14px",border:`1px solid ${VERDE}22`,marginBottom:16}}>
              <p className="mn" style={{color:VERDE,fontSize:8,letterSpacing:2.5,marginBottom:10}}>FICHA TÉCNICA</p>
              {[{l:"Composição",v:p.material},{l:"Acabamento",v:p.acabamento},{l:"Aplicação",v:p.aplicacao},{l:"Mínimo",v:p.minimo},{l:"Prazo",v:p.prazo}].map((r,i,arr)=>(
                <div key={i} style={{display:"flex",gap:10,padding:"6px 0",borderBottom:i<arr.length-1?`1px solid ${VERDE}18`:"none"}}>
                  <span className="mn" style={{color:TEXT3,fontSize:9,minWidth:70}}>{r.l}</span>
                  <span className="dm" style={{color:TEXT2,fontSize:12}}>{r.v}</span>
                </div>
              ))}
            </div>

            {/* Tamanho */}
            <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2,marginBottom:8}}>TAMANHO</p>
            <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
              {p.sizes.map((s,i)=>(
                <button key={i} className="btn chip" onClick={()=>setSelSize(i)} style={{
                  padding:"8px 10px",borderRadius:10,
                  background:selSize===i?VERDE:CARD,
                  color:selSize===i?"#fff":TEXT2,
                  border:selSize===i?`1px solid ${VERDE2}`:`1px solid ${BORDER}`,
                  fontSize:10,fontWeight:700,fontFamily:"'DM Mono',monospace",
                  boxShadow:selSize===i?"0 2px 8px rgba(45,90,39,0.2)":"0 1px 3px rgba(0,0,0,0.06)",
                }}>{s.label}</button>
              ))}
            </div>

            {/* Cor */}
            <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2,marginBottom:8}}>COR</p>
            <div style={{display:"flex",gap:7,marginBottom:16,flexWrap:"wrap"}}>
              {p.cores.map((c,i)=>(
                <div key={i} onClick={()=>setSelColor(i)} style={{
                  display:"flex",alignItems:"center",gap:6,padding:"6px 10px",borderRadius:20,cursor:"pointer",
                  background:selColor===i?VERDES:CARD,
                  border:selColor===i?`1.5px solid ${VERDE}`:`1px solid ${BORDER}`,
                  boxShadow:selColor===i?"0 2px 6px rgba(45,90,39,0.15)":"0 1px 3px rgba(0,0,0,0.06)",
                  transition:"all 0.15s",
                }}>
                  <div style={{width:12,height:12,borderRadius:"50%",background:c.hex,flexShrink:0,border:`1px solid ${BORDER}`,boxShadow:"0 1px 3px rgba(0,0,0,0.15)"}}/>
                  <span className="mn" style={{color:selColor===i?VERDE:TEXT2,fontSize:9,fontWeight:selColor===i?700:400}}>{c.name}</span>
                </div>
              ))}
            </div>

            {/* REF selecionada */}
            <div style={{background:CARD2,borderRadius:10,padding:"8px 13px",marginBottom:16,display:"flex",justifyContent:"space-between",border:`1px solid ${BORDER}`}}>
              <span className="mn" style={{color:TEXT3,fontSize:9}}>REF. SELECIONADA</span>
              <span className="mn" style={{color:VERDE,fontSize:9,fontWeight:700}}>{p.sizes[selSize].ref} · {p.cores[selColor].name}</span>
            </div>

            {/* Qty */}
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
              <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2}}>QUANTIDADE</p>
              <div style={{display:"flex",alignItems:"center",gap:12,background:CARD,borderRadius:10,padding:"6px 14px",border:`1px solid ${BORDER}`,boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
                <button className="btn" onClick={()=>setQty(q=>Math.max(1,q-1))} style={{color:VINHO,fontSize:20,width:24,textAlign:"center",background:"none",border:"none",fontWeight:700}}>−</button>
                <span className="mn" style={{color:TEXT,fontSize:15,minWidth:16,textAlign:"center",fontWeight:700}}>{qty}</span>
                <button className="btn" onClick={()=>setQty(q=>q+1)} style={{color:VERDE,fontSize:20,width:24,textAlign:"center",background:"none",border:"none",fontWeight:700}}>+</button>
              </div>
            </div>

            <button className="btn" onClick={addToCart}
              style={{width:"100%",background:VERDE,color:"#fff",padding:"16px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,boxShadow:"0 4px 16px rgba(45,90,39,0.3)"}}>
              ADICIONAR AO ORÇAMENTO
            </button>
          </div>
        </div>
      </div>
    );
  };

  return(
    <div style={{minHeight:"100vh",background:"#EDE8E0",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif",padding:"20px 0"}}>
      <style>{CSS}</style>
      <div style={{width:"100%",maxWidth:420,minHeight:820,background:BG,borderRadius:32,overflow:"hidden",display:"flex",flexDirection:"column",position:"relative",
        boxShadow:"0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(45,90,39,0.12)"}}>

        {/* Status bar */}
        <div style={{padding:"14px 28px 0",display:"flex",justifyContent:"space-between",flexShrink:0,background:BG}}>
          <span className="mn" style={{color:TEXT3,fontSize:11}}>9:41</span>
          <div style={{width:70,height:5,background:BORDER,borderRadius:3}}/>
          <span style={{color:TEXT3,fontSize:11}}>●●●</span>
        </div>

        <div style={{flex:1,overflowY:"auto",paddingBottom:80}}>
          {screen==="catalog"   && <CatalogScreen/>}
          {screen==="orcamento" && <OrcamentoScreen/>}
          {screen==="success"   && <SuccessScreen/>}
        </div>

        {/* Bottom nav */}
        {screen!=="success"&&(
          <div style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(250,248,245,0.97)",backdropFilter:"blur(20px)",borderTop:`1px solid ${BORDER}`,display:"flex",justifyContent:"space-around",padding:"10px 0 22px",boxShadow:"0 -4px 20px rgba(0,0,0,0.06)"}}>
            {[{id:"catalog",label:"CATÁLOGO",icon:"◆"},{id:"orcamento",label:"ORÇAMENTO",icon:cartCount>0?`(${cartCount})`:"○"}].map(t=>(
              <button key={t.id} className="btn" onClick={()=>setScreen(t.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"4px 20px",background:"none",border:"none"}}>
                <span className="mn" style={{color:screen===t.id?VERDE:TEXT3,fontSize:cartCount>0&&t.id==="orcamento"?13:10,fontWeight:cartCount>0&&t.id==="orcamento"?700:400,transition:"color 0.2s"}}>{t.icon}</span>
                <span className="mn" style={{fontSize:8,letterSpacing:1.5,color:screen===t.id?VERDE:TEXT3,transition:"color 0.2s"}}>{t.label}</span>
              </button>
            ))}
          </div>
        )}
        <Modal/>
      </div>
    </div>
  );
}
