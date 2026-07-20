export type LocalizedText = { ko: string; en: string; zh: string };
export type IrCategory = "financial" | "disclosure";

export type IrEntry = {
  id: number;
  title: LocalizedText;
  category: IrCategory;
  date: string; // YYYY-MM-DD
  filename: string;
  fileSizeKB: number;
};

/**
 * IR 자료 메타데이터 (PRD §4.4, §8.3). 실제 파일은 public/ir/에 배치.
 * 신규 자료 추가 절차: PDF를 public/ir/에 넣고 이 배열에 항목 추가 후 배포(Task 7.5).
 */
export const irData: IrEntry[] = [];
