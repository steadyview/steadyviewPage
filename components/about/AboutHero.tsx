"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const CORNER_POSITIONS = ["top-2.5 left-2.5", "top-2.5 right-2.5", "bottom-2.5 left-2.5", "bottom-2.5 right-2.5"];

/**
 * 회사소개 히어로 — 좌측 브랜드 카피 + 우측 회전하는 조리개 모티프 캔버스.
 * docs/brand-board.html의 히어로 섹션을 실제 사이트용으로 포팅.
 */
export default function AboutHero() {
  const t = useTranslations("AboutPage");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const rings = [
      { r: W * 0.44, seg: 0.62, col: "#2E4A1C", w: W * 0.028, dir: 1, off: 0 },
      { r: W * 0.35, seg: 0.55, col: "#5F8134", w: W * 0.028, dir: -1.4, off: 1.1 },
      { r: W * 0.26, seg: 0.68, col: "#98701F", w: W * 0.026, dir: 1.7, off: 2.3 },
      { r: W * 0.17, seg: 0.5, col: "#CFA53E", w: W * 0.024, dir: -2.1, off: 0.6 },
    ];

    function frame(time: number) {
      ctx!.clearRect(0, 0, W, H);
      const rot = reduce ? 0 : time / 9000;

      rings.forEach((ring) => {
        const a0 = rot * ring.dir + ring.off;
        const a1 = a0 + Math.PI * 2 * ring.seg;
        ctx!.beginPath();
        ctx!.arc(cx, cy, ring.r, a0, a1);
        ctx!.strokeStyle = ring.col;
        ctx!.lineWidth = ring.w;
        ctx!.lineCap = "round";
        ctx!.stroke();
      });

      ctx!.strokeStyle = "#B8B8AD";
      ctx!.lineWidth = Math.max(1, W * 0.004);
      ctx!.globalAlpha = 0.6;
      const crosshair: [number, number, number, number][] = [
        [cx, 0, cx, cy - W * 0.13],
        [cx, cy + W * 0.13, cx, H],
        [0, cy, cx - W * 0.13, cy],
        [cx + W * 0.13, cy, W, cy],
      ];
      crosshair.forEach(([x1, y1, x2, y2]) => {
        ctx!.beginPath();
        ctx!.moveTo(x1, y1);
        ctx!.lineTo(x2, y2);
        ctx!.stroke();
      });
      ctx!.globalAlpha = 1;

      ctx!.beginPath();
      ctx!.arc(cx, cy, W * 0.045, 0, Math.PI * 2);
      ctx!.fillStyle = "#CFA53E";
      ctx!.fill();

      if (!reduce) raf = requestAnimationFrame(frame);
    }

    if (reduce) frame(0);
    else raf = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-10 md:py-24">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t("kicker")}
          </p>
          <h1 className="mb-4 text-5xl font-extrabold leading-[1.03] tracking-tight md:text-7xl">
            <span className="text-text">Steady</span>
            <span className="text-primary">View</span>
          </h1>
          {/* 브랜드 슬로건은 로케일과 무관하게 항상 영어 원문을 유지한다 */}
          <p className="mb-3 text-lg font-medium text-text md:text-xl">
            Unwavering Vision, Clear Direction
          </p>
          <p className="max-w-md text-text-muted">{t("heroIntro")}</p>

          <div className="mt-6 flex max-w-md flex-col gap-4">
            <div>
              <p className="font-semibold text-text">{t("promiseSteadyTitle")}</p>
              <p className="mt-1 text-sm text-text-muted">{t("promiseSteadyBody")}</p>
            </div>
            <div>
              <p className="font-semibold text-primary">{t("promiseViewTitle")}</p>
              <p className="mt-1 text-sm text-text-muted">{t("promiseViewBody")}</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {CORNER_POSITIONS.map((pos) => (
            <span key={pos} aria-hidden="true" className={`absolute ${pos} h-3.5 w-3.5 opacity-50`}>
              <svg viewBox="0 0 14 14" className="h-full w-full">
                <line x1="7" y1="0" x2="7" y2="14" stroke="#B8B8AD" strokeWidth="1" />
                <line x1="0" y1="7" x2="14" y2="7" stroke="#B8B8AD" strokeWidth="1" />
              </svg>
            </span>
          ))}
          <canvas
            ref={canvasRef}
            width={840}
            height={840}
            role="img"
            aria-label="STEADYVIEW 조리개 모티프 애니메이션"
            className="aspect-square w-full max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
