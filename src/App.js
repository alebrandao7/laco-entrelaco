import { useState, useCallback, memo, useEffect } from "react";

const VERDE = "#2D5A27", VERDE2 = "#4A7A42", VERDES = "#E8F0E6";
const VINHO = "#8B1A2A", VINHOL = "#F5E8EA";
const BG = "#FAF8F5", CARD = "#FFFFFF", CARD2 = "#F5F0EB";
const TEXT = "#1A1A1A", TEXT2 = "#555555", TEXT3 = "#888888", BORDER = "#E8E0D8";
const CL = "https://res.cloudinary.com/djeliz676/image/upload/f_auto,q_auto/";

const F = {
  vvm:     CL + "v1779469881/6645645_dd5hsu.jpg",
  vvm_verm:CL + "v1779473532/IMG-20260514-WA0064_bv6xju.jpg",
  val_gl:  CL + "v1779473529/IMG-20260514-WA0055_czzsdi.jpg",
  val_lind:CL + "v1779473526/IMG-20260514-WA0043_adzjdk.jpg",
  val:     CL + "v1779473531/IMG-20260514-WA0063_ksi7lc.jpg",
  vx:      CL + "v1779473528/IMG-20260514-WA0053_iccnuq.jpg",
  vl:      CL + "v1779473527/IMG-20260514-WA0050_wfq7pi.jpg",
  vd:      CL + "v1779639514/WhatsApp_Image_2026-05-14_at_09.35.20121_rkokfs.jpg",
  vxc:     CL + "v1779469881/34224_qq2r2s.jpg",
  vfixdz:  CL + "v1779639354/WhatsApp_Image_2026-05-14_at_09.35.28_yhifod.jpg",
  vxp:     CL + "v1779639425/WhatsApp_Image_2026-05-14_at_09.35.3011_xnhc2h.jpg",
  tl:      CL + "v1779473527/IMG-20260514-WA0049_hhcwjl.jpg",
  ldr:     CL + "v1779473531/IMG-20260514-WA0060_vuq21n.jpg",
  bola_vm: CL + "v1779736486/bolavermelha_zfo7iq.jpg",
  bola_xdz:CL + "v1779736717/bolaxadrez_vkcy2g.jpg",
  bola_lst:CL + "v1779736485/bola_listrada_smnpbj.jpg",
  bola_pt: CL + "v1779736485/bolapreta_fwxmdl.jpg",
  bjr:     CL + "v1779739002/BOTAJUDARENDA_npyv9b.jpg",
  sfvcbr:  CL + "v1779739089/siacervo_vpr3f7.jpg",
  bfvcbr:  CL + "v1779739121/botacervo_h84rec.jpg",
  sfccxd:  CL + "v1779739158/saiaalce_ea2ojn.jpg",
  bfccxdz: CL + "v1779739187/botalacexd_kscqar.jpg",
  sfvdb:   CL + "v1779739356/verde_saia_umudfd.jpg",
  bfvb:    CL + "v1779739357/botavese_spphcp.jpg",
  sfvoc:   CL + "v1779739480/olive_saia_v5io5r.jpg",
  bfvoc:   CL + "v1779739480/WhatsApp_Image_2026-05-14_at_10.42.37oliva_bota_llzqkz.jpg",
  sfvgpt:  CL + "v1779739534/gato_saia_lwju0r.jpg",
  bfvgpt:  CL + "v1779739538/bota_gato_c0cc0d.jpg",
  sfvcpt:  CL + "v1779739538/cachorro_saia_khfhps.jpg",
  bfvmcpt: CL + "v1779739536/bota_cachorro_ootfiu.jpg",
  bfvdepx: CL + "v1779739790/botaespinha_rtpnkx.jpg",
  bjxdzn:  CL + "v1779739794/bota_xadrez_juta_ojc5gt.jpg",
  bvvpn:   CL + "v1779740460/bota_lacinho_djz698.jpg",
  sfos:    CL + "v1779740423/saia_dourada_jshoba.jpg",
  logo:    CL + "v1779736824/LOGOS_daguvp.png",
};
const PH = F.logo;
const PRECO_UN = 10.00;

const cVVM  = [{ name: "Vermelho", hex: "#C0392B", photo: F.vvm_verm }];
const cVGBC = [{ name: "Vermelho", hex: "#C0392B" }, { name: "Verde", hex: "#2D5A27" }, { name: "Branco", hex: "#F5F5F0" }, { name: "Champagne", hex: "#C8B89A" }];
const cVGBCL = [...cVGBC, { name: "Lamê Dourado", hex: "#CFB53B" }];
const cVM   = [{ name: "Vermelho", hex: "#C0392B" }];
const cVD   = [{ name: "Vermelho + Dourado", hex: "#C0392B" }];
const cVP   = [{ name: "Vermelho + Preto", hex: "#C0392B" }];
const cVB   = [{ name: "Vermelho + Branco", hex: "#C0392B" }];
const cLD   = [{ name: "Dourado", hex: "#CFB53B" }];
const cNAT  = [{ name: "Natural", hex: "#C8B89A" }];

const P30  = "30 dias úteis";
const AE   = "Estrutura interna com espuma e costura francesa.";
const AP   = "Estrutura interna com placa ou espuma e costura francesa.";
const APL  = "Estrutura interna com placa e costura francesa.";
const AAR  = "Estrutura interna com placa e arame; confeccionado em costura francesa.";
const AIS  = "Estrutura interna isopor, duplamente amarrada e com fio para pendurar.";

const TC = {
  V: { tag: "Veludo",     tagColor: "#2D5A27", tagBg: "#E8F0E6" },
  E: { tag: "Estampado",  tagColor: "#7A4A1A", tagBg: "#FDF0E5" },
  L: { tag: "Lamê",       tagColor: "#7A5A00", tagBg: "#FDF5E0" },
  B: { tag: "Bolas",      tagColor: "#8B1A2A", tagBg: "#F5E8EA" },
  S: { tag: "🔥 Saldão",  tagColor: "#BF360C", tagBg: "#FBE9E7" },
};

const PRODUCTS = [
  // ── VELUDO ──────────────────────────────────────────────────────────────────
  { sku: "VVM",     name: "Laço Veludo Vermelho",            subtitle: "20cm a 100cm",      category: "Veludo",    material: "100% poliéster",           acabamento: AP,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "O clássico da linha; confeccionado em Veludo tradicional.",                                                    cores: cVVM,   photo: F.vvm,      ...TC.V, sizes: [{ label: "20cm",  ref: "20V",          min: 15 }, { label: "30cm",  ref: "30V",          min: 12 }, { label: "40cm",  ref: "40V",          min: 10 }, { label: "50cm",  ref: "50V",          min: 6  }, { label: "60cm",  ref: "60V",          min: 4  }, { label: "80cm",  ref: "80V",          min: 3  }, { label: "100cm", ref: "100V",         min: 2  }] },
  { sku: "VALGL",   name: "Laço Veludo Cristal Grav. Longa", subtitle: "30cm a 50cm",       category: "Veludo",    material: "100% poliéster",           acabamento: AP,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Confeccionado em Veludo Cristal, com Gravata Longa que cria efeito cascata ao descer pela árvore ou coluna.", cores: cVGBC,  photo: F.val_gl,   ...TC.V, sizes: [{ label: "30cm",  ref: "30VaL",        min: 10 }, { label: "40cm",  ref: "40VaL",        min: 8  }, { label: "50cm",  ref: "50VaL",        min: 6  }] },
  { sku: "VALLIND", name: "Laço Veludo Ale — Lindíssimo",    subtitle: "30cm a 90cm",       category: "Veludo",    material: "100% poliéster",           acabamento: AAR, prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço duplo confeccionado em Veludo Cristal, com Gravata Longa que cria efeito cascata.",                      cores: cVGBC,  photo: F.val_lind, ...TC.V, sizes: [{ label: "30cm",  ref: "30VAl/Lind",   min: 6  }, { label: "60cm",  ref: "60VAl/Lind",   min: 4  }, { label: "90cm",  ref: "90VAl/Lind",   min: 2  }] },
  { sku: "VAL",     name: "Laço Veludo Ale Vermelho",        subtitle: "20cm a 40cm",       category: "Veludo",    material: "100% poliéster",           acabamento: APL, prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço tradicional confeccionado em Veludo Cristal.",                                                          cores: cVGBC,  photo: F.val,      ...TC.V, sizes: [{ label: "20cm",  ref: "20VAl",        min: 12 }, { label: "30cm",  ref: "30VAl",        min: 10 }, { label: "40cm",  ref: "40VAl",        min: 8  }] },
  // ── ESTAMPADO ───────────────────────────────────────────────────────────────
  { sku: "VX",      name: "Laço Veludo Vermelho Xadrez",     subtitle: "Borda xadrez",      category: "Estampado", material: "90% poliéster/10% algodão", acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço confeccionado em Veludo Tradicional, com borda xadrez.",                                               cores: cVM,    photo: F.vx,       ...TC.E, sizes: [{ label: "20cm",  ref: "20VX",         min: 12 }, { label: "30cm",  ref: "30VX",         min: 10 }, { label: "40cm",  ref: "40VX",         min: 8  }] },
  { sku: "VL",      name: "Laço Veludo Vermelho Listra",     subtitle: "Borda listrada",    category: "Estampado", material: "90% poliéster/10% algodão", acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço confeccionado em Veludo Tradicional, com borda de listra.",                                            cores: cVM,    photo: F.vl,       ...TC.E, sizes: [{ label: "20cm",  ref: "20VL",         min: 12 }, { label: "30cm",  ref: "30VL",         min: 10 }, { label: "40cm",  ref: "40VL",         min: 8  }] },
  { sku: "VD",      name: "Laço Veludo Verm. com Dourado",   subtitle: "Borda ouro",        category: "Estampado", material: "90% poliéster/10% algodão", acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço confeccionado em Veludo Tradicional, com borda ouro.",                                                  cores: cVD,    photo: F.vd,       ...TC.E, sizes: [{ label: "20cm",  ref: "20VD",         min: 12 }, { label: "30cm",  ref: "30VD",         min: 10 }, { label: "40cm",  ref: "40VD",         min: 8  }] },
  { sku: "VXC",     name: "Laço Veludo Verm. Meio Xadrez",   subtitle: "Xadrez central",    category: "Estampado", material: "100% poliéster",            acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço tradicional confeccionado em tecido xadrez, com borda em veludo.",                                      cores: cVM,    photo: F.vxc,      ...TC.E, sizes: [{ label: "20cm",  ref: "20VXC",        min: 12 }, { label: "30cm",  ref: "30VXC",        min: 10 }, { label: "40cm",  ref: "40VXC",        min: 8  }] },
  { sku: "VFIXDZ",  name: "Laço Veludo Verm. Fita Xadrez",   subtitle: "Fita xadrez",       category: "Estampado", material: "100% poliéster",            acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço confeccionado em Veludo Tradicional, com fita xadrez decorativa central.",                             cores: cVM,    photo: F.vfixdz,   ...TC.E, sizes: [{ label: "40cm",  ref: "40VFiXdz",     min: 10 }] },
  { sku: "VXP",     name: "Laço Veludo Verm. XDZ/VM/PT",     subtitle: "Flanela xadrez",    category: "Estampado", material: "100% poliéster",            acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço confeccionado em veludo tradicional, com flanela xadrez vm/pt central.",                               cores: cVP,    photo: F.vxp,      ...TC.E, sizes: [{ label: "20cm",  ref: "20VXP",        min: 12 }, { label: "30cm",  ref: "30VXP",        min: 10 }, { label: "40cm",  ref: "40VXP",        min: 8  }] },
  { sku: "TL",      name: "Laço Tecido Listra Vm/Br",        subtitle: "Listrado clássico", category: "Estampado", material: "100% algodão",              acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço tradicional confeccionado em tecido listrado.",                                                          cores: cVB,    photo: F.tl,       ...TC.E, sizes: [{ label: "20cm",  ref: "20TL",         min: 12 }, { label: "30cm",  ref: "30TL",         min: 10 }, { label: "40cm",  ref: "40TL",         min: 8  }] },
  // ── LAMÊ ────────────────────────────────────────────────────────────────────
  { sku: "LDR",     name: "Laço Lamê Dourado",               subtitle: "Brilho metálico",   category: "Lamê",      material: "100% poliéster metalizado", acabamento: AE,  prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Laço tradicional confeccionado em Lamê dourado; brilho intenso.",                                            cores: cLD,    photo: F.ldr,      ...TC.L, sizes: [{ label: "20cm",  ref: "20LDR",        min: 12 }, { label: "30cm",  ref: "30LDR",        min: 10 }, { label: "40cm",  ref: "40LDR",        min: 8  }] },
  // ── BOLAS ───────────────────────────────────────────────────────────────────
  { sku: "BVAL",    name: "Bola Veludo Ale Vermelho",         subtitle: "12cm a 25cm",       category: "Bolas",     material: "Isopor e poliéster",        acabamento: AIS, prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bola tradicional coberta com veludo cristal vermelho.",                    cores: cVGBCL, photo: F.bola_vm,  ...TC.B, sizes: [{ label: "12cm",  ref: "12BVAl",       min: 1  }, { label: "15cm",  ref: "15BVAl",       min: 1  }, { label: "20cm",  ref: "20BVAl",       min: 1  }, { label: "25cm",  ref: "25BVAl",       min: 1  }] },
  { sku: "BTXDZ",   name: "Bola Tecido Xadrez Decorada",      subtitle: "Xadrez Vm/Br",      category: "Bolas",     material: "Isopor e poliéster",        acabamento: AIS, prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bola coberta com tecido xadrez Vm/Br e decorada com galhos natalinos.",   cores: cVB,    photo: F.bola_xdz, ...TC.B, sizes: [{ label: "12cm",  ref: "12BTXdz",      min: 1  }, { label: "15cm",  ref: "15BTXdz",      min: 1  }, { label: "20cm",  ref: "20BTXdz",      min: 1  }] },
  { sku: "BTLT",    name: "Bola Tecido Listrado Decorada",    subtitle: "Listrado Vm/Br",    category: "Bolas",     material: "Isopor e poliéster",        acabamento: AIS, prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bola coberta com tecido listrado Vm/Br e decorada com galhos natalinos.", cores: cVB,    photo: F.bola_lst, ...TC.B, sizes: [{ label: "12cm",  ref: "12BTLt",       min: 1  }, { label: "15cm",  ref: "15BTLt",       min: 1  }, { label: "20cm",  ref: "20BTLt",       min: 1  }] },
  { sku: "BTXDZP",  name: "Bola Tecido Xadrez Vm/Pt Dec.",    subtitle: "Xadrez Vm/Pt",      category: "Bolas",     material: "Isopor e poliéster",        acabamento: AIS, prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bola coberta com tecido Xadrez Vm/Pt e decorada com galhos natalinos.",  cores: cVP,    photo: F.bola_pt,  ...TC.B, sizes: [{ label: "12cm",  ref: "12BTXdzVm/Pt", min: 1  }, { label: "15cm",  ref: "15BTXdzVm/Pt", min: 1  }, { label: "20cm",  ref: "20BTXdzVm/Pt", min: 1  }] },
  // ── SALDÃO — Saias & Botas ───────────────────────────────────────────────────
  { sku: "BJR",      name: "Bota Juta Renda",                  subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota decorativa em Juta com Renda.",                                     cores: cNAT, photo: F.bjr,     ...TC.S, sizes: [{ label: "50cm",    ref: "50BJR",       min: 5 }] },
  { sku: "SFVCBR",   name: "Saia Árvore Feltro VM Cervo Br.",   subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro vermelho com cervo branco.",                  cores: cVM,  photo: F.sfvcbr,  ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVCBR",     min: 5 }] },
  { sku: "BFVCBR",   name: "Bota Feltro VM Cervo Branco",       subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro vermelho com cervo branco.",                              cores: cVM,  photo: F.bfvcbr,  ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVCBR",    min: 5 }] },
  { sku: "SFCCXD",   name: "Saia Árvore Feltro Cru Cervo XD",   subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro cru com cervo xadrez.",                       cores: cVM,  photo: F.sfccxd,  ...TC.S, sizes: [{ label: "1MT",     ref: "1SFCCXD",     min: 5 }] },
  { sku: "BFCCXDZ",  name: "Bota Feltro Cru Cervo Xadrez",      subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro cru com cervo xadrez.",                                   cores: cVM,  photo: F.bfccxdz, ...TC.S, sizes: [{ label: "50cm",    ref: "50BFCCXDZ",   min: 5 }] },
  { sku: "SFXDP",    name: "Saia Árvore Flanelada XD/Pelúcia",  subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em tecido flanelado xadrez com pelúcia.",               cores: cVM,  photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SFXDP",      min: 5 }] },
  { sku: "BXFDZP",   name: "Bota Flanelada Xadrez/Pelúcia",     subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em tecido flanelado xadrez com pelúcia.",                           cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "50cm",    ref: "50BXFDZP",    min: 5 }] },
  { sku: "SFVDB",    name: "Saia Árvore Feltro Verde Bengala",   subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro verde bengala.",                              cores: cNAT, photo: F.sfvdb,   ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVDB",      min: 5 }] },
  { sku: "BFVB",     name: "Bota Feltro VD Bengala",             subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro verde bengala.",                                          cores: cNAT, photo: F.bfvb,    ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVB",      min: 5 }] },
  { sku: "SFVOC",    name: "Saia Árvore Feltro VD Oliva Cervo",  subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro verde oliva com cervo e guizo.",             cores: cNAT, photo: F.sfvoc,   ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVOC",      min: 5 }] },
  { sku: "BFVOC",    name: "Bota Feltro Verde Oliva Cervo",      subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro verde oliva com cervo.",                                  cores: cNAT, photo: F.bfvoc,   ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVOC",     min: 5 }] },
  { sku: "SFVGPT",   name: "Saia Árvore Feltro Gatinho PT",      subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro com gatinho preto.",                          cores: cNAT, photo: F.sfvgpt,  ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVGPT",     min: 5 }] },
  { sku: "BFVGPT",   name: "Bota Feltro VM Gatinho Preto",       subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro vermelho com gatinho preto.",                             cores: cNAT, photo: F.bfvgpt,  ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVGPT",    min: 5 }] },
  { sku: "SFVCPT",   name: "Saia Árvore Feltro VM Cachorro PT",  subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro vermelho com cachorrinho preto.",            cores: cNAT, photo: F.sfvcpt,  ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVCPT",     min: 5 }] },
  { sku: "BFVMCPT",  name: "Bota Feltro VM Cachorrinho Preto",   subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro vermelho com cachorrinho preto.",                         cores: cNAT, photo: F.bfvmcpt, ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVMCPT",   min: 5 }] },
  { sku: "SFVEP",    name: "Saia Árvore Feltro VD Espinha Peixe",subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro verde espinha de peixe.",                    cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVEP",      min: 5 }] },
  { sku: "BFVDEPX",  name: "Bota Feltro VD Espinha Peixe",       subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro verde espinha de peixe.",                                cores: cNAT, photo: F.bfvdepx, ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVDEPX",   min: 5 }] },
  { sku: "SFVO",     name: "Saia Árvore VM Ossinho",              subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro vermelho com ossinho.",                       cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SFVO",       min: 5 }] },
  { sku: "BFVO",     name: "Bota Feltro VD Ossinho",              subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro verde com ossinho.",                                      cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVO",      min: 5 }] },
  { sku: "BJXDZN",   name: "Bota Juta Xadrez Natalino",           subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em juta com xadrez natalino.",                                      cores: cNAT, photo: F.bjxdzn,  ...TC.S, sizes: [{ label: "50cm",    ref: "50BJXDZN",    min: 5 }] },
  { sku: "BJCM",     name: "Bota Juta Cervo Madeira",             subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em juta com cervo madeira.",                                        cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "50cm",    ref: "50BJCM",      min: 5 }] },
  { sku: "BVPArDr",  name: "Bota Velboa/Pelúcia DR Árvore",       subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em velboa/pelúcia com árvore.",                                     cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "50cm",    ref: "50BVPArDr",   min: 5 }] },
  { sku: "BVVPN",    name: "Bota Velboz Cru/Rosê Laço",           subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em velboz cru/rosê com laço.",                                      cores: cNAT, photo: F.bvvpn,   ...TC.S, sizes: [{ label: "50cm",    ref: "50BVVPN",     min: 5 }] },
  { sku: "SVVPN",    name: "Saia Velboa VM Papai Noel",            subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em velboa vermelho com Papai Noel.",                    cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SVVPN",      min: 5 }] },
  { sku: "SFG",      name: "Saia Árvore Feltro Gnomo",             subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro com gnomo.",                                  cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SFG",        min: 5 }] },
  { sku: "SFPN",     name: "Saia Árvore Feltro Papai Noel",        subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro com Papai Noel.",                             cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SFPN",       min: 5 }] },
  { sku: "SFCRU",    name: "Saia Feltro Cru Organza Lacinho",      subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro cru com organza e lacinho.",                  cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SFCRU/OLÇ",  min: 5 }] },
  { sku: "SVVBBR",   name: "Saia Velboa VM Bolas Pelúcia",         subtitle: "1MT",         category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em velboa vermelho com bolas de pelúcia.",              cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "1MT",     ref: "1SVVBBR",     min: 5 }] },
  { sku: "SFOS",     name: "Saia Feltro Organza Sextavada",        subtitle: "80cm / 1MT",  category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em feltro com organza sextavada.",                      cores: cNAT, photo: F.sfos,    ...TC.S, sizes: [{ label: "80cm",    ref: "80SFOS",      min: 5 }, { label: "1MT", ref: "1SFOS", min: 5 }] },
  { sku: "BFCODRLÇ", name: "Bota Feltro Cordeiro Laço",            subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em feltro cordeiro com laço.",                                      cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "50cm",    ref: "50BFCODRLÇ",  min: 5 }] },
  { sku: "BFVPACH",  name: "Bota Velboz Patchwork",                subtitle: "50cm",        category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Bota em velboz estilo patchwork.",                                       cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "50cm",    ref: "50BFVPACH",   min: 5 }] },
  { sku: "SOS",      name: "Saia Organza Sextavada",               subtitle: "60/80cm/1MT", category: "Saldão", material: "100% Poliéster", acabamento: "", prazo: P30, estoque: 500, preco: PRECO_UN, desc: "Saia para árvore em organza sextavada.",                                 cores: cNAT, photo: PH,        ...TC.S, sizes: [{ label: "60cm",    ref: "60SOS",       min: 5 }, { label: "80cm", ref: "80SOS", min: 5 }, { label: "1MT", ref: "1SOS", min: 5 }] },
];

const CATEGORIES = ["Todos", "Veludo", "Lamê", "Estampado", "Bolas", "Saldão"];
const VENDEDORES = ["Alexandra", "Valéria", "Cleuza"];
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbw5c9f7of3GhrjgOcZR7_KDoEp4_avn4D9zsOkn7p_O1GjWii200ow5e9YhP93pjvVGhw/exec";

const BRL = v => `R$ ${Number(v).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
const gerarNr = () => `#${Date.now().toString().slice(-5)}`;
const getFoto = (p, i) => p.cores?.[i]?.photo || p.photo || "";

// ── GERADOR DO PEDIDO PARA IMPRESSÃO ─────────────────────────────────────────
const gerarPedidoHTML = ({ cart, form, nrPedido }) => {
  const total       = cart.reduce((s, i) => s + i.qty * i.product.preco, 0);
  const totalItens  = cart.length;
  const totalUn     = cart.reduce((s, i) => s + i.qty, 0);
  const dataHora    = new Date().toLocaleString("pt-BR");

  const linhasItens = cart.map(item => `
    <tr>
      <td class="td-ref">${item.size?.ref || ""}</td>
      <td>
        <strong>${item.product.name}</strong><br>
        <span style="font-size:11px;color:#888">${item.product.material}${item.product.acabamento ? " · " + item.product.acabamento : ""}</span>
      </td>
      <td>${item.size?.label || ""}</td>
      <td>
        <span class="td-cor">
          <span class="cor-dot" style="background:${item.color?.hex || "#ccc"}"></span>
          ${item.color?.name || ""}
        </span>
      </td>
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
  .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #2D5A27;}
  .logo img{height:52px;object-fit:contain;}
  .logo-fallback{font-family:'Playfair Display',serif;font-size:22px;color:#2D5A27;}
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
  .totais{display:flex;justify-content:flex-end;margin-bottom:28px;}
  .totais-box{background:#FAF8F5;border:1px solid #E8E0D8;border-radius:8px;padding:16px 20px;min-width:240px;}
  .totais-linha{display:flex;justify-content:space-between;align-items:center;padding:4px 0;}
  .totais-linha span:first-child{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:1px;color:#888;text-transform:uppercase;}
  .totais-linha span:last-child{font-size:13px;font-weight:600;}
  .totais-linha.destaque{border-top:1px solid #E8E0D8;margin-top:6px;padding-top:10px;}
  .totais-linha.destaque span:last-child{font-size:16px;color:#2D5A27;}
  .obs-box{background:#FBE9E7;border:1px solid #8B1A2A33;border-radius:8px;padding:14px 16px;margin-bottom:28px;}
  .obs-box p{font-size:13px;color:#1A1A1A;line-height:1.6;}
  .footer{display:flex;justify-content:space-between;align-items:flex-end;padding-top:24px;border-top:1px solid #E8E0D8;}
  .footer-assinatura{text-align:center;}
  .footer-assinatura .linha-assinatura{width:180px;border-top:1px solid #888;margin:0 auto 6px;}
  .footer-assinatura span{font-family:'DM Mono',monospace;font-size:9px;color:#888;letter-spacing:1px;}
  .footer-contato{text-align:right;font-family:'DM Mono',monospace;font-size:9px;color:#888;letter-spacing:0.5px;line-height:1.8;}
  .no-print{text-align:center;margin-bottom:20px;display:flex;gap:10px;justify-content:center;}
  .btn{border:none;padding:10px 28px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .btn-print{background:#2D5A27;color:#fff;}
  .btn-close{background:#E8E0D8;color:#1A1A1A;}
  @media print{body{background:#fff;padding:0;}.page{box-shadow:none;border-radius:0;padding:20px 28px;}.no-print{display:none!important;}}
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
      <div class="logo-fallback" style="display:none">laço & entrelaço</div>
    </div>
    <div style="text-align:right;">
      <div class="pedido-nr">${nrPedido}</div>
      <div class="pedido-data">DATA: ${dataHora}</div>
      <div class="pedido-status">AGUARDANDO ORÇAMENTO</div>
    </div>
  </div>

  <p class="section-title">Dados do Cliente</p>
  <div class="cliente-grid">
    <div class="campo"><label>Empresa / Nome</label><span>${form.nome || "—"}</span></div>
    <div class="campo"><label>WhatsApp</label><span>${form.whats || "—"}</span></div>
    <div class="campo"><label>E-mail</label><span>${form.email || "—"}</span></div>
    <div class="campo"><label>Vendedora</label><span>${form.vendedor || "—"}</span></div>
  </div>

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

  <div class="totais">
    <div class="totais-box">
      <div class="totais-linha"><span>Total de Itens</span><span>${totalItens} produto${totalItens !== 1 ? "s" : ""}</span></div>
      <div class="totais-linha"><span>Total de Unidades</span><span>${totalUn} unidades</span></div>
      <div class="totais-linha"><span>Prazo de Entrega</span><span style="color:#8B1A2A">30 dias úteis</span></div>
      <div class="totais-linha destaque"><span>Valor Estimado</span><span>${BRL(total)}</span></div>
    </div>
  </div>

  ${form.obs ? `
  <p class="section-title">Observações</p>
  <div class="obs-box"><p>${form.obs}</p></div>` : ""}

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
      contato@lacoentrelaco.com.br<br>
      (11) 99999-9999<br>
      Pedido mínimo R$ 2.000,00
    </div>
  </div>
</div>
</body>
</html>`;
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .pf { font-family: 'Playfair Display', serif; }
  .dm { font-family: 'DM Sans', sans-serif; }
  .mn { font-family: 'DM Mono', monospace; }
  .inp { width: 100%; padding: 11px 13px; border-radius: 10px; color: #1A1A1A; font-size: 14px; border: 1.5px solid #E8E0D8; background: #FAF8F5; font-family: 'DM Sans', sans-serif; outline: none; -webkit-appearance: none; display: block; }
  .inp:focus { border-color: #2D5A27; }
  .scr { overflow-y: auto; -webkit-overflow-scrolling: touch; }
  .scr::-webkit-scrollbar { width: 0; }
  .srch { width: 100%; padding: 10px 13px 10px 36px; border-radius: 10px; color: #1A1A1A; font-size: 13px; border: 1.5px solid #E8E0D8; background: #FFFFFF; font-family: 'DM Sans', sans-serif; outline: none; }
  .srch:focus { border-color: #2D5A27; }
`;

const Img = memo(({ src, h = 180 }) => {
  const [err, setErr] = useState(false);
  if (err || !src) return (
    <div style={{ width: "100%", height: h, background: CARD2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🎀</div>
  );
  return <img src={src} alt="" style={{ width: "100%", height: h, objectFit: "cover", display: "block" }} onError={() => setErr(true)} />;
});

const Tag = ({ label, color, bg }) => (
  <span className="mn" style={{ background: bg, color, fontSize: 8, fontWeight: 700, letterSpacing: 1.5, padding: "3px 8px", borderRadius: 4, border: `1px solid ${color}33`, display: "inline-block" }}>{label.toUpperCase()}</span>
);

const Logo = () => (
  <img src={F.logo} alt="Laço & Entrelaço" style={{ height: 36, objectFit: "contain" }} onError={e => e.target.style.display = "none"} />
);

// ── MODAL ──────────────────────────────────────────────────────────────────────
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

        {/* Foto */}
        <div style={{ position: "relative", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
          <Img src={getFoto(p, cl)} h={240} />
          <button onClick={onClose} style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.92)", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>←</button>
          <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "4px 10px" }}>
            <span className="mn" style={{ color: VERDE, fontSize: 11, fontWeight: 700 }}>R$ 10,00/un</span>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={{ padding: "16px 16px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <Tag label={p.tag} color={p.tagColor} bg={p.tagBg} />
            <span className="mn" style={{ color: TEXT3, fontSize: 8 }}>REF: {p.sku}</span>
          </div>
          <p className="pf" style={{ color: TEXT, fontSize: 20, marginBottom: 2 }}>{p.name}</p>
          <p className="dm" style={{ color: TEXT3, fontSize: 12, marginBottom: 10 }}>{p.subtitle}</p>
          <p className="dm" style={{ color: TEXT2, fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>

          {/* Ficha técnica */}
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

          {/* Tamanho */}
          <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 2, marginBottom: 8 }}>TAMANHO</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {p.sizes.map((s, i) => (
              <button key={i} onClick={() => handleSz(i)} style={{ padding: "7px 10px", borderRadius: 10, background: sz === i ? VERDE : CARD, color: sz === i ? "#fff" : TEXT2, border: sz === i ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>{s.label}</button>
            ))}
          </div>

          {/* Cor */}
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

          {/* Selecionado */}
          <div style={{ background: CARD2, borderRadius: 10, padding: "7px 12px", marginBottom: 12, display: "flex", justifyContent: "space-between", border: `1px solid ${BORDER}` }}>
            <span className="mn" style={{ color: TEXT3, fontSize: 9 }}>SELECIONADO</span>
            <span className="mn" style={{ color: VERDE, fontSize: 9, fontWeight: 700 }}>{tam?.ref} · {cor?.name}</span>
          </div>

          {/* Quantidade */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 2 }}>QUANTIDADE</p>
            <div style={{ display: "inline-flex", alignItems: "center", background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <button onClick={() => setQt(q => Math.max(min, q - 1))} style={{ width: 36, height: 36, background: "none", border: "none", color: VINHO, fontSize: 22, fontWeight: 700, cursor: "pointer" }}>−</button>
              <span className="mn" style={{ color: TEXT, fontSize: 14, minWidth: 28, textAlign: "center", fontWeight: 700 }}>{qt}</span>
              <button onClick={() => setQt(q => q + 1)} style={{ width: 36, height: 36, background: "none", border: "none", color: VERDE, fontSize: 22, fontWeight: 700, cursor: "pointer" }}>+</button>
            </div>
            <span className="mn" style={{ color: TEXT3, fontSize: 9 }}>mín. {min} un.</span>
          </div>

          {/* Subtotal */}
          <div style={{ background: VERDES, borderRadius: 10, padding: "8px 12px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${VERDE}22` }}>
            <span className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 1 }}>SUBTOTAL</span>
            <span className="mn" style={{ color: VERDE, fontSize: 15, fontWeight: 700 }}>{BRL(qt * p.preco)}</span>
          </div>

          {/* Estoque */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            <span style={{ fontSize: 10 }}>📦</span>
            <span className="mn" style={{ color: p.estoque <= 10 ? "#BF360C" : TEXT3, fontSize: 9 }}>
              ESTOQUE: <strong style={{ color: p.estoque <= 10 ? "#BF360C" : VERDE }}>{p.estoque} un.{p.estoque <= 10 ? " — Últimas unidades!" : ""}</strong>
            </span>
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

// ── APP ────────────────────────────────────────────────────────────────────────
export default function App() {
  const [cat, setCat]       = useState("Todos");
  const [search, setSearch] = useState("");
  const [modal, setModal]   = useState(null);
  const [screen, setScreen] = useState("catalog");
  const [cart, setCart]     = useState(() => {
    try { const s = localStorage.getItem("laco_cart"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [form, setForm]     = useState({ nome: "", whats: "", email: "", vendedor: "", obs: "" });
  const [enviando, setEnviando] = useState(false);
  const [toast, setToast]   = useState(null);
  const [nrPedido]          = useState(gerarNr);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(null); // snapshot para impressão

  // Persiste carrinho no localStorage sempre que mudar
  useEffect(() => {
    try { localStorage.setItem("laco_cart", JSON.stringify(cart)); } catch {}
  }, [cart]);

  const filtered = PRODUCTS.filter(p => {
    const catOk = cat === "Todos" || p.category === cat;
    const q = search.toLowerCase().trim();
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
  const updateQty = (id, d) => setCart(c => c.map(i => i.id === id ? { ...i, qty: Math.max(i.size?.min || 1, i.qty + d) } : i));

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
          {/* Header */}
          <div style={{ padding: "14px 16px 10px", background: BG, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <Logo />
            <button onClick={() => setScreen("carrinho")} style={{ position: "relative", background: cartCount > 0 ? VERDE : "transparent", border: `1.5px solid ${cartCount > 0 ? VERDE : BORDER}`, borderRadius: 12, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <span style={{ fontSize: 16 }}>🛍</span>
              {cartCount > 0 && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, fontFamily: "'DM Mono',monospace" }}>{cartCount}</span>}
            </button>
          </div>

          {/* Busca + Filtros */}
          <div style={{ padding: "10px 16px 6px", flexShrink: 0 }}>
            <p style={{ color: TEXT3, fontSize: 11, letterSpacing: 1, marginBottom: 8, textAlign: "center", fontFamily: "'DM Sans',sans-serif" }}>Shoppings · Praças · Eventos · Decoração</p>

            {/* Campo de busca */}
            <div style={{ position: "relative", marginBottom: 10 }}>
              <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: TEXT3, pointerEvents: "none" }}>🔍</span>
              <input
                className="srch"
                type="text"
                placeholder="Buscar produto, SKU ou categoria..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && (
                <button onClick={() => setSearch("")} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: TEXT3, fontSize: 18, lineHeight: 1 }}>×</button>
              )}
            </div>

            {/* Categorias */}
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 8 }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 9, letterSpacing: 1.5, whiteSpace: "nowrap", background: cat === c ? VERDE : CARD, color: cat === c ? "#fff" : TEXT3, border: cat === c ? `1px solid ${VERDE2}` : `1px solid ${BORDER}`, fontWeight: cat === c ? 700 : 400, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
            <p style={{ color: TEXT3, fontSize: 9, letterSpacing: 1, marginBottom: 8, fontFamily: "'DM Mono',monospace" }}>
              {filtered.length} PRODUTO{filtered.length !== 1 ? "S" : ""} · R$ 10,00/un.
            </p>
          </div>

          {/* Lista de produtos */}
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
                  <div key={p.sku} onClick={() => setModal(p)} style={{ background: CARD, borderRadius: 16, overflow: "hidden", border: `1px solid ${BORDER}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer" }}>
                    <div style={{ position: "relative" }}>
                      <Img src={getFoto(p, 0)} h={170} />
                      <div style={{ position: "absolute", top: 10, left: 10 }}>
                        <Tag label={p.tag} color={p.tagColor} bg={p.tagBg} />
                      </div>
                      <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(255,255,255,0.92)", borderRadius: 8, padding: "3px 8px" }}>
                        <span className="mn" style={{ color: VERDE, fontSize: 9, fontWeight: 700 }}>R$ 10,00/un</span>
                      </div>
                    </div>
                    <div style={{ padding: "12px" }}>
                      <p className="pf" style={{ color: TEXT, fontSize: 16, lineHeight: 1.2, marginTop: 4 }}>{p.name}</p>
                      <p className="dm" style={{ color: TEXT3, fontSize: 11, marginTop: 2, marginBottom: 6 }}>{p.subtitle}</p>
                      <p className="mn" style={{ color: VERDE2, fontSize: 8, letterSpacing: 1, marginBottom: 8, opacity: 0.7 }}>REF: {p.sku}</p>
                      <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 10 }}>
                        {p.cores.map((c, i) => <div key={i} title={c.name} style={{ width: 11, height: 11, borderRadius: "50%", background: c.hex, border: `1px solid ${BORDER}` }} />)}
                        <span className="mn" style={{ color: TEXT3, fontSize: 8, marginLeft: 2 }}>{p.cores.length} COR{p.cores.length > 1 ? "ES" : ""}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 8, borderTop: `1px solid ${BORDER}` }}>
                        <div>
                          <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 2 }}>MÍN. {Math.min(...p.sizes.map(s => s.min || 1))} UN.</p>
                          <p className="dm" style={{ color: TEXT2, fontSize: 11 }}>{p.prazo}</p>
                        </div>
                        <div style={{ background: VERDE, borderRadius: 8, padding: "6px 12px" }}>
                          <span className="mn" style={{ color: "#fff", fontSize: 9, letterSpacing: 1 }}>VER DETALHES →</span>
                        </div>
                      </div>
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
              {/* Itens */}
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

              {/* Total */}
              <div style={{ background: VERDES, borderRadius: 12, padding: "12px 14px", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${VERDE}22` }}>
                <span className="mn" style={{ color: VERDE, fontSize: 10, letterSpacing: 1 }}>TOTAL ESTIMADO</span>
                <span className="mn" style={{ color: VERDE, fontSize: 18, fontWeight: 700 }}>{BRL(cartTotal)}</span>
              </div>

              <button onClick={() => setScreen("catalog")} style={{ width: "100%", background: "transparent", border: `1.5px dashed ${VERDE}`, color: VERDE, padding: "11px", borderRadius: 12, fontSize: 12, fontWeight: 600, marginBottom: 16, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                + Adicionar mais produtos
              </button>

              <div style={{ height: 1, background: BORDER, marginBottom: 16 }} />

              <p className="mn" style={{ color: VERDE, fontSize: 9, letterSpacing: 2.5, marginBottom: 12 }}>DADOS DO CLIENTE</p>

              {/* Vendedora */}
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

              {/* Campos do cliente */}
              {[
                { k: "nome",  l: "Nome / Empresa *", p: "Ex: Shopping Parque D. Pedro", t: "text" },
                { k: "whats", l: "WhatsApp *",        p: "(11) 99999-9999",              t: "tel"  },
                { k: "email", l: "E-mail",             p: "contato@empresa.com.br",       t: "email" },
              ].map(f => (
                <div key={f.k} style={{ marginBottom: 10 }}>
                  <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 5 }}>{f.l.toUpperCase()}</p>
                  <input className="inp" type={f.t} value={form[f.k]} placeholder={f.p} autoComplete="off" onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))} />
                </div>
              ))}

              {/* Observações */}
              <div style={{ marginBottom: 16 }}>
                <p className="mn" style={{ color: TEXT3, fontSize: 8, letterSpacing: 1, marginBottom: 5 }}>OBSERVAÇÕES</p>
                <textarea className="inp" value={form.obs} placeholder="Data do evento, detalhes especiais..." rows={2} style={{ resize: "none" }} onChange={e => setForm(p => ({ ...p, obs: e.target.value }))} />
              </div>

              {/* Aviso pedido mínimo */}
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

            {/* Botão imprimir */}
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

      {/* Modal */}
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
