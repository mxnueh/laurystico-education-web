# Google Sheets (Apps Script) - Webhook

Sigue estos pasos para guardar las inscripciones en una hoja de Google:

1) Crea una Hoja de Cálculo llamada "Inscripciones Laurystico" con columnas:
   - timestamp, studentName, guardian, phone, email, course, mode, schedule, notes

2) Abre Extensiones → Apps Script y pega este código:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var secret = e.parameter['x-secret'] || data['x-secret'];
    var EXPECTED_SECRET = 'coloca_un_secreto_unico'; // sincroniza con tu .env
    if (!EXPECTED_SECRET || secret !== EXPECTED_SECRET) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setResponseCode(401);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.timestamp,
      data.studentName,
      data.guardian,
      data.phone,
      data.email,
      data.course,
      data.mode,
      data.schedule,
      data.notes
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
      .setResponseCode(200);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
      .setResponseCode(500);
  }
}
```

3) Publica el script como aplicación web:
   - Implementar → Nueva implementación → Tipo: Aplicación web
   - Ejecutar como: Tú
   - Quién tiene acceso: Cualquiera con el enlace
   - Copia la URL de despliegue (WEBHOOK_URL)

4) En tu `.env.local` agrega:

```
GSHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
GSHEETS_WEBHOOK_SECRET=coloca_un_secreto_unico
```

5) Reinicia el servidor y prueba el formulario en `/inscripcion`.









