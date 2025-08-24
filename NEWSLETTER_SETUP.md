# Configuración del Newsletter

## 🚀 Opciones de Configuración

### Opción 1: Solo Consola (Actual)
El sistema está configurado para mostrar los emails en la consola del servidor. No se envían emails reales.

### Opción 2: Resend (Recomendado - Fácil Setup)

1. **Regístrate en Resend**: https://resend.com
2. **Obtén tu API Key**: https://resend.com/api-keys
3. **Configura tu dominio** (opcional pero recomendado)
4. **Crea tu archivo `.env.local`**:

```bash
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_xxxxxxxxx
FROM_EMAIL=noreply@laurystico.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Opción 3: SendGrid
```bash
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=SG.xxxxxxxxx
FROM_EMAIL=noreply@laurystico.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Opción 4: Gmail/SMTP (Nodemailer)
```bash
EMAIL_SERVICE=nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=emmajr660@gmail.com
SMTP_PASS=tu_app_password
FROM_EMAIL=emmajr660@gmail.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 📧 Cómo Funciona

### 1. Usuario se suscribe
- Llena el formulario en el footer
- Click en "Suscribirse"

### 2. Sistema procesa
- Valida el email
- Guarda la suscripción
- Envía 2 emails:

### 3. Email de Bienvenida (al suscriptor)
```
Para: usuario@ejemplo.com
Asunto: ¡Bienvenido a Laurystico Education! 🚀
Contenido: Email HTML profesional con bienvenida
```

### 4. Email de Notificación (para ti)
```
Para: emmajr660@gmail.com
Asunto: Nueva suscripción al newsletter - Laurystico
Contenido: Detalles del nuevo suscriptor
```

## 🎯 Funcionalidades

### ✅ Ya Implementado:
- ✅ Formulario funcional en footer
- ✅ Validación de email
- ✅ Estados de loading
- ✅ Mensajes de éxito/error
- ✅ Emails HTML profesionales
- ✅ Notificaciones automáticas
- ✅ Soporte multi-proveedor
- ✅ Diseño responsive

### 🔮 Próximas Mejoras:
- 📊 Base de datos para suscriptores
- 📝 Panel de administración
- 📈 Métricas y estadísticas
- 🎨 Templates de email personalizables
- 📱 Notificaciones push

## 🛠️ Instalación Rápida (Resend)

1. **Crea cuenta en Resend**: https://resend.com
2. **Agrega tu dominio** (opcional):
   - Ve a Domains
   - Agrega tu dominio
   - Configura DNS records

3. **Obtén API Key**:
   - Ve a API Keys
   - Crea nueva API key
   - Copia el token

4. **Configura variables**:
```bash
# En tu .env.local
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_tu_api_key_aqui
FROM_EMAIL=noreply@tudominio.com
NEXT_PUBLIC_BASE_URL=https://tudominio.com
```

5. **Reinicia el servidor**:
```bash
npm run dev
```

¡Listo! Tu newsletter ya está funcionando 🎉

## 📞 Soporte

Si necesitas ayuda configurando el newsletter, estos son los pasos más comunes:

1. **Error "API Key inválida"**: Verifica que copiaste la API key completa
2. **Error "From email inválido"**: Usa un email de tu dominio verificado
3. **Emails no llegan**: Revisa spam/promociones
4. **Error de CORS**: Agrega tu dominio a las configuraciones del proveedor

## 🎨 Personalización

Para personalizar los emails, edita:
- `web/src/lib/email.ts` - Templates y configuración
- Funciones `generateWelcomeEmail()` y `generateNotificationEmail()`




