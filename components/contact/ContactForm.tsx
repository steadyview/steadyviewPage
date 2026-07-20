"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import FormField from "@/components/contact/FormField";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-text placeholder:text-text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

/** 견적문의 폼 — react-hook-form + zod, 허니팟, 성공/실패 UX. PRD §4.5 / Task 8.2, 8.4-8.5 */
export default function ContactForm() {
  const t = useTranslations("ContactPage");
  const [status, setStatus] = useState<Status>("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, honeypot: honeypotRef.current?.value ?? "" }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const busy = status === "submitting" || isSubmitting;

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-forest-200 bg-forest-50 p-8 text-center">
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" className="mx-auto mb-4 text-primary">
          <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 21l5.5 5.5L28.5 15" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="mb-2 text-xl font-bold text-text">{t("successTitle")}</h2>
        <p className="mb-6 text-text-muted">{t("successBody")}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-md bg-primary px-6 py-2.5 font-semibold text-white hover:bg-primary-hover"
        >
          {t("successClose")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {status === "error" && (
        <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-700">{t("failureTitle")}</p>
          <p className="mt-1 text-sm text-red-600">{t("failureBody")}</p>
        </div>
      )}

      {/*
        허니팟 — display:none으로 완전히 숨김. aria-hidden은 포커스 가능한 요소에
        쓰면 안 되므로(ARIA 스펙 위반, 스크린리더 사용자에게 오히려 노출될 수 있음)
        사용하지 않는다. display:none은 접근성 트리·탭 순서 모두에서 자동 제외된다.
      */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          ref={honeypotRef}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label={t("companyLabel")} htmlFor="company" required error={errors.company && t("errorRequired")}>
          <input id="company" type="text" className={inputClass} aria-invalid={!!errors.company} {...register("company")} />
        </FormField>

        <FormField label={t("contactNameLabel")} htmlFor="contactName" required error={errors.contactName && t("errorRequired")}>
          <input id="contactName" type="text" className={inputClass} aria-invalid={!!errors.contactName} {...register("contactName")} />
        </FormField>

        <FormField label={t("phoneLabel")} htmlFor="phone" required error={errors.phone && t("errorPhoneInvalid")}>
          <input
            id="phone"
            type="tel"
            placeholder={t("phonePlaceholder")}
            className={inputClass}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </FormField>

        <FormField label={t("emailLabel")} htmlFor="email" required error={errors.email && t("errorEmailInvalid")}>
          <input
            id="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </FormField>
      </div>

      <FormField label={t("interestLabel")} htmlFor="interest" required error={errors.interest && t("errorRequired")}>
        <select
          id="interest"
          defaultValue=""
          className={inputClass}
          aria-invalid={!!errors.interest}
          {...register("interest")}
        >
          <option value="" disabled>
            {t("interestPlaceholder")}
          </option>
          <option value="2d-vision">{t("interest2d")}</option>
          <option value="3d-vision">{t("interest3d")}</option>
          <option value="xray">{t("interestXray")}</option>
          <option value="other">{t("interestOther")}</option>
        </select>
      </FormField>

      <FormField label={t("messageLabel")} htmlFor="message" required error={errors.message && t("errorMessageMin")}>
        <textarea
          id="message"
          rows={6}
          placeholder={t("messagePlaceholder")}
          className={inputClass}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </FormField>

      <div>
        <label className="flex items-start gap-2.5 text-sm text-text">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-ring"
            aria-invalid={!!errors.consent}
            {...register("consent")}
          />
          <span>{t("consentLabel")}</span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {t("errorConsentRequired")}
          </p>
        )}
        <p className="mt-2 text-xs leading-relaxed text-text-muted">{t("consentDetail")}</p>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="mt-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors duration-200 ease-brand hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
