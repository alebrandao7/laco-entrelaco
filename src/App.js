import { useState, useCallback } from "react";

const VERDE  = "#2D5A27";
const VERDE2 = "#4A7A42";
const VERDES = "#E8F0E6";
const VINHO  = "#8B1A2A";
const VINHOL = "#F5E8EA";
const BG     = "#FAF8F5";
const CARD   = "#FFFFFF";
const CARD2  = "#F5F0EB";
const TEXT   = "#1A1A1A";
const TEXT2  = "#555555";
const TEXT3  = "#888888";
const BORDER = "#E8E0D8";

const CL = "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/";

const F = {
  veludo:       CL+"v1779469881/6645645_dd5hsu.jpg",
  veludo_duplo: CL+"v1779473535/IMG-20260514-WA0090_sbll3w.jpg",
  ale_grav:     CL+"v1779473529/IMG-20260514-WA0055_czzsdi.jpg",
  ale_lind:     CL+"v1779473526/IMG-20260514-WA0043_adzjdk.jpg",
  ale:          CL+"v1779473531/IMG-20260514-WA0063_ksi7lc.jpg",
  vxadrez:      CL+"v1779473528/IMG-20260514-WA0053_iccnuq.jpg",
  vlistra:      CL+"v1779473527/IMG-20260514-WA0050_wfq7pi.jpg",
  vdourado:     CL+"v1779639514/WhatsApp_Image_2026-05-14_at_09.35.20121_rkokfs.jpg",
  vmeiox:       CL+"v1779469881/34224_qq2r2s.jpg",
  vfita:        CL+"v1779639354/WhatsApp_Image_2026-05-14_at_09.35.28_yhifod.jpg",
  vxdz_central: CL+"v1779639425/WhatsApp_Image_2026-05-14_at_09.35.3011_xnhc2h.jpg",
  tlistra:      CL+"v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  txadrez:      CL+"v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  tpoa:         CL+"v1779473525/IMG-20260514-WA0042_sfbrs6.jpg",
  lame:         CL+"v1779473531/IMG-20260514-WA0060_vuq21n.jpg",
  lame_duplo:   CL+"v1779473534/IMG-20260514-WA0083_czzytz.jpg",
};

const coresVeludo = [
  { name:"Vermelho",         hex:"#C0392B", photo: CL+"v1779473532/IMG-20260514-WA0064_bv6xju.jpg" },
  { name:"Verde Floresta",   hex:"#2D5A27", photo: CL+"v1779639907/Gemini_Generated_Image_v2pj4xv2pj4xv2pj_puo5i7.png" },
  { name:"Branco",           hex:"#F5F5F0", photo: CL+"v1779646241/Gemini_Generated_Image_c8rr8dc8rr8dc8rr3231_gopcdt.png" },
  { name:"Champagne",        hex:"#C8B89A", photo: CL+"v1779640036/Gemini_Generated_Image_u7t6dbu7t6dbu7t6_oj0uw2.png" },
  { name:"Dourado Metálico", hex:"#CFB53B", photo: CL+"v1779646240/Gemini_Generated_Image_c8rr8dc8rr8dc8rr543_sgwa0f.png" },
];
const coresPadrao = [
  { name:"Vermelho",         hex:"#C0392B" },
  { name:"Verde Floresta",   hex:"#2D5A27" },
  { name:"Branco",           hex:"#F5F5F0" },
  { name:"Champagne",        hex:"#C8B89A" },
  { name:"Dourado Metálico", hex:"#CFB53B" },
];
const coresLame = [
  { name:"Dourado Metálico", hex:"#CFB53B" },
  { name:"Prata",            hex:"#B8B8C0" },
];

const VENDEDORES = ["Ana Paula","Carlos","Fernanda","João","Mariana","Ricardo"];

// Pedido mínimo por produto (edite aqui)
const MINIMO_REAIS = 2000;
const MINIMO_QTD = {
  "V": 5, "VDup": 3, "Val/GL": 3, "Val/Lin": 2, "VaL": 3,
  "VX": 5, "VL": 5, "VD": 5, "VXC": 5, "V/FiC": 5,
  "VXP": 5, "TL": 5, "TX": 5, "TP": 5,
  "LDR": 5, "LDRD": 3, "CXPI": 1,
};

const PRODUCTS = [
  { sku:"V",       name:"Laço Veludo Vermelho",          subtitle:"Linha clássica — do 20cm ao 100cm",  category:"Veludo",   material:"100% poliéster",                  acabamento:"Estrutura interna, centro franzido",     aplicacao:"Árvore / Portal / Painel / Fachada",     sizes:[{label:"20cm",ref:"20V"},{label:"30cm",ref:"30V"},{label:"40cm",ref:"40V"},{label:"50cm",ref:"50V"},{label:"60cm",ref:"60V"},{label:"80cm",ref:"80V"},{label:"100cm",ref:"100V"}], prazo:"7–15 dias úteis", cores:coresVeludo,  tag:"Mais Vendido",  tagColor:VINHO,      tagBg:VINHOL,       photo:F.veludo,       desc:"O clássico da linha. Veludo 100% poliéster com volume generoso e estrutura que mantém o formato." },
  { sku:"VDup",    name:"Laço Duplo Veludo Vermelho",     subtitle:"Volume duplo para impacto máximo",   category:"Veludo",   material:"100% poliéster",                  acabamento:"Dupla camada de veludo, centro reforçado",aplicacao:"Topo de árvore grande / Portal",         sizes:[{label:"30cm",ref:"30VDup"},{label:"40cm",ref:"40VDup"},{label:"50cm",ref:"50VDup"}],                                                                                         prazo:"7–15 dias úteis", cores:coresPadrao,  tag:"Volume Extra",  tagColor:"#5A1A6A",  tagBg:"#F3EAF8",    photo:F.veludo_duplo, desc:"Laço com dupla camada de veludo que multiplica o volume e o impacto visual." },
  { sku:"Val/GL",  name:"Laço Veludo Ale — Grav. Longa",  subtitle:"Cauda longa — efeito cascata",       category:"Veludo",   material:"100% poliéster",                  acabamento:"Cauda longa dupla, costura francesa",    aplicacao:"Topo de árvore / Portal / Coluna",       sizes:[{label:"30cm",ref:"30Val/GL"},{label:"40cm",ref:"40Val/GL"},{label:"50cm",ref:"50Val/GL"}],                                                                                  prazo:"7–15 dias úteis", cores:coresPadrao,  tag:"Cauda Longa",   tagColor:VERDE,      tagBg:VERDES,       photo:F.ale_grav,     desc:"Laço com gravata longa que cria efeito cascata ao descer pela árvore ou coluna." },
  { sku:"Val/Lin", name:"Laço Veludo Ale — Lindíssimo",   subtitle:"Linha premium — até 90cm",           category:"Veludo",   material:"100% poliéster",                  acabamento:"Acabamento premium, volume superior",    aplicacao:"Shoppings / Praças / Eventos",           sizes:[{label:"30cm",ref:"30Val/Lin"},{label:"60cm",ref:"60Val/Lin"},{label:"90cm",ref:"90Val/Lin"}],                                                                               prazo:"10–15 dias úteis",cores:coresPadrao,  tag:"Premium",       tagColor:"#7A5A00",  tagBg:"#FDF5E0",    photo:F.ale_lind,     desc:"O topo da linha Ale. Volume e acabamento superiores, disponível até 90cm." },
  { sku:"VaL",     name:"Laço Veludo Ale Vermelho",        subtitle:"Modelo Ale — perfil arredondado",    category:"Veludo",   material:"100% poliéster",                  acabamento:"Perfil arredondado, alças largas",       aplicacao:"Árvore / Parede / Vitrine",              sizes:[{label:"30cm",ref:"30VaL"},{label:"40cm",ref:"40VaL"},{label:"50cm",ref:"50VaL"}],                                                                                          prazo:"7–15 dias úteis", cores:coresPadrao,  tag:"Modelo Ale",    tagColor:VERDE,      tagBg:VERDES,       photo:F.ale,          desc:"Modelo Ale com perfil diferenciado e alças largas arredondadas." },
  { sku:"VX",      name:"Laço Veludo Verm. / Xadrez",     subtitle:"Veludo com detalhe xadrez",          category:"Estampado",material:"90% poliéster / 10% algodão",     acabamento:"Corpo veludo, gravata xadrez",           aplicacao:"Árvore / Guirlanda / Rústico",           sizes:[{label:"20cm",ref:"20VX"},{label:"30cm",ref:"30VX"},{label:"40cm",ref:"40VX"}],                                                                                              prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5", photo:F.vxadrez,     desc:"Corpo em veludo vermelho com detalhe em xadrez." },
  { sku:"VL",      name:"Laço Veludo Verm. / Listra",     subtitle:"Veludo com faixa listrada",          category:"Estampado",material:"90% poliéster / 10% algodão",     acabamento:"Corpo veludo, detalhe listrado",         aplicacao:"Árvore / Guirlanda / Vitrine",           sizes:[{label:"20cm",ref:"20VL"},{label:"30cm",ref:"30VL"},{label:"40cm",ref:"40VL"}],                                                                                              prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5", photo:F.vlistra,     desc:"Veludo vermelho com faixa listrada." },
  { sku:"VD",      name:"Laço Veludo Verm. / Dourado",    subtitle:"Veludo com acabamento dourado",      category:"Estampado",material:"90% poliéster / 10% algodão",     acabamento:"Corpo veludo, detalhe dourado",          aplicacao:"Árvore / Composição premium",            sizes:[{label:"20cm",ref:"20VD"},{label:"30cm",ref:"30VD"},{label:"40cm",ref:"40VD"}],                                                                                              prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"},{name:"Dourado",hex:"#CFB53B"}], tag:"Veludo+Ouro", tagColor:"#7A5A00", tagBg:"#FDF5E0", photo:F.vdourado, desc:"Veludo vermelho com acabamento dourado." },
  { sku:"VXC",     name:"Laço Veludo Verm. / Meio Xadrez",subtitle:"Veludo + xadrez central",            category:"Estampado",material:"100% poliéster",                  acabamento:"Corpo veludo, centro xadrez",            aplicacao:"Árvore / Guirlanda / Temático",          sizes:[{label:"20cm",ref:"20VXC"},{label:"30cm",ref:"30VXC"},{label:"40cm",ref:"40VXC"}],                                                                                           prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5", photo:F.vmeiox,      desc:"Corpo em veludo vermelho com centro decorativo em xadrez." },
  { sku:"V/FiC",   name:"Laço Veludo Verm. / Fita",       subtitle:"Veludo com fita decorativa",         category:"Estampado",material:"100% poliéster",                  acabamento:"Corpo veludo, fita decorativa",          aplicacao:"Árvore / Guirlanda / Composição",        sizes:[{label:"20cm",ref:"20V/FiC"},{label:"30cm",ref:"30V/FiC"},{label:"40cm",ref:"40V/FiC"}],                                                                                     prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5", photo:F.vfita,       desc:"Laço de veludo vermelho com fita decorativa." },
  { sku:"VXP",     name:"Laço Veludo XDZ/VM/PT Central",  subtitle:"Xadrez vermelho e preto",            category:"Estampado",material:"100% poliéster",                  acabamento:"Xadrez vermelho e preto central",        aplicacao:"Árvore / Temático",                      sizes:[{label:"20cm",ref:"20VXP"},{label:"30cm",ref:"30VXP"},{label:"40cm",ref:"40VXP"}],                                                                                           prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"},{name:"Preto",hex:"#2A2A2A"}], tag:"Estampado", tagColor:"#7A4A1A", tagBg:"#FDF0E5", photo:F.vxdz_central,desc:"Xadrez vermelho e preto no centro." },
  { sku:"TL",      name:"Laço Tecido Listra Verm./Branco",subtitle:"Listrado clássico natalino",         category:"Estampado",material:"100% poliéster",                  acabamento:"Listra vermelho e branco",               aplicacao:"Árvore / Decoração geral",               sizes:[{label:"20cm",ref:"20TL"},{label:"30cm",ref:"30TL"},{label:"40cm",ref:"40TL"}],                                                                                              prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Tradicional", tagColor:VINHO, tagBg:VINHOL, photo:F.tlistra,     desc:"Listra vermelho e branco — clássico natalino." },
  { sku:"TX",      name:"Laço Tecido Xadrez Verm./Branco",subtitle:"Xadrez vermelho e branco",           category:"Estampado",material:"100% poliéster",                  acabamento:"Xadrez vermelho e branco",               aplicacao:"Árvore / Temático",                      sizes:[{label:"20cm",ref:"20TX"},{label:"30cm",ref:"30TX"},{label:"40cm",ref:"40TX"}],                                                                                              prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Tradicional", tagColor:VINHO, tagBg:VINHOL, photo:F.txadrez,     desc:"Xadrez vermelho e branco." },
  { sku:"TP",      name:"Laço Tecido Poá Verm./Branco",   subtitle:"Poá vermelho e branco",              category:"Estampado",material:"100% poliéster",                  acabamento:"Poá vermelho e branco",                  aplicacao:"Árvore / Temático",                      sizes:[{label:"20cm",ref:"20TP"},{label:"30cm",ref:"30TP"},{label:"40cm",ref:"40TP"}],                                                                                              prazo:"5–10 dias úteis", cores:[{name:"Vermelho",hex:"#C0392B"}], tag:"Tradicional", tagColor:VINHO, tagBg:VINHOL, photo:F.tpoa,        desc:"Poá vermelho e branco — alegre e festivo." },
  { sku:"LDR",     name:"Laço Lamê Dourado",               subtitle:"Brilho metálico permanente",         category:"Lamê",     material:"100% poliéster metalizado",       acabamento:"Costura selada, brilho permanente",      aplicacao:"Presépio / Arranjos / Composição ouro",  sizes:[{label:"20cm",ref:"20LDR"},{label:"30cm",ref:"30LDR"},{label:"40cm",ref:"40LDR"}],                                                                                          prazo:"5–10 dias úteis", cores:coresLame,    tag:"Metálico",      tagColor:"#7A5A00",  tagBg:"#FDF5E0",    photo:F.lame,         desc:"Lamê metalizado com brilho intenso e permanente." },
  { sku:"LDRD",    name:"Laço Lamê Dourado Duplo",         subtitle:"Dupla camada metálica",              category:"Lamê",     material:"100% poliéster metalizado",       acabamento:"Dupla camada, brilho intensificado",     aplicacao:"Presépio / Portal / Decoração central",  sizes:[{label:"20cm",ref:"20LDRD"},{label:"30cm",ref:"30LDRD"},{label:"40cm",ref:"40LDRD"}],                                                                                        prazo:"5–10 dias úteis", cores:coresLame,    tag:"Duplo Metálico",tagColor:"#7A5A00",  tagBg:"#FDF5E0",    photo:F.lame_duplo,   desc:"Versão dupla do Lamê Dourado." },
  { sku:"CXPI",    name:"Caixa Presente Iluminada",        subtitle:"Veludo vermelho + LED morno",        category:"Iluminado",material:"Madeira + veludo + fita LED 220V",acabamento:"Veludo vermelho + Lamê Dourado",         aplicacao:"Vitrine / Hall / Uso interno",           sizes:[{label:"40×40cm 36W",ref:"CXPI 40X40"},{label:"45×45cm 48W",ref:"CxPI 45X45"},{label:"50×50cm 58W",ref:"CxPI 50X50"}],                                                       prazo:"10–20 dias úteis",cores:[{name:"Vermelho",hex:"#C0392B"},{name:"Dourado",hex:"#CFB53B"}], tag:"Iluminado", tagColor:"#7A5A00", tagBg:"#FDF5E0", photo:F.veludo, desc:"Caixa presente em veludo vermelho com LED morna 220V." },
];

const CATEGORIES = ["Todos","Veludo","Lamê","Estampado","Iluminado"];
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwu9100g--J00iQNKpyWd3hkHSjuByscpQxbrKfuERvcIZk2bfbkPb_whF8uaRM2OPhWw/exec";
const gerarNrPedido = () => `#${Date.now().toString().slice(-5)}`;
const BRL = v => `R$ ${Number(v).toLocaleString("pt-BR",{minimumFractionDigits:2})}`;

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body{height:100%;overflow:hidden;}
  ::-webkit-scrollbar{width:4px;}
  ::-webkit-scrollbar-thumb{background:#C8B8B0;border-radius:2px;}
  .pf{font-family:'Playfair Display',serif;}
  .dm{font-family:'DM Sans',sans-serif;}
  .mn{font-family:'DM Mono',monospace;}
  .btn{cursor:pointer;border:none;transition:all 0.18s;}
  .card{transition:transform 0.18s,box-shadow 0.18s;cursor:pointer;}
  .card:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(139,26,42,0.1);}
  .ov{position:absolute;inset:0;background:rgba(20,10,10,0.55);display:flex;align-items:flex-end;justify-content:center;z-index:50;backdrop-filter:blur(6px);}
  .md{background:#FAF8F5;border-radius:24px 24px 0 0;width:100%;max-height:92%;overflow-y:auto;border-top:2px solid #2D5A27;}
  .inp{width:100%;padding:11px 13px;border-radius:10px;color:#1A1A1A;font-size:14px;border:1.5px solid #E8E0D8;background:#FAF8F5;font-family:'DM Sans',sans-serif;outline:none;-webkit-appearance:none;}
  .inp:focus{border-color:#2D5A27;}
  select.inp{cursor:pointer;}
`;

const Logo = () => (
  <svg width="160" height="36" viewBox="0 0 340 80" fill="none">
    <text x="0" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27">laço</text>
    <text x="118" y="66" fontFamily="Georgia,serif" fontSize="58" fontStyle="italic" fill="#8B1A2A">&</text>
    <text x="148" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27">entrelaço</text>
  </svg>
);

const Img = ({src,style}) => {
  const [err,setErr] = useState(false);
  if(err||!src) return <div style={{...style,background:CARD2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28}}>🎀</div>;
  return <img src={src} alt="" style={{...style,objectFit:"cover",display:"block"}} onError={()=>setErr(true)}/>;
};

const Tag = ({label,color,bg}) => (
  <span className="mn" style={{background:bg,color,fontSize:8,fontWeight:700,letterSpacing:1.5,padding:"3px 8px",borderRadius:4,border:`1px solid ${color}33`,display:"inline-block"}}>{label.toUpperCase()}</span>
);

const getFoto = (p,i) => p.cores?.[i]?.photo || p.photo || "";

const Btn = ({onClick,children,style,type="button"}) => (
  <button type={type} onClick={onClick} className="btn" style={{fontFamily:"'DM Sans',sans-serif",...style}}>{children}</button>
);

export default function App() {
  const [cat,setCat]           = useState("Todos");
  const [modal,setModal]       = useState(null);
  const [selSize,setSelSize]   = useState(0);
  const [selColor,setSelColor] = useState(0);
  const [qty,setQty]           = useState(1);
  const [screen,setScreen]     = useState("catalog");
  const [cart,setCart]         = useState([]);
  const [form,setForm]         = useState({nome:"",whats:"",email:"",vendedor:"",obs:""});
  const [enviando,setEnviando] = useState(false);
  const [toast,setToast]       = useState(null);
  const [nrPedido]             = useState(gerarNrPedido);
  const [erroMin,setErroMin]   = useState("");

  const filtered = PRODUCTS.filter(p=>cat==="Todos"||p.category===cat);
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);

  // Calcula total estimado (valor fictício por unidade para validação de mínimo)
  // Como não há preço unitário, validamos só quantidade total
  const totalQtd = cart.reduce((s,i)=>s+i.qty,0);

  const showToast = msg => { setToast(msg); setTimeout(()=>setToast(null),2500); };

  const openModal = p => { setModal(p); setSelSize(0); setSelColor(0); setQty(MINIMO_QTD[p.sku]||1); };

  const addToCart = useCallback(() => {
    if(!modal) return;
    const cor = modal.cores[selColor]||modal.cores[0];
    const tam = modal.sizes[selSize]||modal.sizes[0];
    const minQtd = MINIMO_QTD[modal.sku]||1;
    if(qty < minQtd){ setErroMin(`Mínimo de ${minQtd} unidades para este produto.`); return; }
    setErroMin("");
    const idx = cart.findIndex(i=>i.product.sku===modal.sku&&i.size.ref===tam.ref&&i.color.name===cor.name);
    if(idx>=0){ setCart(c=>c.map((i,n)=>n===idx?{...i,qty:i.qty+qty}:i)); }
    else { setCart(c=>[...c,{product:modal,size:tam,color:cor,qty,id:Date.now()}]); }
    showToast(`${modal.name} adicionado!`);
  },[modal,selColor,selSize,qty,cart]);

  const removeFromCart = id => setCart(c=>c.filter(i=>i.id!==id));

  const updateQty = useCallback((id,delta) => {
    setCart(c=>c.map(i=>i.id===id?{...i,qty:Math.max(MINIMO_QTD[i.product.sku]||1,i.qty+delta)}:i));
  },[]);

  const sendPedido = async () => {
    if(!form.nome||!form.whats){ alert("Preencha Nome e WhatsApp!"); return; }
    if(cart.length===0){ alert("Adicione ao menos um produto!"); return; }
    setEnviando(true);
    const itens = cart.map(i=>`• ${i.product.name} | Tam: ${i.size?.ref} | Cor: ${i.color?.name} | Qtd: ${i.qty}`).join("\n");
    const params = new URLSearchParams({
      pedido: nrPedido,
      data: new Date().toLocaleString("pt-BR"),
      vendedor: form.vendedor||"—",
      nome: form.nome,
      whatsapp: form.whats,
      email: form.email||"—",
      itens,
      observacoes: form.obs||"—",
    });
    try { await fetch(`${SHEETS_URL}?${params}`,{method:"GET",mode:"no-cors"}); }
    catch(e){ console.error(e); }
    setEnviando(false);
    setScreen("success");
  };

  // ── CATALOG ───────────────────────────────────────────────────────────────
  const CatalogScreen = () => (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      {/* Header */}
      <div style={{padding:"14px 16px 10px",background:BG,borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
        <Logo/>
        <Btn onClick={()=>setScreen("carrinho")} style={{position:"relative",background:cartCount>0?VERDE:"transparent",border:`1.5px solid ${cartCount>0?VERDE:BORDER}`,borderRadius:12,padding:"8px 12px",display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
          <span style={{fontSize:16}}>🛍</span>
          {cartCount>0&&<span className="mn" style={{color:"#fff",fontSize:10,fontWeight:700}}>{cartCount}</span>}
        </Btn>
      </div>
      {/* Scroll area */}
      <div style={{flex:1,overflowY:"auto",padding:"12px 16px 100px"}}>
        <p className="dm" style={{color:TEXT3,fontSize:11,letterSpacing:1,marginBottom:10,textAlign:"center"}}>Shoppings · Praças · Eventos · Decoração</p>
        <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,marginBottom:12}}>
          {CATEGORIES.map(c=>(
            <Btn key={c} onClick={()=>setCat(c)} style={{padding:"6px 14px",borderRadius:20,fontSize:9,letterSpacing:1.5,whiteSpace:"nowrap",background:cat===c?VERDE:CARD,color:cat===c?"#fff":TEXT3,border:cat===c?`1px solid ${VERDE2}`:`1px solid ${BORDER}`,fontWeight:cat===c?700:400,fontFamily:"'DM Mono',monospace"}}>
              {c.toUpperCase()}
            </Btn>
          ))}
        </div>
        <p className="mn" style={{color:TEXT3,fontSize:9,letterSpacing:1,marginBottom:12}}>{filtered.length} PRODUTOS · pedido mín. {BRL(MINIMO_REAIS)}</p>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {filtered.map(p=>(
            <div key={p.sku} className="card" onClick={()=>openModal(p)} style={{background:CARD,borderRadius:16,overflow:"hidden",border:`1px solid ${BORDER}`,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
              <Img src={getFoto(p,0)} style={{width:"100%",height:170}}/>
              <div style={{padding:"12px"}}>
                <Tag label={p.tag} color={p.tagColor} bg={p.tagBg}/>
                <p className="pf" style={{color:TEXT,fontSize:16,lineHeight:1.2,marginTop:6}}>{p.name}</p>
                <p className="dm" style={{color:TEXT3,fontSize:11,marginTop:2,marginBottom:6}}>{p.subtitle}</p>
                <p className="mn" style={{color:VERDE2,fontSize:8,letterSpacing:1,marginBottom:8,opacity:0.7}}>REF: {p.sku} · mín. {MINIMO_QTD[p.sku]||1}un.</p>
                <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:10}}>
                  {p.cores.map((c,i)=><div key={i} title={c.name} style={{width:11,height:11,borderRadius:"50%",background:c.hex,border:`1px solid ${BORDER}`}}/>)}
                  <span className="mn" style={{color:TEXT3,fontSize:8,marginLeft:2}}>{p.cores.length} COR{p.cores.length>1?"ES":""}</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:8,borderTop:`1px solid ${BORDER}`}}>
                  <p className="dm" style={{color:TEXT2,fontSize:11}}>{p.prazo}</p>
                  <div style={{background:VERDE,borderRadius:8,padding:"6px 12px"}}><span className="mn" style={{color:"#fff",fontSize:9,letterSpacing:1}}>VER DETALHES →</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── CARRINHO ──────────────────────────────────────────────────────────────
  const CarrinhoScreen = () => (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 16px 10px",background:BG,borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
        <Btn onClick={()=>setScreen("catalog")} style={{background:"none",border:"none",color:VERDE,fontSize:20,cursor:"pointer",padding:"0 4px"}}>←</Btn>
        <p className="pf" style={{color:TEXT,fontSize:20}}>Meu Pedido</p>
        <span className="mn" style={{color:TEXT3,fontSize:10,marginLeft:"auto"}}>{nrPedido}</span>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"16px 16px 40px"}}>
        {cart.length===0?(
          <div style={{textAlign:"center",padding:"60px 20px"}}>
            <p style={{fontSize:48,marginBottom:12}}>🛍</p>
            <p className="pf" style={{color:TEXT2,fontSize:18}}>Carrinho vazio</p>
            <Btn onClick={()=>setScreen("catalog")} style={{background:VERDE,color:"#fff",padding:"12px 28px",borderRadius:12,fontWeight:700,fontSize:12,marginTop:20,cursor:"pointer"}}>VER CATÁLOGO</Btn>
          </div>
        ):(
          <>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:12}}>
              {cart.map(item=>(
                <div key={item.id} style={{background:CARD,borderRadius:14,padding:"12px",border:`1px solid ${BORDER}`,display:"flex",gap:10,alignItems:"center"}}>
                  <div style={{width:48,height:48,borderRadius:10,overflow:"hidden",flexShrink:0,border:`1px solid ${BORDER}`}}>
                    <Img src={item.color?.photo||item.product.photo} style={{width:"100%",height:"100%"}}/>
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <p className="pf" style={{color:TEXT,fontSize:12,marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.product.name}</p>
                    <p className="mn" style={{color:VERDE,fontSize:8,letterSpacing:1,marginBottom:3}}>{item.size?.ref}</p>
                    <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:6}}>
                      <div style={{width:8,height:8,borderRadius:"50%",background:item.color?.hex,border:`1px solid ${BORDER}`}}/>
                      <span className="mn" style={{color:TEXT3,fontSize:9}}>{item.color?.name}</span>
                    </div>
                    <div style={{display:"inline-flex",alignItems:"center",gap:0,background:CARD2,borderRadius:8,border:`1px solid ${BORDER}`,overflow:"hidden"}}>
                      <Btn onClick={()=>updateQty(item.id,-1)} style={{width:28,height:28,background:"none",border:"none",color:VINHO,fontSize:16,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>−</Btn>
                      <span className="mn" style={{color:TEXT,fontSize:12,minWidth:22,textAlign:"center",fontWeight:700}}>{item.qty}</span>
                      <Btn onClick={()=>updateQty(item.id,1)} style={{width:28,height:28,background:"none",border:"none",color:VERDE,fontSize:16,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>+</Btn>
                    </div>
                  </div>
                  <Btn onClick={()=>removeFromCart(item.id)} style={{color:"#C0392B",fontSize:16,background:"none",border:"none",padding:"4px",opacity:0.5,alignSelf:"flex-start",cursor:"pointer"}}>✕</Btn>
                </div>
              ))}
            </div>

            <Btn onClick={()=>setScreen("catalog")} style={{width:"100%",background:"transparent",border:`1.5px dashed ${VERDE}`,color:VERDE,padding:"11px",borderRadius:12,fontSize:12,fontWeight:600,marginBottom:16,cursor:"pointer"}}>
              + Adicionar mais produtos
            </Btn>

            <div style={{height:1,background:BORDER,marginBottom:16}}/>
            <p className="mn" style={{color:VERDE,fontSize:9,letterSpacing:2.5,marginBottom:12}}>DADOS DO CLIENTE</p>

            {/* Vendedor */}
            <div style={{marginBottom:10}}>
              <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:5}}>VENDEDOR</p>
              <div style={{position:"relative"}}>
                <select className="inp" value={form.vendedor} onChange={e=>setForm(p=>({...p,vendedor:e.target.value}))}>
                  <option value="">Selecione o vendedor</option>
                  {VENDEDORES.map(v=><option key={v} value={v}>{v}</option>)}
                </select>
                <span style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",color:TEXT3,fontSize:10,pointerEvents:"none"}}>▾</span>
              </div>
            </div>

            {/* Campos de texto — sem scroll no mobile */}
            {[
              {key:"nome",  label:"Nome / Empresa *", ph:"Ex: Shopping Parque D. Pedro", type:"text"},
              {key:"whats", label:"WhatsApp *",        ph:"(11) 99999-9999",              type:"tel"},
              {key:"email", label:"E-mail",            ph:"contato@empresa.com.br",       type:"email"},
            ].map(f=>(
              <div key={f.key} style={{marginBottom:10}}>
                <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:5}}>{f.label.toUpperCase()}</p>
                <input
                  className="inp"
                  type={f.type}
                  value={form[f.key]}
                  placeholder={f.ph}
                  autoComplete="off"
                  onChange={e=>setForm(p=>({...p,[f.key]:e.target.value}))}
                />
              </div>
            ))}

            <div style={{marginBottom:16}}>
              <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:5}}>OBSERVAÇÕES</p>
              <textarea
                className="inp"
                value={form.obs}
                placeholder="Data do evento, detalhes especiais..."
                rows={2}
                style={{resize:"none"}}
                onChange={e=>setForm(p=>({...p,obs:e.target.value}))}
              />
            </div>

            {/* Aviso pedido mínimo */}
            <div style={{background:VINHOL,border:`1px solid ${VINHO}33`,borderRadius:10,padding:"10px 12px",marginBottom:14}}>
              <p className="mn" style={{color:VINHO,fontSize:9,letterSpacing:1}}>PEDIDO MÍNIMO</p>
              <p className="dm" style={{color:TEXT2,fontSize:12,marginTop:3}}>Valor mínimo de <strong>{BRL(MINIMO_REAIS)}</strong> por pedido.</p>
            </div>

            <Btn onClick={sendPedido} style={{width:"100%",background:enviando?"#999":VERDE,color:"#fff",padding:"16px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,boxShadow:"0 4px 16px rgba(45,90,39,0.3)",cursor:"pointer"}}>
              {enviando?"ENVIANDO...":"CONFIRMAR PEDIDO"}
            </Btn>
          </>
        )}
      </div>
    </div>
  );

  // ── SUCCESS ───────────────────────────────────────────────────────────────
  const SuccessScreen = () => (
    <div style={{padding:"60px 32px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:600}}>
      <div style={{width:80,height:80,borderRadius:"50%",background:VERDES,border:`2px solid ${VERDE}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:20}}>🎀</div>
      <Logo/>
      <p className="mn" style={{color:TEXT3,fontSize:10,letterSpacing:2,marginTop:10,marginBottom:4}}>PEDIDO {nrPedido}</p>
      <p className="pf" style={{color:VERDE,fontSize:22,marginBottom:8}}>Pedido enviado!</p>
      <p className="dm" style={{color:TEXT2,fontSize:13,lineHeight:1.8,marginBottom:32}}>
        Recebemos sua solicitação.<br/>Entraremos em contato em até<br/><span style={{color:VERDE,fontWeight:600}}>24 horas</span> pelo WhatsApp.
      </p>
      <Btn onClick={()=>{setScreen("catalog");setCart([]);setForm({nome:"",whats:"",email:"",vendedor:"",obs:""});}} style={{background:VERDE,color:"#fff",padding:"14px 32px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:1.5,cursor:"pointer"}}>
        NOVO PEDIDO
      </Btn>
    </div>
  );

  // ── MODAL PRODUTO ─────────────────────────────────────────────────────────
  const Modal = () => {
    if(!modal) return null;
    const p=modal;
    const cor=p.cores[selColor]||p.cores[0];
    const tam=p.sizes[selSize]||p.sizes[0];
    const minQtd=MINIMO_QTD[p.sku]||1;
    return(
      <div className="ov" onClick={()=>setModal(null)}>
        <div className="md" onClick={e=>e.stopPropagation()}>
          <div style={{position:"relative",borderRadius:"24px 24px 0 0",overflow:"hidden"}}>
            <Img src={getFoto(p,selColor)} style={{width:"100%",height:240}}/>
            <Btn onClick={()=>setModal(null)} style={{position:"absolute",top:12,left:12,background:"rgba(255,255,255,0.92)",border:"none",borderRadius:"50%",width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:15}}>←</Btn>
            {cor?.photo&&(
              <div style={{position:"absolute",bottom:10,left:12,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(6px)",padding:"4px 10px",borderRadius:20,display:"flex",alignItems:"center",gap:5}}>
                <div style={{width:9,height:9,borderRadius:"50%",background:cor.hex,border:"1px solid rgba(255,255,255,0.4)"}}/>
                <span className="mn" style={{color:"#fff",fontSize:9}}>{cor.name}</span>
              </div>
            )}
          </div>
          <div style={{padding:"16px 16px 36px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <Tag label={p.tag} color={p.tagColor} bg={p.tagBg}/>
              <span className="mn" style={{color:TEXT3,fontSize:8}}>REF: {p.sku}</span>
            </div>
            <p className="pf" style={{color:TEXT,fontSize:20,marginBottom:2}}>{p.name}</p>
            <p className="dm" style={{color:TEXT3,fontSize:12,marginBottom:10}}>{p.subtitle}</p>
            <p className="dm" style={{color:TEXT2,fontSize:13,lineHeight:1.7,marginBottom:12}}>{p.desc}</p>

            <div style={{background:VERDES,borderRadius:12,padding:"10px 12px",marginBottom:12,border:`1px solid ${VERDE}22`}}>
              <p className="mn" style={{color:VERDE,fontSize:8,letterSpacing:2,marginBottom:8}}>FICHA TÉCNICA</p>
              {[{l:"Composição",v:p.material},{l:"Acabamento",v:p.acabamento},{l:"Aplicação",v:p.aplicacao},{l:"Prazo",v:p.prazo},{l:"Mín. por pedido",v:`${minQtd} unidades`}].map((r,i,arr)=>(
                <div key={i} style={{display:"flex",gap:10,padding:"5px 0",borderBottom:i<arr.length-1?`1px solid ${VERDE}18`:"none"}}>
                  <span className="mn" style={{color:TEXT3,fontSize:9,minWidth:80}}>{r.l}</span>
                  <span className="dm" style={{color:TEXT2,fontSize:12}}>{r.v}</span>
                </div>
              ))}
            </div>

            <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2,marginBottom:8}}>TAMANHO</p>
            <div style={{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap"}}>
              {p.sizes.map((s,i)=>(
                <Btn key={i} onClick={()=>setSelSize(i)} style={{padding:"7px 10px",borderRadius:10,background:selSize===i?VERDE:CARD,color:selSize===i?"#fff":TEXT2,border:selSize===i?`1px solid ${VERDE2}`:`1px solid ${BORDER}`,fontSize:10,fontWeight:700,fontFamily:"'DM Mono',monospace",cursor:"pointer"}}>{s.label}</Btn>
              ))}
            </div>

            <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2,marginBottom:8}}>COR</p>
            <div style={{display:"flex",gap:6,marginBottom:12,flexWrap:"wrap"}}>
              {p.cores.map((c,i)=>(
                <Btn key={i} onClick={()=>setSelColor(i)} style={{display:"flex",alignItems:"center",gap:5,padding:"6px 10px",borderRadius:20,background:selColor===i?VERDES:CARD,border:selColor===i?`1.5px solid ${VERDE}`:`1px solid ${BORDER}`,cursor:"pointer"}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:c.hex,border:`1px solid ${BORDER}`}}/>
                  <span className="mn" style={{color:selColor===i?VERDE:TEXT2,fontSize:9,fontWeight:selColor===i?700:400}}>{c.name}</span>
                  {c.photo&&<span style={{fontSize:8}}>📷</span>}
                </Btn>
              ))}
            </div>

            <div style={{background:CARD2,borderRadius:10,padding:"7px 12px",marginBottom:12,display:"flex",justifyContent:"space-between",border:`1px solid ${BORDER}`}}>
              <span className="mn" style={{color:TEXT3,fontSize:9}}>SELECIONADO</span>
              <span className="mn" style={{color:VERDE,fontSize:9,fontWeight:700}}>{tam?.ref} · {cor?.name}</span>
            </div>

            {/* Quantidade */}
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:6}}>
              <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2}}>QUANTIDADE</p>
              <div style={{display:"inline-flex",alignItems:"center",background:CARD,borderRadius:10,border:`1px solid ${BORDER}`,overflow:"hidden"}}>
                <Btn onClick={()=>setQty(q=>Math.max(minQtd,q-1))} style={{width:36,height:36,background:"none",border:"none",color:VINHO,fontSize:20,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>−</Btn>
                <span className="mn" style={{color:TEXT,fontSize:14,minWidth:24,textAlign:"center",fontWeight:700}}>{qty}</span>
                <Btn onClick={()=>setQty(q=>q+1)} style={{width:36,height:36,background:"none",border:"none",color:VERDE,fontSize:20,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>+</Btn>
              </div>
              <span className="mn" style={{color:TEXT3,fontSize:9}}>mín. {minQtd}un.</span>
            </div>

            {erroMin&&<p className="dm" style={{color:VINHO,fontSize:11,marginBottom:8}}>⚠ {erroMin}</p>}

            <Btn onClick={addToCart} style={{width:"100%",background:VERDE,color:"#fff",padding:"14px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,boxShadow:"0 4px 16px rgba(45,90,39,0.3)",cursor:"pointer",marginBottom:8}}>
              ADICIONAR AO PEDIDO
            </Btn>

            {cartCount>0&&(
              <Btn onClick={()=>setModal(null)} style={{width:"100%",background:"transparent",border:`1.5px solid ${VERDE}`,color:VERDE,padding:"11px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer"}}>
                VER PEDIDO ({cartCount} {cartCount===1?"item":"itens"}) →
              </Btn>
            )}
          </div>
        </div>
      </div>
    );
  };

  return(
    <div style={{minHeight:"100vh",background:"#EDE8E0",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif",padding:"20px 0"}}>
      <style>{CSS}</style>
              <div style={{width:"100%",maxWidth:420,height:"min(820px,100vh)",background:BG,borderRadius:32,overflow:"hidden",display:"flex",flexDirection:"column",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.15),0 0 0 1px rgba(45,90,39,0.12)"}}>

        {/* Toast */}
        {toast&&(
          <div style={{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",background:VERDE,color:"#fff",padding:"8px 18px",borderRadius:20,zIndex:100,display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(45,90,39,0.4)",whiteSpace:"nowrap",pointerEvents:"none"}}>
            <span style={{fontSize:13}}>✅</span>
            <span className="dm" style={{fontSize:12,fontWeight:600}}>{toast}</span>
          </div>
        )}

        <div style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column"}}>
          {screen==="catalog"  && <CatalogScreen/>}
          {screen==="carrinho" && <CarrinhoScreen/>}
          {screen==="success"  && <SuccessScreen/>}
        </div>

        {/* Modal sobre tudo */}
        {modal&&<div style={{position:"absolute",inset:0,zIndex:50,overflowY:"auto"}}><Modal/></div>}
      </div>
    </div>
  );
}
