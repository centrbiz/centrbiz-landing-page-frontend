import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function redirectWithStatus(request: Request, status: "sent" | "error" | "config") {
  const url = new URL("/request-demo", request.url);
  url.searchParams.set(status, "1");
  return NextResponse.redirect(url);
}

function asString(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const demoName = asString(formData.get("demoName"));
  const demoEmail = asString(formData.get("demoEmail"));
  const demoCompany = asString(formData.get("demoCompany"));
  const demoIndustry = asString(formData.get("demoIndustry"));
  const demoNotes = asString(formData.get("demoNotes"));
  const website = asString(formData.get("website"));

  if (website) {
    return redirectWithStatus(request, "sent");
  }

  if (!demoName || !demoEmail || !demoCompany) {
    return redirectWithStatus(request, "error");
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.DEMO_TO_EMAIL;
  const fromEmail = process.env.DEMO_FROM_EMAIL || "CentrBiz Demo <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return redirectWithStatus(request, "config");
  }

  const subject = `New CentrBiz demo request from ${demoCompany}`;
  const text = [
    "New Request Demo submission",
    "",
    `Name: ${demoName}`,
    `Email: ${demoEmail}`,
    `Company: ${demoCompany}`,
    `Industry: ${demoIndustry || "N/A"}`,
    "",
    "Notes:",
    demoNotes || "N/A",
  ].join("\n");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: demoEmail,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Request demo email failed", details);
    return redirectWithStatus(request, "error");
  }

  return redirectWithStatus(request, "sent");
}

export async function GET(request: Request) {
  const url = new URL("/request-demo", request.url);
  return NextResponse.redirect(url);
}
