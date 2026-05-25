import { useState, useCallback, memo } from "react";

const VERDE="#2D5A27",VERDE2="#4A7A42",VERDES="#E8F0E6";
const VINHO="#8B1A2A",VINHOL="#F5E8EA";
const BG="#FAF8F5",CARD="#FFFFFF",CARD2="#F5F0EB";
const TEXT="#1A1A1A",TEXT2="#555555",TEXT3="#888888",BORDER="#E8E0D8";
const CL="https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/";

const F={
  vvm:      CL+"v1779469881/6645645_dd5hsu.jpg",
  vvm_verm: CL+"v1779473532/IMG-20260514-WA0064_bv6xju.jpg",
  vvm_verde:CL+"v1779639907/Gemini_Generated_Image_v2pj4xv2pj4xv2pj_puo5i7.png",
  vvm_bran: CL+"v1779646241/Gemini_Generated_Image_c8rr8dc8rr8dc8rr3231_gopcdt.png",
  vvm_champ:CL+"v1779646240/Gemini_Generated_Image_c8rr8dc8rr8dc8rr543_sgwa0f.png",
  vvm_dour: CL+"v1779639978/Gemini_Generated_Image_f6315lf6315lf631_l84nrn.png",
  val_gl:   CL+"v1779473529/IMG-20260514-WA0055_czzsdi.jpg",
  val_lind: CL+"v1779473526/IMG-20260514-WA0043_adzjdk.jpg",
  val:      CL+"v1779473531/IMG-20260514-WA0063_ksi7lc.jpg",
  vx:       CL+"v1779473528/IMG-20260514-WA0053_iccnuq.jpg",
  vl:       CL+"v1779473527/IMG-20260514-WA0050_wfq7pi.jpg",
  vd:       CL+"v1779639514/WhatsApp_Image_2026-05-14_at_09.35.20121_rkokfs.jpg",
  vxc:      CL+"v1779469881/34224_qq2r2s.jpg",
  vfixdz:   CL+"v1779639354/WhatsApp_Image_2026-05-14_at_09.35.28_yhifod.jpg",
  vxp:      CL+"v1779639425/WhatsApp_Image_2026-05-14_at_09.35.3011_xnhc2h.jpg",
  tl:       CL+"v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  ldr:      CL+"v1779473531/IMG-20260514-WA0060_vuq21n.jpg",
  bola:     CL+"v1779469881/6645645_dd5hsu.jpg",
};

// Só foto vermelha para VVM
const cVVM=[{name:"Vermelho",hex:"#C0392B",photo:F.vvm_verm}];
const cVGBC=[
  {name:"Vermelho",  hex:"#C0392B"},
  {name:"Verde",     hex:"#2D5A27"},
  {name:"Branco",    hex:"#F5F5F0"},
  {name:"Champagne", hex:"#C8B89A"},
];
const cVGBCL=[...cVGBC,{name:"Lamê Dourado",hex:"#CFB53B"}];
const cVM=[{name:"Vermelho",hex:"#C0392B"}];
const cVD=[{name:"Vermelho",hex:"#C0392B"},{name:"Dourado",hex:"#CFB53B"}];
const cVP=[{name:"Vermelho",hex:"#C0392B"},{name:"Preto",hex:"#2A2A2A"}];
const cVB=[{name:"Vermelho",hex:"#C0392B"},{name:"Branco",hex:"#F5F5F0"}];
const cLD=[{name:"Dourado",hex:"#CFB53B"}];

const P30="30 dias úteis";
const AE="Estrutura interna com espuma e costura francesa.";
const AP="Estrutura interna com placa ou espuma e costura francesa.";
const APL="Estrutura interna com placa e costura francesa.";
const AAR="Estrutura interna com placa e arame; confeccionado em costura francesa.";
const AIS="Estrutura interna isopor, duplamente amarrada e com fio para pendurar.";

const PRODUCTS=[
  {sku:"VVM",    name:"Laço Veludo Vermelho",             subtitle:"Linha clássica — 20cm a 100cm",       category:"Veludo",   material:"100% poliéster",             acabamento:AP,  prazo:P30, estoque:500, desc:"O clássico da linha; confeccionado em Veludo tradicional.",                                                    cores:cVVM,   photo:F.vvm,     tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20V"},{label:"30cm",ref:"30V"},{label:"40cm",ref:"40V"},{label:"50cm",ref:"50V"},{label:"60cm",ref:"60V"},{label:"80cm",ref:"80V"},{label:"100cm",ref:"100V"}]},
  {sku:"VALGL",  name:"Laço Veludo Cristal — Grav. Longa",subtitle:"Efeito cascata — 30cm a 50cm",        category:"Veludo",   material:"100% poliéster",             acabamento:AP,  prazo:P30, estoque:500, desc:"Confeccionado em Veludo Cristal, com Gravata Longa que cria efeito cascata ao descer pela árvore ou coluna.", cores:cVGBC,  photo:F.val_gl,  tag:"Premium",      tagColor:"#7A5A00", tagBg:"#FDF5E0", sizes:[{label:"30cm",ref:"30VaL"},{label:"40cm",ref:"40VaL"},{label:"50cm",ref:"50VaL"}]},
  {sku:"VALLIND",name:"Laço Veludo Ale — Lindíssimo",     subtitle:"Linha premium — 30cm a 90cm",         category:"Veludo",   material:"100% poliéster",             acabamento:AAR, prazo:P30, estoque:500, desc:"Laço duplo confeccionado em Veludo Cristal, com Gravata Longa que cria efeito cascata.",                      cores:cVGBC,  photo:F.val_lind,tag:"Premium",      tagColor:"#7A5A00", tagBg:"#FDF5E0", sizes:[{label:"30cm",ref:"30VAl/Lind"},{label:"60cm",ref:"60VAl/Lind"},{label:"90cm",ref:"90VAl/Lind"}]},
  {sku:"VAL",    name:"Laço Veludo Ale Vermelho",          subtitle:"Tradicional — 20cm a 40cm",           category:"Veludo",   material:"100% poliéster",             acabamento:APL, prazo:P30, estoque:500, desc:"Laço tradicional confeccionado em Veludo Cristal.",                                                          cores:cVGBC,  photo:F.val,     tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20VAl"},{label:"30cm",ref:"30VAl"},{label:"40cm",ref:"40VAl"}]},
  {sku:"VX",     name:"Laço Veludo Vermelho Xadrez",       subtitle:"Veludo com borda xadrez",             category:"Estampado",material:"90% poliéster / 10% algodão",acabamento:AE,  prazo:P30, estoque:500, desc:"Laço confeccionado em Veludo Tradicional, com borda xadrez.",                                                cores:cVM,    photo:F.vx,      tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20VX"},{label:"30cm",ref:"30VX"},{label:"40cm",ref:"40VX"}]},
  {sku:"VL",     name:"Laço Veludo Vermelho Listra",       subtitle:"Veludo com borda de listra",          category:"Estampado",material:"90% poliéster / 10% algodão",acabamento:AE,  prazo:P30, estoque:500, desc:"Laço confeccionado em Veludo Tradicional, com borda de listra.",                                            cores:cVM,    photo:F.vl,      tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20VL"},{label:"30cm",ref:"30VL"},{label:"40cm",ref:"40VL"}]},
  {sku:"VD",     name:"Laço Veludo Vermelho com Dourado",  subtitle:"Veludo com borda ouro",               category:"Estampado",material:"90% poliéster / 10% algodão",acabamento:AE,  prazo:P30, estoque:500, desc:"Laço confeccionado em Veludo Tradicional, com borda ouro.",                                                 cores:cVD,    photo:F.vd,      tag:"Premium",      tagColor:"#7A5A00", tagBg:"#FDF5E0", sizes:[{label:"20cm",ref:"20VD"},{label:"30cm",ref:"30VD"},{label:"40cm",ref:"40VD"}]},
  {sku:"VXC",    name:"Laço Veludo Verm. Meio Xadrez",     subtitle:"Tecido xadrez com borda veludo",      category:"Estampado",material:"100% poliéster",             acabamento:AE,  prazo:P30, estoque:500, desc:"Laço tradicional confeccionado em tecido xadrez, com borda em veludo.",                                      cores:cVM,    photo:F.vxc,     tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20VXC"},{label:"30cm",ref:"30VXC"},{label:"40cm",ref:"40VXC"}]},
  {sku:"VFIXDZ", name:"Laço Veludo Verm. Fita Xadrez",     subtitle:"Veludo com fita xadrez decorativa",   category:"Estampado",material:"100% poliéster",             acabamento:AE,  prazo:P30, estoque:500, desc:"Laço confeccionado em Veludo Tradicional, com fita xadrez decorativa central.",                            cores:cVM,    photo:F.vfixdz,  tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"40cm",ref:"40VFiXdz"}]},
  {sku:"VXP",    name:"Laço Veludo Verm. XDZ/VM/PT",       subtitle:"Veludo com flanela xadrez vm/pt",     category:"Estampado",material:"100% poliéster",             acabamento:AE,  prazo:P30, estoque:500, desc:"Laço confeccionado em veludo tradicional, com flanela xadrez vm/pt central.",                              cores:cVP,    photo:F.vxp,     tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20VXP"},{label:"30cm",ref:"30VXP"},{label:"40cm",ref:"40VXP"}]},
  {sku:"TL",     name:"Laço Tecido Listra Vm/Br",          subtitle:"Tecido listrado tradicional",         category:"Estampado",material:"100% algodão",               acabamento:AE,  prazo:P30, estoque:500, desc:"Laço tradicional confeccionado em tecido listrado.",                                                        cores:cVB,    photo:F.tl,      tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"20cm",ref:"20TL"},{label:"30cm",ref:"30TL"},{label:"40cm",ref:"40TL"}]},
  {sku:"LDR",    name:"Laço Lamê Dourado",                  subtitle:"Brilho metálico intenso",             category:"Lamê",     material:"100% poliéster metalizado",  acabamento:AE,  prazo:P30, estoque:500, desc:"Laço tradicional confeccionado em Lamê dourado; brilho intenso.",                                           cores:cLD,    photo:F.ldr,     tag:"Premium",      tagColor:"#7A5A00", tagBg:"#FDF5E0", sizes:[{label:"20cm",ref:"20LDR"},{label:"30cm",ref:"30LDR"},{label:"40cm",ref:"40LDR"}]},
  {sku:"BVAL",   name:"Bola Veludo Ale Vermelho",           subtitle:"Decorativa — 12cm a 25cm",           category:"Bolas",    material:"Isopor e poliéster",         acabamento:AIS, prazo:P30, estoque:500, desc:"Bola tradicional coberta com veludo cristal vermelho.",                                                     cores:cVGBCL, photo:F.bola,    tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"12cm",ref:"12BVAl"},{label:"15cm",ref:"15BVAl"},{label:"20cm",ref:"20BVAl"},{label:"25cm",ref:"25BVAl"}]},
  {sku:"BTXDZ",  name:"Bola Tecido Xadrez Decorada",        subtitle:"Xadrez Vm/Br com galhos natalinos",  category:"Bolas",    material:"Isopor e poliéster",         acabamento:AIS, prazo:P30, estoque:500, desc:"Bola coberta com tecido xadrez Vm/Br e decorada com galhos natalinos.",                                     cores:cVB,    photo:F.bola,    tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"12cm",ref:"12BTXdz"},{label:"15cm",ref:"15BTXdz"},{label:"20cm",ref:"20BTXdz"}]},
  {sku:"BTLT",   name:"Bola Tecido Listrado Decorada",      subtitle:"Listrado Vm/Br com galhos natalinos",category:"Bolas",    material:"Isopor e poliéster",         acabamento:AIS, prazo:P30, estoque:500, desc:"Bola coberta com tecido listrado Vm/Br e decorada com galhos natalinos.",                                   cores:cVB,    photo:F.bola,    tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"12cm",ref:"12BTLt"},{label:"15cm",ref:"15BTLt"},{label:"20cm",ref:"20BTLt"}]},
  {sku:"BTXDZP", name:"Bola Tecido Xadrez Vm/Pt Decorada",  subtitle:"Xadrez Vm/Pt com galhos natalinos",  category:"Bolas",    material:"Isopor e poliéster",         acabamento:AIS, prazo:P30, estoque:500, desc:"Bola coberta com tecido Xadrez Vm/Pt e decorada com galhos natalinos.",                                    cores:cVP,    photo:F.bola,    tag:"Mais Vendido", tagColor:VINHO,     tagBg:VINHOL,    sizes:[{label:"12cm",ref:"12BTXdzVm/Pt"},{label:"15cm",ref:"15BTXdzVm/Pt"},{label:"20cm",ref:"20BTXdzVm/Pt"}]},
  // ── SALDÃO ───────────────────────────────────────────────────────────────
  {sku:"VVM-S",  name:"Laço Veludo Vermelho 80cm",          subtitle:"⚡ Últimas unidades — 80cm",          category:"Saldão",   material:"100% poliéster",             acabamento:AP,  prazo:"Imediato", estoque:3, desc:"Laço Veludo Vermelho 80cm — últimas unidades em estoque. Aproveite!",                                       cores:cVVM,   photo:F.vvm,     tag:"🔥 Saldão",    tagColor:"#BF360C", tagBg:"#FBE9E7",  sizes:[{label:"80cm",ref:"80V"}]},
  {sku:"LDR-S",  name:"Laço Lamê Dourado 40cm",             subtitle:"⚡ Últimas unidades — 40cm",          category:"Saldão",   material:"100% poliéster metalizado",  acabamento:AE,  prazo:"Imediato", estoque:4, desc:"Laço Lamê Dourado 40cm — últimas unidades em estoque.",                                                     cores:cLD,    photo:F.ldr,     tag:"🔥 Saldão",    tagColor:"#BF360C", tagBg:"#FBE9E7",  sizes:[{label:"40cm",ref:"40LDR"}]},
];

const MINIMO_QTD={
  // VVM: por tamanho conforme planilha
  VVM:    {"20V":15,"30V":12,"40V":10,"50V":6,"60V":4,"80V":3,"100V":2},
  // Veludo Cristal Gravata Longa
  VALGL:  {"30VaL":10,"40VaL":8,"50VaL":6},
  // Veludo Ale Lindíssimo
  VALLIND:{"30VAl/Lind":6,"60VAl/Lind":4,"90VAl/Lind":2},
  // Veludo Ale
  VAL:    {"20VAl":12,"30VAl":10,"40VAl":8},
  // Estampados — mesmo padrão 20=12, 30=10, 40=8
  VX:     {"20VX":12,"30VX":10,"40VX":8},
  VL:     {"20VL":12,"30VL":10,"40VL":8},
  VD:     {"20VD":12,"30VD":10,"40VD":8},
  VXC:    {"20VXC":12,"30VXC":10,"40VXC":8},
  VFIXDZ: {"40VFiXdz":10},
  VXP:    {"20VXP":12,"30VXP":10,"40VXP":8},
  TL:     {"20TL":12,"30TL":10,"40TL":8},
  // Lamê
  LDR:    {"20LDR":12,"30LDR":10,"40LDR":8},
  // Bolas — mínimo a definir (deixo 1 por enquanto)
  BVAL:   {default:1},
  BTXDZ:  {default:1},
  BTLT:   {default:1},
  BTXDZP: {default:1},
};

const getMin=(sku,ref)=>{const m=MINIMO_QTD[sku];if(!m)return 1;if(typeof m==="number")return m;return m[ref]||m.default||1;};
const getFoto=(p,i)=>p.cores?.[i]?.photo||p.photo||"";
const BRL=v=>`R$ ${Number(v).toLocaleString("pt-BR",{minimumFractionDigits:2})}`;
const gerarNr=()=>`#${Date.now().toString().slice(-5)}`;

const CATEGORIES=["Todos","Veludo","Lamê","Estampado","Bolas","Saldão"];
const VENDEDORES=["Ana Paula","Carlos","Fernanda","João","Mariana","Ricardo"];
const MINIMO_REAIS=2000;
const SHEETS_URL="https://script.google.com/macros/s/AKfycbw5c9f7of3GhrjgOcZR7_KDoEp4_avn4D9zsOkn7p_O1GjWii200ow5e9YhP93pjvVGhw/exec";

const CSS=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  .pf{font-family:'Playfair Display',serif;}
  .dm{font-family:'DM Sans',sans-serif;}
  .mn{font-family:'DM Mono',monospace;}
  .inp{width:100%;padding:11px 13px;border-radius:10px;color:#1A1A1A;font-size:14px;border:1.5px solid #E8E0D8;background:#FAF8F5;font-family:'DM Sans',sans-serif;outline:none;-webkit-appearance:none;display:block;}
  .inp:focus{border-color:#2D5A27;}
  .scr{overflow-y:auto;-webkit-overflow-scrolling:touch;}
  .scr::-webkit-scrollbar{width:0;}
`;

const Img=memo(({src,h=180})=>{
  const[e,sE]=useState(false);
  if(e||!src)return<div style={{width:"100%",height:h,background:CARD2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28}}>🎀</div>;
  return<img src={src} alt="" style={{width:"100%",height:h,objectFit:"cover",display:"block"}} onError={()=>sE(true)}/>;
});

const Tag=({label,color,bg})=>(
  <span className="mn" style={{background:bg,color,fontSize:8,fontWeight:700,letterSpacing:1.5,padding:"3px 8px",borderRadius:4,border:`1px solid ${color}33`,display:"inline-block"}}>{label.toUpperCase()}</span>
);

const Logo=()=>(
  <svg width="160" height="36" viewBox="0 0 340 80" fill="none">
    <text x="0" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27">laço</text>
    <text x="118" y="66" fontFamily="Georgia,serif" fontSize="58" fontStyle="italic" fill="#8B1A2A">&</text>
    <text x="148" y="62" fontFamily="Georgia,serif" fontSize="52" fontStyle="italic" fill="#2D5A27">entrelaço</text>
  </svg>
);

// ── MODAL — estado completamente isolado ──────────────────────────────────
const ProductModal=memo(({product:p,cartCount,onClose,onAdd})=>{
  const[sz,setSz]=useState(0);
  const[cl,setCl]=useState(0);
  const tam=p.sizes[sz]||p.sizes[0];
  const min=getMin(p.sku,tam?.ref);
  const[qt,setQt]=useState(()=>getMin(p.sku,p.sizes[0]?.ref));
  const[er,setEr]=useState("");
  const cor=p.cores[cl]||p.cores[0];

  const handleSz=i=>{
    setSz(i);
    const nm=getMin(p.sku,p.sizes[i]?.ref);
    setQt(nm); // sempre reseta para o mínimo do novo tamanho
    setEr("");
  };

  const doAdd=()=>{
    if(qt<min){setEr(`Mínimo de ${min} unidades para este tamanho.`);return;}
    setEr("");
    onAdd({product:p,size:tam,color:cor,qty:qt,id:Date.now()});
  };

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(20,10,10,0.6)",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:9999,backdropFilter:"blur(6px)"}} onClick={onClose}>
      <div className="scr" style={{background:BG,borderRadius:"24px 24px 0 0",width:"100%",maxWidth:420,maxHeight:"92vh",borderTop:`2px solid ${VERDE}`}} onClick={e=>e.stopPropagation()}>
        <div style={{position:"relative",borderRadius:"24px 24px 0 0",overflow:"hidden"}}>
          <Img src={getFoto(p,cl)} h={240}/>
          <button onClick={onClose} style={{position:"absolute",top:12,left:12,background:"rgba(255,255,255,0.92)",border:"none",borderRadius:"50%",width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>←</button>
          {cor?.photo&&<div style={{position:"absolute",bottom:10,left:12,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(6px)",padding:"4px 10px",borderRadius:20,display:"flex",alignItems:"center",gap:5}}>
            <div style={{width:9,height:9,borderRadius:"50%",background:cor.hex,border:"1px solid rgba(255,255,255,0.4)"}}/>
            <span className="mn" style={{color:"#fff",fontSize:9}}>{cor.name}</span>
          </div>}
        </div>
        <div style={{padding:"16px 16px 40px"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
            <Tag label={p.tag} color={p.tagColor} bg={p.tagBg}/>
            <span className="mn" style={{color:TEXT3,fontSize:8}}>REF: {p.sku}</span>
          </div>
          <p className="pf" style={{color:TEXT,fontSize:20,marginBottom:2}}>{p.name}</p>
          <p className="dm" style={{color:TEXT3,fontSize:12,marginBottom:10}}>{p.subtitle}</p>
          <p className="dm" style={{color:TEXT2,fontSize:13,lineHeight:1.7,marginBottom:12}}>{p.desc}</p>
          <div style={{background:VERDES,borderRadius:12,padding:"10px 12px",marginBottom:12,border:`1px solid ${VERDE}22`}}>
            <p className="mn" style={{color:VERDE,fontSize:8,letterSpacing:2,marginBottom:8}}>FICHA TÉCNICA</p>
            {[{l:"Composição",v:p.material},{l:"Acabamento",v:p.acabamento},{l:"Prazo",v:p.prazo}].map((r,i,a)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"5px 0",borderBottom:i<a.length-1?`1px solid ${VERDE}18`:"none"}}>
                <span className="mn" style={{color:TEXT3,fontSize:9,minWidth:80}}>{r.l}</span>
                <span className="dm" style={{color:TEXT2,fontSize:12}}>{r.v}</span>
              </div>
            ))}
          </div>
          <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2,marginBottom:8}}>TAMANHO</p>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
            {p.sizes.map((s,i)=>(
              <button key={i} onClick={()=>handleSz(i)} style={{padding:"7px 10px",borderRadius:10,background:sz===i?VERDE:CARD,color:sz===i?"#fff":TEXT2,border:sz===i?`1px solid ${VERDE2}`:`1px solid ${BORDER}`,fontSize:10,fontWeight:700,fontFamily:"'DM Mono',monospace",cursor:"pointer"}}>{s.label}</button>
            ))}
          </div>
          <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2,marginBottom:8}}>COR</p>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
            {p.cores.map((c,i)=>(
              <button key={i} onClick={()=>setCl(i)} style={{display:"flex",alignItems:"center",gap:5,padding:"6px 10px",borderRadius:20,background:cl===i?VERDES:CARD,border:cl===i?`1.5px solid ${VERDE}`:`1px solid ${BORDER}`,cursor:"pointer"}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:c.hex,border:`1px solid ${BORDER}`}}/>
                <span className="mn" style={{color:cl===i?VERDE:TEXT2,fontSize:9,fontWeight:cl===i?700:400}}>{c.name}</span>
                {c.photo&&<span style={{fontSize:8}}>📷</span>}
              </button>
            ))}
          </div>
          <div style={{background:CARD2,borderRadius:10,padding:"7px 12px",marginBottom:12,display:"flex",justifyContent:"space-between",border:`1px solid ${BORDER}`}}>
            <span className="mn" style={{color:TEXT3,fontSize:9}}>SELECIONADO</span>
            <span className="mn" style={{color:VERDE,fontSize:9,fontWeight:700}}>{tam?.ref} · {cor?.name}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
            <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:2}}>QUANTIDADE</p>
            <div style={{display:"inline-flex",alignItems:"center",background:CARD,borderRadius:10,border:`1px solid ${BORDER}`,overflow:"hidden"}}>
              <button onClick={()=>setQt(q=>Math.max(min,q-1))} style={{width:36,height:36,background:"none",border:"none",color:VINHO,fontSize:22,fontWeight:700,cursor:"pointer"}}>−</button>
              <span className="mn" style={{color:TEXT,fontSize:14,minWidth:28,textAlign:"center",fontWeight:700}}>{qt}</span>
              <button onClick={()=>setQt(q=>q+1)} style={{width:36,height:36,background:"none",border:"none",color:VERDE,fontSize:22,fontWeight:700,cursor:"pointer"}}>+</button>
            </div>
            <span className="mn" style={{color:TEXT3,fontSize:9}}>mín. {min}un.</span>
          </div>
          {/* Estoque disponível */}
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
            <span style={{fontSize:10}}>📦</span>
            <span className="mn" style={{color:p.estoque<=10?"#BF360C":TEXT3,fontSize:9,letterSpacing:1}}>
              ESTOQUE: <strong style={{color:p.estoque<=10?"#BF360C":VERDE}}>{p.estoque} unidades</strong>
              {p.estoque<=10&&" — Últimas unidades!"}
            </span>
          </div>
          {er&&<p style={{color:VINHO,fontSize:11,marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>⚠ {er}</p>}
          <button onClick={doAdd} style={{width:"100%",background:VERDE,color:"#fff",padding:"14px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,cursor:"pointer",border:"none",marginBottom:8,boxShadow:"0 4px 16px rgba(45,90,39,0.3)",fontFamily:"'DM Sans',sans-serif"}}>
            ADICIONAR AO PEDIDO
          </button>
          {cartCount>0&&(
            <button onClick={onClose} style={{width:"100%",background:"transparent",border:`1.5px solid ${VERDE}`,color:VERDE,padding:"11px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
              VER PEDIDO ({cartCount} {cartCount===1?"item":"itens"}) →
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

// ── APP ───────────────────────────────────────────────────────────────────
export default function App(){
  const[cat,setCat]=useState("Todos");
  const[modal,setModal]=useState(null);
  const[screen,setScreen]=useState("catalog");
  const[cart,setCart]=useState([]);
  const[form,setForm]=useState({nome:"",whats:"",email:"",vendedor:"",obs:""});
  const[enviando,setEnviando]=useState(false);
  const[toast,setToast]=useState(null);
  const[nrPedido]=useState(gerarNr);

  const filtered=PRODUCTS.filter(p=>cat==="Todos"||p.category===cat);
  const cartCount=cart.reduce((s,i)=>s+i.qty,0);

  const showToast=msg=>{setToast(msg);setTimeout(()=>setToast(null),2500);};

  const handleAdd=useCallback(item=>{
    setCart(c=>{
      const idx=c.findIndex(i=>i.product.sku===item.product.sku&&i.size.ref===item.size.ref&&i.color.name===item.color.name);
      if(idx>=0)return c.map((i,n)=>n===idx?{...i,qty:i.qty+item.qty}:i);
      return[...c,item];
    });
    showToast(`${item.product.name} adicionado!`);
  },[]);

  const removeFromCart=id=>setCart(c=>c.filter(i=>i.id!==id));
  const updateQty=(id,d)=>setCart(c=>c.map(i=>i.id===id?{...i,qty:Math.max(getMin(i.product.sku,i.size?.ref),i.qty+d)}:i));

  const sendPedido=async()=>{
    if(!form.nome||!form.whats){alert("Preencha Nome e WhatsApp!");return;}
    setEnviando(true);
    const itens=cart.map(i=>`• ${i.product.name} | Tam: ${i.size?.ref} | Cor: ${i.color?.name} | Qtd: ${i.qty}`).join("\n");
    const p=new URLSearchParams({pedido:nrPedido,data:new Date().toLocaleString("pt-BR"),vendedor:form.vendedor||"—",nome:form.nome,whatsapp:form.whats,email:form.email||"—",itens,observacoes:form.obs||"—"});
    try{await fetch(`${SHEETS_URL}?${p}`,{method:"GET",mode:"no-cors"});}catch(e){console.error(e);}
    setEnviando(false);
    setScreen("success");
  };

  const s=(v,style={})=><span style={{fontFamily:"'DM Sans',sans-serif",...style}}>{v}</span>;

  return(
    <div style={{minHeight:"100vh",background:"#EDE8E0",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 0"}}>
      <style>{CSS}</style>
      <div style={{width:"100%",maxWidth:420,height:"min(820px,100dvh)",background:BG,borderRadius:32,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 20px 60px rgba(0,0,0,0.15),0 0 0 1px rgba(45,90,39,0.12)"}}>

        {toast&&<div style={{position:"fixed",bottom:30,left:"50%",transform:"translateX(-50%)",background:VERDE,color:"#fff",padding:"8px 18px",borderRadius:20,zIndex:9998,display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(45,90,39,0.4)",whiteSpace:"nowrap",pointerEvents:"none",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:600}}>✅ {toast}</div>}

        {/* ── CATÁLOGO ── */}
        {screen==="catalog"&&<>
          <div style={{padding:"14px 16px 10px",background:BG,borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
            <Logo/>
            <button onClick={()=>setScreen("carrinho")} style={{position:"relative",background:cartCount>0?VERDE:"transparent",border:`1.5px solid ${cartCount>0?VERDE:BORDER}`,borderRadius:12,padding:"8px 12px",display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
              <span style={{fontSize:16}}>🛍</span>
              {cartCount>0&&<span style={{color:"#fff",fontSize:10,fontWeight:700,fontFamily:"'DM Mono',monospace"}}>{cartCount}</span>}
            </button>
          </div>
          <div className="scr" style={{flex:1,padding:"12px 16px 80px"}}>
            <p style={{color:TEXT3,fontSize:11,letterSpacing:1,marginBottom:10,textAlign:"center",fontFamily:"'DM Sans',sans-serif"}}>Shoppings · Praças · Eventos · Decoração</p>
            <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:4,marginBottom:12}}>
              {CATEGORIES.map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:"6px 14px",borderRadius:20,fontSize:9,letterSpacing:1.5,whiteSpace:"nowrap",background:cat===c?VERDE:CARD,color:cat===c?"#fff":TEXT3,border:cat===c?`1px solid ${VERDE2}`:`1px solid ${BORDER}`,fontWeight:cat===c?700:400,fontFamily:"'DM Mono',monospace",cursor:"pointer"}}>{c.toUpperCase()}</button>)}
            </div>
            <p style={{color:TEXT3,fontSize:9,letterSpacing:1,marginBottom:12,fontFamily:"'DM Mono',monospace"}}>{filtered.length} PRODUTOS · pedido mín. {BRL(MINIMO_REAIS)}</p>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {filtered.map(p=>(
                <div key={p.sku} onClick={()=>setModal(p)} style={{background:CARD,borderRadius:16,overflow:"hidden",border:`1px solid ${BORDER}`,boxShadow:"0 2px 8px rgba(0,0,0,0.05)",cursor:"pointer"}}>
                  <Img src={getFoto(p,0)} h={170}/>
                  <div style={{padding:"12px"}}>
                    <Tag label={p.tag} color={p.tagColor} bg={p.tagBg}/>
                    <p className="pf" style={{color:TEXT,fontSize:16,lineHeight:1.2,marginTop:6}}>{p.name}</p>
                    <p className="dm" style={{color:TEXT3,fontSize:11,marginTop:2,marginBottom:6}}>{p.subtitle}</p>
                    <p className="mn" style={{color:VERDE2,fontSize:8,letterSpacing:1,marginBottom:8,opacity:0.7}}>REF: {p.sku}</p>
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
        </>}

        {/* ── CARRINHO ── */}
        {screen==="carrinho"&&<>
          <div style={{padding:"14px 16px 10px",background:BG,borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
            <button onClick={()=>setScreen("catalog")} style={{background:"none",border:"none",color:VERDE,fontSize:20,cursor:"pointer",padding:"0 4px"}}>←</button>
            <p className="pf" style={{color:TEXT,fontSize:20}}>Meu Pedido</p>
            <span className="mn" style={{color:TEXT3,fontSize:10,marginLeft:"auto"}}>{nrPedido}</span>
          </div>
          <div className="scr" style={{flex:1,padding:"16px 16px 40px"}}>
            {cart.length===0?(
              <div style={{textAlign:"center",padding:"60px 20px"}}>
                <p style={{fontSize:48,marginBottom:12}}>🛍</p>
                <p className="pf" style={{color:TEXT2,fontSize:18}}>Carrinho vazio</p>
                <button onClick={()=>setScreen("catalog")} style={{background:VERDE,color:"#fff",padding:"12px 28px",borderRadius:12,fontWeight:700,fontSize:12,marginTop:20,cursor:"pointer",border:"none",fontFamily:"'DM Sans',sans-serif"}}>VER CATÁLOGO</button>
              </div>
            ):(
              <>
                <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:12}}>
                  {cart.map(item=>(
                    <div key={item.id} style={{background:CARD,borderRadius:14,padding:"12px",border:`1px solid ${BORDER}`,display:"flex",gap:10,alignItems:"center"}}>
                      <div style={{width:48,height:48,borderRadius:10,overflow:"hidden",flexShrink:0,border:`1px solid ${BORDER}`}}><Img src={item.color?.photo||item.product.photo} h={48}/></div>
                      <div style={{flex:1,minWidth:0}}>
                        <p className="pf" style={{color:TEXT,fontSize:12,marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.product.name}</p>
                        <p className="mn" style={{color:VERDE,fontSize:8,letterSpacing:1,marginBottom:3}}>{item.size?.ref}</p>
                        <div style={{display:"flex",gap:4,alignItems:"center",marginBottom:6}}>
                          <div style={{width:8,height:8,borderRadius:"50%",background:item.color?.hex,border:`1px solid ${BORDER}`}}/>
                          <span className="mn" style={{color:TEXT3,fontSize:9}}>{item.color?.name}</span>
                        </div>
                        <div style={{display:"inline-flex",alignItems:"center",background:CARD2,borderRadius:8,border:`1px solid ${BORDER}`,overflow:"hidden"}}>
                          <button onClick={()=>updateQty(item.id,-1)} style={{width:28,height:28,background:"none",border:"none",color:VINHO,fontSize:16,fontWeight:700,cursor:"pointer"}}>−</button>
                          <span className="mn" style={{color:TEXT,fontSize:12,minWidth:22,textAlign:"center",fontWeight:700}}>{item.qty}</span>
                          <button onClick={()=>updateQty(item.id,1)} style={{width:28,height:28,background:"none",border:"none",color:VERDE,fontSize:16,fontWeight:700,cursor:"pointer"}}>+</button>
                        </div>
                      </div>
                      <button onClick={()=>removeFromCart(item.id)} style={{color:"#C0392B",fontSize:16,background:"none",border:"none",padding:"4px",opacity:0.5,alignSelf:"flex-start",cursor:"pointer"}}>✕</button>
                    </div>
                  ))}
                </div>
                <button onClick={()=>setScreen("catalog")} style={{width:"100%",background:"transparent",border:`1.5px dashed ${VERDE}`,color:VERDE,padding:"11px",borderRadius:12,fontSize:12,fontWeight:600,marginBottom:16,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>+ Adicionar mais produtos</button>
                <div style={{height:1,background:BORDER,marginBottom:16}}/>
                <p className="mn" style={{color:VERDE,fontSize:9,letterSpacing:2.5,marginBottom:12}}>DADOS DO CLIENTE</p>
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
                {[{k:"nome",l:"Nome / Empresa *",p:"Ex: Shopping Parque D. Pedro",t:"text"},{k:"whats",l:"WhatsApp *",p:"(11) 99999-9999",t:"tel"},{k:"email",l:"E-mail",p:"contato@empresa.com.br",t:"email"}].map(f=>(
                  <div key={f.k} style={{marginBottom:10}}>
                    <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:5}}>{f.l.toUpperCase()}</p>
                    <input className="inp" type={f.t} value={form[f.k]} placeholder={f.p} autoComplete="off" onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))}/>
                  </div>
                ))}
                <div style={{marginBottom:16}}>
                  <p className="mn" style={{color:TEXT3,fontSize:8,letterSpacing:1,marginBottom:5}}>OBSERVAÇÕES</p>
                  <textarea className="inp" value={form.obs} placeholder="Data do evento, detalhes especiais..." rows={2} style={{resize:"none"}} onChange={e=>setForm(p=>({...p,obs:e.target.value}))}/>
                </div>
                <div style={{background:VINHOL,border:`1px solid ${VINHO}33`,borderRadius:10,padding:"10px 12px",marginBottom:14}}>
                  <p className="mn" style={{color:VINHO,fontSize:9,letterSpacing:1}}>PEDIDO MÍNIMO</p>
                  <p className="dm" style={{color:TEXT2,fontSize:12,marginTop:3}}>Valor mínimo de <strong>{BRL(MINIMO_REAIS)}</strong> por pedido.</p>
                </div>
                <button onClick={sendPedido} style={{width:"100%",background:enviando?"#999":VERDE,color:"#fff",padding:"16px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:2,cursor:"pointer",border:"none",boxShadow:"0 4px 16px rgba(45,90,39,0.3)",fontFamily:"'DM Sans',sans-serif"}}>
                  {enviando?"ENVIANDO...":"CONFIRMAR PEDIDO"}
                </button>
              </>
            )}
          </div>
        </>}

        {/* ── SUCCESS ── */}
        {screen==="success"&&(
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 32px",textAlign:"center"}}>
            <div style={{width:80,height:80,borderRadius:"50%",background:VERDES,border:`2px solid ${VERDE}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:20}}>🎀</div>
            <Logo/>
            <p className="mn" style={{color:TEXT3,fontSize:10,letterSpacing:2,marginTop:12,marginBottom:4}}>PEDIDO {nrPedido}</p>
            <p className="pf" style={{color:VERDE,fontSize:22,marginBottom:8}}>Pedido enviado!</p>
            <p className="dm" style={{color:TEXT2,fontSize:13,lineHeight:1.8,marginBottom:32}}>Recebemos sua solicitação.<br/>Entraremos em contato em até<br/><strong style={{color:VERDE}}>24 horas</strong> pelo WhatsApp.</p>
            <button onClick={()=>{setScreen("catalog");setCart([]);setForm({nome:"",whats:"",email:"",vendedor:"",obs:""});}} style={{background:VERDE,color:"#fff",padding:"14px 32px",borderRadius:14,fontSize:12,fontWeight:700,letterSpacing:1.5,cursor:"pointer",border:"none",fontFamily:"'DM Sans',sans-serif"}}>NOVO PEDIDO</button>
          </div>
        )}
      </div>

      {modal&&<ProductModal product={modal} cartCount={cartCount} onClose={()=>setModal(null)} onAdd={handleAdd}/>}
    </div>
  );
}
