const SPREADSHEET_ID = "18EqKoZmmIOkOcphsfy6S9BPjv7-G0bkpCCVjWfE5xD0";

function doGet(e) {
  try {
    if (!e.parameter || !e.parameter.nome) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "Laço & Entrelaço API ativa" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName("Pedidos");
    if (!sheet) sheet = ss.insertSheet("Pedidos");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Nº Pedido","Data/Hora","Vendedor","Nome / Empresa",
        "WhatsApp","E-mail","Itens do Pedido","Observações"
      ]);
      const h = sheet.getRange(1,1,1,8);
      h.setBackground("#2D5A27");
      h.setFontColor("#FFFFFF");
      h.setFontWeight("bold");
      sheet.setColumnWidth(1,90);
      sheet.setColumnWidth(2,150);
      sheet.setColumnWidth(3,120);
      sheet.setColumnWidth(4,180);
      sheet.setColumnWidth(5,130);
      sheet.setColumnWidth(6,200);
      sheet.setColumnWidth(7,400);
      sheet.setColumnWidth(8,180);
    }

    sheet.appendRow([
      e.parameter.pedido      || "—",
      e.parameter.data        || new Date().toLocaleString("pt-BR"),
      e.parameter.vendedor    || "—",
      e.parameter.nome        || "—",
      e.parameter.whatsapp    || "—",
      e.parameter.email       || "—",
      e.parameter.itens       || "—",
      e.parameter.observacoes || "—",
    ]);

    // Formata a célula de itens para quebrar linha
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 7).setWrap(true);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok", pedido: e.parameter.pedido }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "erro", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  return doGet(e);
}
