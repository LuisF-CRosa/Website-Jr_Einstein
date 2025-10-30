import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Verifica se todos os campos essenciais foram enviados
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos obrigatórios ausentes." }),
        { status: 400 }
      );
    }

    // Configuração do transportador (usando Gmail e variáveis de ambiente)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // seu email do .env.local
        pass: process.env.EMAIL_PASS, // senha de app do Gmail
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "cons.jreinstein@gmail.com",
      subject: "Novo contato via site",
      html: `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject || "(sem assunto)"}</p>
        <p><strong>Mensagem:</strong> ${message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p style="font-size: 12px; color: #666;">Enviado automaticamente pelo formulário do site.</p>
      `,
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Erro ao enviar o e-mail." }),
      { status: 500 }
    );
  }
}
