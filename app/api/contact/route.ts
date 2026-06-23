import { NextResponse } from "next/server"

const MAILERSEND_API_URL = "https://api.mailersend.com/v1/email"
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "damarwahyup160@gmail.com"
const FROM_NAME = process.env.MAILERSEND_FROM_NAME ?? "Damar Portfolio"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  const token = process.env.MAILERSEND_API_TOKEN
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL

  if (!token || !fromEmail) {
    return NextResponse.json(
      { message: "Contact form is not configured yet." },
      { status: 500 },
    )
  }

  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 })
  }

  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const subject = payload.subject?.trim() ?? ""
  const message = payload.message?.trim() ?? ""

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Please fill all fields." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

  const response = await fetch(MAILERSEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: {
        email: fromEmail,
        name: FROM_NAME,
      },
      to: [
        {
          email: TO_EMAIL,
          name: "Damar Wahyu Putra",
        },
      ],
      reply_to: {
        email,
        name,
      },
      subject: `[Portfolio] ${subject}`,
      text: `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\n${message}`,
      html: `
        <div>
          <h2>Pesan baru dari portfolio</h2>
          <p><strong>Nama:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subjek:</strong> ${safeSubject}</p>
          <p><strong>Pesan:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    const message =
      typeof errorBody?.message === "string"
        ? errorBody.message
        : "MailerSend could not send the message. Check token and verified sender."

    return NextResponse.json(
      { message },
      { status: response.status },
    )
  }

  return NextResponse.json({
    message: "Message sent successfully.",
    messageId: response.headers.get("x-message-id"),
  })
}
