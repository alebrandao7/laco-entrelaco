import { useState, useCallback, memo, useEffect } from "react";

const VERDE = "#2D5A27", VERDE2 = "#4A7A42", VERDES = "#E8F0E6";
const VINHO = "#8B1A2A", VINHOL = "#F5E8EA";
const BG = "#FAF8F5", CARD = "#FFFFFF", CARD2 = "#F5F0EB";
const TEXT = "#1A1A1A", TEXT2 = "#555555", TEXT3 = "#888888", BORDER = "#E8E0D8";
const CL = "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/";

const F = {
  vvm:          "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779469881/6645645_dd5hsu.jpg",
  vvm_verm:     "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473532/IMG-20260514-WA0064_bv6xju.jpg",
  val_gl:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473529/IMG-20260514-WA0055_czzsdi.jpg",
  val_lind:     "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473526/IMG-20260514-WA0043_adzjdk.jpg",
  val:          "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473531/IMG-20260514-WA0063_ksi7lc.jpg",
  vx:           "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473528/IMG-20260514-WA0053_iccnuq.jpg",
  vl:           "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473527/IMG-20260514-WA0050_wfq7pi.jpg",
  vd:           "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779639514/WhatsApp_Image_2026-05-14_at_09.35.20121_rkokfs.jpg",
  vxc:          "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779469881/34224_qq2r2s.jpg",
  vfixdz:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779639354/WhatsApp_Image_2026-05-14_at_09.35.28_yhifod.jpg",
  vxp:          "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779639425/WhatsApp_Image_2026-05-14_at_09.35.3011_xnhc2h.jpg",
  tl:           "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  ldr:          "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779473531/IMG-20260514-WA0060_vuq21n.jpg",
  veludo_novo:  "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779834795/veluno_novo_jdahvf.jpg",
  veludo_triplo:"https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779834912/veludo_triplo_t19qcu.jpg",
  laco_branco:  "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779835084/la%C3%A7o_branco_iinaou.jpg",
  escapulario:  "https://res.cloudinary.com/djeliz676/image/upload/v1779888699/escapulatorio_qelkwm.jpg",
  escap_xdz:    "https://res.cloudinary.com/djeliz676/image/upload/v1779888940/escapulatorio_xadrez_bp1ont.jpg",
  bola_vm:      "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779736486/bolavermelha_zfo7iq.jpg",
  bola_xdz:     "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779736717/bolaxadrez_vkcy2g.jpg",
  bola_lst:     "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779736485/bola_listrada_smnpbj.jpg",
  bola_pt:      "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779736485/bolapreta_fwxmdl.jpg",
  bjr:          "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739002/BOTAJUDARENDA_npyv9b.jpg",
  sfvcbr:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739089/siacervo_vpr3f7.jpg",
  bfvcbr:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739121/botacervo_h84rec.jpg",
  sfccxd:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739158/saiaalce_ea2ojn.jpg",
  bfccxdz:      "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739187/botalacexd_kscqar.jpg",
  sfvdb:        "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739356/verde_saia_umudfd.jpg",
  bfvb:         "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739357/botavese_spphcp.jpg",
  sfvoc:        "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739480/olive_saia_v5io5r.jpg",
  bfvoc:        "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739480/WhatsApp_Image_2026-05-14_at_10.42.37oliva_bota_llzqkz.jpg",
  sfvgpt:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739534/gato_saia_lwju0r.jpg",
  bfvgpt:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739538/bota_gato_c0cc0d.jpg",
  sfvcpt:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739538/cachorro_saia_khfhps.jpg",
  bfvmcpt:      "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739536/bota_cachorro_ootfiu.jpg",
  bfvdepx:      "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739790/botaespinha_rtpnkx.jpg",
  bjxdzn:       "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779739794/bota_xadrez_juta_ojc5gt.jpg",
  bvvpn:        "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779740460/bota_lacinho_djz698.jpg",
  sfos:         "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779740423/saia_dourada_jshoba.jpg",
  bota_flanela: "https://res.cloudinary.com/djeliz676/image/upload/v1779835781/bota_flanela_ddncnb.jpg",
  saia_xdz_rosa:"https://res.cloudinary.com/djeliz676/image/upload/v1779886387/saia_xadrez_rosa_ydg49f.jpg",
  saia_ossinho: "https://res.cloudinary.com/djeliz676/image/upload/v1779885856/saia_ossinho_lpvlv7.jpg",
  saia_noel_vm: "https://res.cloudinary.com/djeliz676/image/upload/v1779885946/saia_noel_vermelha_hgrklz.jpg",
  saia_noel:    "https://res.cloudinary.com/djeliz676/image/upload/v1779885942/saia_noel_nvbf0x.jpg",
  saia_bola_pel:"https://res.cloudinary.com/djeliz676/image/upload/v1779886776/saia_bola_de_pelucia_rvz6oy.jpg",
  bota_laco_dou:"https://res.cloudinary.com/djeliz676/image/upload/v1779886495/bota_laco_dourada_cucdjs.jpg",
  roupa_noel:   "https://res.cloudinary.com/djeliz676/image/upload/v1779835222/roupa_noel_sfvekp.jpg",
  kit_varal:    "https://res.cloudinary.com/djeliz676/image/upload/v1779886970/kit_varal_natal_f2vxbn.jpg",
  kit_figuras:  "https://res.cloudinary.com/djeliz676/image/upload/v1779887079/figuras_sortidas_hw1hxm.jpg",
  kit_noel_sort:"https://res.cloudinary.com/djeliz676/image/upload/v1779887252/kit_noel_sortida_knnlsk.jpg",
  kit_bota_nat: "https://res.cloudinary.com/djeliz676/image/upload/v1779885827/kit_bota_natalina_iiwxc7.jpg",
  kit_bota_35:  "https://res.cloudinary.com/djeliz676/image/upload/v1779887393/kit_boa_35_bd3vfz.jpg",
  kit_bota_30:  "https://res.cloudinary.com/djeliz676/image/upload/v1779887554/itbota_30_zirosl.jpg",
  saias_var:    "https://res.cloudinary.com/djeliz676/image/upload/v1779887557/sias_variadas_eu6nan.jpg",
  bota_bolinha: "https://res.cloudinary.com/djeliz676/image/upload/v1779887792/bota_bolinha_pelucia_tiv3ji.jpg",
  saia_arvore:  "https://res.cloudinary.com/djeliz676/image/upload/v1779887946/saia_arvore_de_natal_nreafq.jpg",
  saia_coruja:  "https://res.cloudinary.com/djeliz676/image/upload/v1779888088/saia_coruja_pwehmy.jpg",
  saia_velb_pol:"https://res.cloudinary.com/djeliz676/image/upload/v1779888090/saia_velb_poli_rqlsee.jpg",
  saia_arvore4: "https://res.cloudinary.com/djeliz676/image/upload/v1779888440/saia_arvore_4_rvrseu.jpg",
  saia_cx_noel: "https://res.cloudinary.com/djeliz676/image/upload/v1779888600/saia_caixa_presente_noel_jydmt2.jpg",
  logo:         "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/v1779736824/LOGOS_daguvp.png",
};
const PH = F.logo;
const PRECO_UN = 10.00;

const cVVM   = [{ name: "Vermelho", hex: "#C0392B", photo: F.vvm_verm }];
const cVGBC  = [{ name: "Vermelho", hex: "#C0392B" }, { name: "Verde", hex: "#2D5A27" }, { name: "Branco", hex: "#F5F5F0" }, { name: "Champagne", hex: "#C8B89A" }];
const cVGBCL = [...cVGBC, { name: "Lamê Dourado", hex: "#CFB53B" }];
const cVGBCLD= [...cVGBC, { name: "Dourado", hex: "#CFB53B" }];
const cVM    = [{ name: "Vermelho", hex: "#C0392B" }];
const cVD    = [{ name: "Vermelho + Dourado", hex: "#C0392B" }];
const cVP    = [{ name: "Vermelho + Preto", hex: "#C0392B" }];
const cVB    = [{ name: "Vermelho + Branco", hex: "#C0392B" }];
const cLD    = [{ name: "Dourado", hex: "#CFB53B" }];
const cNAT   = [{ name: "Natural", hex: "#C8B89A" }];
const cBR    = [{ name: "Branco", hex: "#F5F5F0" }];
const cUNI   = [{ name: "Cor Única", hex: "#C0392B" }];
const cVNude = [{ name: "Vermelho e Nude", hex: "#C0392B" }];
const cVNDou = [{ name: "Vermelho, Nude e Dourado", hex: "#C0392B" }];
const cVMulti= [{ name: "Sortidas", hex: "#C0392B" }];

const P30 = "30 dias úteis";
const AE  = "Estrutura interna com espuma e costura francesa.";
const AP  = "Estrutura interna com placa ou espuma e costura francesa.";
const APL = "Estrutura interna com placa e costura francesa.";
const AAR = "Estrutura interna com placa e arame; confeccionado em costura francesa.";
const AIS = "Estrutura interna isopor, duplamente amarrada e com fio para pendurar.";
const ACF = "Costura francesa.";
const ACFP= "Costura francesa e pelúcia.";

const TC = {
  V: { tag: "Veludo",    tagColor: "#2D5A27", tagBg: "#E8F0E6" },
  E: { tag: "Estampado", tagColor: "#7A4A1A", tagBg: "#FDF0E5" },
  L: { tag: "Lamê",      tagColor: "#7A5A00", tagBg: "#FDF5E0" },
  B: { tag: "Bolas",     tagColor: "#8B1A2A", tagBg: "#F5E8EA" },
  S: { tag: "🔥 Saldão", tagColor: "#BF360C", tagBg: "#FBE9E7" },
  K: { tag: "🎁 Kit",    tagColor: "#5A1A6A", tagBg: "#F3E8F8" },
};

const PRODUCTS = [
  // VELUDO
  { sku:"VVM",      name:"Laço Veludo Vermelho",                     subtitle:"20cm a 100cm",           category:"Veludo",    material:"100% poliéster",            acabamento:AP,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"O clássico da linha; confeccionado em Veludo tradicional.",                                       cores:cVVM,   photo:F.vvm,         ...TC.V, sizes:[{label:"20cm", ref:"20V",         min:15,estoque:500},{label:"30cm",ref:"30V",         min:12,estoque:500},{label:"40cm",ref:"40V",  min:10,estoque:500},{label:"50cm",ref:"50V", min:6,estoque:500},{label:"60cm",ref:"60V",min:4,estoque:500},{label:"80cm",ref:"80V",min:3,estoque:500},{label:"100cm",ref:"100V",min:2,estoque:500}] },
  { sku:"VALGL",    name:"Laço Veludo Cristal Gravata Longa",         subtitle:"30cm a 50cm",            category:"Veludo",    material:"100% poliéster",            acabamento:AP,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Confeccionado em Veludo Cristal, com Gravata Longa que cria efeito cascata ao descer pela árvore ou coluna.", cores:cVGBC,photo:F.val_gl,...TC.V,sizes:[{label:"30cm",ref:"30VaL",min:10,estoque:500},{label:"40cm",ref:"40VaL",min:8,estoque:500},{label:"50cm",ref:"50VaL",min:6,estoque:500}] },
  { sku:"VALLIND",  name:"Laço Veludo Ale — Lindíssimo",              subtitle:"30cm a 90cm",            category:"Veludo",    material:"100% poliéster",            acabamento:AAR,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço duplo confeccionado em Veludo Cristal, com Gravata Longa que cria efeito cascata.",                  cores:cVGBC,  photo:F.val_lind,    ...TC.V, sizes:[{label:"30cm",ref:"30VAl/Lind",min:6,estoque:500},{label:"60cm",ref:"60VAl/Lind",min:4,estoque:500},{label:"90cm",ref:"90VAl/Lind",min:2,estoque:500}] },
  { sku:"VAL",      name:"Laço Veludo Ale",                           subtitle:"20cm a 40cm",            category:"Veludo",    material:"100% poliéster",            acabamento:APL,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço tradicional confeccionado em Veludo Cristal.",                                                       cores:cVGBC,  photo:F.val,         ...TC.V, sizes:[{label:"20cm",ref:"20VAl",min:12,estoque:500},{label:"30cm",ref:"30VAl",min:10,estoque:500},{label:"40cm",ref:"40VAl",min:8,estoque:500}] },
  { sku:"VAlMinGL", name:"Laço Veludo Ale Min. Gravata Longa",        subtitle:"50cm e 80cm",            category:"Veludo",    material:"100% poliéster",            acabamento:AAR,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço com borboleta extra larga e Gravata extra longa.",                                                   cores:cVGBCLD,photo:F.veludo_novo,  ...TC.V, sizes:[{label:"50cm",ref:"50VAlMinGL",min:4,estoque:500},{label:"80cm",ref:"80VAlMinGL",min:2,estoque:500}] },
  { sku:"VAlTri",   name:"Laço Veludo Ale Triplo",                    subtitle:"90cm",                   category:"Veludo",    material:"100% poliéster",            acabamento:AAR,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço com borboleta tripla e gravata tradicional.",                                                        cores:cVGBCLD,photo:F.veludo_triplo,...TC.V, sizes:[{label:"90cm",ref:"90VAlTri",min:2,estoque:500}] },
  { sku:"LBCO",     name:"Laço Veludo Branco",                        subtitle:"20cm a 40cm",            category:"Veludo",    material:"100% poliéster",            acabamento:AP,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço clássico confeccionado em Veludo na cor Branco.",                                                    cores:cBR,    photo:F.laco_branco, ...TC.V, sizes:[{label:"20cm",ref:"20LBco",min:12,estoque:500},{label:"30cm",ref:"30LBco",min:10,estoque:500},{label:"40cm",ref:"40LBco",min:8,estoque:500}] },
  { sku:"EVV",      name:"Escapulário Veludo Vermelho",                subtitle:"200cm",                  category:"Veludo",    material:"100% poliéster",            acabamento:ACF,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Escapulário 1mt confeccionado em Veludo Vermelho tradicional.",                                           cores:cVM,    photo:F.escapulario, ...TC.V, sizes:[{label:"200cm",ref:"200EVV",min:3,estoque:500}] },
  { sku:"EVVXdz",   name:"Escapulário Veludo Vermelho Xadrez",         subtitle:"200cm",                  category:"Veludo",    material:"100% poliéster",            acabamento:"Costura francesa e galho natalino.", prazo:"31 dias úteis", estoque:500, preco:PRECO_UN, desc:"Escapulário em Veludo Vermelho com decoração xadrez natalino.", cores:cVM, photo:F.escap_xdz, ...TC.V, sizes:[{label:"200cm",ref:"200EVVXdz",min:3,estoque:500}] },
  // ESTAMPADO
  { sku:"VX",       name:"Laço Veludo Vermelho Xadrez",               subtitle:"Borda xadrez",           category:"Estampado", material:"90% poliéster/10% algodão", acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço confeccionado em Veludo Tradicional, com borda xadrez.",                                            cores:cVM,    photo:F.vx,          ...TC.E, sizes:[{label:"20cm",ref:"20VX",min:12,estoque:500},{label:"30cm",ref:"30VX",min:10,estoque:500},{label:"40cm",ref:"40VX",min:8,estoque:500}] },
  { sku:"VL",       name:"Laço Veludo Vermelho Listra",               subtitle:"Borda listrada",         category:"Estampado", material:"90% poliéster/10% algodão", acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço confeccionado em Veludo Tradicional, com borda de listra.",                                         cores:cVM,    photo:F.vl,          ...TC.E, sizes:[{label:"20cm",ref:"20VL",min:12,estoque:500},{label:"30cm",ref:"30VL",min:10,estoque:500},{label:"40cm",ref:"40VL",min:8,estoque:500}] },
  { sku:"VD",       name:"Laço Veludo Vermelho com Dourado",          subtitle:"Borda ouro",             category:"Estampado", material:"90% poliéster/10% algodão", acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço confeccionado em Veludo Tradicional, com borda ouro.",                                               cores:cVD,    photo:F.vd,          ...TC.E, sizes:[{label:"20cm",ref:"20VD",min:12,estoque:500},{label:"30cm",ref:"30VD",min:10,estoque:500},{label:"40cm",ref:"40VD",min:8,estoque:500}] },
  { sku:"VXC",      name:"Laço Veludo Vermelho Meio Xadrez",          subtitle:"Xadrez central",         category:"Estampado", material:"100% poliéster",            acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço tradicional confeccionado em tecido xadrez, com borda em veludo.",                                   cores:cVM,    photo:F.vxc,         ...TC.E, sizes:[{label:"20cm",ref:"20VXC",min:12,estoque:500},{label:"30cm",ref:"30VXC",min:10,estoque:500},{label:"40cm",ref:"40VXC",min:8,estoque:500}] },
  { sku:"VFIXDZ",   name:"Laço Veludo Vermelho Fita Xadrez",          subtitle:"Fita xadrez",            category:"Estampado", material:"100% poliéster",            acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço confeccionado em Veludo Tradicional, com fita xadrez decorativa central.",                          cores:cVM,    photo:F.vfixdz,      ...TC.E, sizes:[{label:"40cm",ref:"40VFiXdz",min:10,estoque:500}] },
  { sku:"VXP",      name:"Laço Veludo Vermelho Xadrez/Preto",         subtitle:"Flanela xadrez",         category:"Estampado", material:"100% poliéster",            acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço com flanela xadrez Vermelho/Preto central.",                                                         cores:cVP,    photo:F.vxp,         ...TC.E, sizes:[{label:"20cm",ref:"20VXP",min:12,estoque:500},{label:"30cm",ref:"30VXP",min:10,estoque:500},{label:"40cm",ref:"40VXP",min:8,estoque:500}] },
  { sku:"TL",       name:"Laço Tecido Listra Vermelho/Branco",        subtitle:"Listrado clássico",      category:"Estampado", material:"100% algodão",              acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço tradicional confeccionado em tecido listrado.",                                                      cores:cVB,    photo:F.tl,          ...TC.E, sizes:[{label:"20cm",ref:"20TL",min:12,estoque:500},{label:"30cm",ref:"30TL",min:10,estoque:500},{label:"40cm",ref:"40TL",min:8,estoque:500}] },
  // LAMÊ
  { sku:"LDR",      name:"Laço Lamê Dourado",                         subtitle:"Brilho metálico",        category:"Lamê",      material:"100% poliéster metalizado", acabamento:AE,   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Laço tradicional confeccionado em Lamê dourado; brilho intenso.",                                         cores:cLD,    photo:F.ldr,         ...TC.L, sizes:[{label:"20cm",ref:"20LDR",min:12,estoque:500},{label:"30cm",ref:"30LDR",min:10,estoque:500},{label:"40cm",ref:"40LDR",min:8,estoque:500}] },
  // BOLAS
  { sku:"BVAL",     name:"Bola Veludo Ale",                            subtitle:"12cm a 25cm",            category:"Bolas",     material:"Isopor e poliéster",        acabamento:AIS,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Bola tradicional coberta com veludo cristal.",                                                            cores:cVGBCL, photo:F.bola_vm,     ...TC.B, sizes:[{label:"12cm",ref:"12BVAl",min:1,estoque:500},{label:"15cm",ref:"15BVAl",min:1,estoque:500},{label:"20cm",ref:"20BVAl",min:1,estoque:500},{label:"25cm",ref:"25BVAl",min:1,estoque:500}] },
  { sku:"BTXDZ",    name:"Bola Tecido Xadrez Decorada",                subtitle:"Xadrez Verm/Branco",     category:"Bolas",     material:"Isopor e poliéster",        acabamento:AIS,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Bola coberta com tecido xadrez Vermelho/Branco e decorada com galhos natalinos.",                         cores:cVB,    photo:F.bola_xdz,    ...TC.B, sizes:[{label:"12cm",ref:"12BTXdz",min:1,estoque:500},{label:"15cm",ref:"15BTXdz",min:1,estoque:500},{label:"20cm",ref:"20BTXdz",min:1,estoque:500}] },
  { sku:"BTLT",     name:"Bola Tecido Listrado Decorada",              subtitle:"Listrado Verm/Branco",   category:"Bolas",     material:"Isopor e poliéster",        acabamento:AIS,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Bola coberta com tecido listrado Vermelho/Branco e decorada com galhos natalinos.",                      cores:cVB,    photo:F.bola_lst,    ...TC.B, sizes:[{label:"12cm",ref:"12BTLt",min:1,estoque:500},{label:"15cm",ref:"15BTLt",min:1,estoque:500},{label:"20cm",ref:"20BTLt",min:1,estoque:500}] },
  { sku:"BTXDZP",   name:"Bola Tecido Xadrez Vermelho/Preto",          subtitle:"Xadrez Verm/Preto",      category:"Bolas",     material:"Isopor e poliéster",        acabamento:AIS,  prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Bola coberta com tecido Xadrez Vermelho/Preto e decorada com galhos natalinos.",                         cores:cVP,    photo:F.bola_pt,     ...TC.B, sizes:[{label:"12cm",ref:"12BTXdzVm/Pt",min:1,estoque:500},{label:"15cm",ref:"15BTXdzVm/Pt",min:1,estoque:500},{label:"20cm",ref:"20BTXdzVm/Pt",min:1,estoque:500}] },
  // SALDÃO
  { sku:"BJR",      name:"Bota Juta Renda",                            subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:7,   preco:59.80,    desc:"Bota decorativa em Juta com Renda.",                                                                     cores:cNAT,   photo:F.bjr,         ...TC.S, sizes:[{label:"50cm",ref:"50BJR",min:1,estoque:7}] },
  { sku:"SFVCBR",   name:"Saia Árvore Feltro Vermelho Cervo Branco",   subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:2,   preco:89.60,    desc:"Saia para árvore em feltro vermelho com cervo branco.",                                                  cores:cVM,    photo:F.sfvcbr,      ...TC.S, sizes:[{label:"1MT",ref:"1SFVCBR",min:1,estoque:2}] },
  { sku:"BFVCBR",   name:"Bota Feltro Vermelho Cervo Branco",          subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:12,  preco:39.80,    desc:"Bota em feltro vermelho com cervo branco.",                                                              cores:cVM,    photo:F.bfvcbr,      ...TC.S, sizes:[{label:"50cm",ref:"50BFVCBR",min:1,estoque:12}] },
  { sku:"SFCCXD",   name:"Saia Árvore Feltro Cru Cervo Xadrez",        subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:4,   preco:89.60,    desc:"Saia para árvore em feltro cru com cervo xadrez.",                                                       cores:cVM,    photo:F.sfccxd,      ...TC.S, sizes:[{label:"1MT",ref:"1SFCCXD",min:1,estoque:4}] },
  { sku:"BFCCXDZ",  name:"Bota Feltro Cru Cervo Xadrez",               subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:6,   preco:39.80,    desc:"Bota em feltro cru com cervo xadrez.",                                                                   cores:cVM,    photo:F.bfccxdz,     ...TC.S, sizes:[{label:"50cm",ref:"50BFCCXDZ",min:1,estoque:6}] },
  { sku:"SFXDP",    name:"Saia Árvore Flanelada Xadrez/Pelúcia",       subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:8,   preco:104.30,   desc:"Saia para árvore em tecido flanelado xadrez com pelúcia.",                                               cores:cVM,    photo:F.saia_xdz_rosa,...TC.S,sizes:[{label:"1MT",ref:"1SFXDP",min:1,estoque:8}] },
  { sku:"BXFDZP",   name:"Bota Flanelada Xadrez/Pelúcia",              subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:10,  preco:68.70,    desc:"Bota em tecido flanelado xadrez com pelúcia.",                                                           cores:cNAT,   photo:F.bota_flanela,...TC.S, sizes:[{label:"50cm",ref:"50BXFDZP",min:1,estoque:10}] },
  { sku:"SFVDB",    name:"Saia Árvore Feltro Verde Bengala",            subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:2,   preco:129.60,   desc:"Saia para árvore em feltro verde bengala.",                                                              cores:cNAT,   photo:F.sfvdb,       ...TC.S, sizes:[{label:"1MT",ref:"1SFVDB",min:1,estoque:2}] },
  { sku:"BFVB",     name:"Bota Feltro Verde Bengala",                   subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:2,   preco:79.90,    desc:"Bota em feltro verde bengala.",                                                                          cores:cNAT,   photo:F.bfvb,        ...TC.S, sizes:[{label:"50cm",ref:"50BFVB",min:1,estoque:2}] },
  { sku:"SFVOC",    name:"Saia Árvore Feltro Verde Oliva Cervo",        subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:1,   preco:79.30,    desc:"Saia para árvore em feltro verde oliva com cervo e guizo.",                                              cores:cNAT,   photo:F.sfvoc,       ...TC.S, sizes:[{label:"1MT",ref:"1SFVOC",min:1,estoque:1}] },
  { sku:"BFVOC",    name:"Bota Feltro Verde Oliva Cervo",               subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:4,   preco:29.80,    desc:"Bota em feltro verde oliva com cervo.",                                                                  cores:cNAT,   photo:F.bfvoc,       ...TC.S, sizes:[{label:"50cm",ref:"50BFVOC",min:1,estoque:4}] },
  { sku:"SFVGPT",   name:"Saia Árvore Feltro Gatinho Preto",            subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:1,   preco:119.40,   desc:"Saia para árvore em feltro com gatinho preto.",                                                          cores:cNAT,   photo:F.sfvgpt,      ...TC.S, sizes:[{label:"1MT",ref:"1SFVGPT",min:1,estoque:1}] },
  { sku:"BFVGPT",   name:"Bota Feltro Vermelho Gatinho Preto",          subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:0,   preco:PRECO_UN, desc:"Bota em feltro vermelho com gatinho preto.",                                                             cores:cNAT,   photo:F.bfvgpt,      ...TC.S, sizes:[{label:"50cm",ref:"50BFVGPT",min:1,estoque:0}] },
  { sku:"SFVCPT",   name:"Saia Árvore Feltro Vermelho Cachorro Preto",  subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:3,   preco:129.40,   desc:"Saia para árvore em feltro vermelho com cachorrinho preto.",                                             cores:cNAT,   photo:F.sfvcpt,      ...TC.S, sizes:[{label:"1MT",ref:"1SFVCPT",min:1,estoque:3}] },
  { sku:"BFVMCPT",  name:"Bota Feltro Vermelho Cachorrinho Preto",      subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:5,   preco:69.70,    desc:"Bota em feltro vermelho com cachorrinho preto.",                                                         cores:cNAT,   photo:F.bfvmcpt,     ...TC.S, sizes:[{label:"50cm",ref:"50BFVMCPT",min:1,estoque:5}] },
  { sku:"SFVEP",    name:"Saia Árvore Feltro Verde Espinha Peixe",      subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:4,   preco:79.50,    desc:"Saia para árvore em feltro verde espinha de peixe.",                                                     cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"1MT",ref:"1SFVEP",min:1,estoque:4}] },
  { sku:"BFVDEPX",  name:"Bota Feltro Verde Espinha Peixe",             subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:13,  preco:49.80,    desc:"Bota em feltro verde espinha de peixe.",                                                                 cores:cNAT,   photo:F.bfvdepx,     ...TC.S, sizes:[{label:"50cm",ref:"50BFVDEPX",min:1,estoque:13}] },
  { sku:"SFVO",     name:"Saia Árvore Vermelho Ossinho",                 subtitle:"1MT",                    category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:3,   preco:79.50,    desc:"Saia para árvore em feltro vermelho com ossinho.",                                                       cores:cNAT,   photo:F.saia_ossinho,...TC.S, sizes:[{label:"1MT",ref:"1SFVO",min:1,estoque:3}] },
  { sku:"BFVO",     name:"Bota Feltro Verde Ossinho",                    subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:4,   preco:49.80,    desc:"Bota em feltro verde com ossinho.",                                                                       cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"50cm",ref:"50BFVO",min:1,estoque:4}] },
  { sku:"BJXDZN",   name:"Bota Juta Xadrez Natalino",                    subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:16,  preco:69.50,    desc:"Bota em juta com xadrez natalino.",                                                                       cores:cNAT,   photo:F.bjxdzn,      ...TC.S, sizes:[{label:"50cm",ref:"50BJXDZN",min:1,estoque:16}] },
  { sku:"BJCM",     name:"Bota Juta Cervo Madeira",                      subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:4,   preco:69.50,    desc:"Bota em juta com cervo madeira.",                                                                         cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"50cm",ref:"50BJCM",min:1,estoque:4}] },
  { sku:"BVPArDr",  name:"Bota Velboa/Pelúcia Árvore",                   subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:27,  preco:34.80,    desc:"Bota em velboa/pelúcia com árvore.",                                                                      cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"50cm",ref:"50BVPArDr",min:1,estoque:27}] },
  { sku:"SVVPN",    name:"Saia Árvore Velboa Vermelho Papai Noel",       subtitle:"80/100/120cm",           category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:14,  preco:59.00,    desc:"Saia para árvore em velboa vermelho com Papai Noel.",                                                    cores:cNAT,   photo:F.saia_noel_vm,...TC.S, sizes:[{label:"80cm",ref:"80SVVPN",min:1,estoque:4},{label:"100cm",ref:"100SVVPN",min:1,estoque:6},{label:"120cm",ref:"120SVVPN",min:1,estoque:4}] },
  { sku:"SFG",      name:"Saia Árvore Feltro Gnomo",                     subtitle:"100cm",                  category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:1,   preco:79.50,    desc:"Saia para árvore em feltro com gnomo.",                                                                  cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"100cm",ref:"1SFG",min:1,estoque:1}] },
  { sku:"SFPN",     name:"Saia Árvore Feltro Papai Noel",                subtitle:"100cm",                  category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:7,   preco:89.30,    desc:"Saia para árvore em feltro com Papai Noel.",                                                             cores:cNAT,   photo:F.saia_noel,   ...TC.S, sizes:[{label:"100cm",ref:"1SFPN",min:1,estoque:7}] },
  { sku:"SFCRU",    name:"Saia Feltro Cru Organza Lacinho",              subtitle:"100cm",                  category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:500, preco:0,        desc:"Saia para árvore em feltro cru com organza e lacinho.",                                                  cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"100cm",ref:"1SFCRU/OLÇ",min:1,estoque:500}] },
  { sku:"SVVBBR",   name:"Saia Velboa Vermelho Bolas Pelúcia",           subtitle:"100cm",                  category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:500, preco:0,        desc:"Saia para árvore em velboa vermelho com bolas de pelúcia.",                                              cores:cNAT,   photo:F.saia_bola_pel,...TC.S,sizes:[{label:"100cm",ref:"1SVVBBR",min:1,estoque:500}] },
  { sku:"SFOS",     name:"Saia Feltro Organza Sextavada",                subtitle:"80cm / 100cm",           category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:20,  preco:69.40,    desc:"Saia para árvore em feltro com organza sextavada.",                                                      cores:cNAT,   photo:F.sfos,        ...TC.S, sizes:[{label:"80cm",ref:"80SFOS",min:1,estoque:10},{label:"100cm",ref:"1SFOS",min:1,estoque:10}] },
  { sku:"BFCODRLÇ", name:"Bota Feltro Cordeiro Laço",                    subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:10,  preco:29.80,    desc:"Bota em feltro cordeiro com laço.",                                                                       cores:cNAT,   photo:F.bota_laco_dou,...TC.S,sizes:[{label:"50cm",ref:"50BFCODRLÇ",min:1,estoque:10}] },
  { sku:"BFVPACH",  name:"Bota Velboz Patchwork",                        subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:10,  preco:49.70,    desc:"Bota em velboz estilo patchwork.",                                                                        cores:cNAT,   photo:PH,            ...TC.S, sizes:[{label:"50cm",ref:"50BFVPACH",min:1,estoque:10}] },
  { sku:"BVVPN",    name:"Bota Velboz Cru/Rosê Laço",                    subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:500, preco:PRECO_UN, desc:"Bota em velboz cru/rosê com laço.",                                                                       cores:cNAT,   photo:F.bvvpn,       ...TC.S, sizes:[{label:"50cm",ref:"50BVVPN",min:1,estoque:500}] },
  { sku:"SOS",      name:"Saia Organza Sextavada",                       subtitle:"60/80/100cm",            category:"Saldão",    material:"100% Poliéster",            acabamento:"",   prazo:P30,           estoque:500, preco:0,        desc:"Saia para árvore em organza sextavada.",                                                                 cores:cNAT,   photo:F.saia_noel,   ...TC.S, sizes:[{label:"60cm",ref:"60SOS",min:1,estoque:500},{label:"80cm",ref:"80SOS",min:1,estoque:500},{label:"100cm",ref:"1SOS",min:1,estoque:500}] },
  { sku:"RNL",      name:"Roupa Noel Luxo",                              subtitle:"Tam. GG",                category:"Saldão",    material:"95% poliéster, 5% vinil",   acabamento:"",   prazo:P30,           estoque:500, preco:0,        desc:"Roupa do Papai Noel luxo em feltro e pelúcia.",                                                          cores:cUNI,   photo:F.roupa_noel,  ...TC.S, sizes:[{label:"GG",ref:"RNL",min:2,estoque:500}] },
  // KITS
  { sku:"KitVN2",   name:"Kit Varalzinho Natalino",                      subtitle:"Kit 2 pçs · 150cm",     category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia e fivela.",      prazo:P30, estoque:10,  preco:39.80, desc:"Kit com 2 pçs: Varalzinho 1,50mt em feltro e pelúcia.",                  cores:cVNude, photo:F.kit_varal,   ...TC.K, sizes:[{label:"150cm",ref:"KitVN2",min:3,estoque:10}] },
  { sku:"KitNat5",  name:"Kit Figuras Natalinas Sortidas",               subtitle:"Kit 5 pçs",             category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia, soutache e botão.", prazo:P30, estoque:4,   preco:25.00, desc:"Kit com 5 pçs: casaco, calça, bota, gorro, estrela e árvore.",          cores:cVNDou, photo:F.kit_figuras, ...TC.K, sizes:[{label:"Kit 5",ref:"KitNat5",min:3,estoque:4}] },
  { sku:"KitRN4",   name:"Kit Roupa Noel Sortida",                       subtitle:"Kit 4 pçs",             category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia e fivela.",      prazo:P30, estoque:3,   preco:28.00, desc:"Kit com 4 pçs: casaco e calça em feltro e pelúcia.",                    cores:cVNude, photo:F.kit_noel_sort,...TC.K,sizes:[{label:"Kit 4",ref:"KitRN4",min:3,estoque:3}] },
  { sku:"KitNatB50",name:"Kit Bota Natalina Sortidas 50cm",              subtitle:"Kit 5 pçs · 50cm",      category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia e soutache.",    prazo:P30, estoque:3,   preco:49.00, desc:"Kit com 5 Botas Natalinas 50cm em organza, veludo velboa e feltro.",     cores:cVMulti,photo:F.kit_bota_nat, ...TC.K, sizes:[{label:"50cm",ref:"KitNatB50",min:3,estoque:3}] },
  { sku:"KitNatB35",name:"Kit Bota Natalina Sortidas 35cm",              subtitle:"Kit 5 pçs · 35cm",      category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia e fivela.",      prazo:P30, estoque:11,  preco:39.50, desc:"Kit com 5 Botas Natalinas 35cm em organza, feltro e pelúcia.",          cores:cVMulti,photo:F.kit_bota_35,  ...TC.K, sizes:[{label:"35cm",ref:"KitNatB35",min:3,estoque:11}] },
  { sku:"KitNatB30",name:"Kit Bota Natalina Sortidas 30cm",              subtitle:"Kit 5 pçs · 30cm",      category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia e fivela.",      prazo:P30, estoque:35,  preco:29.50, desc:"Kit com 5 Botas Natalinas 30cm.",                                       cores:cVMulti,photo:F.kit_bota_30,  ...TC.K, sizes:[{label:"30cm",ref:"KitNatB30",min:5,estoque:35}] },
  { sku:"SNSor",    name:"Saia Natalina Sortida",                        subtitle:"60 a 120cm",            category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, pelúcia e fivela.",      prazo:P30, estoque:274, preco:18.90, desc:"Saia Natalina em Organza e Cetim, estampada em Verde, Vermelho, Dourado e Branco.", cores:cVMulti,photo:F.saias_var,...TC.S,sizes:[{label:"60cm",ref:"60SNSor",min:6,estoque:71},{label:"80cm",ref:"80SNSor",min:6,estoque:78},{label:"100cm",ref:"100SNSor",min:6,estoque:97},{label:"120cm",ref:"120SNSor",min:6,estoque:28}] },
  { sku:"BVVm",     name:"Bota Velboa Vermelho 50cm",                    subtitle:"50cm",                   category:"Saldão",    material:"100% Poliéster",            acabamento:ACFP, prazo:P30,           estoque:3,   preco:19.90,    desc:"Bota Natalina 50cm em Veludo Velboa e pelúcia.",                                                         cores:cUNI,   photo:F.bota_bolinha,...TC.S, sizes:[{label:"50cm",ref:"50BVVm",min:10,estoque:3}] },
  { sku:"SFVVArv",  name:"Saia Feltro Vermelho e Verde Árvore",          subtitle:"80 a 120cm",             category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, sianinha e botão.",      prazo:P30, estoque:18,  preco:19.90,    desc:"Saia Natalina em Feltro, aplicação árvores Patchwork e sianinha.",       cores:cUNI,   photo:F.saia_arvore, ...TC.S, sizes:[{label:"80cm",ref:"80SFVVArv",min:5,estoque:3},{label:"100cm",ref:"100SFVVArv",min:3,estoque:12},{label:"120cm",ref:"120SFVVArv",min:3,estoque:3}] },
  { sku:"SNFC",     name:"Saia Natalina Feltro Coruja",                  subtitle:"100cm",                  category:"Saldão",    material:"100% Poliéster",            acabamento:"Costura francesa, viés e velcro.",         prazo:P30, estoque:3,   preco:79.80,    desc:"Saia Verde Musgo 100cm em Feltro, aplicação Coruja e galho.",            cores:cUNI,   photo:F.saia_coruja, ...TC.S, sizes:[{label:"100cm",ref:"100SNFC",min:8,estoque:3}] },
  { sku:"SVVmBr",   name:"Saia Velboa Vermelho e Branco",                subtitle:"50 e 60cm",              category:"Saldão",    material:"100% Poliéster",            acabamento:"Cianinha branca.",                         prazo:P30, estoque:8,   preco:24.90,    desc:"Saia Natalina Veludo Velboa e Pelúcia, aplicação cianinha.",              cores:cUNI,   photo:F.saia_velb_pol,...TC.S,sizes:[{label:"50cm",ref:"50SVVmBr",min:7,estoque:4},{label:"60cm",ref:"60SVVmBr",min:4,estoque:4}] },
  { sku:"SNPop",    name:"Saia Natalina POP Árvore",                     subtitle:"60 a 120cm",             category:"Saldão",    material:"100% Poliéster",            acabamento:"Cianinha branca e botão.",                 prazo:P30, estoque:95,  preco:29.90,    desc:"Saia Natalina em Feltro, com aplicação Árvores.",                        cores:cUNI,   photo:F.saia_velb_pol,...TC.S,sizes:[{label:"60cm",ref:"60SNPop",min:30,estoque:30},{label:"80cm",ref:"80SNPop",min:30,estoque:30},{label:"100cm",ref:"100SNPop",min:30,estoque:30},{label:"120cm",ref:"120SNPop",min:5,estoque:5}] },
  { sku:"SNNCxP",   name:"Saia Natalina Noel Caixa Presente",            subtitle:"60 a 100cm",             category:"Saldão",    material:"100% Poliéster",            acabamento:"Cianinha vermelha e botão.",               prazo:P30, estoque:90,  preco:32.90,    desc:"Saia Natalina em Feltro, com aplicação Noel e Caixas Presente.",         cores:cUNI,   photo:F.saia_cx_noel,...TC.S, sizes:[{label:"60cm",ref:"60SNNCxP",min:30,estoque:30},{label:"80cm",ref:"80SNNCxP",min:30,estoque:30},{label:"100cm",ref:"100SNNCxP",min:30,estoque:30}] },
];


const CATEGORIES = ["Todos", "Veludo", "Lamê", "Estampado", "Bolas", "Saldão"];
const VENDEDORES  = ["Alexandra", "Valéria", "Cleuza"];
const SHEETS_URL  = "https://script.google.com/macros/s/AKfycbwwTdPBtFEyWk-E-Db8WkYlHyBLpbqjvlphsCtpNpZvGjVM-xvXrE7zkoX3cr_xRtdFhg/exec";

const BRL     = v => `R$ ${Number(v).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
const gerarNr = () => `#${Date.now().toString().slice(-5)}`;
const getFoto = (p, i) => p.cores?.[i]?.photo || p.photo || "";

// ── GERADOR DO PEDIDO PARA IMPRESSÃO ─────────────────────────────────────────
const gerarPedidoHTML = ({ cart, form, nrPedido, desconto, frete }) => {
  const subtotal   = cart.reduce((s, i) => s + i.qty * i.product.preco, 0);
  const descVal    = desconto.tipo === "%" ? subtotal * (desconto.valor / 100) : desconto.valor;
  const totalFinal = Math.max(0, subtotal - descVal) + (frete || 0);
  const totalItens = cart.length;
  const totalUn    = cart.reduce((s, i) => s + i.qty, 0);
  const dataHora   = new Date().toLocaleString("pt-BR");

  const linhasItens = cart.map(item => `
    <tr>
      <td class="td-ref">${item.size?.ref || ""}</td>
      <td><strong>${item.product.name}</strong></td>
      <td>${item.size?.label || ""}</td>
      <td><span class="td-cor"><span class="cor-dot" style="background:${item.color?.hex || "#ccc"}"></span> ${item.color?.name || ""}</span></td>
      <td style="text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:#2D5A27;">${item.qty}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700;color:#2D5A27;">${BRL(item.qty * item.product.preco)}</td>
    </tr>`).join("");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pedido ${nrPedido} — Laço & Entrelaço</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'DM Sans',sans-serif;background:#f5f5f5;padding:20px;color:#1A1A1A;font-size:13px;}
  .page{background:#fff;max-width:794px;margin:0 auto;padding:36px 44px 44px;box-shadow:0 4px 24px rgba(0,0,0,0.1);border-radius:8px;}
  .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;padding-bottom:20px;border-bottom:2px solid #2D5A27;}
  .logo img{height:80px;object-fit:contain;}
  .pedido-nr{font-family:'Playfair Display',serif;font-size:24px;color:#2D5A27;font-weight:600;}
  .pedido-data{font-family:'DM Mono',monospace;font-size:10px;color:#888;letter-spacing:1px;margin-top:3px;}
  .section-title{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:2.5px;color:#2D5A27;text-transform:uppercase;margin-bottom:8px;}
  .cliente-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;margin-bottom:20px;background:#FAF8F5;border-radius:6px;padding:12px;border:1px solid #E8E0D8;}
  .campo label{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:1px;color:#888;text-transform:uppercase;display:block;margin-bottom:3px;}
  .campo span{font-size:12px;color:#1A1A1A;font-weight:500;}
  .tabela-wrap{margin-bottom:20px;}
  table{width:100%;border-collapse:collapse;}
  thead tr{background:#2D5A27;}
  thead th{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;color:#fff;text-transform:uppercase;padding:7px 8px;text-align:left;}
  tbody tr{border-bottom:1px solid #E8E0D8;}
  tbody tr:nth-child(even){background:#FAF8F5;}
  tbody td{padding:6px 8px;font-size:11px;vertical-align:middle;}
  tbody td:last-child{text-align:right;}
  .td-ref{font-family:'DM Mono',monospace;font-size:9px;color:#888;}
  .td-cor{display:inline-flex;align-items:center;gap:5px;}
  .cor-dot{width:8px;height:8px;border-radius:50%;border:1px solid rgba(0,0,0,0.15);flex-shrink:0;display:inline-block;}
  .bottom-area{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:24px;}
  .condicoes-box{flex:1;background:#FAF8F5;border:1px solid #E8E0D8;border-radius:6px;padding:12px 16px;}
  .condicoes-linha{margin-bottom:10px;}
  .condicoes-linha:last-child{margin-bottom:0;}
  .condicoes-linha label{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:1px;color:#888;text-transform:uppercase;display:block;margin-bottom:5px;}
  .linha-escrita{border:none;border-bottom:1px solid #888;width:100%;height:20px;background:transparent;}
  .totais-box{background:#FAF8F5;border:1px solid #E8E0D8;border-radius:6px;padding:12px 16px;min-width:200px;}
  .totais-linha{display:flex;justify-content:space-between;align-items:center;padding:3px 0;font-size:11px;}
  .totais-linha span:first-child{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;color:#888;text-transform:uppercase;}
  .totais-linha.desconto span:last-child{color:#BF360C;}
  .totais-linha.total-final{border-top:1px solid #E8E0D8;margin-top:5px;padding-top:8px;}
  .totais-linha.total-final span:last-child{font-size:15px;color:#2D5A27;font-weight:700;}
  .footer{display:flex;justify-content:space-between;align-items:flex-end;padding-top:20px;border-top:1px solid #E8E0D8;}
  .footer-assinatura{text-align:center;}
  .footer-assinatura .linha-assinatura{width:160px;border-top:1px solid #888;margin:0 auto 5px;}
  .footer-assinatura span{font-family:'DM Mono',monospace;font-size:8px;color:#888;letter-spacing:1px;}
  .footer-contato{text-align:right;font-family:'DM Mono',monospace;font-size:8px;color:#888;letter-spacing:0.5px;line-height:1.8;}
  .no-print{text-align:center;margin-bottom:20px;display:flex;gap:10px;justify-content:center;}
  .btn{border:none;padding:10px 28px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .btn-print{background:#2D5A27;color:#fff;}
  .btn-close{background:#E8E0D8;color:#1A1A1A;}
  @media print{body{background:#fff;padding:0;}.page{box-shadow:none;border-radius:0;padding:16px 24px;}.no-print{display:none!important;}.linha-escrita{border-bottom:1px solid #aaa;}}
</style>
</head>
<body>
<div class="no-print">
  <button class="btn btn-print" onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
  <button class="btn btn-close" onclick="window.close()">✕ Fechar</button>
</div>
<div class="page">
  <div class="header">
    <div class="logo">
      <img src="https://res.cloudinary.com/djeliz676/image/upload/v1779736824/LOGOS_daguvp.png" alt="Laço & Entrelaço" onerror="this.style.display='none'">
    </div>
    <div style="text-align:right;">
      <div class="pedido-nr">${nrPedido}</div>
      <div class="pedido-data">DATA: ${dataHora}</div>
    </div>
  </div>

  <p class="section-title">Dados do Cliente</p>
  <div class="cliente-grid">
    <div class="campo"><label>Empresa / Nome</label><span>${form.nome || "—"}</span></div>
    <div class="campo"><label>CPF / CNPJ</label><span>${form.cpfcnpj || "—"}</span></div>
    <div class="campo"><label>WhatsApp</label><span>${form.whats || "—"}</span></div>
    <div class="campo"><label>E-mail</label><span>${form.email || "—"}</span></div>
  </div>

  <p class="section-title">Itens do Pedido</p>
  <div class="tabela-wrap">
    <table>
      <thead>
        <tr>
          <th>Ref.</th>
          <th>Produto</th>
          <th>Tam.</th>
          <th>Cor</th>
          <th style="text-align:center">Qtd</th>
          <th style="text-align:right">Subtotal</th>
        </tr>
      </thead>
      <tbody>${linhasItens}</tbody>
    </table>
  </div>

  <div class="bottom-area">
    <div class="condicoes-box">
      <div class="condicoes-linha"><label>Forma de Pagamento</label><div class="linha-escrita"></div></div>
      <div class="condicoes-linha"><label>Data de Entrega</label><div class="linha-escrita"></div></div>
      <div class="condicoes-linha"><label>Frete</label><div class="linha-escrita"></div></div>
      <div class="condicoes-linha"><label>Observações</label><div class="linha-escrita"></div></div>
    </div>
    <div class="totais-box">
      <div class="totais-linha"><span>Itens / Unidades</span><span>${totalItens} / ${totalUn} un.</span></div>
      <div class="totais-linha"><span>Subtotal</span><span>${BRL(subtotal)}</span></div>
      ${descVal > 0 ? `<div class="totais-linha desconto"><span>Desconto ${desconto.tipo === "%" ? `(${desconto.valor}%)` : ""}</span><span>− ${BRL(descVal)}</span></div>` : ""}
      ${frete > 0 ? `<div class="totais-linha"><span>Frete</span><span>${BRL(frete)}</span></div>` : ""}
      <div class="totais-linha total-final"><span>Total</span><span>${BRL(totalFinal)}</span></div>
    </div>
  </div>

  ${form.obs ? `<p class="section-title" style="margin-top:4px;">Observações</p><div style="background:#FBE9E7;border:1px solid #8B1A2A33;border-radius:6px;padding:10px 14px;margin-bottom:20px;font-size:12px;line-height:1.6;">${form.obs}</div>` : ""}

  <div class="footer">
    <div class="footer-assinatura">
      <div class="linha-assinatura"></div>
      <span>Assinatura do Cliente</span>
    </div>
    <div class="footer-assinatura">
      <div class="linha-assinatura"></div>
      <span>Vendedora Responsável</span>
    </div>
    <div class="footer-contato">
      <strong style="color:#2D5A27;font-size:9px;">Laço & Entrelaço</strong><br>
      CNPJ: 57.815.151/0001-15<br>
      Rua XXX, nº Y — Centro, Santo André/SP<br>
      www.laçoentrelaço.com.br<br>
      atendimento@mkcomercial.com.br · (11) 92609-2607
    </div>
  </div>
</div>
</body>
</html>`;
};

// ── CSS ───────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  .pf{font-family:'Playfair Display',serif;}
  .dm{font-family:'DM Sans',sans-serif;}
  .mn{font-family:'DM Mono',monospace;}
  .inp{width:100%;padding:10px 13px;border-radius:10px;color:#111;font-size:15px;border:1.5px solid #D8D0C8;background:#FAF8F5;font-family:'DM Sans',sans-serif;outline:none;-webkit-appearance:none;display:block;}
  .inp:focus{border-color:#2D5A27;}
  .scr{overflow-y:auto;-webkit-overflow-scrolling:touch;}
  .scr::-webkit-scrollbar{width:4px;}
  .scr::-webkit-scrollbar-thumb{background:#D8D0C8;border-radius:4px;}
  .srch{width:100%;padding:10px 13px 10px 38px;border-radius:10px;border:1.5px solid #D8D0C8;background:#fff;font-size:14px;font-family:'DM Sans',sans-serif;color:#111;outline:none;}
  .srch:focus{border-color:#2D5A27;}
  .card-btn-add{width:100%;padding:10px;border-radius:10px;border:none;cursor:pointer;font-family:'DM Mono',monospace;font-size:11px;font-weight:700;letter-spacing:1px;transition:opacity .15s;}
  .card-btn-add:active{opacity:.75;}
  .nav-btn{background:none;border:none;cursor:pointer;padding:8px 12px;border-radius:10px;display:flex;flex-direction:column;align-items:center;gap:3px;transition:background .15s;}
  .nav-btn:hover{background:#F0EDE8;}
  .nav-btn.active{background:#E8F0E6;}
`;

// ── COMPONENTES BASE ──────────────────────────────────────────────────────────
const Img = memo(({ src, h = 200 }) => {
  const [err, setErr] = useState(false);
  if (err || !src) return <div style={{ width: "100%", height: h, background: CARD2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>🎀</div>;
  return <img src={src} alt="" style={{ width: "100%", height: h, objectFit: "cover", display: "block" }} onError={() => setErr(true)} />;
});

const Tag = ({ label, color, bg }) => (
  <span className="mn" style={{ background: bg, color, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, padding: "3px 9px", borderRadius: 4, border: `1px solid ${color}33`, display: "inline-block" }}>{label.toUpperCase()}</span>
);

const Logo = () => (
  <img src={F.logo} alt="Laço & Entrelaço" style={{ height: 40, objectFit: "contain" }} onError={e => e.target.style.display = "none"} />
);

// ── QUICK ADD ────────────────────────────────────────────────────────────────
const QuickAdd = memo(({ product: p, onAdd }) => {
  const [sz, setSz] = useState(0);
  const [cl, setCl] = useState(0);
  const [qt, setQt] = useState(p.sizes[0]?.min || 1);
  const [open, setOpen] = useState(false);

  const tam = p.sizes[sz] || p.sizes[0];
  const cor = p.cores[cl] || p.cores[0];
  const min = tam?.min || 1;
  const estoqueAtual = tam?.estoque ?? p.estoque ?? 0;
  const semEstoque = estoqueAtual === 0;

  const handleSz = i => { setSz(i); setQt(p.sizes[i]?.min || 1); };
  const addQty = n => setQt(q => Math.min(estoqueAtual || 9999, Math.max(min, q + n)));

  const doAdd = e => {
    e.stopPropagation();
    onAdd({ product: p, size: tam, color: cor, qty: qt, id: Date.now() });
    setOpen(false);
    setSz(0); setCl(0); setQt(p.sizes[0]?.min || 1);
  };

  if (!open) return (
    <button className="card-btn-add" onClick={e => { e.stopPropagation(); if (!semEstoque) setOpen(true); }}
      style={{ background: semEstoque ? "#ccc" : VERDE, color: "#fff", cursor: semEstoque ? "not-allowed" : "pointer" }}>
      {semEstoque ? "SEM ESTOQUE" : "+ ADICIONAR"}
    </button>
  );

  return (
    <div onClick={e => e.stopPropagation()} style={{ background: VERDES, borderRadius: 12, padding: "12px", border: `1px solid ${VERDE}33` }}>
      <p className="mn" style={{ fontSize: 9, color: TEXT3, letterSpacing: 1, marginBottom: 6 }}>TAMANHO</p>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
        {p.sizes.map((s, i) => {
          const est = s.estoque ?? p.estoque ?? 0;
          const esg = est === 0;
          return (
            <button key={i} onClick={() => { if (!esg) handleSz(i); }}
              style={{ padding: "5px 9px", borderRadius: 7, background: sz === i ? VERDE : esg ? "#eee" : CARD, color: sz === i ? "#fff" : esg ? "#bbb" : TEXT, border: sz === i ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: esg ? "not-allowed" : "pointer", opacity: esg ? 0.6 : 1 }}>
              {s.label}{esg ? " ✕" : ` (${est})`}
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <span style={{ fontSize: 10 }}>📦</span>
        <span className="mn" style={{ fontSize: 10, color: estoqueAtual <= 3 ? "#BF360C" : VERDE, fontWeight: 700 }}>
          {estoqueAtual === 0 ? "SEM ESTOQUE" : `${estoqueAtual} un. disponíveis`}
        </span>
      </div>
      {p.cores.length > 1 && <>
        <p className="mn" style={{ fontSize: 9, color: TEXT3, letterSpacing: 1, marginBottom: 6 }}>COR</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
          {p.cores.map((c, i) => (
            <button key={i} onClick={() => setCl(i)} title={c.name}
              style={{ width: 22, height: 22, borderRadius: "50%", background: c.hex, border: cl === i ? `2.5px solid ${VERDE}` : `1.5px solid ${BORDER}`, cursor: "pointer" }} />
          ))}
        </div>
      </>}
      <p className="mn" style={{ fontSize: 9, color: TEXT3, letterSpacing: 1, marginBottom: 6 }}>QUANTIDADE</p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
        <div style={{ display: "inline-flex", alignItems: "center", background: CARD, borderRadius: 9, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
          <button onClick={() => addQty(-1)} style={{ width: 32, height: 32, background: "none", border: "none", color: VINHO, fontSize: 18, fontWeight: 700, cursor: "pointer" }}>−</button>
          <span className="mn" style={{ color: TEXT, fontSize: 13, minWidth: 28, textAlign: "center", fontWeight: 700 }}>{qt}</span>
          <button onClick={() => addQty(1)} style={{ width: 32, height: 32, background: "none", border: "none", color: VERDE, fontSize: 18, fontWeight: 700, cursor: "pointer" }}>+</button>
        </div>
        {[5, 10, 50].map(n => (
          <button key={n} onClick={() => addQty(n)}
            style={{ padding: "5px 8px", borderRadius: 7, background: CARD, border: `1px solid ${BORDER}`, fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: "pointer", color: VERDE }}>
            +{n}
          </button>
        ))}
        <span className="mn" style={{ fontSize: 9, color: TEXT3 }}>mín. {min}</span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <button onClick={doAdd} style={{ flex: 1, padding: "9px", borderRadius: 9, background: VERDE, color: "#fff", border: "none", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>✓ ADICIONAR</button>
        <button onClick={e => { e.stopPropagation(); setOpen(false); }} style={{ padding: "9px 12px", borderRadius: 9, background: CARD, border: `1px solid ${BORDER}`, cursor: "pointer", fontSize: 13, color: TEXT3 }}>✕</button>
      </div>
    </div>
  );
});

// ── MODAL DETALHES ────────────────────────────────────────────────────────────
const ProductModal = memo(({ product: p, cartCount, onClose, onAdd, onGoToCart }) => {
  const [sz, setSz] = useState(0);
  const [cl, setCl] = useState(0);
  const [er, setEr] = useState("");
  const tam = p.sizes[sz] || p.sizes[0];
  const min = tam?.min || 1;
  const [qt, setQt] = useState(min);
  const cor = p.cores[cl] || p.cores[0];
  const estoqueModal = tam?.estoque ?? p.estoque ?? 0;

  const handleSz = i => { setSz(i); setQt(p.sizes[i]?.min || 1); setEr(""); };
  const addQty = n => setQt(q => Math.min(estoqueModal || 9999, Math.max(min, q + n)));

  const doAdd = () => {
    if (qt < min) { setEr(`Mínimo de ${min} unidades para este tamanho.`); return; }
    setEr("");
    onAdd({ product: p, size: tam, color: cor, qty: qt, id: Date.now() });
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(20,10,10,0.6)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 9999, backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div className="scr" style={{ background: BG, borderRadius: "24px 24px 0 0", width: "100%", maxWidth: 560, maxHeight: "92vh", borderTop: `2px solid ${VERDE}` }} onClick={e => e.stopPropagation()}>
        <div style={{ position: "relative", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
          <Img src={getFoto(p, cl)} h={260} />
          <button onClick={onClose} style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.92)", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>←</button>
          <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "4px 10px" }}>
            <span className="mn" style={{ color: VERDE, fontSize: 12, fontWeight: 700 }}>{BRL(p.preco)}/un</span>
          </div>
        </div>
        <div style={{ padding: "18px 18px 44px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <Tag label={p.tag} color={p.tagColor} bg={p.tagBg} />
            <span className="mn" style={{ color: TEXT3, fontSize: 9 }}>REF: {p.sku}</span>
          </div>
          <p className="pf" style={{ color: TEXT, fontSize: 22, marginBottom: 3 }}>{p.name}</p>
          <p className="dm" style={{ color: TEXT3, fontSize: 14, marginBottom: 12 }}>{p.subtitle}</p>
          <p className="dm" style={{ color: TEXT2, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
          {p.acabamento && (
            <div style={{ background: VERDES, borderRadius: 12, padding: "10px 14px", marginBottom: 14, border: `1px solid ${VERDE}22` }}>
              <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2, marginBottom: 8 }}>FICHA TÉCNICA</p>
              {[{ l: "Composição", v: p.material }, { l: "Acabamento", v: p.acabamento }, { l: "Prazo", v: p.prazo }].map((r, i, a) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "5px 0", borderBottom: i < a.length - 1 ? `1px solid ${VERDE}18` : "none" }}>
                  <span className="mn" style={{ color: TEXT3, fontSize: 10, minWidth: 80 }}>{r.l}</span>
                  <span className="dm" style={{ color: TEXT2, fontSize: 13 }}>{r.v}</span>
                </div>
              ))}
            </div>
          )}
          <p className="mn" style={{ color: TEXT3, fontSize: 9, letterSpacing: 2, marginBottom: 10 }}>TAMANHO</p>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 }}>
            {p.sizes.map((s, i) => (
              <button key={i} onClick={() => handleSz(i)} style={{ padding: "8px 12px", borderRadius: 10, background: sz === i ? VERDE : CARD, color: sz === i ? "#fff" : TEXT, border: sz === i ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontSize: 11, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>{s.label}</button>
            ))}
          </div>
          <p className="mn" style={{ color: TEXT3, fontSize: 9, letterSpacing: 2, marginBottom: 10 }}>COR</p>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 }}>
            {p.cores.map((c, i) => (
              <button key={i} onClick={() => setCl(i)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 20, background: cl === i ? VERDES : CARD, border: cl === i ? `1.5px solid ${VERDE}` : `1px solid ${BORDER}`, cursor: "pointer" }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: c.hex, border: `1px solid ${BORDER}` }} />
                <span className="mn" style={{ color: cl === i ? VERDE : TEXT2, fontSize: 10, fontWeight: cl === i ? 700 : 400 }}>{c.name}</span>
                {c.photo && <span style={{ fontSize: 9 }}>📷</span>}
              </button>
            ))}
          </div>
          <div style={{ background: CARD2, borderRadius: 10, padding: "8px 14px", marginBottom: 14, display: "flex", justifyContent: "space-between", border: `1px solid ${BORDER}` }}>
            <span className="mn" style={{ color: TEXT3, fontSize: 10 }}>SELECIONADO</span>
            <span className="mn" style={{ color: VERDE, fontSize: 10, fontWeight: 700 }}>{tam?.ref} · {cor?.name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: 10 }}>📦</span>
            <span className="mn" style={{ fontSize: 10, color: estoqueModal <= 3 ? "#BF360C" : TEXT3, fontWeight: 700 }}>
              {estoqueModal === 0 ? "SEM ESTOQUE" : `${estoqueModal} un. disponíveis${estoqueModal <= 3 ? " — Últimas!" : ""}`}
            </span>
          </div>
          <p className="mn" style={{ color: TEXT3, fontSize: 9, letterSpacing: 2, marginBottom: 10, marginTop: 12 }}>QUANTIDADE</p>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10, flexWrap: "wrap" }}>
            <div style={{ display: "inline-flex", alignItems: "center", background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <button onClick={() => addQty(-1)} style={{ width: 38, height: 38, background: "none", border: "none", color: VINHO, fontSize: 22, fontWeight: 700, cursor: "pointer" }}>−</button>
              <span className="mn" style={{ color: TEXT, fontSize: 15, minWidth: 32, textAlign: "center", fontWeight: 700 }}>{qt}</span>
              <button onClick={() => addQty(1)} style={{ width: 38, height: 38, background: "none", border: "none", color: VERDE, fontSize: 22, fontWeight: 700, cursor: "pointer" }}>+</button>
            </div>
            {[5, 10, 50].map(n => (
              <button key={n} onClick={() => addQty(n)}
                style={{ padding: "7px 10px", borderRadius: 8, background: CARD, border: `1px solid ${BORDER}`, fontSize: 11, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: "pointer", color: VERDE }}>
                +{n}
              </button>
            ))}
            <span className="mn" style={{ color: TEXT3, fontSize: 10 }}>mín. {min} un.</span>
          </div>
          <div style={{ background: VERDES, borderRadius: 10, padding: "9px 14px", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${VERDE}22` }}>
            <span className="mn" style={{ color: VERDE, fontSize: 10, letterSpacing: 1 }}>SUBTOTAL</span>
            <span className="mn" style={{ color: VERDE, fontSize: 16, fontWeight: 700 }}>{BRL(qt * p.preco)}</span>
          </div>
          {er && <p style={{ color: VINHO, fontSize: 12, marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>⚠ {er}</p>}
          <button onClick={doAdd} style={{ width: "100%", background: VERDE, color: "#fff", padding: "15px", borderRadius: 14, fontSize: 13, fontWeight: 700, letterSpacing: 2, cursor: "pointer", border: "none", marginBottom: 10, boxShadow: "0 4px 16px rgba(45,90,39,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
            ADICIONAR AO PEDIDO
          </button>
          {cartCount > 0 && (
            <button onClick={onGoToCart} style={{ width: "100%", background: "transparent", border: `1.5px solid ${VERDE}`, color: VERDE, padding: "12px", borderRadius: 14, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
              VER PEDIDO ({cartCount} {cartCount === 1 ? "item" : "itens"}) →
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

// ── TELA DE PEDIDOS ──────────────────────────────────────────────────────────
const ORDERS_URL = "https://script.google.com/macros/s/AKfycbwwTdPBtFEyWk-E-Db8WkYlHyBLpbqjvlphsCtpNpZvGjVM-xvXrE7zkoX3cr_xRtdFhg/exec";

// Cabeçalhos exatos da planilha
const COL = {
  pedido:      "Nº Pedido",
  data:        "Data/Hora",
  vendedor:    "Vendedor",
  nome:        "Nome / Empresa",
  cpfcnpj:     "CPF/CNPJ",
  whatsapp:    "WhatsApp",
  email:       "E-mail",
  itens:       "Itens do Pedido",
  subtotal:    "Subtotal",
  desconto:    "Desconto",
  frete:       "Frete",
  total:       "Total",
  observacoes: "Observações",
};

const PedidosScreen = memo(({ onBack }) => {
  const [pedidos, setPedidos]     = useState([]);
  const [loading, setLoading]     = useState(true);
  const [erro, setErro]           = useState("");
  const [busca, setBusca]         = useState("");
  const [expandido, setExpandido] = useState(null);

  const carregar = () => {
    setLoading(true); setErro("");
    fetch(`${ORDERS_URL}?action=listar`)
      .then(r => r.json())
      .then(d => { setPedidos(d.pedidos || []); setLoading(false); })
      .catch(() => { setErro("Não foi possível carregar os pedidos. Verifique o Apps Script."); setLoading(false); });
  };

  useEffect(() => { carregar(); }, []);

  const filtrados = pedidos.filter(p => {
    const q = busca.toLowerCase();
    return !q
      || (p[COL.pedido]   || "").toLowerCase().includes(q)
      || (p[COL.nome]     || "").toLowerCase().includes(q)
      || (p[COL.whatsapp] || "").toLowerCase().includes(q)
      || (p[COL.vendedor] || "").toLowerCase().includes(q);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Header */}
      <div style={{ padding: "14px 20px 10px", background: BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: VERDE, fontSize: 22, cursor: "pointer", padding: "0 4px" }}>←</button>
        <p className="pf" style={{ color: TEXT, fontSize: 20 }}>Pedidos</p>
        <button onClick={carregar} style={{ marginLeft: "auto", background: "none", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10, color: TEXT2, letterSpacing: 1 }}>
          ↻ ATUALIZAR
        </button>
      </div>

      {/* Busca */}
      <div style={{ padding: "10px 20px 6px", flexShrink: 0 }}>
        <div style={{ position: "relative", marginBottom: 8 }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 15, color: TEXT3, pointerEvents: "none" }}>🔍</span>
          <input className="srch" type="text" placeholder="Buscar por pedido, nome, WhatsApp ou vendedora..." value={busca} onChange={e => setBusca(e.target.value)} />
          {busca && <button onClick={() => setBusca("")} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: TEXT3, fontSize: 20 }}>×</button>}
        </div>
        {!loading && !erro && (
          <p className="mn" style={{ color: TEXT3, fontSize: 10, letterSpacing: 1 }}>
            {filtrados.length} PEDIDO{filtrados.length !== 1 ? "S" : ""}
          </p>
        )}
      </div>

      {/* Lista */}
      <div className="scr" style={{ flex: 1, padding: "8px 20px 40px" }}>
        {loading && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ fontSize: 36, marginBottom: 10 }}>⏳</p>
            <p className="dm" style={{ color: TEXT3, fontSize: 14 }}>Carregando pedidos...</p>
          </div>
        )}
        {erro && (
          <div style={{ background: VINHOL, border: `1px solid ${VINHO}33`, borderRadius: 10, padding: "14px 16px", margin: "12px 0", lineHeight: 1.7 }}>
            <p style={{ color: VINHO, fontSize: 13, fontFamily: "'DM Sans',sans-serif", marginBottom: 8 }}>⚠ {erro}</p>
            <p className="mn" style={{ color: TEXT3, fontSize: 10 }}>Certifique-se de que o Apps Script está publicado com acesso "Qualquer pessoa" e retorna JSON para ?action=listar</p>
          </div>
        )}
        {!loading && !erro && filtrados.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ fontSize: 40, marginBottom: 10 }}>📋</p>
            <p className="pf" style={{ color: TEXT2, fontSize: 18 }}>{busca ? "Nenhum resultado" : "Nenhum pedido ainda"}</p>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 8 }}>
          {filtrados.map((p, idx) => {
            const nr   = p[COL.pedido]      || "—";
            const nm   = p[COL.nome]        || "—";
            const dt   = p[COL.data]        || "—";
            const tot  = p[COL.total]       || "";
            const vend = p[COL.vendedor]    || "";
            const wpp  = p[COL.whatsapp]    || "";
            const em   = p[COL.email]       || "";
            const cpf  = p[COL.cpfcnpj]     || "";
            const itns = p[COL.itens]       || "";
            const obs  = p[COL.observacoes] || "";
            const sub  = p[COL.subtotal]    || "";
            const desc = p[COL.desconto]    || "";
            const frt  = p[COL.frete]       || "";
            const open = expandido === idx;

            return (
              <div key={idx} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => setExpandido(open ? null : idx)}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span className="mn" style={{ color: VERDE, fontSize: 12, fontWeight: 700 }}>{nr}</span>
                      {vend && <span style={{ background: VERDES, color: VERDE, fontFamily: "'DM Mono',monospace", fontSize: 8, fontWeight: 700, padding: "2px 7px", borderRadius: 4, border: `1px solid ${VERDE}33` }}>{vend}</span>}
                    </div>
                    <p className="dm" style={{ color: TEXT, fontSize: 15, fontWeight: 600, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{nm}</p>
                    <p className="mn" style={{ color: TEXT3, fontSize: 10 }}>{dt}</p>
                  </div>
                  <div style={{ textAlign: "right", marginLeft: 12, flexShrink: 0 }}>
                    {tot && <p className="mn" style={{ color: VERDE, fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{tot}</p>}
                    <span style={{ fontSize: 11, color: TEXT3 }}>{open ? "▲" : "▼"}</span>
                  </div>
                </div>

                {open && (
                  <div style={{ background: CARD2, padding: "14px 16px", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: 12 }}>
                      {[["WhatsApp", wpp], ["E-mail", em], ["CPF/CNPJ", cpf]].map(([l, v]) => v && v !== "—" ? (
                        <div key={l}>
                          <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 2 }}>{l.toUpperCase()}</p>
                          <p className="dm" style={{ color: TEXT, fontSize: 13 }}>{v}</p>
                        </div>
                      ) : null)}
                    </div>

                    {(sub || desc || frt || tot) && (
                      <div style={{ background: VERDES, borderRadius: 10, padding: "10px 12px", marginBottom: 12, border: `1px solid ${VERDE}22` }}>
                        {[["Subtotal", sub], ["Desconto", desc], ["Frete", frt], ["Total", tot]].map(([l, v]) => v && v !== "—" ? (
                          <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 1 }}>{l.toUpperCase()}</span>
                            <span className="mn" style={{ color: l === "Total" ? VERDE : TEXT, fontSize: l === "Total" ? 14 : 12, fontWeight: l === "Total" ? 700 : 500 }}>{v}</span>
                          </div>
                        ) : null)}
                      </div>
                    )}

                    {itns && (
                      <div style={{ background: BG, borderRadius: 10, padding: "10px 12px", border: `1px solid ${BORDER}`, marginBottom: obs && obs !== "—" ? 10 : 0 }}>
                        <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2, marginBottom: 8 }}>ITENS DO PEDIDO</p>
                        <pre style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: TEXT2, whiteSpace: "pre-wrap", lineHeight: 1.8 }}>{itns}</pre>
                      </div>
                    )}

                    {obs && obs !== "—" && (
                      <div style={{ background: VINHOL, borderRadius: 10, padding: "10px 12px", border: `1px solid ${VINHO}22` }}>
                        <p className="mn" style={{ color: VINHO, fontSize: 9, letterSpacing: 1, marginBottom: 4 }}>OBSERVAÇÕES</p>
                        <p className="dm" style={{ color: TEXT2, fontSize: 13, lineHeight: 1.6 }}>{obs}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [cat, setCat]     = useState("Todos");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [screen, setScreen] = useState("catalog");
  const [cart, setCart]   = useState(() => {
    try { const s = localStorage.getItem("laco_cart"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm]   = useState({ nome: "", cpfcnpj: "", whats: "", email: "", obs: "" });
  const [vendedora, setVendedora] = useState("");
  const [desconto, setDesconto]   = useState({ tipo: "%", valor: 0 });
  const [frete, setFrete]         = useState(0);
  const [enviando, setEnviando]   = useState(false);
  const [toast, setToast]         = useState(null);
  const [nrPedido]                = useState(gerarNr);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(null);

  useEffect(() => {
    try { localStorage.setItem("laco_cart", JSON.stringify(cart)); } catch {}
  }, [cart]);

  const filtered = PRODUCTS.filter(p => {
    const catOk    = cat === "Todos" || p.category === cat;
    const q        = search.toLowerCase().trim();
    const searchOk = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  const cartCount   = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal    = cart.reduce((s, i) => s + i.qty * i.product.preco, 0);
  const descVal     = desconto.tipo === "%" ? subtotal * (desconto.valor / 100) : Math.min(desconto.valor, subtotal);
  const totalFinal  = Math.max(0, subtotal - descVal) + (frete || 0);

  const showToast = msg => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const handleAdd = useCallback(item => {
    setCart(c => {
      const idx = c.findIndex(i => i.product.sku === item.product.sku && i.size.ref === item.size.ref && i.color.name === item.color.name);
      if (idx >= 0) return c.map((i, n) => n === idx ? { ...i, qty: i.qty + item.qty } : i);
      return [...c, item];
    });
    showToast(`${item.product.name} adicionado!`);
  }, []);

  const removeFromCart = id => setCart(c => c.filter(i => i.id !== id));
  const updateQty = (id, d) => setCart(c => c.map(i => i.id === id ? { ...i, qty: Math.max(i.size?.min || 1, i.qty + d) } : i));

  const resetPedido = () => {
    setCart([]); setForm({ nome: "", cpfcnpj: "", whats: "", email: "", obs: "" });
    setVendedora(""); setDesconto({ tipo: "%", valor: 0 }); setFrete(0);
    setPedidoFinalizado(null); try { localStorage.removeItem("laco_cart"); } catch {}
  };

  const sendPedido = async () => {
    if (!form.nome || !form.whats) { alert("Preencha Nome e WhatsApp!"); return; }
    setEnviando(true);
    const itens = cart.map(i => `• ${i.product.name} | Tam: ${i.size?.ref} | Cor: ${i.color?.name} | Qtd: ${i.qty} | ${BRL(i.qty * i.product.preco)}`).join("\n");
    const p = new URLSearchParams({
      pedido:      nrPedido,
      data:        new Date().toLocaleString("pt-BR"),
      vendedor:    vendedora || "—",
      nome:        form.nome,
      cpfcnpj:     form.cpfcnpj || "—",
      whatsapp:    form.whats,
      email:       form.email || "—",
      itens,
      subtotal:    BRL(subtotal),
      desconto:    descVal > 0 ? `${desconto.tipo === "%" ? desconto.valor + "%" : "R$"} — ${BRL(descVal)}` : "—",
      frete:       frete > 0 ? BRL(frete) : "—",
      total:       BRL(totalFinal),
      observacoes: form.obs || "—"
    });
    try { await fetch(`${SHEETS_URL}?${p}`, { method: "GET", mode: "no-cors" }); } catch (e) { console.error(e); }
    setPedidoFinalizado({ cart: [...cart], form: { ...form }, nrPedido, desconto, frete });
    setEnviando(false);
    setScreen("success");
  };

  const isDesktop = window.innerWidth >= 900;

  return (
    <div style={{ minHeight: "100vh", background: "#EDE8E0", display: "flex", alignItems: isDesktop ? "flex-start" : "center", justifyContent: "center", padding: isDesktop ? "32px 20px" : "20px 0" }}>
      <style>{CSS}</style>

      <div style={{
        width: "100%", maxWidth: isDesktop ? 960 : 460,
        height: isDesktop ? "auto" : "min(860px,100dvh)",
        minHeight: isDesktop ? "calc(100vh - 64px)" : undefined,
        background: BG, borderRadius: isDesktop ? 20 : 32,
        overflow: "hidden", display: "flex", flexDirection: "column",
        boxShadow: "0 20px 60px rgba(0,0,0,0.14),0 0 0 1px rgba(45,90,39,0.1)"
      }}>

        {/* Toast */}
        {toast && (
          <div style={{ position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)", background: VERDE, color: "#fff", padding: "9px 20px", borderRadius: 20, zIndex: 9998, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 16px rgba(45,90,39,0.4)", whiteSpace: "nowrap", pointerEvents: "none", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600 }}>
            ✅ {toast}
          </div>
        )}

        {/* ── PEDIDOS ── */}
        {screen === "pedidos" && <PedidosScreen onBack={() => setScreen("catalog")} />}

        {/* ── CATÁLOGO ── */}
        {screen === "catalog" && <>
          <div style={{ padding: "14px 20px 10px", background: BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <Logo />
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={() => setScreen("pedidos")} style={{ background: "none", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "7px 12px", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 10, color: TEXT2, letterSpacing: 1 }}>📋 PEDIDOS</button>
              <button onClick={() => setScreen("carrinho")} style={{ background: cartCount > 0 ? VERDE : "transparent", border: `1.5px solid ${cartCount > 0 ? VERDE : BORDER}`, borderRadius: 12, padding: "8px 14px", display: "flex", alignItems: "center", gap: 7, cursor: "pointer" }}>
                <span style={{ fontSize: 17 }}>🛍</span>
                {cartCount > 0 && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, fontFamily: "'DM Mono',monospace" }}>{cartCount}</span>}
              </button>
            </div>
          </div>

          <div style={{ padding: "12px 20px 6px", flexShrink: 0 }}>
            <p style={{ color: TEXT3, fontSize: 12, letterSpacing: 1, marginBottom: 10, textAlign: "center", fontFamily: "'DM Sans',sans-serif" }}>Shoppings · Praças · Eventos · Decoração</p>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 15, color: TEXT3, pointerEvents: "none" }}>🔍</span>
              <input className="srch" type="text" placeholder="Buscar produto, SKU ou categoria..." value={search} onChange={e => setSearch(e.target.value)} />
              {search && <button onClick={() => setSearch("")} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: TEXT3, fontSize: 20, lineHeight: 1 }}>×</button>}
            </div>
            <div style={{ display: "flex", gap: 7, overflowX: "auto", paddingBottom: 4, marginBottom: 10 }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ padding: "7px 16px", borderRadius: 20, fontSize: 10, letterSpacing: 1.5, whiteSpace: "nowrap", background: cat === c ? VERDE : CARD, color: cat === c ? "#fff" : TEXT3, border: cat === c ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontWeight: cat === c ? 700 : 400, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
            <p style={{ color: TEXT3, fontSize: 10, letterSpacing: 1, marginBottom: 10, fontFamily: "'DM Mono',monospace" }}>
              {filtered.length} PRODUTO{filtered.length !== 1 ? "S" : ""}
            </p>
          </div>

          <div className="scr" style={{ flex: 1, padding: `0 20px 80px` }}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <p style={{ fontSize: 44, marginBottom: 12 }}>🔍</p>
                <p className="pf" style={{ color: TEXT2, fontSize: 20 }}>Nenhum produto encontrado</p>
                <button onClick={() => { setSearch(""); setCat("Todos"); }} style={{ background: VERDE, color: "#fff", padding: "11px 24px", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, marginTop: 16 }}>LIMPAR BUSCA</button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: isDesktop ? "repeat(3,1fr)" : "1fr", gap: 14 }}>
                {filtered.map(p => (
                  <div key={p.sku} style={{ background: CARD, borderRadius: 16, overflow: "hidden", border: `1px solid ${BORDER}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setModal(p)}>
                      <Img src={getFoto(p, 0)} h={isDesktop ? 200 : 180} />
                      <div style={{ position: "absolute", top: 10, left: 10 }}><Tag label={p.tag} color={p.tagColor} bg={p.tagBg} /></div>
                      <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "3px 9px" }}>
                        <span className="mn" style={{ color: VERDE, fontSize: 10, fontWeight: 700 }}>{BRL(p.preco)}/un</span>
                      </div>
                    </div>
                    <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ cursor: "pointer", flex: 1 }} onClick={() => setModal(p)}>
                        <p className="pf" style={{ color: TEXT, fontSize: 17, lineHeight: 1.2, marginBottom: 3 }}>{p.name}</p>
                        <p className="dm" style={{ color: TEXT3, fontSize: 12, marginBottom: 5 }}>{p.subtitle}</p>
                        <p className="mn" style={{ color: VERDE2, fontSize: 9, letterSpacing: 1, opacity: 0.7, marginBottom: 7 }}>REF: {p.sku}</p>
                        <div style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 7 }}>
                          {p.cores.map((c, i) => <div key={i} title={c.name} style={{ width: 12, height: 12, borderRadius: "50%", background: c.hex, border: `1px solid ${BORDER}` }} />)}
                          <span className="mn" style={{ color: TEXT3, fontSize: 9, marginLeft: 2 }}>{p.cores.length} COR{p.cores.length > 1 ? "ES" : ""}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
                          <span className="mn" style={{ color: TEXT3, fontSize: 9, letterSpacing: 1 }}>MÍN. {Math.min(...p.sizes.map(s => s.min || 1))} UN.</span>
                          <span style={{ color: BORDER }}>·</span>
                          <span className="dm" style={{ color: TEXT2, fontSize: 12 }}>{p.prazo}</span>
                        </div>
                      </div>
                      <QuickAdd product={p} onAdd={handleAdd} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>}

        {/* ── CARRINHO ── */}
        {screen === "carrinho" && <>
          <div style={{ padding: "14px 20px 10px", background: BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <button onClick={() => setScreen("catalog")} style={{ background: "none", border: "none", color: VERDE, fontSize: 22, cursor: "pointer", padding: "0 4px" }}>←</button>
            <p className="pf" style={{ color: TEXT, fontSize: 22 }}>Meu Pedido</p>
            <span className="mn" style={{ color: TEXT3, fontSize: 11, marginLeft: "auto" }}>{nrPedido}</span>
          </div>
          <div className="scr" style={{ flex: 1, padding: "16px 20px 40px" }}>
            {cart.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <p style={{ fontSize: 52, marginBottom: 12 }}>🛍</p>
                <p className="pf" style={{ color: TEXT2, fontSize: 20 }}>Carrinho vazio</p>
                <button onClick={() => setScreen("catalog")} style={{ background: VERDE, color: "#fff", padding: "13px 30px", borderRadius: 12, fontWeight: 700, fontSize: 13, marginTop: 20, cursor: "pointer", border: "none", fontFamily: "'DM Sans',sans-serif" }}>VER CATÁLOGO</button>
              </div>
            ) : (<>
              <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 14 }}>
                {cart.map(item => (
                  <div key={item.id} style={{ background: CARD, borderRadius: 14, padding: "13px", border: `1px solid ${BORDER}`, display: "flex", gap: 11, alignItems: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 10, overflow: "hidden", flexShrink: 0, border: `1px solid ${BORDER}` }}>
                      <Img src={item.color?.photo || item.product.photo} h={52} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="pf" style={{ color: TEXT, fontSize: 13, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.product.name}</p>
                      <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 1, marginBottom: 3 }}>{item.size?.ref}</p>
                      <div style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 5 }}>
                        <div style={{ width: 9, height: 9, borderRadius: "50%", background: item.color?.hex, border: `1px solid ${BORDER}` }} />
                        <span className="mn" style={{ color: TEXT3, fontSize: 10 }}>{item.color?.name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", background: CARD2, borderRadius: 8, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ width: 30, height: 30, background: "none", border: "none", color: VINHO, fontSize: 17, fontWeight: 700, cursor: "pointer" }}>−</button>
                          <span className="mn" style={{ color: TEXT, fontSize: 13, minWidth: 24, textAlign: "center", fontWeight: 700 }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ width: 30, height: 30, background: "none", border: "none", color: VERDE, fontSize: 17, fontWeight: 700, cursor: "pointer" }}>+</button>
                        </div>
                        <span className="mn" style={{ color: VERDE, fontSize: 11, fontWeight: 700 }}>{BRL(item.qty * item.product.preco)}</span>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: "#C0392B", fontSize: 17, background: "none", border: "none", padding: "4px", opacity: 0.5, alignSelf: "flex-start", cursor: "pointer" }}>✕</button>
                  </div>
                ))}
              </div>

              {/* Desconto */}
              <div style={{ background: CARD, borderRadius: 12, padding: "14px", border: `1px solid ${BORDER}`, marginBottom: 10 }}>
                <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2, marginBottom: 10 }}>DESCONTO</p>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                  <select value={desconto.tipo} onChange={e => setDesconto(d => ({ ...d, tipo: e.target.value }))}
                    style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${BORDER}`, background: CARD2, fontFamily: "'DM Mono',monospace", fontSize: 12, color: TEXT, cursor: "pointer", outline: "none" }}>
                    <option value="%">% Percentual</option>
                    <option value="R$">R$ Valor fixo</option>
                  </select>
                  <input type="number" min="0" value={desconto.valor || ""} placeholder="0"
                    onChange={e => setDesconto(d => ({ ...d, valor: parseFloat(e.target.value) || 0 }))}
                    style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: `1px solid ${BORDER}`, background: CARD2, fontFamily: "'DM Mono',monospace", fontSize: 14, color: TEXT, outline: "none" }} />
                  {desconto.valor > 0 && <button onClick={() => setDesconto({ tipo: "%", valor: 0 })} style={{ background: "none", border: "none", color: TEXT3, fontSize: 18, cursor: "pointer" }}>✕</button>}
                </div>
                {descVal > 0 && <p className="mn" style={{ color: "#BF360C", fontSize: 11 }}>Desconto: − {BRL(descVal)}</p>}
              </div>

              {/* Totais */}
              <div style={{ background: VERDES, borderRadius: 12, padding: "13px 16px", marginBottom: 14, border: `1px solid ${VERDE}22` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span className="mn" style={{ color: VERDE, fontSize: 10 }}>SUBTOTAL</span>
                  <span className="mn" style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{BRL(subtotal)}</span>
                </div>
                {descVal > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span className="mn" style={{ color: "#BF360C", fontSize: 10 }}>DESCONTO</span>
                  <span className="mn" style={{ color: "#BF360C", fontSize: 13, fontWeight: 600 }}>− {BRL(descVal)}</span>
                </div>}
                {frete > 0 && <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span className="mn" style={{ color: VERDE, fontSize: 10 }}>FRETE</span>
                  <span className="mn" style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{BRL(frete)}</span>
                </div>}
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: `1px solid ${VERDE}22`, paddingTop: 8, marginTop: 4 }}>
                  <span className="mn" style={{ color: VERDE, fontSize: 11, fontWeight: 700 }}>TOTAL</span>
                  <span className="mn" style={{ color: VERDE, fontSize: 20, fontWeight: 700 }}>{BRL(totalFinal)}</span>
                </div>
              </div>

              <button onClick={() => setScreen("catalog")} style={{ width: "100%", background: "transparent", border: `1.5px dashed ${VERDE}`, color: VERDE, padding: "12px", borderRadius: 12, fontSize: 13, fontWeight: 600, marginBottom: 18, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                + Adicionar mais produtos
              </button>
              <div style={{ height: 1, background: BORDER, marginBottom: 18 }} />

              {/* Vendedora — separada dos dados do cliente */}
              <div style={{ marginBottom: 14 }}>
                <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2.5, marginBottom: 10 }}>VENDEDORA</p>
                <div style={{ position: "relative" }}>
                  <select className="inp" value={vendedora} onChange={e => setVendedora(e.target.value)}>
                    <option value="">Selecione a vendedora</option>
                    {VENDEDORES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: TEXT3, fontSize: 11, pointerEvents: "none" }}>▾</span>
                </div>
              </div>

              <div style={{ height: 1, background: BORDER, marginBottom: 18 }} />
              <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2.5, marginBottom: 10 }}>DADOS DO CLIENTE</p>

              {[
                { k: "nome",    l: "Nome / Empresa *",  p: "Ex: Shopping Parque D. Pedro", t: "text"  },
                { k: "cpfcnpj",l: "CPF / CNPJ",         p: "000.000.000-00 ou 00.000.000/0001-00", t: "text" },
                { k: "whats",  l: "WhatsApp *",          p: "(11) 99999-9999",              t: "tel"   },
                { k: "email",  l: "E-mail",               p: "contato@empresa.com.br",       t: "email" },
              ].map(f => (
                <div key={f.k} style={{ marginBottom: 11 }}>
                  <p className="mn" style={{ color: TEXT3, fontSize: 9, letterSpacing: 1, marginBottom: 5 }}>{f.l.toUpperCase()}</p>
                  <input className="inp" type={f.t} value={form[f.k]} placeholder={f.p} autoComplete="off" onChange={e => setForm(prev => ({ ...prev, [f.k]: e.target.value }))} />
                </div>
              ))}
              <div style={{ marginBottom: 18 }}>
                <p className="mn" style={{ color: TEXT3, fontSize: 9, letterSpacing: 1, marginBottom: 5 }}>OBSERVAÇÕES</p>
                <textarea className="inp" value={form.obs} placeholder="Data do evento, detalhes especiais..." rows={2} style={{ resize: "none" }} onChange={e => setForm(prev => ({ ...prev, obs: e.target.value }))} />
              </div>

              <button onClick={sendPedido} style={{ width: "100%", background: enviando ? "#999" : VERDE, color: "#fff", padding: "17px", borderRadius: 14, fontSize: 14, fontWeight: 700, letterSpacing: 2, cursor: "pointer", border: "none", boxShadow: "0 4px 16px rgba(45,90,39,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
                {enviando ? "ENVIANDO..." : "CONFIRMAR PEDIDO"}
              </button>
            </>)}
          </div>
        </>}

        {/* ── SUCESSO ── */}
        {screen === "success" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "44px 36px", textAlign: "center" }}>
            <div style={{ width: 84, height: 84, borderRadius: "50%", background: VERDES, border: `2px solid ${VERDE}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38, marginBottom: 20 }}>🎀</div>
            <Logo />
            <p className="mn" style={{ color: TEXT3, fontSize: 11, letterSpacing: 2, marginTop: 13, marginBottom: 4 }}>PEDIDO {nrPedido}</p>
            <p className="pf" style={{ color: VERDE, fontSize: 24, marginBottom: 9 }}>Pedido enviado!</p>
            <p className="dm" style={{ color: TEXT2, fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
              Recebemos sua solicitação.<br />
              Entraremos em contato em até<br />
              <strong style={{ color: VERDE }}>24 horas</strong> pelo WhatsApp.
            </p>
            <button onClick={() => {
              if (!pedidoFinalizado) return;
              const html = gerarPedidoHTML(pedidoFinalizado);
              const win = window.open("", "_blank");
              if (win) { win.document.write(html); win.document.close(); }
            }} style={{ width: "100%", background: VINHO, color: "#fff", padding: "14px", borderRadius: 14, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, cursor: "pointer", border: "none", marginBottom: 11, fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              🖨️ IMPRIMIR / SALVAR PDF
            </button>
            <button onClick={() => { resetPedido(); setScreen("catalog"); }}
              style={{ width: "100%", background: VERDE, color: "#fff", padding: "14px", borderRadius: 14, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, cursor: "pointer", border: "none", fontFamily: "'DM Sans',sans-serif" }}>
              NOVO PEDIDO
            </button>
          </div>
        )}

      </div>

      {modal && (
        <ProductModal product={modal} cartCount={cartCount} onClose={() => setModal(null)} onAdd={handleAdd}
          onGoToCart={() => { setModal(null); setScreen("carrinho"); }} />
      )}
    </div>
  );
}
