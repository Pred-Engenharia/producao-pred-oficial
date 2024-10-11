import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

interface EmailBody {
  name: string;
  email: string;
  phone: string;
  Whatsapp: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<EmailBody>(event);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          font-family: Arial, sans-serif;
          color: #333;
        }
        .header {
          background-color: #f7f7f7;
          padding: 10px;
          text-align: center;
        }
        .content {
          padding: 10px;
          font-size: 14px;
        }
      
        p {
          color: #000;
        }

        .footer {
          background-color: #f7f7f7;
          padding: 40px;
          text-align: center;
          font-size: 12px;
          color: #999;
        }

        .footer p{
          padding: 20px;
          color: #999;
        }
        
        span {
        color: blue;
        }


      
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Novo Contato</h1>
        </div>
        <div class="content">
          <p>Olá, <span>Pred Engenharia<span>!</p>
          <br>
          <p>Você recebeu um novo contato através do seu site https://www.predengenharia.com.br/. Abaixo estão os detalhes do cliente:</p>
          <hr >

          <p>Nome: ${body.name || ''}</p>
          <p>Email: ${body.email || ''}</p>
          <p>Celular: ${body.phone || ''}</p>
          <p>whatsapp: ${body.Whatsapp || 'Cliente optou por não enviar!'}</p>
          <br>
          <hr >
        </div>
        <div class="footer">
          <p>Este e-mail foi gerado automaticamente pelo sistema de captura de leads do seu site. Por favor, não responda a este e-mail.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: Number(process.env.SMTP_PORT), 
    secure: false, 
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'contato@pred.com.br',
    subject: 'Novo contato - enviado por email-ssl.com.br via https://www.predengenharia.com.br/',
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});
