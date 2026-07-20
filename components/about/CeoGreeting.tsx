import { Nanum_Pen_Script } from "next/font/google";
import { useTranslations } from "next-intl";

const scriptFont = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** CEO 인사말. PRD §4.2.2 / Task 5.3
 * CEO 사진은 고객 제공 자산으로 추후 교체 예정(PRD §10) — 그 전까지 이미지 없이 텍스트만 표시.
 * 인사말 본문·서명 이름은 네이버가 무료 배포한 손글씨 폰트(나눔손글씨 펜), Steady/View 박스·회사명은 기본 폰트를 유지한다. */
export default function CeoGreeting() {
  const t = useTranslations("CeoPage");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t("kicker")}
          </p>
          <h1 className="mb-10 text-3xl font-extrabold tracking-tight text-text md:text-4xl">
            {t("title")}
          </h1>

          <div className={`${scriptFont.className} flex flex-col gap-4 text-2xl leading-loose text-text md:text-[1.7rem]`}>
            <p>{t("greetingHello")}</p>
            <p>{t("intro")}</p>
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>{t("promiseLead")}</p>
          </div>

          <div className="my-6 flex flex-col gap-5 rounded-lg border border-border bg-surface-muted p-6">
            <div>
              <p className="font-bold text-text">{t("promiseSteadyTitle")}</p>
              <p className="mt-1.5 text-text-muted">{t("promiseSteadyBody")}</p>
            </div>
            <div>
              <p className="font-bold text-primary">{t("promiseViewTitle")}</p>
              <p className="mt-1.5 text-text-muted">{t("promiseViewBody")}</p>
            </div>
          </div>

          <div className={`${scriptFont.className} flex flex-col gap-4 text-2xl leading-loose text-text md:text-[1.7rem]`}>
            <p>{t("body3")}</p>
            <p>{t("body4")}</p>
            <p>{t("closing")}</p>
            <p>{t("thanks")}</p>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xl font-bold text-text">{t("signatureCompany")}</p>
            <p className={`${scriptFont.className} mt-6 text-2xl text-text-muted`}>
              {t("signatureName")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
