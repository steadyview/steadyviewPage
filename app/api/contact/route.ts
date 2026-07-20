import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

const INTEREST_LABELS: Record<string, string> = {
  "2d-vision": "2D 비전",
  "3d-vision": "3D 비전",
  xray: "X-ray",
  other: "기타",
};

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );
}

/** 견적문의 제출 처리 — 서버 재검증 + 허니팟 스팸 차단 + Resend 이메일 전송. PRD §4.5 / Task 8.3-8.4 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 });
  }

  // 허니팟: 값이 채워져 있으면 봇으로 간주 — 실제 발송 없이 성공으로 응답(탐지 사실 노출 방지)
  if (
    typeof body === "object" &&
    body !== null &&
    "honeypot" in body &&
    typeof (body as Record<string, unknown>).honeypot === "string" &&
    (body as Record<string, string>).honeypot.length > 0
  ) {
    return NextResponse.json({ success: true });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "validation_failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.CONTACT_SENDER_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Missing env: RESEND_API_KEY / CONTACT_RECIPIENT_EMAIL / CONTACT_SENDER_EMAIL must be set to send email."
    );
    return NextResponse.json({ success: false, error: "server_not_configured" }, { status: 500 });
  }

  const { company, contactName, phone, email, interest, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[견적문의] ${company} - ${INTEREST_LABELS[interest] ?? interest}`,
      html: `
        <h2>견적문의 접수</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><b>회사명</b></td><td>${escapeHtml(company)}</td></tr>
          <tr><td><b>담당자명</b></td><td>${escapeHtml(contactName)}</td></tr>
          <tr><td><b>연락처</b></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><b>이메일</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><b>관심 제품</b></td><td>${escapeHtml(INTEREST_LABELS[interest] ?? interest)}</td></tr>
        </table>
        <p><b>문의 내용</b></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ success: false, error: "send_failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Send exception:", err);
    return NextResponse.json({ success: false, error: "send_failed" }, { status: 500 });
  }
}
