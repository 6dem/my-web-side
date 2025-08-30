import type { Handler } from "@netlify/functions"
import "dotenv/config"
import nodemailer from "nodemailer"

const handler: Handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method not allowed" }
    }

    const { name, email, message } = JSON.parse(event.body || "{}")

    if (!name || !email || !message) {
        return { statusCode: 400, body: "Missing fields" }
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"My Web Side" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO,
            subject: "New message from My Web Side",
            text: `From: ${name} <${email}>\n\n${message}`,
        })

        await transporter.sendMail({
            from: `"Ablaev Edem" <${process.env.MAIL_USER}>`,
            to: email,
            subject: "My Web Side | We received your message",
            text: `Hello ${name},\n\nThank you for contacting me! I have received your message and will get back to you soon.\n\n— Ablaev Edem`,
        })


        const tgUrl = `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`
        await fetch(tgUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: process.env.TG_CHAT_ID,
                text: `📩 New message\n\n👤 ${name}\n📧 ${email}\n💬 ${message}`
            }),
        })

        return { statusCode: 200, body: JSON.stringify({ success: true }) }
    } catch (err) {
        console.error(err)
        return { statusCode: 500, body: "Server error" }
    }
}

export { handler }

