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
const SHEETS_URL  = "https://script.google.com/macros/s/AKfycbw5c9f7of3GhrjgOcZR7_KDoEp4_avn4D9zsOkn7p_O1GjWii200ow5e9YhP93pjvVGhw/exec";

const BRL     = v => `R$ ${Number(v).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
const gerarNr = () => `#${Date.now().toString().slice(-5)}`;
const getFoto = (p, i) => p.cores?.[i]?.photo || p.photo || "";

// ── GERADOR DO PEDIDO PARA IMPRESSÃO ─────────────────────────────────────────
const gerarPedidoHTML = ({ cart, form, nrPedido }) => {
  const total      = cart.reduce((s, i) => s + i.qty * i.product.preco, 0);
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
  body{font-family:'DM Sans',sans-serif;background:#f5f5f5;padding:20px;color:#1A1A1A;}
  .page{background:#fff;max-width:794px;margin:0 auto;padding:40px 48px 48px;box-shadow:0 4px 24px rgba(0,0,0,0.1);border-radius:8px;}
  .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #2D5A27;}
  .logo img{height:80px;object-fit:contain;}
  .pedido-nr{font-family:'Playfair Display',serif;font-size:26px;color:#2D5A27;font-weight:600;}
  .pedido-data{font-family:'DM Mono',monospace;font-size:11px;color:#888;letter-spacing:1px;margin-top:4px;}
  .pedido-status{display:inline-block;background:#F5E8EA;color:#8B1A2A;font-family:'DM Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;padding:3px 10px;border-radius:4px;margin-top:6px;border:1px solid #8B1A2A44;}
  .section-title{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:2.5px;color:#2D5A27;text-transform:uppercase;margin-bottom:12px;}
  .cliente-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:28px;background:#FAF8F5;border-radius:8px;padding:16px;border:1px solid #E8E0D8;}
  .campo label{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;color:#888;text-transform:uppercase;display:block;margin-bottom:4px;}
  .campo span{font-size:13px;color:#1A1A1A;font-weight:500;}
  .tabela-wrap{margin-bottom:28px;}
  table{width:100%;border-collapse:collapse;}
  thead tr{background:#2D5A27;}
  thead th{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:1.5px;color:#fff;text-transform:uppercase;padding:10px 12px;text-align:left;}
  tbody tr{border-bottom:1px solid #E8E0D8;}
  tbody tr:nth-child(even){background:#FAF8F5;}
  tbody td{padding:10px 12px;font-size:13px;vertical-align:middle;}
  .td-ref{font-family:'DM Mono',monospace;font-size:10px;color:#888;}
  .td-cor{display:inline-flex;align-items:center;gap:6px;}
  .cor-dot{width:10px;height:10px;border-radius:50%;border:1px solid rgba(0,0,0,0.15);flex-shrink:0;display:inline-block;}
  .totais-e-condicoes{display:flex;justify-content:space-between;align-items:flex-start;gap:24px;margin-bottom:28px;}
  .condicoes-box{flex:1;background:#FAF8F5;border:1px solid #E8E0D8;border-radius:8px;padding:16px 20px;}
  .condicoes-linha{margin-bottom:14px;}
  .condicoes-linha:last-child{margin-bottom:0;}
  .condicoes-linha label{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;color:#888;text-transform:uppercase;display:block;margin-bottom:6px;}
  .linha-escrita{border:none;border-bottom:1px solid #888;width:100%;height:22px;background:transparent;font-size:13px;font-family:'DM Sans',sans-serif;}
  .totais-box{background:#FAF8F5;border:1px solid #E8E0D8;border-radius:8px;padding:16px 20px;min-width:220px;}
  .totais-linha{display:flex;justify-content:space-between;align-items:center;padding:4px 0;}
  .totais-linha span:first-child{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:1px;color:#888;text-transform:uppercase;}
  .totais-linha span:last-child{font-size:13px;font-weight:600;}
  .totais-linha.destaque{border-top:1px solid #E8E0D8;margin-top:6px;padding-top:10px;}
  .totais-linha.destaque span:last-child{font-size:16px;color:#2D5A27;}
  .obs-box{background:#FBE9E7;border:1px solid #8B1A2A33;border-radius:8px;padding:14px 16px;margin-bottom:28px;}
  .obs-box p{font-size:13px;color:#1A1A1A;line-height:1.6;}
  .footer{display:flex;justify-content:space-between;align-items:flex-end;padding-top:24px;border-top:1px solid #E8E0D8;margin-top:8px;}
  .footer-assinatura{text-align:center;}
  .footer-assinatura .linha-assinatura{width:180px;border-top:1px solid #888;margin:0 auto 6px;}
  .footer-assinatura span{font-family:'DM Mono',monospace;font-size:9px;color:#888;letter-spacing:1px;}
  .footer-contato{text-align:right;font-family:'DM Mono',monospace;font-size:9px;color:#888;letter-spacing:0.5px;line-height:1.9;}
  .no-print{text-align:center;margin-bottom:20px;display:flex;gap:10px;justify-content:center;}
  .btn{border:none;padding:10px 28px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .btn-print{background:#2D5A27;color:#fff;}
  .btn-close{background:#E8E0D8;color:#1A1A1A;}
  @media print{body{background:#fff;padding:0;}.page{box-shadow:none;border-radius:0;padding:20px 28px;}.no-print{display:none!important;}.linha-escrita{border-bottom:1px solid #aaa;}}
</style>
</head>
<body>
<div class="no-print">
  <button class="btn btn-print" onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
  <button class="btn btn-close" onclick="window.close()">✕ Fechar</button>
</div>
<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="logo">
      <img src="https://res.cloudinary.com/djeliz676/image/upload/v1779736824/LOGOS_daguvp.png" alt="Laço & Entrelaço" onerror="this.style.display='none'">
    </div>
    <div style="text-align:right;">
      <div class="pedido-nr">${nrPedido}</div>
      <div class="pedido-data">DATA: ${dataHora}</div>
      <div class="pedido-status">PEDIDO CRIADO · AGUARDANDO PAGAMENTO</div>
    </div>
  </div>

  <!-- DADOS DO CLIENTE -->
  <p class="section-title">Dados do Cliente</p>
  <div class="cliente-grid">
    <div class="campo"><label>Empresa / Nome</label><span>${form.nome || "—"}</span></div>
    <div class="campo"><label>WhatsApp</label><span>${form.whats || "—"}</span></div>
    <div class="campo"><label>E-mail</label><span>${form.email || "—"}</span></div>
    <div class="campo"><label>Vendedora</label><span>${form.vendedor || "—"}</span></div>
  </div>

  <!-- ITENS -->
  <p class="section-title">Itens do Pedido</p>
  <div class="tabela-wrap">
    <table>
      <thead>
        <tr>
          <th>Referência</th>
          <th>Produto</th>
          <th>Tamanho</th>
          <th>Cor</th>
          <th style="text-align:center">Qtd</th>
          <th style="text-align:right">Subtotal</th>
        </tr>
      </thead>
      <tbody>${linhasItens}</tbody>
    </table>
  </div>

  <!-- TOTAIS + CONDIÇÕES -->
  <div class="totais-e-condicoes">

    <!-- Forma de pagamento e data de entrega para preencher à mão -->
    <div class="condicoes-box">
      <div class="condicoes-linha">
        <label>Forma de Pagamento</label>
        <div class="linha-escrita"></div>
      </div>
      <div class="condicoes-linha">
        <label>Data de Entrega</label>
        <div class="linha-escrita"></div>
      </div>
      <div class="condicoes-linha">
        <label>Observações</label>
        <div class="linha-escrita"></div>
      </div>
    </div>

    <!-- Totais -->
    <div class="totais-box">
      <div class="totais-linha"><span>Total de Produtos</span><span>${totalItens} item${totalItens !== 1 ? "s" : ""}</span></div>
      <div class="totais-linha"><span>Total de Unidades</span><span>${totalUn} un.</span></div>
      <div class="totais-linha"><span>Prazo de Produção</span><span style="color:#8B1A2A">30 dias úteis</span></div>
      <div class="totais-linha destaque"><span>Valor Total</span><span>${BRL(total)}</span></div>
    </div>

  </div>

  ${form.obs ? `<p class="section-title">Observações do Pedido</p><div class="obs-box"><p>${form.obs}</p></div>` : ""}

  <!-- RODAPÉ -->
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
      <strong style="color:#2D5A27;font-size:10px;">Laço & Entrelaço</strong><br>
      Rua XXX, nº Y — Centro, Santo André/SP<br>
      www.laçoentrelaço.com.br<br>
      atendimento@mkcomercial.com.br<br>
      (11) 92609-2607
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
  .inp{width:100%;padding:11px 13px;border-radius:10px;color:#1A1A1A;font-size:14px;border:1.5px solid #E8E0D8;background:#FAF8F5;font-family:'DM Sans',sans-serif;outline:none;-webkit-appearance:none;display:block;}
  .inp:focus{border-color:#2D5A27;}
  .scr{overflow-y:auto;-webkit-overflow-scrolling:touch;}
  .scr::-webkit-scrollbar{width:0;}
  .srch{width:100%;padding:10px 13px 10px 36px;border-radius:10px;border:1.5px solid #E8E0D8;background:#fff;font-size:13px;font-family:'DM Sans',sans-serif;color:#1A1A1A;outline:none;}
  .srch:focus{border-color:#2D5A27;}
  .card-btn-add{width:100%;padding:9px;border-radius:10px;border:none;cursor:pointer;font-family:'DM Mono',monospace;font-size:10px;font-weight:700;letter-spacing:1px;transition:opacity .15s;}
  .card-btn-add:active{opacity:.75;}
`;

// ── COMPONENTES BASE ──────────────────────────────────────────────────────────
const Img = memo(({ src, h = 180 }) => {
  const [err, setErr] = useState(false);
  if (err || !src) return <div style={{ width: "100%", height: h, background: CARD2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🎀</div>;
  return <img src={src} alt="" style={{ width: "100%", height: h, objectFit: "cover", display: "block" }} onError={() => setErr(true)} />;
});

const Tag = ({ label, color, bg }) => (
  <span className="mn" style={{ background: bg, color, fontSize: 8, fontWeight: 700, letterSpacing: 1.5, padding: "3px 8px", borderRadius: 4, border: `1px solid ${color}33`, display: "inline-block" }}>{label.toUpperCase()}</span>
);

const Logo = () => (
  <img src={F.logo} alt="Laço & Entrelaço" style={{ height: 36, objectFit: "contain" }} onError={e => e.target.style.display = "none"} />
);

// ── QUICK ADD (seletor inline no card) ───────────────────────────────────────
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

  const doAdd = e => {
    e.stopPropagation();
    onAdd({ product: p, size: tam, color: cor, qty: qt, id: Date.now() });
    setOpen(false);
    setSz(0); setCl(0); setQt(p.sizes[0]?.min || 1);
  };

  if (!open) return (
    <button
      className="card-btn-add"
      onClick={e => { e.stopPropagation(); if (!semEstoque) setOpen(true); }}
      style={{ background: semEstoque ? "#ccc" : VERDE, color: "#fff", cursor: semEstoque ? "not-allowed" : "pointer" }}
    >
      {semEstoque ? "SEM ESTOQUE" : "+ ADICIONAR"}
    </button>
  );

  return (
    <div onClick={e => e.stopPropagation()} style={{ background: VERDES, borderRadius: 10, padding: "10px", border: `1px solid ${VERDE}33` }}>
      {/* Tamanho */}
      <p className="mn" style={{ fontSize: 8, color: TEXT3, letterSpacing: 1, marginBottom: 5 }}>TAMANHO</p>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 8 }}>
        {p.sizes.map((s, i) => {
          const est = s.estoque ?? p.estoque ?? 0;
          const esgotado = est === 0;
          return (
            <button key={i} onClick={() => { if (!esgotado) handleSz(i); }} style={{ padding: "4px 8px", borderRadius: 6, background: sz === i ? VERDE : esgotado ? "#eee" : CARD, color: sz === i ? "#fff" : esgotado ? "#bbb" : TEXT2, border: sz === i ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontSize: 9, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: esgotado ? "not-allowed" : "pointer", opacity: esgotado ? 0.6 : 1 }}>
              {s.label}{esgotado ? " ✕" : ` (${est})`}
            </button>
          );
        })}
      </div>
      {/* Estoque do tamanho selecionado */}
      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8 }}>
        <span style={{ fontSize: 9 }}>📦</span>
        <span className="mn" style={{ fontSize: 9, color: estoqueAtual <= 3 ? "#BF360C" : VERDE, fontWeight: 700 }}>
          {estoqueAtual === 0 ? "SEM ESTOQUE" : `${estoqueAtual} un. disponíveis`}
        </span>
      </div>
      {/* Cor */}
      {p.cores.length > 1 && <>
        <p className="mn" style={{ fontSize: 8, color: TEXT3, letterSpacing: 1, marginBottom: 5 }}>COR</p>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 8 }}>
          {p.cores.map((c, i) => (
            <button key={i} onClick={() => setCl(i)} title={c.name} style={{ width: 20, height: 20, borderRadius: "50%", background: c.hex, border: cl === i ? `2.5px solid ${VERDE}` : `1.5px solid ${BORDER}`, cursor: "pointer" }} />
          ))}
        </div>
      </>}
      {/* Quantidade */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <p className="mn" style={{ fontSize: 8, color: TEXT3, letterSpacing: 1 }}>QTD</p>
        <div style={{ display: "inline-flex", alignItems: "center", background: CARD, borderRadius: 8, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
          <button onClick={() => setQt(q => Math.max(min, q - 1))} style={{ width: 28, height: 28, background: "none", border: "none", color: VINHO, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>−</button>
          <span className="mn" style={{ color: TEXT, fontSize: 12, minWidth: 24, textAlign: "center", fontWeight: 700 }}>{qt}</span>
          <button onClick={() => setQt(q => q + 1)} style={{ width: 28, height: 28, background: "none", border: "none", color: VERDE, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>+</button>
        </div>
        <span className="mn" style={{ fontSize: 8, color: TEXT3 }}>mín. {min}</span>
      </div>
      {/* Botões */}
      <div style={{ display: "flex", gap: 6 }}>
        <button onClick={doAdd} style={{ flex: 1, padding: "8px", borderRadius: 8, background: VERDE, color: "#fff", border: "none", cursor: "pointer", fontFamily: "'DM Mono',monospace", fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>✓ ADICIONAR</button>
        <button onClick={e => { e.stopPropagation(); setOpen(false); }} style={{ padding: "8px 10px", borderRadius: 8, background: CARD, border: `1px solid ${BORDER}`, cursor: "pointer", fontSize: 12, color: TEXT3 }}>✕</button>
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

  const handleSz = i => { setSz(i); setQt(p.sizes[i]?.min || 1); setEr(""); };

  const doAdd = () => {
    if (qt < min) { setEr(`Mínimo de ${min} unidades para este tamanho.`); return; }
    setEr("");
    onAdd({ product: p, size: tam, color: cor, qty: qt, id: Date.now() });
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(20,10,10,0.6)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 9999, backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div className="scr" style={{ background: BG, borderRadius: "24px 24px 0 0", width: "100%", maxWidth: 420, maxHeight: "92vh", borderTop: `2px solid ${VERDE}` }} onClick={e => e.stopPropagation()}>
        <div style={{ position: "relative", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
          <Img src={getFoto(p, cl)} h={240} />
          <button onClick={onClose} style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.92)", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>←</button>
          <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "4px 10px" }}>
            <span className="mn" style={{ color: VERDE, fontSize: 11, fontWeight: 700 }}>{BRL(p.preco)}/un</span>
          </div>
        </div>
        <div style={{ padding: "16px 16px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <Tag label={p.tag} color={p.tagColor} bg={p.tagBg} />
            <span className="mn" style={{ color: TEXT3, fontSize: 8 }}>REF: {p.sku}</span>
          </div>
          <p className="pf" style={{ color: TEXT, fontSize: 20, marginBottom: 2 }}>{p.name}</p>
          <p className="dm" style={{ color: TEXT3, fontSize: 12, marginBottom: 10 }}>{p.subtitle}</p>
          <p className="dm" style={{ color: TEXT2, fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
          {p.acabamento && (
            <div style={{ background: VERDES, borderRadius: 12, padding: "10px 12px", marginBottom: 12, border: `1px solid ${VERDE}22` }}>
              <p className="mn" style={{ color: VERDE, fontSize: 8, letterSpacing: 2, marginBottom: 8 }}>FICHA TÉCNICA</p>
              {[{ l: "Composição", v: p.material }, { l: "Acabamento", v: p.acabamento }, { l: "Prazo", v: p.prazo }].map((r, i, a) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "5px 0", borderBottom: i < a.length - 1 ? `1px solid ${VERDE}18` : "none" }}>
                  <span className="mn" style={{ color: TEXT3, fontSize: 9, minWidth: 80 }}>{r.l}</span>
                  <span className="dm" style={{ color: TEXT2, fontSize: 12 }}>{r.v}</span>
                </div>
              ))}
            </div>
          )}
          <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 2, marginBottom: 8 }}>TAMANHO</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {p.sizes.map((s, i) => (
              <button key={i} onClick={() => handleSz(i)} style={{ padding: "7px 10px", borderRadius: 10, background: sz === i ? VERDE : CARD, color: sz === i ? "#fff" : TEXT2, border: sz === i ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>{s.label}</button>
            ))}
          </div>
          <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 2, marginBottom: 8 }}>COR</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {p.cores.map((c, i) => (
              <button key={i} onClick={() => setCl(i)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", borderRadius: 20, background: cl === i ? VERDES : CARD, border: cl === i ? `1.5px solid ${VERDE}` : `1px solid ${BORDER}`, cursor: "pointer" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.hex, border: `1px solid ${BORDER}` }} />
                <span className="mn" style={{ color: cl === i ? VERDE : TEXT2, fontSize: 9, fontWeight: cl === i ? 700 : 400 }}>{c.name}</span>
                {c.photo && <span style={{ fontSize: 8 }}>📷</span>}
              </button>
            ))}
          </div>
          <div style={{ background: CARD2, borderRadius: 10, padding: "7px 12px", marginBottom: 12, display: "flex", justifyContent: "space-between", border: `1px solid ${BORDER}` }}>
            <span className="mn" style={{ color: TEXT3, fontSize: 9 }}>SELECIONADO</span>
            <span className="mn" style={{ color: VERDE, fontSize: 9, fontWeight: 700 }}>{tam?.ref} · {cor?.name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 2 }}>QUANTIDADE</p>
            <div style={{ display: "inline-flex", alignItems: "center", background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <button onClick={() => setQt(q => Math.max(min, q - 1))} style={{ width: 36, height: 36, background: "none", border: "none", color: VINHO, fontSize: 22, fontWeight: 700, cursor: "pointer" }}>−</button>
              <span className="mn" style={{ color: TEXT, fontSize: 14, minWidth: 28, textAlign: "center", fontWeight: 700 }}>{qt}</span>
              <button onClick={() => setQt(q => q + 1)} style={{ width: 36, height: 36, background: "none", border: "none", color: VERDE, fontSize: 22, fontWeight: 700, cursor: "pointer" }}>+</button>
            </div>
            <span className="mn" style={{ color: TEXT3, fontSize: 9 }}>mín. {min} un.</span>
          </div>
          <div style={{ background: VERDES, borderRadius: 10, padding: "8px 12px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${VERDE}22` }}>
            <span className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 1 }}>SUBTOTAL</span>
            <span className="mn" style={{ color: VERDE, fontSize: 15, fontWeight: 700 }}>{BRL(qt * p.preco)}</span>
          </div>
          {er && <p style={{ color: VINHO, fontSize: 11, marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>⚠ {er}</p>}
          <button onClick={doAdd} style={{ width: "100%", background: VERDE, color: "#fff", padding: "14px", borderRadius: 14, fontSize: 12, fontWeight: 700, letterSpacing: 2, cursor: "pointer", border: "none", marginBottom: 8, boxShadow: "0 4px 16px rgba(45,90,39,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
            ADICIONAR AO PEDIDO
          </button>
          {cartCount > 0 && (
            <button onClick={onGoToCart} style={{ width: "100%", background: "transparent", border: `1.5px solid ${VERDE}`, color: VERDE, padding: "11px", borderRadius: 14, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
              VER PEDIDO ({cartCount} {cartCount === 1 ? "item" : "itens"}) →
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [cat, setCat]       = useState("Todos");
  const [search, setSearch] = useState("");
  const [modal, setModal]   = useState(null);
  const [screen, setScreen] = useState("catalog");
  const [cart, setCart]     = useState(() => {
    try { const s = localStorage.getItem("laco_cart"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm]           = useState({ nome: "", whats: "", email: "", vendedor: "", obs: "" });
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

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.product.preco, 0);

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
  const updateQty      = (id, d) => setCart(c => c.map(i => i.id === id ? { ...i, qty: Math.max(i.size?.min || 1, i.qty + d) } : i));

  const sendPedido = async () => {
    if (!form.nome || !form.whats) { alert("Preencha Nome e WhatsApp!"); return; }
    setEnviando(true);
    const itens = cart.map(i => `• ${i.product.name} | Tam: ${i.size?.ref} | Cor: ${i.color?.name} | Qtd: ${i.qty} | Subtotal: ${BRL(i.qty * i.product.preco)}`).join("\n");
    const p = new URLSearchParams({ pedido: nrPedido, data: new Date().toLocaleString("pt-BR"), vendedor: form.vendedor || "—", nome: form.nome, whatsapp: form.whats, email: form.email || "—", itens, total: BRL(cartTotal), observacoes: form.obs || "—" });
    try { await fetch(`${SHEETS_URL}?${p}`, { method: "GET", mode: "no-cors" }); } catch (e) { console.error(e); }
    setPedidoFinalizado({ cart: [...cart], form: { ...form }, nrPedido });
    setEnviando(false);
    setScreen("success");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#EDE8E0", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 0" }}>
      <style>{CSS}</style>

      <div style={{ width: "100%", maxWidth: 420, height: "min(820px,100dvh)", background: BG, borderRadius: 32, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,0.15),0 0 0 1px rgba(45,90,39,0.12)" }}>

        {/* Toast */}
        {toast && (
          <div style={{ position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)", background: VERDE, color: "#fff", padding: "8px 18px", borderRadius: 20, zIndex: 9998, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 16px rgba(45,90,39,0.4)", whiteSpace: "nowrap", pointerEvents: "none", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600 }}>
            ✅ {toast}
          </div>
        )}

        {/* ── CATÁLOGO ── */}
        {screen === "catalog" && <>
          <div style={{ padding: "14px 16px 10px", background: BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <Logo />
            <button onClick={() => setScreen("carrinho")} style={{ background: cartCount > 0 ? VERDE : "transparent", border: `1.5px solid ${cartCount > 0 ? VERDE : BORDER}`, borderRadius: 12, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <span style={{ fontSize: 16 }}>🛍</span>
              {cartCount > 0 && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace" }}>{cartCount}</span>}
            </button>
          </div>

          <div style={{ padding: "10px 16px 6px", flexShrink: 0 }}>
            <p style={{ color: TEXT3, fontSize: 11, letterSpacing: 1, marginBottom: 8, textAlign: "center", fontFamily: "'DM Sans',sans-serif" }}>Shoppings · Praças · Eventos · Decoração</p>
            <div style={{ position: "relative", marginBottom: 10 }}>
              <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: TEXT3, pointerEvents: "none" }}>🔍</span>
              <input className="srch" type="text" placeholder="Buscar produto, SKU ou categoria..." value={search} onChange={e => setSearch(e.target.value)} />
              {search && <button onClick={() => setSearch("")} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: TEXT3, fontSize: 18, lineHeight: 1 }}>×</button>}
            </div>
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 8 }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 9, letterSpacing: 1.5, whiteSpace: "nowrap", background: cat === c ? VERDE : CARD, color: cat === c ? "#fff" : TEXT3, border: cat === c ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontWeight: cat === c ? 700 : 400, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
            <p style={{ color: TEXT3, fontSize: 9, letterSpacing: 1, marginBottom: 8, fontFamily: "'DM Mono',monospace" }}>
              {filtered.length} PRODUTO{filtered.length !== 1 ? "S" : ""} · preços na ficha do produto
            </p>
          </div>

          <div className="scr" style={{ flex: 1, padding: "0 16px 80px" }}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <p style={{ fontSize: 40, marginBottom: 12 }}>🔍</p>
                <p className="pf" style={{ color: TEXT2, fontSize: 18 }}>Nenhum produto encontrado</p>
                <button onClick={() => { setSearch(""); setCat("Todos"); }} style={{ background: VERDE, color: "#fff", padding: "10px 22px", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, marginTop: 16 }}>LIMPAR BUSCA</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {filtered.map(p => (
                  <div key={p.sku} style={{ background: CARD, borderRadius: 16, overflow: "hidden", border: `1px solid ${BORDER}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                    {/* Imagem — clicável para abrir modal */}
                    <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setModal(p)}>
                      <Img src={getFoto(p, 0)} h={170} />
                      <div style={{ position: "absolute", top: 10, left: 10 }}><Tag label={p.tag} color={p.tagColor} bg={p.tagBg} /></div>
                      <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "3px 8px" }}>
                        <span className="mn" style={{ color: VERDE, fontSize: 9, fontWeight: 700 }}>{BRL(p.preco)}/un</span>
                      </div>
                    </div>
                    <div style={{ padding: "12px" }}>
                      {/* Info — clicável para modal */}
                      <div style={{ cursor: "pointer", marginBottom: 8 }} onClick={() => setModal(p)}>
                        <p className="pf" style={{ color: TEXT, fontSize: 16, lineHeight: 1.2, marginBottom: 2 }}>{p.name}</p>
                        <p className="dm" style={{ color: TEXT3, fontSize: 11, marginBottom: 4 }}>{p.subtitle}</p>
                        <p className="mn" style={{ color: VERDE2, fontSize: 8, letterSpacing: 1, opacity: 0.7, marginBottom: 6 }}>REF: {p.sku}</p>
                        <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 6 }}>
                          {p.cores.map((c, i) => <div key={i} title={c.name} style={{ width: 11, height: 11, borderRadius: "50%", background: c.hex, border: `1px solid ${BORDER}` }} />)}
                          <span className="mn" style={{ color: TEXT3, fontSize: 8, marginLeft: 2 }}>{p.cores.length} COR{p.cores.length > 1 ? "ES" : ""}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                          <span className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1 }}>MÍN. {Math.min(...p.sizes.map(s => s.min || 1))} UN.</span>
                          <span style={{ color: BORDER, fontSize: 10 }}>·</span>
                          <span className="dm" style={{ color: TEXT2, fontSize: 11 }}>{p.prazo}</span>
                        </div>
                      </div>
                      {/* Quick Add inline */}
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
          <div style={{ padding: "14px 16px 10px", background: BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <button onClick={() => setScreen("catalog")} style={{ background: "none", border: "none", color: VERDE, fontSize: 20, cursor: "pointer", padding: "0 4px" }}>←</button>
            <p className="pf" style={{ color: TEXT, fontSize: 20 }}>Meu Pedido</p>
            <span className="mn" style={{ color: TEXT3, fontSize: 10, marginLeft: "auto" }}>{nrPedido}</span>
          </div>
          <div className="scr" style={{ flex: 1, padding: "16px 16px 40px" }}>
            {cart.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <p style={{ fontSize: 48, marginBottom: 12 }}>🛍</p>
                <p className="pf" style={{ color: TEXT2, fontSize: 18 }}>Carrinho vazio</p>
                <button onClick={() => setScreen("catalog")} style={{ background: VERDE, color: "#fff", padding: "12px 28px", borderRadius: 12, fontWeight: 700, fontSize: 12, marginTop: 20, cursor: "pointer", border: "none", fontFamily: "'DM Sans',sans-serif" }}>VER CATÁLOGO</button>
              </div>
            ) : (<>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                {cart.map(item => (
                  <div key={item.id} style={{ background: CARD, borderRadius: 14, padding: "12px", border: `1px solid ${BORDER}`, display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, overflow: "hidden", flexShrink: 0, border: `1px solid ${BORDER}` }}>
                      <Img src={item.color?.photo || item.product.photo} h={48} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="pf" style={{ color: TEXT, fontSize: 12, marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.product.name}</p>
                      <p className="mn" style={{ color: VERDE, fontSize: 8, letterSpacing: 1, marginBottom: 3 }}>{item.size?.ref}</p>
                      <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 4 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color?.hex, border: `1px solid ${BORDER}` }} />
                        <span className="mn" style={{ color: TEXT3, fontSize: 9 }}>{item.color?.name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", background: CARD2, borderRadius: 8, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ width: 28, height: 28, background: "none", border: "none", color: VINHO, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>−</button>
                          <span className="mn" style={{ color: TEXT, fontSize: 12, minWidth: 22, textAlign: "center", fontWeight: 700 }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ width: 28, height: 28, background: "none", border: "none", color: VERDE, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>+</button>
                        </div>
                                        <span className="mn" style={{ color: VERDE, fontSize: 10, fontWeight: 700 }}>{BRL(item.qty * item.product.preco)}</span>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: "#C0392B", fontSize: 16, background: "none", border: "none", padding: "4px", opacity: 0.5, alignSelf: "flex-start", cursor: "pointer" }}>✕</button>
                  </div>
                ))}
              </div>
              <div style={{ background: VERDES, borderRadius: 12, padding: "12px 14px", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${VERDE}22` }}>
                <span className="mn" style={{ color: VERDE, fontSize: 10, letterSpacing: 1 }}>TOTAL ESTIMADO</span>
                <span className="mn" style={{ color: VERDE, fontSize: 18, fontWeight: 700 }}>{BRL(cartTotal)}</span>
              </div>
              <button onClick={() => setScreen("catalog")} style={{ width: "100%", background: "transparent", border: `1.5px dashed ${VERDE}`, color: VERDE, padding: "11px", borderRadius: 12, fontSize: 12, fontWeight: 600, marginBottom: 16, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                + Adicionar mais produtos
              </button>
              <div style={{ height: 1, background: BORDER, marginBottom: 16 }} />
              <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2.5, marginBottom: 12 }}>DADOS DO CLIENTE</p>
              <div style={{ marginBottom: 10 }}>
                <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 5 }}>VENDEDORA</p>
                <div style={{ position: "relative" }}>
                  <select className="inp" value={form.vendedor} onChange={e => setForm(p => ({ ...p, vendedor: e.target.value }))}>
                    <option value="">Selecione a vendedora</option>
                    {VENDEDORES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: TEXT3, fontSize: 10, pointerEvents: "none" }}>▾</span>
                </div>
              </div>
              {[
                { k: "nome",  l: "Nome / Empresa *", p: "Ex: Shopping Parque D. Pedro", t: "text"  },
                { k: "whats", l: "WhatsApp *",        p: "(11) 99999-9999",              t: "tel"   },
                { k: "email", l: "E-mail",             p: "atendimento@mkcomercial.com.br", t: "email" },
              ].map(f => (
                <div key={f.k} style={{ marginBottom: 10 }}>
                  <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 5 }}>{f.l.toUpperCase()}</p>
                  <input className="inp" type={f.t} value={form[f.k]} placeholder={f.p} autoComplete="off" onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))} />
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 5 }}>OBSERVAÇÕES</p>
                <textarea className="inp" value={form.obs} placeholder="Data do evento, detalhes especiais..." rows={2} style={{ resize: "none" }} onChange={e => setForm(p => ({ ...p, obs: e.target.value }))} />
              </div>
              <div style={{ background: VINHOL, border: `1px solid ${VINHO}33`, borderRadius: 10, padding: "10px 12px", marginBottom: 14 }}>
                <p className="mn" style={{ color: VINHO, fontSize: 9, letterSpacing: 1 }}>PEDIDO MÍNIMO</p>
                <p className="dm" style={{ color: TEXT2, fontSize: 12, marginTop: 3 }}>Valor mínimo de <strong>R$ 2.000,00</strong> por pedido.</p>
              </div>
              <button onClick={sendPedido} style={{ width: "100%", background: enviando ? "#999" : VERDE, color: "#fff", padding: "16px", borderRadius: 14, fontSize: 12, fontWeight: 700, letterSpacing: 2, cursor: "pointer", border: "none", boxShadow: "0 4px 16px rgba(45,90,39,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
                {enviando ? "ENVIANDO..." : "CONFIRMAR PEDIDO"}
              </button>
            </>)}
          </div>
        </>}

        {/* ── SUCESSO ── */}
        {screen === "success" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 32px", textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: VERDES, border: `2px solid ${VERDE}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 20 }}>🎀</div>
            <Logo />
            <p className="mn" style={{ color: TEXT3, fontSize: 10, letterSpacing: 2, marginTop: 12, marginBottom: 4 }}>PEDIDO {nrPedido}</p>
            <p className="pf" style={{ color: VERDE, fontSize: 22, marginBottom: 8 }}>Pedido enviado!</p>
            <p className="dm" style={{ color: TEXT2, fontSize: 13, lineHeight: 1.8, marginBottom: 24 }}>
              Recebemos sua solicitação.<br />
              Entraremos em contato em até<br />
              <strong style={{ color: VERDE }}>24 horas</strong> pelo WhatsApp.
            </p>
            <button
              onClick={() => {
                if (!pedidoFinalizado) return;
                const html = gerarPedidoHTML(pedidoFinalizado);
                const win = window.open("", "_blank");
                if (win) { win.document.write(html); win.document.close(); }
              }}
              style={{ width: "100%", background: VINHO, color: "#fff", padding: "13px", borderRadius: 14, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, cursor: "pointer", border: "none", marginBottom: 10, fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              🖨️ IMPRIMIR / SALVAR PDF
            </button>
            <button
              onClick={() => { setScreen("catalog"); setCart([]); setForm({ nome: "", whats: "", email: "", vendedor: "", obs: "" }); setPedidoFinalizado(null); try { localStorage.removeItem("laco_cart"); } catch {} }}
              style={{ width: "100%", background: VERDE, color: "#fff", padding: "13px", borderRadius: 14, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, cursor: "pointer", border: "none", fontFamily: "'DM Sans',sans-serif" }}
            >
              NOVO PEDIDO
            </button>
          </div>
        )}

      </div>

      {modal && (
        <ProductModal
          product={modal}
          cartCount={cartCount}
          onClose={() => setModal(null)}
          onAdd={handleAdd}
          onGoToCart={() => { setModal(null); setScreen("carrinho"); }}
        />
      )}
    </div>
  );
}
