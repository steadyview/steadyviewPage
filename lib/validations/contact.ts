import { z } from "zod";

/**
 * 견적문의 폼 검증 스키마 (PRD §4.5). 클라이언트/서버 공용.
 * 필드별 에러 메시지는 zod 기본 메시지를 쓰지 않고, UI에서 필드 존재 여부로
 * i18n 메시지를 매핑한다 (ContactForm 참고) — 로케일 불일치 방지.
 */
export const contactFormSchema = z.object({
  company: z.string().trim().min(1).max(200),
  contactName: z.string().trim().min(1).max(100),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[0-9+\-\s()]+$/),
  email: z.string().trim().min(1).max(200).email(),
  interest: z.enum(["2d-vision", "3d-vision", "xray", "other"]),
  message: z.string().trim().min(10).max(4000),
  consent: z.literal(true),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
