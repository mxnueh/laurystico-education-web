// Configuración de email
// Puedes usar servicios como Resend, SendGrid, Nodemailer, etc.

export interface EmailConfig {
  service: 'resend' | 'sendgrid' | 'nodemailer' | 'console';
  apiKey?: string;
  fromEmail: string;
  toEmail: string;
}

const emailConfig: EmailConfig = {
  service: process.env.EMAIL_SERVICE as any || 'console',
  apiKey: process.env.EMAIL_API_KEY,
  fromEmail: process.env.FROM_EMAIL || 'noreply@laurystico.com',
  toEmail: 'emmajr660@gmail.com'
};

export async function sendNewsletterWelcome(email: string) {
  const welcomeHtml = generateWelcomeEmail(email);
  
  return await sendEmail({
    to: email,
    subject: '¡Bienvenido a Laurystico Education! 🚀',
    html: welcomeHtml
  });
}

export async function sendNewsletterNotification(email: string) {
  const notificationHtml = generateNotificationEmail(email);
  
  return await sendEmail({
    to: emailConfig.toEmail,
    subject: 'Nueva suscripción al newsletter - Laurystico',
    html: notificationHtml
  });
}

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

async function sendEmail({ to, subject, html }: SendEmailOptions) {
  const { service, apiKey, fromEmail } = emailConfig;

  switch (service) {
    case 'resend':
      return await sendWithResend({ to, subject, html, fromEmail, apiKey });
    
    case 'sendgrid':
      return await sendWithSendGrid({ to, subject, html, fromEmail, apiKey });
    
    case 'nodemailer':
      return await sendWithNodemailer({ to, subject, html, fromEmail });
    
    case 'console':
    default:
      console.log('📧 Email (simulado):');
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('HTML:', html.substring(0, 200) + '...');
      return { success: true, provider: 'console' };
  }
}

// Resend implementation
async function sendWithResend({ to, subject, html, fromEmail, apiKey }: any) {
  if (!apiKey) throw new Error('RESEND_API_KEY is required');
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject,
        html,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend error: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, provider: 'resend', id: data.id };
  } catch (error) {
    console.error('Error with Resend:', error);
    throw error;
  }
}

// SendGrid implementation (placeholder)
async function sendWithSendGrid({ to, subject, html, fromEmail, apiKey }: any) {
  // Implementar SendGrid API aquí
  console.log('📧 SendGrid (no implementado aún):', { to, subject });
  return { success: true, provider: 'sendgrid' };
}

// Nodemailer implementation (placeholder)
async function sendWithNodemailer({ to, subject, html, fromEmail }: any) {
  // Implementar Nodemailer aquí
  console.log('📧 Nodemailer (no implementado aún):', { to, subject });
  return { success: true, provider: 'nodemailer' };
}

function generateWelcomeEmail(email: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold;">
          ¡Bienvenido a Laurystico Education!
        </h1>
        <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 18px;">
          Tu aventura en tecnología comienza ahora
        </p>
      </div>
      
      <!-- Content -->
      <div style="padding: 40px 30px; background: #f8fafc;">
        <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 24px;">
          ¡Gracias por suscribirte! 🚀
        </h2>
        
        <p style="color: #475569; line-height: 1.6; margin-bottom: 25px; font-size: 16px;">
          Te has unido a una comunidad de más de 300 estudiantes que están construyendo el futuro. 
          Ahora recibirás contenido exclusivo directamente en tu bandeja de entrada:
        </p>
        
        <div style="background: white; border-radius: 12px; padding: 25px; margin: 25px 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">📬 Lo que recibirás:</h3>
          <ul style="color: #475569; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li>🆕 Nuevos cursos y actualizaciones exclusivas</li>
            <li>💰 Ofertas especiales y descuentos para suscriptores</li>
            <li>🤖 Tips avanzados de robótica y programación</li>
            <li>🎮 Tutoriales y trucos de Roblox Studio</li>
            <li>🏆 Historias inspiradoras de nuestros estudiantes</li>
            <li>🔬 Proyectos geniales que puedes crear en casa</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 35px 0;">
          <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/courses" 
             style="display: inline-block; background: #6366f1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);">
            🚀 Explorar Cursos Ahora
          </a>
        </div>
        
        <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
          <p style="color: #1e40af; margin: 0; font-weight: 500;">
            💡 <strong>Tip del día:</strong> ¿Sabías que el 65% de los trabajos del futuro aún no existen? 
            Con nuestros cursos, estarás preparado para cualquier desafío tecnológico.
          </p>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background: #1e293b; padding: 30px; text-align: center;">
        <p style="color: #94a3b8; margin: 0 0 15px 0; font-size: 14px;">
          © 2024 Laurystico Education - Formando innovadores del futuro
        </p>
        <p style="color: #64748b; margin: 0; font-size: 12px;">
          Si no te suscribiste a este newsletter, puedes ignorar este email.
          <br>
          Para cancelar tu suscripción, responde con "CANCELAR".
        </p>
      </div>
    </div>
  `;
}

function generateNotificationEmail(subscriberEmail: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <!-- Header -->
      <div style="background: #059669; padding: 25px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">
          🎉 Nueva Suscripción al Newsletter
        </h1>
      </div>
      
      <!-- Content -->
      <div style="padding: 30px; background: white; border: 1px solid #e5e7eb;">
        <h2 style="color: #1f2937; margin-bottom: 20px;">Nuevo suscriptor registrado</h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">📧 Email:</strong> 
            <span style="color: #059669; font-family: monospace; background: #ecfdf5; padding: 4px 8px; border-radius: 4px;">
              ${subscriberEmail}
            </span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #374151;">📅 Fecha y hora:</strong> 
            <span style="color: #4b5563;">
              ${new Date().toLocaleString('es-ES', { 
                timeZone: 'America/Santo_Domingo',
                year: 'numeric',
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
          
          <div>
            <strong style="color: #374151;">🌐 Origen:</strong> 
            <span style="color: #4b5563;">Formulario del sitio web (Footer)</span>
          </div>
        </div>
        
        <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #1e40af; margin: 0; font-size: 14px;">
            <strong>📊 Acción recomendada:</strong> Agrega este email a tu lista de contactos 
            para futuras campañas de marketing y ofertas especiales.
          </p>
        </div>
        
        <p style="color: #6b7280; margin-top: 25px; font-size: 14px;">
          Este email se generó automáticamente cuando alguien se suscribió al newsletter 
          desde <strong>laurystico.com</strong>
        </p>
      </div>
      
      <!-- Footer -->
      <div style="background: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; margin: 0; font-size: 12px;">
          Sistema automatizado de Laurystico Education
        </p>
      </div>
    </div>
  `;
}

export default emailConfig;




